<?php
//Принимаем постовые данные
$coments=$_POST['coments'];
$name=$_POST['name'];
$phone=$_POST['phone'];

//Тут указываем на какой ящик посылать письмо
$to = "yummyroses.kiev@gmail.com";
//Далее идет тема и само сообщение
$subject = "Заявка с сайта";
$message = "Письмо отправлено из моей формы<br />
Коментарий: ".htmlspecialchars($coments)."<br />
Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone)."<br />;
$headers = "From: index.html <no-reply@mysite.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message);
header('Location:index.html');
exit;
?>