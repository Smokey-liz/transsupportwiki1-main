function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "tswelizahofer@gmail.com",
	Password : "Ee391001771Ee",
	To : 'elizahofer02@outlook.com',
	From : "tswelizahofer@gmail.com",
	Subject : "tsw suggestion",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
