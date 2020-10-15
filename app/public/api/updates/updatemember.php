<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection

if ($_POST['update'] == 'edit') {
  $sql = 'UPDATE member
    SET dob = ?, gender = ?, phonePrimary = ?, phoneSecondary = ?, email = ?, street = ?, city = ?, state = ?, zip = ?, station = ?, title = ?, active = ?, radioNum = ?
    WHERE email = ?';
  $vars = [
    $_POST['dob'],
    $_POST['gender'],
    $_POST['phonePrimary'],
    $_POST['phoneSecondary'],
    $_POST['email'],
    $_POST['street'],
    $_POST['city'],
    $_POST['state'],
    $_POST['zip'],
    $_POST['station'],
    $_POST['title'],
    $_POST['active'],
    $_POST['radioNum'],
    $_POST['selection']
  ];
} else if ($_POST['update'] == 'delete') {
  $sql = 'DELETE FROM member WHERE email = ?';
  $vars = [
    $_POST['selection']
  ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../updates/?memberId=' . $pk);
