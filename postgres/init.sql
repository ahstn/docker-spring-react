CREATE DATABASE apex;
GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

CREATE TABLE employees (
  id          serial PRIMARY KEY,
  forename    varchar(40),
  surname     varchar(40),
  description varchar(120)
);
