<?php
$dbhost = 'localhost:3307';
$dbuser = 'root';
$dbpass = 'rishi123';
$mysqli = new mysqli($dbhost, $dbuser, $dbpass,"shopsky");
         
if($mysqli->connect_errno ) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
echo 'Connected successfully bby';


// Return name of current default database
// if ($result = $mysqli -> query("SELECT DATABASE()")) {
//     $row = $result -> fetch_row();
//     echo "Default database is " . $row[0];
//     $result -> close();
//   }


function query_table($conn,$table_name){
  $query="Select * From ".$table_name;
  echo $query."\n";
  $result=$conn->query($query);
  return $result;
   
};


$query_result=query_table($mysqli,"banners");

$array_result=$query_result->fetch_array(MYSQLI_ASSOC);

echo json_encode($array_result);

//   close the connection
$mysqli->close();













?>