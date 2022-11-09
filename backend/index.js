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

// Route to return Customer data
app.get("/customers", (req, res) => {
  const query = "SELECT * FROM Customers;";
  db.pool.query(query, function (error, result, fields) {
    res.send(JSON.stringify(result));
  });
});

// Route to create new Customer entry
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

app.post(`/customers/delete`, (req, res) => {
  
  const id = req.body.customer_id;
  console.log(id)
  
  query = "DELETE FROM Customers WHERE Customers.customer_id = ?";
  
  db.pool.query(query, id, (error) => {
    if (!error) {
      res.status(201).send("Delete successful!");
    } else {
    }
  });

});

app.use((error, req, res, next) => {
  console.log(`Unhandeled error ${error}, URL = ${req.originalURL}, method = ${req.method}`);
  res.send("500 - Server Error");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
