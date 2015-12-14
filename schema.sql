DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
  id serial primary key,
  name varchar(80),
  breed varchar(80)
);
