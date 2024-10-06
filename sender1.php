<?php
    $name = $_POST['name1'];
	$phone = $_POST['phone1'];
    $text = $_POST['text1'];

	$to = "housetop.mogilev@gmail.com";
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
