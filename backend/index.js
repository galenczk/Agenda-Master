// import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 33522;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./database/db-connector");

app.get("/", (req, res) => {
  res.send("Server connected");
});


/**
 * ****************************CUSTOMERS ROUTES
 */
// ROUTE - GET ALL CUSTOMERS
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

//ROUTE -- GET SPECIFIC CUSTOMER ON customer_id
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

//ROUTE -- INSERT NEW CUSTOMER
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

//ROUTE -- DELETE SPECIFIC CUSTOMER ON customer_id
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

//ROUTE -- UPDATE AN EXISTING CUSTOMER ENTRY ON customer_id
app.post("/customers/update", (req, res) => {
  const customer_id = req.body.customer_id;
  const company_name = req.body.company_name;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const annual_revenue = req.body.annual_revenue;

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

//ROUTE -- GET PROJECTS FOR CUSTOMER ON customer_id
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
 * ****************************PROJECT ROUTES
 */
// ROUTE - GET ALL PROJECTS
app.get("/projects", (req, res) => {
  const query = "SELECT * FROM Projects;";
  db.pool.query(query, (error, result) => {
    if (!error) {
      res.send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET SPECIFIC PROJECT ON project_id
app.get("/projects/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT project_id, title, description, delivery_date, proj_status, customer_id FROM Projects WHERE Projects.project_id = ?`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- INSERT NEW PROJECT
app.post("/projects", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const delivery_date = req.body.delivery_date;
  const proj_status = req.body.proj_status;
  const customer_id = req.body.customer_id;

  const query = "INSERT INTO Projects (title, description, delivery_date, proj_status, customer_id) VALUES (?,?,?,?,?)";

  db.pool.query(query, [title, description, delivery_date, proj_status, customer_id], (error) => {
    if (!error) {
      res.status(201).send(`Insert of ${title} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC PROJECT ON project_id
app.post(`/projects/delete`, (req, res) => {
  const project_id = req.body.project_id;
  query = "DELETE FROM Projects WHERE Customers.project_id = ?";

  db.pool.query(query, project_id, (error) => {
    if (!error) {
      res.status(201).send(`Delete on Project ${project_id} successful.`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- UPDATE AN EXISTING PROJECT ENTRY ON project_id
app.post("/projects/update", (req, res) => {
  const project_id = req.body.project_id;
  const title = req.body.title;
  const description = req.body.description;
  const delivery_date = req.body.delivery_date;
  const proj_status = req.body.proj_status;
  const customer_id = req.body.customer_id;

  const query =
    "UPDATE Projects SET title = ?, description = ?, delivery_date = ?, proj_status = ?, customer_id = ? WHERE Projects.customer_id = ?";

  db.pool.query(query, [title, description, delivery_date, proj_status, customer_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Project ${project_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET PROJECTS FOR CUSTOMER ON customer_id
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
