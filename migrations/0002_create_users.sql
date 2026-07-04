-- Migration number: 0002 	 2026-07-04T23:37:33.999Z
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT
);

INSERT INTO users(name, address) VALUES ('Andre', 'Purwosari'), ('Andian', 'Sukorejo'), ('Ana', 'Pandaaan');