const url = require('url');
const userLoginSignup = require('../models/userLoginSignup.mdl')


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

const successController=async(req,res)=>{

//   let updatedObject1;

//   console.log(`hiii->`,req.url);

//   console.log(req.params);
//   const Email = req.params.email;
//   const oldUser = await userLoginSignup.findOne({
//     email: Email
//   });

//   // let url_parts = url.parse( req.url, true),
//   // responseData = url_parts.query;
 
//   if(req.url==='/success'){
//     updatedObject1=oldUser;
//   }
//   else{
//     updatedObject1 = {
//       ...oldUser,userId:true
//     }
//   }


//   console.log(updatedObject1);


//   const newUser = await userLoginSignup.findOneAndUpdate({
//     email: Email
//   },
//    updatedObject1, {
//     new: true,
//     runValidators: true,
//   }
// );

//     if(newUser.userId){
//       return res.json({
//         status : "ok",
//         msg : "Payment Was SuccessFul please check your email for invoice in pdf"
//       })
//     }
//     else{
//        return res.send({
//           status : "notok",
//           error : "Payment is not complete"
//         })
//     }

    return res.json({
      status : "ok",
      data : "Payment Successful"
    })

}

module.exports={paymentGateway,successController};