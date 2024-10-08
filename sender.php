<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $text = $_POST['text'];

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
	// mail($to, $subject, $msg, "From: $from ");




	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require_once '/PHPMailer/src/Exception.php';
	require_once '/PHPMailer/src/PHPMailer.php';
	require_once '/PHPMailer/src/SMTP.php';


	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';

	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPDebug = 0;

	$mail->Host = 'ssl://smtp.gmail.com';
	$mail->Port = 465;
	$mail->Username = 'housetop.mogilev@gmail.com';
	$mail->Password = 'mm3-8tw-5HM-ZLK';

	// От кого
	$mail->setFrom('housetop.mogilev@gmail.com', 'skytop.by');

	// Кому
	$mail->addAddress('housetop.mogilev@gmail.com', 'Заявка с сайта');

	// Тема письма
	$mail->Subject = $subject;

	// Тело письма
	$body = $msg;
	$mail->msgHTML($body);

	// Приложение
	$mail->addAttachment(__DIR__ . '/image.jpg');

	$mail->send();

?>
