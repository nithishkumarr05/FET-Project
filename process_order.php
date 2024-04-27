<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $pincode = $_POST["pincode"];
    $email = $_POST["email"];
    $storage = $_POST["storage"];
    $model = $_POST["model"];
    $color = $_POST["color"];

    // Build a query string with order details
    $queryString = "?name=$name&phone=$phone&address=$address&pincode=$pincode&email=$email&storage=$storage&model=$model&color=$color";

    // Return the query string as a response
    echo $queryString;
} else {
    echo "Invalid request method";
}
?>
