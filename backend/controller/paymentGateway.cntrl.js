const url = require('url');
const userLoginSignup = require('../models/userLoginSignup.mdl')


const Insta = require('instamojo-nodejs');
const paymentGateway=async(req,res)=>{
    const {username,email,amount}=req.body;

    console.log(username);
    console.log(email);
    console.log(amount);

    const data = new Insta.PaymentData();
    // console.log(data);
    const REDIRECT_URL=`http://localhost:2000/success?username=${username}`;

    data.setRedirectUrl(REDIRECT_URL);
    data.send_email="True";
    data.purpose="KAVACH-2023 Payment";
    data.name=username;
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

  // let url_parts = url.parse(req.url,true),
  // responseData = url_parts.query;
  // console.log("Query : ",responseData);

  // if(responseData?.username){
  //   const oldUser = await userLoginSignup.findOne({
  //     username : responseData.username
  //   });
  //   console.log("Checking olduser when server calls : ",oldUser);


  //   res.redirect(`http://localhost:2000/redirectPayment?username=${responseData.username}`)
    
  // }
  
  // else {
  //   const {email} = req.query
  //   console.log("Params : ",req.query);
  //   const oldUser = await userLoginSignup.findOne({
  //     email: email
  //   });
    
  //   console.log(oldUser);
  //   if(oldUser?.hasPaid){
  //     return res.json({
  //       status : "ok",
  //       msg : "Payment Was SuccessFul please check your email for invoice in pdf"
  //     })
  //   }
  //   else{
  //      return res.send({
  //         status : "notok",
  //         error : "Payment is not complete"
  //       })
  //   }

  // }

  res.send({
    status : 'ok',
    data : "Your payment was successful"
  })

}

const redirectController=async(req,res)=>{
  let url_parts = url.parse(req.url,true),
  responseData = url_parts.query;
  console.log("redirectQuery : ",responseData);

  const oldUser = await userLoginSignup.findOne({
    username: responseData.username,
  });

  const newUser = await userLoginSignup.findOneAndUpdate({
      username: responseData.username
    },{...oldUser, hasPaid : true}, {
      new: true,
      runValidators: true,
    }
    );

    if(newUser.hasPaid){
      res.send({
        data : "payment was successful"
      })
    }else{
      res.send({
        data: "some Problem Has Occuresd"
      })
    }
    

}

module.exports={paymentGateway,successController,redirectController};