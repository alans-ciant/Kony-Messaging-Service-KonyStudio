audienceStatus=true;
audienceEmailSubs=true;
audiencePushSubs=true;
audienceSmsSubs=true;
/**
 * Name		:	registerAudience
 * Author	:	Kony
 * Purpose	:	To get the user details to register as the audience member on the KMS.
**/
function registerAudience(){
  	audienceFirstName=frmRegistration.txtBoxFirstName.text;
  	if(audienceFirstName==null||audienceFirstName==""){
  	alert("please enter first name");
  	return;
  	}
   	audienceLastName=frmRegistration.txtBoxLastName.text;
   	if(audienceLastName==null||audienceLastName==""){
  	alert("please enter last name");
  	return;
  	}
   	audienceEmail=frmRegistration.txtBoxEmail.text;
   	if(audienceLastName==null||audienceLastName==""){
  	alert("please enter email id");
  	return;
  	}
   	audienceMob=frmRegistration.txtBoxMob.text;
   	if(audienceMob==null||audienceMob==""){
  	alert("please enter mobile number");
  	return;
  	}
   /*	kony.print("\n--audienceFirstName->"+audienceFirstName);
	kony.print("\n--audienceLastName-->"+audienceLastName);
	kony.print("\n--audienceEmail-->"+audienceEmail);
	kony.print("\n--audienceMob-->"+audienceMob);
	kony.print("\n--audienceStatus-->"+audienceStatus);
	kony.print("\n--audiencePushSubs-->"+audiencePushSubs);
	kony.print("\n--audienceEmailSubs-->"+audienceEmailSubs);
	kony.print("\n--audienceSmsSubs-->"+audienceSmsSubs);*/
	if(audiencePushSubs){
	kony.print("\n--calling pushregister()--");
	if(kony.os.deviceInfo().name=="iPhone Simulator"){
		//audiencePushSubs=false;
		alert("push doesn't support in iPhone simulator.");
		return;
	}else{
		pushRegister();
	}
	kony.print("\n--returned from pushregister()--");
	}
		register();
}
/**
 * Name		:	register
 * Author	:	Kony
 * Purpose	:	To register the user as an audience member on the KMS. 
**/
function register(){
	function asyncCallback(status, result){
    	kony.print("\n------status------>"+status);
    	if(status==400){
    		kony.print("\n------result------>"+JSON.stringify(result));
    		if(result["opstatus"]==8009)
    		{
    			if(result["message"]!=undefined)
    				updateMessaageAlert(result["message"]);
    			else
    				updateMessaageAlert("email/mobile already registered");
    			kony.application.dismissLoadingScreen();
    			//updateMessaageAlert("mobile or email already regestered..");
    			return;
    		}
    		if(result["errmsg"]!=undefined){
    			updateMessaageAlert(result["errmsg"]);
    			kony.application.dismissLoadingScreen();
    			return;
    		}if(result["opstatus"]==0){	
    			audienceID=result["id"];
    			kony.store.setItem("audienceID", audienceID);
    			updateMessaageAlert(""+result["message"]);
    			frmProfilePreShow();
    			frmProfile.show();
    			frmRegistration.destroy();
    			kony.application.dismissLoadingScreen();
    		}
    		else{
    			updateMessaageAlert("unable to process please try later..");
    			kony.application.dismissLoadingScreen();
    			return;
    		}
    	}
    }
    var inputParamTable={
         	httpheaders:{
           		"AccessSecret":accessSecret,
           		"AccessToken":accessToken,
           		"Content-Type":"application/json"
           	},
			httpconfig:{method:"POST"},
			serviceID:"CreateAudience",appID:"kmsapp",
			channel:"rc",
			active: "\""+audienceStatus+"\"",
   			email: "\""+audienceEmail+"\"",
   			emailSubscription:"\""+audienceEmailSubs+"\"",
   			firstName: "\""+audienceFirstName+"\"",
   			lastName: "\""+audienceLastName+"\"",
   			mobileNumber: "\""+audienceMob+"\"",
  			pushSubscription: "\""+audiencePushSubs+"\"",
   			smsSubscription: "\""+audienceSmsSubs+"\"",
   			kmsurl:KMSPROP.kmsserverurl
	};
     var url=appConfig.url;
   // var url="http://10.10.12.145:8080/middleware/MWServlet";
    kony.print("\n----url----->"+url) ;  
    try{
    kony.application.showLoadingScreen("sknLoading","registering...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		var connHandle = kony.net.invokeServiceAsync(
                       url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	  	kony.application.dismissLoadingScreen();
	}	
}
/**
 * Name		:	pushSubscription
 * Author	:	Kony
 * Purpose	:	To handle the checkbox event for the push subscription. 
**/
function pushSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audiencePushSubs=false;
	else
		audiencePushSubs=true;
}
/**
 * Name		:	smsSubscription
 * Author	:	Kony
 * Purpose	:	To handle the checkbox event for the sms subscription.
**/
function smsSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audienceSmsSubs=false;
	else
		audienceSmsSubs=true;
}
/**
 * Name		:	emailSubscription
 * Author	:	Kony
 * Purpose	:	To handle the checkbox event for the email subscription.
**/
function emailSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audienceEmailSubs=false;
	else
		audienceEmailSubs=true;
}