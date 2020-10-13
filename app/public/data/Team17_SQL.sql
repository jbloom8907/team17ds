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

INSERT INTO member (fName, lName, dob, gender, phonePrimary, phoneSecondary, email, street, city, state, zip, station, title, active, radioNum)
VALUES ("Jordan", "Bloom", "1998-03-31", "M", "847-975-5699", NULL, "bloomjor@iu.edu", "508 N College Ave", "Bloomington", "Indiana", 47404, "Station 1", "Fireman", 1, "A_2");

CREATE TABLE certification (
  certificationId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  agency VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  standardExpiry INT NOT NULL
);

INSERT INTO certification (agency, name, standardExpiry)
VALUES ("Red Cross", "Sample Certification", "2");

CREATE TABLE personCertification (
  memberCertificationId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  memberId INT NOT NULL,
  certificationId INT NOT NULL,
  expiryDate DATE NOT NULL
);

INSERT INTO personCertification (memberId, certificationId, expiryDate)
VALUES (1, 1, "2022-10-5");
