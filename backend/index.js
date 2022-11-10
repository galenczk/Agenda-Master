// import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./database/db-connector");

app.get("/", (req, res) => {
  res.send("Server connected");
});

/**
 * ROUTE -- GET ALL CUSTOMERS
 */
app.get("/customers", (req, res) => {
  const query = "SELECT * FROM Customers;";
  db.pool.query(query, (error, result) => {
    if (!error) {
      res.send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

/**
 * ROUTE -- GET SPECIFIC CUSTOMER ON customer_id
 */
app.get("/customers/:customer_id", (req, res) => {
  const customer_id = req.params.customer_id;
  const query = `SELECT customer_id, company_name, first_name, last_name, email, annual_revenue FROM Customers WHERE Customers.customer_id = ?`;
  db.pool.query(query, customer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

/**
 * ROUTE -- INSERT NEW CUSTOMER
 */
app.post("/customers", (req, res) => {
  const company = req.body.company;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const annual_revenue = req.body.annual_revenue;

  const query = "INSERT INTO Customers (company_name, first_name, last_name, email, annual_revenue) VALUES (?,?,?,?,?)";

  db.pool.query(query, [company, first_name, last_name, email, annual_revenue], (error) => {
    if (!error) {
      res.status(201).send(`Insert of ${company}, ${first_name}, ${last_name} successful!`);
    } else {
      console.log(error);
    }
  });
});

/**
 * ROUTE -- DELETE SPECIFIC CUSTOMER ON customer_id
 */
app.post(`/customers/delete`, (req, res) => {
  const customer_id = req.body.customer_id;
  query = "DELETE FROM Customers WHERE Customers.customer_id = ?";

  db.pool.query(query, customer_id, (error) => {
    if (!error) {
      res.status(201).send(`Delete on Customer ${customer_id} successful.`);
    } else {
      console.log(error);
    }
  });
});

/**
 * ROUTE -- UPDATE AN EXISTING CUSTOMER ENTRY ON customer_id
 */
app.post("/customers/update", (req, res) => {
  const customer_id = req.body.customer_id;
  const company_name = req.body.company_name;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const annual_revenue = req.body.annual_revenue;
  console.log(req.body)

  const query =
    "UPDATE Customers SET company_name = ?, first_name = ?, last_name = ?, email = ?, annual_revenue = ? WHERE Customers.customer_id = ?";

  db.pool.query(query, [company_name, first_name, last_name, email, annual_revenue, customer_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Customer ${customer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

/**
 * ROUTE -- GET PROJECTS FOR CUSTOMER ON customer_id
 */
app.get("/projects/:customer_id", (req, res) => {
  const customer_id = req.params.customer_id;
  const query = `SELECT project_id, title, description, delivery_date, proj_status, customer_id FROM Projects WHERE Projects.customer_id = ?`;
  db.pool.query(query, customer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

/**
 * ERROR HANDLING
 */
app.use((error, req, res, next) => {
  console.log(`Unhandeled error ${error}, URL = ${req.originalURL}, method = ${req.method}`);
  res.send("500 - Server Error");
});

/**
 * SERVER LISTENING
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
