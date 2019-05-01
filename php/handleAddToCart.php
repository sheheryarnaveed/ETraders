<?php
//no need for database connection
session_start();

$itemID = $_GET['itemID'];
$updateNumber = $_GET['updateNumber'];

if($itemID == "0" && $updateNumber == "0"){
	if(!isset($_SESSION["shoppingCart"])){//when refreshed again or after checkout!
		$_SESSION["shoppingCart"] = array();
	}
}
else if($itemID != "0" && $updateNumber != "0"){
	if(!isset($_SESSION["shoppingCart"])){
		$_SESSION["shoppingCart"] = array(
			"$itemID" => $updateNumber
		);
	}
	else{
		$_SESSION["shoppingCart"]["$itemID"] = $_SESSION["shoppingCart"]["$itemID"]+"$updateNumber";
	}
	foreach($_SESSION["shoppingCart"] as $key => $value) {
		if($value == 0){
			unset($_SESSION["shoppingCart"][$key]);
		}
	}
}
else if($itemID == "-1" && $updateNumber == "0"){
	$_SESSION["shoppingCart"] = array();
}

$count = 0;

if(isset($_SESSION["shoppingCart"])){
	foreach($_SESSION["shoppingCart"] as $key => $value) { //counting the quantities of items present in the cart
		$count += $value;
	}
}


print json_encode(array('count'=>$count));

?>

