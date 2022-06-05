function sendEmail() {
	Email.send({
	Host: "smtp.protonmail.com",
	Username : "tswsupport@protonmail.com",
	Password : "qwertytrewq12345654321",
	To : 'elizahofer02@outlook.com',
	From : "tswsupport@protonmail.com",
	Subject : "tsw suggestion",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
