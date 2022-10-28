<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
/* check connection */
if (mysqli_connect_errno()) {
   printf("Connect failed: %s\n", mysqli_connect_error());
   exit();
}
$sql = "SELECT * FROM `controle_versao` ORDER BY VERSAO DESC";
$res = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
//iterate on results row and create new index array of data
while ($row = mysqli_fetch_assoc($res)) {
   $data[] = $row;
}
// Encode:
echo json_encode($data);
