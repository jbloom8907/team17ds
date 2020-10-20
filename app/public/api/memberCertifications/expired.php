<?php
require 'common.php';
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$sql = 'SELECT * FROM memberCertification WHERE (SELECT CURDATE() > expiryDate)';
$vars = [];
if (isset($_GET['memberId'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM memberCertification where lName = (SELECT lName FROM member WHERE memberId = ?)';
  $vars = [ $_GET['memberId'] ];
}
$stmt = $db->prepare($sql);
$stmt->execute($vars);
$memberCertifications = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($memberCertifications, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
