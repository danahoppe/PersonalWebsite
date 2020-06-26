<?php
    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['subject'];

    $email_from = 'danafhoppe@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "Username: $firstname.\n".
        "User LastName: $lastname.\n".
            "User Email: $email.\n".
                "User Message: $message.\n";
    $to = "danafhoppe@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>