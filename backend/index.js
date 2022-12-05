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
 * *************************************************CUSTOMER ROUTES*************************************************
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
  const company_name = req.body.company;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const annual_revenue = req.body.annual_revenue;

  const query = "INSERT INTO Customers (company_name, first_name, last_name, email, annual_revenue) VALUES (?,?,?,?,?)";

  db.pool.query(query, [company_name, first_name, last_name, email, annual_revenue], (error) => {
    if (!error) {
      res.status(201).send(`Insert of ${company_name}, ${first_name}, ${last_name} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC CUSTOMER ON customer_id
app.post(`/customers/delete`, (req, res) => {
  const customer_id = req.body.customer_id;
  const query = "DELETE FROM Customers WHERE Customers.customer_id = ?";

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
app.get("/projects/for-customer/:customer_id", (req, res) => {
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
 * *************************************************PROJECT ROUTES*************************************************
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
      res.status(500).send(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC PROJECT ON project_id
app.post(`/projects/delete`, (req, res) => {
  const project_id = req.body.project_id;
  const query = "DELETE FROM Projects WHERE Projects.project_id = ?";

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
    "UPDATE Projects SET title = ?, description = ?, delivery_date = ?, proj_status = ?, customer_id = ? WHERE Projects.project_id = ?";

  db.pool.query(query, [title, description, delivery_date, proj_status, customer_id, project_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Project ${project_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

// ROUTE -- GET DEVELOPERS FOR PROJECT ON project_id
app.get("/developers/for-projects/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT developer_id, first_name, last_name, email, phone_number, project_id FROM Developers WHERE Developers.project_id = ?`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

// ROUTE -- GET TASKS FOR PROJECT ON project_id
app.get("/tasks/for-projects/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT task_id, description, due_date, priority, task_status, project_id FROM Tasks WHERE Tasks.project_id = ?`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

/**
 * *************************************************DEVELOPER ROUTES*************************************************
 */
// ROUTE - GET ALL DEVELOPERS
app.get("/developers", (req, res) => {
  const query = "SELECT * FROM Developers;";
  db.pool.query(query, (error, result) => {
    if (!error) {
      res.send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET SPECIFIC DEVELOPER ON developer_id
app.get("/developers/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT developer_id, first_name, last_name, email, phone_number, project_id FROM Developers WHERE Developers.developer_id = ?`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- INSERT NEW DEVELOPER
app.post("/developers", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const project_id = req.body.project_id;

  const query = "INSERT INTO Developers (first_name, last_name, email, phone_number, project_id) VALUES (?,?,?,?,?)";

  db.pool.query(query, [first_name, last_name, email, phone_number, project_id], (error) => {
    if (!error) {
      res.status(201).send(`Insert of ${first_name}, ${last_name} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC CUSTOMER ON customer_id
app.post(`/developers/delete`, (req, res) => {
  const developer_id = req.body.developer_id;
  const query = "DELETE FROM Developers WHERE Developers.developer_id = ?";

  db.pool.query(query, developer_id, (error) => {
    if (!error) {
      res.status(201).send(`Delete on Developer ${developer_id} successful.`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- UPDATE AN EXISTING DEVELOPER ENTRY ON developer_id
app.post("/developers/update", (req, res) => {
  const developer_id = req.body.developer_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const project_id = req.body.project_id;

  const query =
    "UPDATE Developers SET first_name = ?, last_name = ?, email = ?, phone_number = ?, project_id = ? WHERE Developers.developer_id = ?";

  db.pool.query(query, [first_name, last_name, email, phone_number, project_id, developer_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

// ROUTE -- GET TASKS FOR DEVELOPER ON developer_id
app.get("/tasks/for-developers/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT task_id, description, due_date, priority, task_status, project_id FROM Tasks WHERE Tasks.developer_id = ?`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

// ROUTE -- GET CERTIFICATIONS FOR DEVELOPER ON developer_id
app.get("/certifications/for-developers/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT Certifications.certification_id, Certifications.title, Certifications.description FROM Certifications JOIN Developer_has_Certification ON Developer_has_Certification.certification_id = Certifications.certification_id WHERE Developer_has_Certification.developer_id = ?`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

/**
 * *************************************************TASK ROUTES*************************************************
 */
// ROUTE - GET ALL TASKS
app.get("/tasks", (req, res) => {
  const query = "SELECT * FROM Tasks;";
  db.pool.query(query, (error, result) => {
    if (!error) {
      res.send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET SPECIFIC TASK ON task_id
app.get("/tasks/:task_id", (req, res) => {
  const task_id = req.params.task_id;
  const query = `SELECT task_id, description, due_date, priority, task_status, project_id FROM Tasks WHERE Tasks.task_id = ?`;
  db.pool.query(query, task_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

// ROUTE -- GET TASKS BASED ON project_id
app.get("/tasks/project/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT task_id, description, due_date, priority, task_status, project_id FROM Tasks WHERE Tasks.project_id = ?`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- INSERT NEW TASK
app.post("/tasks", (req, res) => {
  const description = req.body.description;
  const due_date = req.body.due_date;
  const priority = req.body.priority;
  const task_status = req.body.task_status;
  const project_id = req.body.project_id;

  const query = "INSERT INTO Tasks (description, due_date, priority, task_status, project_id) VALUES (?,?,?,?,?)";

  db.pool.query(query, [description, due_date, priority, task_status, project_id], (error) => {
    if (!error) {
      res.status(201).send(`Insert of task successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC TASK ON task_id
app.post(`/tasks/delete`, (req, res) => {
  const task_id = req.body.task_id;
  query = "DELETE FROM Tasks WHERE Tasks.task_id = ?";

  db.pool.query(query, task_id, (error) => {
    if (!error) {
      res.status(201).send(`Delete on Task ${task_id} successful.`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- UPDATE AN EXISTING TASK ENTRY ON task_id
app.post("/tasks/update", (req, res) => {
  const task_id = req.body.task_id;
  const description = req.body.description;
  const due_date = req.body.due_date;
  const priority = req.body.priority;
  const task_status = req.body.task_status;
  const project_id = req.body.project_id;

  const query =
    "UPDATE Tasks SET description = ?, due_date = ?, priority = ?, task_status = ?, project_id = ? WHERE Tasks.task_id = ?";

  db.pool.query(query, [description, due_date, priority, task_status, project_id, task_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Task ${task_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

/**
 * *************************************************CERTIFICATION ROUTES*************************************************
 */
// ROUTE - GET ALL CERTIFICATIONS
app.get("/certifications", (req, res) => {
  const query = "SELECT * FROM Certifications;";
  db.pool.query(query, (error, result) => {
    if (!error) {
      res.send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET SPECIFIC CERTIFICATION ON certification_id
app.get("/certifications/:certification_id", (req, res) => {
  const certification_id = req.params.certification_id;
  const query = `SELECT certification_id, title, description, duration FROM Certifications WHERE Certifications.certification_id = ?`;
  db.pool.query(query, certification_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- INSERT NEW CERTIFICATION
app.post("/certifications", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const duration = req.body.duration;

  const query = "INSERT INTO Certifications (title, description, duration) VALUES (?,?,?)";

  db.pool.query(query, [title, description, duration], (error) => {
    if (!error) {
      res.status(201).send(`Insert of ${title} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- DELETE SPECIFIC CERTIFICATION ON certification_id
app.post(`/certifications/delete`, (req, res) => {
  const certification_id = req.body.certification_id;
  query = "DELETE FROM Certifications WHERE Certifications.certification_id = ?";

  db.pool.query(query, certification_id, (error) => {
    if (!error) {
      res.status(201).send(`Delete on Certification ${certification_id} successful.`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- UPDATE AN EXISTING CERTIFICATION ENTRY ON certification_id
app.post("/projects/update", (req, res) => {
  const certification_id = req.body.certification_id;
  const title = req.body.title;
  const description = req.body.description;
  const duration = req.body.duration;

  const query =
    "UPDATE Projects SET title = ?, description = ?, duration = ? WHERE Certifications.certification_id = ?";

  db.pool.query(query, [title, description, duration, certification_id], (error) => {
    if (!error) {
      res.status(201).send(`Update of Certification ${certification_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

/**
 * *************************************************DEVELOPER ROSTER ROUTES*************************************************
 */
//ROUTE -- GET LIST OF DEVELOPERS ON project_id
app.get("/developers/roster-in/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT developer_id, first_name, last_name, email, phone_number, project_id FROM Developers WHERE Developers.project_id = ?`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET LIST OF DEVELOPERS NOT ON project_id
app.get("/developers/roster-out/:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const query = `SELECT developer_id, first_name, last_name, email, phone_number, project_id FROM Developers WHERE Developers.project_id != ? OR Developers.project_id IS NULL`;
  db.pool.query(query, project_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- ADD DEV TO PROJECT on project_id
app.post("/developers/assign", (req, res) => {
  const developer_id = req.body.developer_id;
  const project_id = req.body.project_id;

  const query = "UPDATE Developers SET project_id = ? WHERE Developers.developer_id = ?";

  db.pool.query(query, [project_id, developer_id], (error) => {
    if (!error) {
      res.status(201).send(`Assignment of Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- REMOVE DEV FROM PROJECT on project_id
app.post("/developers/unassign/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;

  const query = "UPDATE Developers SET project_id = NULL WHERE Developers.developer_id = ?";

  db.pool.query(query, developer_id, (error) => {
    if (!error) {
      res.status(201).send(`Assignment of Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});


/**
 * *************************************************DEVELOPER HAS CERTIFICATION ROUTES*************************************************
 */

//ROUTE -- GET LIST OF CERTIFICATIONS HELD on developer_id
app.get("/certifications/held/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT Certifications.title FROM Certifications JOIN Developer_has_Certifications ON Developer_has_Certifications.certificate_id = Certifications.certification_id WHERE Developer_has_Certification.developer_id = ?`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET LIST OF DEVELOPERS NOT HELD on developer_id
app.get("/certifications/not-held/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT Certifications.title FROM Certifications EXCEPT (SELECT Certifications.title FROM Certifications JOIN Developer_has_Certifications ON Developer_has_Certifications.certificate_id = Certifications.certification_id WHERE Developer_has_Certification.developer_id = ?)`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- ADD DEV TO PROJECT on project_id
app.post("/developers/assign", (req, res) => {
  const developer_id = req.body.developer_id;
  const project_id = req.body.project_id;

  const query = "UPDATE Developers SET project_id = ? WHERE Developers.developer_id = ?";

  db.pool.query(query, [project_id, developer_id], (error) => {
    if (!error) {
      res.status(201).send(`Assignment of Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- REMOVE DEV FROM PROJECT on project_id
app.post("/developers/unassign/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;

  const query = "UPDATE Developers SET project_id = NULL WHERE Developers.developer_id = ?";

  db.pool.query(query, developer_id, (error) => {
    if (!error) {
      res.status(201).send(`Assignment of Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

/**
 * *************************************************DEVELOPER HAS CERTIFICATION ROUTES*************************************************
 */

//ROUTE -- GET LIST OF CERTIFICATIONS HELD on developer_id
app.get("/certifications/held/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT Certifications.title FROM Certifications JOIN Developer_has_Certification ON Developer_has_Certification.certification_id = Certifications.certification_id WHERE Developer_has_Certification.developer_id = ?`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- GET LIST OF DEVELOPERS NOT HELD on developer_id
app.get("/certifications/not-held/:developer_id", (req, res) => {
  const developer_id = req.params.developer_id;
  const query = `SELECT Certifications.title FROM Certifications EXCEPT (SELECT Certifications.title FROM Certifications JOIN Developer_has_Certification ON Developer_has_Certification.certification_id = Certifications.certification_id WHERE Developer_has_Certification.developer_id = ?)`;
  db.pool.query(query, developer_id, async (error, result) => {
    if (!error) {
      res.status(201).send(JSON.stringify(result));
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- ADD CERTIFICATION TO DEVELOPER on developer_id
app.post("/dev-cert/award", (req, res) => {
  const developer_id = req.body.developer_id;
  const certification_id = req.body.certification_id;

  const query = "INSERT INTO Developer_has_Certification (developer_id, certification_id) VALUES (?, ?)";

  db.pool.query(query, [developer_id, certification_id], (error) => {
    if (!error) {
      res.status(201).send(`Award of Certification ${certification_id} to Developer ${developer_id} successful!`);
    } else {
      console.log(error);
    }
  });
});

//ROUTE -- REMOVE CERTIFICATION FROM DEVELOPER on developer_id
app.post("/dev-cert/remove/:developer_id", (req, res) => {
  const developer_id = req.body.developer_id;
  const certification_id = req.body.certification_id;

  const query = "DELETE FROM Developer_has_Certification WHERE Developer_has_Certification.developer_id = ? AND Developer_has_Certification.certification_id = ?";

  db.pool.query(query, [developer_id, certification_id], (error) => {
    if (!error) {
      res.status(201).send(`Removal of Certification ${certification_id} from Developer ${developer_id} successful!`);
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
