function sendEmail() {
	Email.send({
	Host: "smtp.protonmail.me",
	Username : "tswsupport@protonmail.me",
	Password : "qwertytrewq12345654321",
	To : 'elizahofer02@outlook.com',
	From : "tswsupport@protonmail.com",
	Subject : "tsw suggestion",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
