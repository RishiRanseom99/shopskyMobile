<?php


$host    = "127.0.0.1";
$port    = 25003;
$message = "bannersList";
echo "Message To server :".$message;
// create socket
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
// connect to server
$result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");  
// send string to server
socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");
// get server response
$results = socket_read ($socket, 40000) or die("Could not read server response\n");
// echo gettype($results);
$results=explode("}",$results);
$banner_list="";
for( $i=0;$i<count($results);$i++)
{  
    if($i!=count($results)-1)
        $results[$i]= $results[$i]."}";
   
    if($i!=0  and $i!=count($results)-1)
        $banner_list=$banner_list."+".$results[$i];
    else if ($i!=0)
        $banner_list=$banner_list.$results[$i];
    else
        $banner_list=$results[$i];
   
}


// close socket
socket_close($socket);
?>