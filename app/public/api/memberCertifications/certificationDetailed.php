<?php
require 'common.php';
// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'SELECT * FROM memberCertification WHERE certName = ?'
);
$stmt->execute([
  $_POST['selected']
]);
$memberCertifications = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($memberCertifications, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
