# DB INIT

create table
````
CREATE TABLE words (
  id SERIAL PRIMARY KEY,
  en_name VARCHAR(255) NOT NULL,
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  own_mark VARCHAR(255),
  type INT NOT NULL
);

CREATE TABLE word_translates (
  id SERIAL PRIMARY KEY,
  cn_name VARCHAR(255) NOT NULL,
  en_type VARCHAR(255) NOT NULL,
  own_mark VARCHAR(255),
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  word_id INT
);
````