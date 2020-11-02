CREATE TABLE member (
  memberId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender CHAR(1) NOT NULL,
  phonePrimary CHAR(12) NOT NULL,
  phoneSecondary CHAR(12),
  email VARCHAR(50) NOT NULL,
  street VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(14) NOT NULL,
  zip CHAR(5) NOT NULL,
  station VARCHAR(50) NOT NULL,
  title VARCHAR(50) NOT NULL,
  active BOOLEAN NOT NULL,
  radioNum VARCHAR(4) NOT NULL
);

INSERT INTO member (fName, lName, dob, gender, phonePrimary, phoneSecondary, email, street, city, state, zip, station, title, active, radioNum) VALUES
("Reagan", "Blevins", "1997-10-10", "F", "812-555-1234", NULL, "reabblev@iu.edu", "508 N College Ave", "Bloomington", "Indiana", 47401, "Station 1", "Captain", 1, "A_1"),
("Jordan", "Bloom", "1998-03-31", "M", "812-555-4567", NULL, "bloomjor@iu.edu", "508 N College Ave", "Bloomington", "Indiana", 47402, "Station 2", "Sergeant", 1, "A_2"),
("Stella", "Jiang", "1997-09-20", "F", "812-555-8910", NULL, "stjiang@iu.edu", "508 N College Ave", "Bloomington", "Indiana", 47403, "Station 3", "Fireman", 1, "A_3"),
("Ayush", "Sarawgi", "1998-02-15", "M", "812-555-1098", NULL, "sarawgia@iu.edu", "508 N College Ave", "Bloomington", "Indiana", 47404, "Station 4", "Fireman", 1, "A_4");

CREATE TABLE certification (
  certificationId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  agency VARCHAR(50) NOT NULL,
  standardExpiry INT NOT NULL
);

INSERT INTO certification (name, agency, standardExpiry) VALUES
("Ambulance Driving Certification", "Ambulance Association of America", "1"),
("CPR Certification", "Red Cross", "2"),
("POST Certification", "Firefighters Guild", "3");

CREATE TABLE memberCertification (
  memberCertificationId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  certName VARCHAR(50) NOT NULL,
  expiryDate DATE NOT NULL
);

INSERT INTO memberCertification (fName, lName, certName, expiryDate) VALUES
("Reagan", "Blevins", "Ambulance Driving Certification", "2021-11-30"),
("Reagan", "Blevins", "CPR Certification", "2022-10-29"),
("Jordan", "Bloom", "Ambulance Driving Certification", "2021-09-28"),
("Jordan", "Bloom", "POST Certification", "2023-08-27"),
("Stella", "Jiang", "CPR Certification", "2022-07-26"),
("Stella", "Jiang", "POST Certification", "2023-06-25"),
("Ayush", "Sarawgi", "Ambulance Driving Certification", "2018-05-24"),
("Ayush", "Sarawgi", "POST Certification", "2019-04-23");
