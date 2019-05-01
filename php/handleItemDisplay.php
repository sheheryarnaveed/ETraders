<?php
//Connect to database
$conn=mysqli_connect('sophia', 'msnaveed', 'Shery21!') or die('Error! '. mysqli_error($conn));
//Select database
mysqli_select_db($conn, 'msnaveed') or die('Error! '. mysqli_error($conn));
//Construct your SQL query here
$category = $_GET['category'];
$query = "SELECT * FROM catalog WHERE itemCategory='$category' ORDER BY itemName ASC LIMIT ".$_GET['start']." , ".$_GET['items'];
//Execute SQL query

$result = mysqli_query($conn, $query) or die('Error! '. mysql_error($conn));

$json = array();
while($row=mysqli_fetch_array($result)){
	$json[] = array('image'=>$row['itemImage'],'name'=>$row['itemName'],'price'=>$row['itemPrice'],'description'=>$row['itemDescription'],'itemID'=>$row['itemID']);
}
print json_encode(array('items'=>$json));

?>

