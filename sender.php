<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $text = $_POST['text'];

	$to = "housetop.mogilev@gmail.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = replyto@example.ru;
	$subject = "Заявка c сайта";


	$msg="
	Обязательно перзвонить !
    Имя: $name
    Телефон: $phone
    Коментарий: $text";
	$headers = "From: $from\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
	mail($to, $subject, $msg, $headers);

?>
