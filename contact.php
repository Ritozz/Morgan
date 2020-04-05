<?php
$firstName = $_POST['Fname'];
$lastName = $_POST['Lname'];
$nic = $_POST['Bname'];
$email = $_POST['Email'];
$password = $_POST['password'];
$Rpassword = $_POST['Cpassword'];


$firstName = htmlspecialchars($firstName);
$lastName = htmlspecialchars($lastName);
$nic = htmlspecialchars($nic);
$email = htmlspecialchars($email);
$password = htmlspecialchars($password);
$Rpassword = htmlspecialchars($Rpassword);


$firstName = urldecode($firstName);
$lastName = urldecode($lastName);
$nic = urldecode($nic);
$email = urldecode($email);
$password = urldecode($password);
$Rpassword = urldecode($Rpassword);


$firstName = trim($firstName);
$lastName = trim($lastName);
$nic = trim($nic);
$email = trim($email);
$password = trim($password);
$Rpassword = trim($Rpassword);


// echo $fio;
// echo "<br>";
// echo $email;
if (mail("example@mail.ru", "Site`s application", "name:".$firstName.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "success";
} else {
        echo "при отправке сообщения возникли ошибки";
}?>