<?php
header('Content-Type: text/html; charset=utf-8; Content-Transfer-Encoding: utf-8; Reply-To:no-reply@example.com';);
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    	$text = $_POST['text'];

	$to = "vitaly.avseikov@yandex.by";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "vitaly.avseikov@yandex.by";
	$subject = "Заявка c сайта";


	$msg="
	Обязательно перзвонить !
    Имя: $name
    Телефон: $phone
    Коментарий: $text";
	mail($to, $subject, $msg, "From: $from ");

?>
