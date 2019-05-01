<?php
//Connect to database
$conn=mysqli_connect('sophia', 'msnaveed', 'Shery21!') or die('Error! '. mysqli_error($conn));
//Select database
mysqli_select_db($conn, 'msnaveed') or die('Error! '. mysqli_error($conn));
//Construct your SQL query here 
$query = 'SELECT DISTINCT itemCategory FROM catalog';
//Execute SQL query
$result = mysqli_query($conn, $query) or die('Error! '. mysql_error($conn));

$json = array();
while($row = mysqli_fetch_array($result)){
	$json[] = array('category'=>$row['itemCategory']);
}
print json_encode(array('categories'=>$json));

?>

