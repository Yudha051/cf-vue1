-- Migration created for D1
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT
);

INSERT INTO users(name, address) VALUES ('Andre', 'Purwosari'), ('Andian', 'Sukorejo'), ('Ana', 'Pandaaan');