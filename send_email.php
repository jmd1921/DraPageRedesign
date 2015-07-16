<html>
<body>
<?php
$to = "consultas@centromedicodraji.com.ar";
$subject = $_POST["nombre"] . " - " . $_POST["telefono"] . " - Consulta web";
$message = $_POST["mensaje"];
$headers = 'From: mailer@jessicaim.com'. "\r\n" .
    'Reply-To: ' . $_POST["mail"];

mail($to, $subject, $message, $headers);
?>
    
Gracias <?php echo $_POST["nombre"]; ?>,<br>
su consulta ha sido realizada correctamente

</body>
</html>

