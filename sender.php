<?php
    $header('Content-Type: text/html; charset=utf-8');
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    	$text = $_POST['text'];

	$to = "vitaly.avseikov@yandex.by";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";


	$msg="
	Обязательно перзвонить !
    Имя: $name
    Телефон: $phone
    Коментарий: $text";
	mail($to, $subject, $msg, "From: $from ");

?>
