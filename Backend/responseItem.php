<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spf_versao";

$conn = @mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
/* check connection */
if (mysqli_connect_errno()) {
   printf("Connect failed: %s\n", mysqli_connect_error());
   exit();
}
$sqlItem = "SELECT * FROM `controle_versao_item` ORDER by SEQUENCIAL DESC";
$res = mysqli_query($conn, $sqlItem) or die("database error:" . mysqli_error($conn));
//iterate on results row and create new index array of data
while ($row = mysqli_fetch_assoc($res)) {
   $dataItem[] = $row;
}
// Encode:
echo json_encode($dataItem);
