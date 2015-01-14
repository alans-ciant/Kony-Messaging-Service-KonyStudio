audienceStatus=true;
audienceEmailSubs=true;
audiencePushSubs=true;
audienceSmsSubs=true;
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
   	kony.print("\n--audienceFirstName->"+audienceFirstName);
	kony.print("\n--audienceLastName-->"+audienceLastName);
	kony.print("\n--audienceEmail-->"+audienceEmail);
	kony.print("\n--audienceMob-->"+audienceMob);
	kony.print("\n--audienceStatus-->"+audienceStatus);
	kony.print("\n--audiencePushSubs-->"+audiencePushSubs);
	kony.print("\n--audienceEmailSubs-->"+audienceEmailSubs);
	kony.print("\n--audienceSmsSubs-->"+audienceSmsSubs);
	if(audiencePushSubs){
	kony.print("\n--calling pushregister()--");
		pushRegister();
	kony.print("\n--returned from pushregister()--");
	}
		register();
}
function register(){
	function asyncCallback(status, result){
    	kony.print("\n------status------>"+status);
    	if(status==400){
    		kony.application.dismissLoadingScreen();
    		kony.print("\n------result------>"+JSON.stringify(result));
    		if(result["opstatus"]==8009)
    		{
    			if(result["message"]!=undefined)
    				updateMessaageAlert(result["message"]);
    			//updateMessaageAlert("mobile or email already regestered..");
    			return;
    		}
    		if(result["errmsg"]!=undefined){
    			updateMessaageAlert(result["errmsg"]);
    			return;
    		}if(result["opstatus"]==0){	
    			audienceID=result["id"];
    			kony.store.setItem("audienceID", audienceID);
    			updateMessaageAlert(""+result["message"]);
    			frmProfilePreShow();
    			frmProfile.show();
    			frmRegistration.destroy();
    		}else{
    			updateMessaageAlert("unable to process please try later..");
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
   			smsSubscription: "\""+audienceSmsSubs+"\""
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
function subScription(chkbox)
{
	kony.print("CheckBox event-->"+JSON.stringify(chkbox));
}
function pushSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audiencePushSubs=false;
	else
		audiencePushSubs=true;
}
function smsSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audienceSmsSubs=false;
	else
		audienceSmsSubs=true;
}
function emailSubscription(chkbox){
	if(chkbox["selectedKeys"]==null)
		audienceEmailSubs=false;
	else
		audienceEmailSubs=true;
}