<?php

$recepient = "jamesoncornil@gmail.com";
$sitename = "Waxom";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$result = mail($recepient, $pagetitle, $message, "From: $recepient");

echo $result;

?>