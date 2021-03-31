import express from "express";

import pool from "./db.mjs";

const app = express();

// gives access to request body to get json data
app.use(express.json());

// ROUTES

// create a contact
app.post("/contact", async (req, res) => {
    try {
        // console.log(req.body);
        const { first_name, last_name, phone_number, email } = req.body;
        // const checkContact = await pool.query(`
        // SELECT first_name, last_name, phone_number, email
        // FROM contacts
        // WHERE ( first_name = $1 AND last_name = $2 AND ( phone_number = $3 OR email = $4 )
        // `,
        //  [first_name, last_name, phone_number, email]
        // // );

        // if ( checkContact.length > 0 )  {
        //     res.json({"error":`${first_name} ${last_name} already exists`})
        // } else {
        const newContact = await pool.query(
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

// get a contact

app.post("/lastname", async (req, res) => {
    try {
        const { search } = req.body;
        const allContacts = await pool.query(
            `
            SELECT * FROM contacts
            WHERE LOWER(last_name) LIKE LOWER($1)
        `,
            [search]
        );
        res.json(allContacts.rows); // returns an array
    } catch (error) {
        console.error(error.message);
    }
});

// get all contacts
// this must be listed last or else all requests after this will not work
app.get("/contact", async (req, res) => {
    try {
        const allContacts = await pool.query("SELECT * FROM contacts");
        res.json(allContacts.rows); // returns an array
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
