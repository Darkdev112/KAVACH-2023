const Insta = require('instamojo-nodejs');
const paymentGateway=async(req,res)=>{
    const {name,email,amount}=req.body;

    console.log(name);
    console.log(email);
    console.log(amount);

    const data = new Insta.PaymentData();
    console.log(data);
    const REDIRECT_URL="http://localhost:2000/success";

    data.setRedirectUrl(REDIRECT_URL);
    data.send_email="True";
    data.purpose="KAVACH-2023 Payment";
    data.name=name;
    data.email=email;
    data.amount=amount;

    Insta.createPayment(data, function(error, response) {
		if (error) {
			// some error
		} else {
			// Payment redirection link at response.payment_request.longurl
			// const responseData = JSON.parse( response );
			// const redirectUrl = responseData.payment_request.longurl;
			// console.log( redirectUrl );
			// res.status( 200 ).json( redirectUrl );

            console.log("hiii");
            res.send("PLease check your email to make payment");
		}
	});


}

module.exports=paymentGateway;