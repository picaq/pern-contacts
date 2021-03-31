import express from "express";

import db from "./db.mjs";

const app = express();

// gives access to request body to get json data
app.use(express.json());

// ROUTES

// get all contacts
app.get("/contacts", async (req, res) => {
  const { lastName = "" } = req.query;

  try {
    const contacts = await db.query(
      `
      SELECT * FROM contacts
      WHERE LOWER(last_name) LIKE LOWER($1)
      `,
      [`%${lastName}%`]
    );

    res.json(contacts.rows); // returns an array
  } catch (error) {
    console.error(error.message);
  }
});

// create a contact
app.post("/contacts", async (req, res) => {
  try {
    // console.log(req.body);
    const { first_name, last_name, phone_number, email } = req.body;
    // const checkContact = await db.query(`
    // SELECT first_name, last_name, phone_number, email
    // FROM contacts
    // WHERE ( first_name = $1 AND last_name = $2 AND ( phone_number = $3 OR email = $4 )
    // `,
    //  [first_name, last_name, phone_number, email]
    // // );

    // if ( checkContact.length > 0 )  {
    //     res.json({"error":`${first_name} ${last_name} already exists`})
    // } else {
    const newContact = await db.query(
      `
      INSERT INTO contacts(first_name, last_name, phone_number, email)
      VALUES($1, $2, $3, $4)
      RETURNING *;
      `,
      [first_name, last_name, phone_number, email]
    );

    // res.json(checkContact.rows[0]);
    res.json(newContact.rows[0]);
    // }
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
