<?php

	$receiver = $_POST['receiver'] ?? '';          //PROVIDE YOUR EMAIL ADDRESS IN HTML CONTACT FORM SECTION CHANGE value="admin@mail.com"
	$subject = $_POST['subject'] ?? '';            //PROVIDE THE SUBJECT OF THE EMAIL IN HTML CONTACT FORM SECTION CHANGE value="contactform"


	$email = $_POST['email'] ?? '';

	$message = "<br/>Email: " . $email ;

	$message .= "<br/><br/><br/>Date: " . date("Y-m-d h:i:s");

	$siteEmail = $receiver;
	$emailTitle = $subject;

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .='From: ' . ' <' . $email . '>';

	if(mail($receiver, $emailTitle, $message, $headers)){
		echo 'success';
	} else {
		echo 'error';
	}

?>
