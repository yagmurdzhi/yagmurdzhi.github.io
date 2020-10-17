<?php
//Принимаем постовые данные
$coments=$_POST['coments'];
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$company=$_POST['company'];

//Тут указываем на какой ящик посылать письмо
$to = "ukrpackexport@gmail.com";
//Далее идет тема и само сообщение
$subject = "Заявка с сайта";
$message = "Письмо отправлено из моей формы<br />
Коментарий: ".htmlspecialchars($coments)."<br />
Имя: ".htmlspecialchars($name)."<br />
Компания: ".htmlspecialchars($company)."<br />
Телефон: ".htmlspecialchars($phone)."<br />
Email: ".htmlspecialchars($email);
$headers = "From: Grand-Takelage.com.ua <no-reply@mysite.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location:Grand-Takelage.com.ua');
exit;
?>