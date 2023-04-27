const url = require('url');

const Insta = require('instamojo-nodejs');
const paymentGateway=async(req,res)=>{
    const {name,email,amount}=req.body;

    console.log(name);
    console.log(email);
    console.log(amount);

    const data = new Insta.PaymentData();
    // console.log(data);
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

const successController=(req,res)=>{

  console.log(`hiii->`,req.url);
 
  if(req.url==='/success'){
    console.log("here");
    return res.send({
      status : "notok",
      error : "Payment is not complete"
    })
  }

  let url_parts = url.parse( req.url, true),
  responseData = url_parts.query;

  console.log(responseData);

  // if(responseData.payment_id){
  //   let userId=responseData.user_id;
  // }

  res.json({
      status : "ok",
      msg : "Payment Was SuccessFul please check your email for invoice in pdf"
  });
}

module.exports={paymentGateway,successController};