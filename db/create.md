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

CREATE TABLE records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_register ENUM('0', '1') NOT NULL,
  user_id INT NOT NULL
);



CREATE TABLE plan_detail (
    id INT PRIMARY KEY,
    user_id VARCHAR(255),
    is_mark VARCHAR(1),
    plan_start_time DATETIME,
    plan_end_time DATETIME,
    create_time DATETIME
);



CREATE TABLE plan_words (
    word_ids TEXT,  -- JSON 序列化后的数据
    mark_date DATETIME,
    is_mark INT,
    user_id VARCHAR(255),
    plan_id INT
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    role_name VARCHAR(255),
    level VARCHAR(255),
    create_time DATETIME,
    update_time DATETIME
);
````