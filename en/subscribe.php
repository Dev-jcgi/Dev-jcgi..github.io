<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el correo electrónico del formulario
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Verificar si el email es válido
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Aquí puedes agregar el correo a la base de datos o enviarlo a un servicio de terceros
        // Ejemplo: Usar Mailchimp, Firebase o tu propia base de datos.

        // Simulamos una respuesta exitosa
        echo "success";
    } else {
        // Si el correo no es válido
        echo "invalid email";
    }
}
?>
