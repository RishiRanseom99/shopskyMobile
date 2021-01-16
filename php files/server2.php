<?php
// set some variables
$host = "127.0.0.1";
$port = 25003;
// don't timeout!
set_time_limit(0);
// create socket
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
// bind socket to port
$result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");
// start listening for connections
$result = socket_listen($socket, 3) or die("Could not set up socket listener\n");

// accept incoming connections
// spawn another socket to handle communication
$spawn = socket_accept($socket) or die("Could not accept incoming connection\n");
// read client input
$input = socket_read($spawn, 1024) or die("Could not read input\n");
// clean up input string
$input = trim($input);
echo "Client Message : ".$input;

//db credientials
$dbhost = 'localhost:3307';
$dbuser = 'root';
$dbpass = 'rishi123';
$mysqli = new mysqli($dbhost, $dbuser, $dbpass,"shopsky");
       
if($input=="bannersList")
{
  
if($mysqli->connect_errno ) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
echo 'Connected successfully bby';

function query_table($conn,$table_name){
  $query="Select * From ".$table_name;
  echo $query."\n";
  $result=$conn->query($query);
  return $result;
   
};


$query_result=query_table($mysqli,"banners");
$output="";
while($row=$query_result->fetch_assoc())
{
  // echo "\n".gettype(json_encode($row));
  // array_push($output,json_encode($row));
  $output=$output.json_encode($row);
}
echo $output;





}

socket_write($spawn, $output, strlen($output)) or die("Could not write output\n");
// close sockets
socket_close($spawn);
socket_close($socket);
?>