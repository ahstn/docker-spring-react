GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

CREATE TABLE employees (
  id          serial PRIMARY KEY,
  forename    varchar(40),
  surname     varchar(40),
  description varchar(120)
);

insert into employees (forename, surname, description) values 
  ('Aaron',   'Shaw',       'Research Assistant III'),
  ('Jimmy',   'Henry',      'Marketing Manager'),
  ('Howard',  'Hansen',     'Data Coordiator'),
  ('Brenda',  'Montgomery', 'Information Systems Manager'),
  ('Jack',    'Andrews',    'Internal Auditor'),
  ('William', 'Scott',      'Administrative Officer'),
  ('Emily',   'Johnston',   'Data Coordiator'),
  ('Stephen', 'Webb',       'Senior Financial Analyst'),
  ('Donna',   'Little',     'Environmental Tech'),
  ('Tammy',   'Thompson',   'Analyst Programmer'),
  ('Denise',  'Mitchell',   'Senior Sales Associate'),
  ('Philip',  'Jordan',     'Internal Auditor'),
  ('Jean',    'Burke',      'Software Consultant'),
  ('Dennis',  'Griffin',    'Senior Cost Accountant'),
  ('Linda',   'Bishop',     'Mechanical Systems Engineer');
