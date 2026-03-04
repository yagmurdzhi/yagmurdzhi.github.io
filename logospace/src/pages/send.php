<?php
// Проверка, что форма была отправлена методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Сбор данных из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Ваша электронная почта, на которую будут приходить сообщения
    $to = "yurec996@gmail.com";

    // Тема письма
    $subject = "Новое сообщение c сайта LogoSpace";

    // Содержание письма
    $body = "Имя: $name\n";
    $body .= "Email: $email\n";
    $body .= "Сообщение:\n$message";

    // Заголовки письма
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        // Если письмо успешно отправлено
        echo "Повідомлення успішно надіслано! Дякуємо.";
    } else {
        // Если произошла ошибка при отправке
        echo "Відбулася помилка при відправці. Спробуйте ще раз.";
    }
} else {
    // Если доступ к файлу получен не через форму
    echo "Некоректний запит. Спробуйте пізніше";
}
?>