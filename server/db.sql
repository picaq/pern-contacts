CREATE DATABASE perncontacts;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    phone_number VARCHAR,
    email VARCHAR
);

-- This app should have 4 input fields, first_name, last_name, phone_number, email.

-- The database should have 1 table that holds the information

-- I should be able to:
-- Add a new contact
-- If contact already exists a message should be displayed to the user
-- Search for contacts by last name
-- View all contacts
-- BONUS: remove a contact (only if you get everything else working and looking great)

