<?php
// читать json файл
$json = file_get_contents('../products.json');
$json = json_decode($json, true);

//письмо
$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .='<p>Телефон: '.$_POST['userPhone'].'</p>';
$message .='<p>Почта: '.$_POST['userEmail'].'</p>';
$message .='<p>Клиент: '.$_POST['userName'].'</p>';

$cart = $_POST['cart'];

$to = 'pereulok.kosoy@mail.ru'.','; //не забудь поменять!
$to .=$_POST['userEmail'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}

