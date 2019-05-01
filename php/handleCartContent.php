<?php
//Connect to database
$conn=mysqli_connect('sophia', 'msnaveed', 'Shery21!') or die('Error! '. mysqli_error($conn));
//Select database
mysqli_select_db($conn, 'msnaveed') or die('Error! '. mysqli_error($conn));

session_start();

if(isset($_SESSION["shoppingCart"])){
	$cartItems = array();
	foreach($_SESSION["shoppingCart"] as $key => $value) {
		$query = "SELECT * FROM catalog WHERE itemID='$key'";
		$result = mysqli_query($conn, $query) or die('Error! '. mysql_error($conn));
		while($row=mysqli_fetch_array($result)){
			$cartItems[] = array('image'=>$row['itemImage'],'name'=>$row['itemName'],'price'=>$row['itemPrice'],'description'=>$row['itemDescription'],'itemID'=>$row['itemID'], 'value'=>$value);
		}
	}

	$price = 0;
	$count = 0;

	foreach($cartItems as $item) { //calculating the total price
		$price += $item['price']*$item['value'] ;
	}

	foreach($_SESSION["shoppingCart"] as $key => $value) { //counting the quantities of items present in the cart
		$count += $value;
	}

	print json_encode(array('items'=>$cartItems, 'quantity'=>$count, 'price'=>$price));
}

?>

