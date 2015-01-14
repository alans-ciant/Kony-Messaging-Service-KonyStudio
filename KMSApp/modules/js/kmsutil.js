var accessSecret,accessToken;
var audienceID;
var audienceStatus,audienceFirstName,audienceLastName,audienceEmail,audienceSmsSubs,audiencePushSubs,audienceEmailSubs,audienceMob;
var osVersion=7;
var ksid;

function editAudience2(){
	function asyncCallback(status, result) {
    	kony.print("\n------status------>"+status);
    	if(status==400){
    		if(result["opstatus"]==0){
    				updateMessaageAlert(""+result["message"]);
    		
    			frmProfilePreShow();
    			frmProfile.show();
    			}
    		else if(result["opstatus"]==8009)
    		{
    			if(result["message"]!=undefined)
    				updateMessaageAlert(""+result["message"]);
    			
    			//updateMessaageAlert(""+result["errmsg"]);
    			kony.print("\n------updated result--->"+JSON.stringify(result));
    		}else{
    			updateMessaageAlert("unable to process please try later..");
    			kony.print("\n------updated result--->"+JSON.stringify(result));
    		}
    		kony.application.dismissLoadingScreen();
    	}
    }
  	var inputParamTable={
            httpheaders:{
            	"AccessSecret":accessSecret,
            	"AccessToken":accessToken,
            	"Content-Type":"application/json"
            },
			httpconfig:{method:"POST"},
			serviceID:"EditAudience",appID:"kmsapp",
			channel:"rc",
			active: "\""+audienceStatus+"\"",
   			email: "\""+audienceEmail+"\"",
   			emailSubscription:"\""+audienceEmailSubs+"\"",
   			firstName: "\""+audienceFirstName+"\"",
   			lastName: "\""+audienceLastName+"\"",
   			mobileNumber: "\""+audienceMob+"\"",
  			pushSubscription: "\""+audiencePushSubs+"\"",
   			smsSubscription: "\""+audienceSmsSubs+"\"",
   			"audienceID":audienceID
	};
    var url=appConfig.url;
   // var url="http://10.10.12.145:8080/middleware/MWServlet";
    kony.print("\n----url----->"+url) ; 
    try{ 
    kony.application.showLoadingScreen("sknLoading","updating...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
    }	
}

function getAudience(){
	function asyncCallback(status, result) {
    	kony.print("\n------status------>"+status);
    	if(status==400){
    		kony.print("\n------result------>"+JSON.stringify(result));
    		if(result["errmsg"]!=undefined){
    			kony.print("\n---errmsg-->"+result["errmsg"]);
    			alert(result["errmsg"]);
    			kony.application.dismissLoadingScreen();
    			return;
    		}
    		audienceStatus=result["active"];
    		audienceFirstName=result["firstName"];
    		audienceLastName=result["lastName"];
    		audienceEmail=result["email"];
    		audienceSmsSubs=result["smsSubscription"];
    		audiencePushSubs=result["pushSubscription"];
    		audienceEmailSubs=result["emailSubscription"];
    		audienceMob=result["mobileNumber"];
    		//frmProfilePreShow();
			kony.application.dismissLoadingScreen();
    		frmProfile.show();
   		}
    }
   	var inputParamTable={
            httpheaders:{
            	AccessSecret:accessSecret,
            	AccessToken:accessToken
				},
			httpconfig:{method:"get"}
    };
    try{
    
    	kony.application.showLoadingScreen("sknLoading","loading details...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   	
	   	var connHandle = kony.net.invokeServiceAsync(
                        "https://mobilefabric-demo.messaging.konycloud.com:443/api/v1/audience/"+audienceID, 
                        inputParamTable, 
                        asyncCallback);
	}catch(err){
    	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
		alert("Error"+err);
    }	
}
function getAccessToken4()
{
	function asyncCallback(status, result) 
	{
    	kony.print("\n------status------>"+status);
    	if(status==400)
    	{
    		kony.print("\n------result------>"+JSON.stringify(result));
    		if(result["401"]!=undefined)
    		{
    			updateMessaageAlert(""+result["401"]);
    			kony.application.dismissLoadingScreen();
    			return;
    		}
    		if(result["errmsg"]!=undefined)
    		{
    			updateMessaageAlert(result["errmsg"]);
    			kony.application.dismissLoadingScreen();
    			return;
    		}   		
    		accessSecret=result["AccessSecret"];
    		accessToken=result["AccessToken"];
    		kony.print("\naccessSecret-->"+accessSecret);
    		kony.print("\naccessToken-->"+accessToken);
    		if(result["AccessSecret"]!=undefined)
    		{
    			//alert("audienceID:-"+audienceID);
				if(kony.os.deviceInfo().name=="iPhone"||kony.os.deviceInfo().name=="iPhone Simulator")
    			{
    				osVersion=parseInt(kony.os.deviceInfo().version);
    				if(osVersion==8)
    				{
    					audiencePushSubs=false;
    					frmRegistration.chkBxPushSubs.setVisibility(false);
    					frmProfile.chkBoxPushSubs.setVisibility(false);
    					frmEditProfile.chkBxPushSubs.setVisibility(false);
    				}
				}
    			if(audienceID==null)
    			{
    			/*if(kony.os.deviceInfo().name=="iPhone"||kony.os.deviceInfo().name=="iPhone Simulator")
    			{
    				osVersion=parseInt(kony.os.deviceInfo().version);
    				if(osVersion==8)
    				{
    					audiencePushSubs=false;
    					frmRegistration.chkBxPushSubs.setVisibility(false);
    					frmProfile.chkBoxPushSubs.setVisibility(false);
    					frmEditProfile.chkBxPushSubs.setVisibility(false);
    				}
				}*/
    				frmRegistration.show();
    				kony.application.dismissLoadingScreen();
    			}else{
    		//frmProfile.show();
				getAudience();
    			}
    		}
    	}
    }
 // var userId=frmLogin.txtBoxLogin.text;
    userId="dharmendra.kumar@Kony.com";
	if(userId!=null)
		userId=userId.trim();
	if(userId==""||userId==null){
		alert("please enter Kony cloud mail Id.");
    	return;
    }
   // var pswd=frmLogin.txtBoxPswd.text;
	pswd="kony@09876";
    if(pswd!=null)
    	pswd=pswd.trim();
    if(pswd==""||pswd==null)
    {
    	alert("please enter password");
    	return;
    }
    var encryptedCredential=B64.encode(userId+":"+pswd);
    kony.print("\nencryptedCredential-->"+encryptedCredential);
	audienceID=kony.store.getItem("audienceID");
	ksid=kony.store.getItem("ksid");
    try{
    	kony.application.showLoadingScreen("sknLoading","redirecting...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		var inputParamTable={
    		httpheaders:{
				"Authorization":"Basic "+encryptedCredential
				},
			httpconfig:{method:"get"}
           };
	    var connHandle = kony.net.invokeServiceAsync(
                        "https://mobilefabric-demo.messaging.konycloud.com/service/oauth/accesstoken/", 
                        inputParamTable, 
                        asyncCallback);
     }catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	  	kony.application.dismissLoadingScreen();
     }
     //frmRegistration.show();
}
function subscribeKMS(regId,ostype)
{
	if(ostype=="android")
		ostype="androidgcm";
	//audiencePushSubs=false;
	function asyncCallback(status, result) 
	{
    	kony.print("\n------status------>"+status);
		if(status==400)
		{
			kony.application.dismissLoadingScreen();
			kony.print("\n\n----in KMSregCallback------>\n" );
	 		kony.print("Result$#.------>"+JSON.stringify(result));
	 		//var tmp = result["subscriptionResponse"][0];
	 		//kony.print("\n tmp->"+result["subscriptionResponse"][0]);
	 		if(result["subscriptionResponse"][0]["statusCode"] == "200")
	 		{
				ksid = result["subscriptionResponse"][0]["ksid"];
				kony.print("Device subscribed to Kony Messaging service sucessfully..");
				kony.store.setItem("ksid",ksid);
				audiencePushSubs=true;
			}else{
				alert("Failed to subscribe to Kony Messaging Service!!" + tmp["message"]);
				ksid =null;
				audiencePushSubs=false;
			}	
		}
	}
	kony.print("\n\n<----------in subscribeKMS-------->\n\n");
	
	var inputParamTable={
       		serviceID:"subkms",appID:"kmsapp",
			channel:"rc",
			appId:KMSPROP.appId,
			deviceId:kony.os.deviceInfo().deviceid,
			ufid:audienceEmail,
			sid:regId,
			osType:ostype	
	};
    var url=appConfig.url;
    //var url="http://10.10.12.145:8080/middleware/MWServlet";
    kony.print("\n----url----->"+url) ; 
    try{ 
   // kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexception in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
    }	
	
}

function unsubscribeKMS()
{
   function asyncCallback(status, result) 
	{
    	kony.print("\n------status------>"+status);
		if(status==400)
		{
			kony.application.dismissLoadingScreen();
			kony.print("\nUnsubscription result"+JSON.stringify(result));
			if(result["subscriptionResponse"]!=undefined)
			{
				if(result["subscriptionResponse"][0]["statusCode"]!=undefined && result["subscriptionResponse"][0]["statusCode"]=="200")
				{
					kony.print("\n"+result["subscriptionResponse"][0]["message"]);
					ksid=null;
					kony.store.removeItem("ksid");
				}
			}
		}
	}
	kony.print("\n\n<----------in UnsubscribeKMS-------->\n\n");
	var inputParamTable={
            serviceID:"unsubkms",appID:"kmsapp",
			channel:"rc",
			ksId:ksid,
			appId:KMSPROP.appId,
			deviceId:KMSPROP.deviceId
	};
    var url=appConfig.url;
    //var url="http://10.10.12.145:8080/middleware/MWServlet";
    kony.print("\n----url----->"+url) ; 
    try{ 
    kony.application.showLoadingScreen("sknLoading","Unsubscribing from push notification...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	  	kony.application.dismissLoadingScreen();
    }	

}
function KMSunregCallback(status,result)
{
	kony.print(JSON.stringify(result));
     if(status==400)
     {
	 	kony.print("$#."+JSON.stringify(result));
		// alert("result:"+result);
	 	var tmp = result["subscriptionResponse"][0];
	 	//ksid = tmp["ksid"];
		if((tmp["statusCode"] == 200))
		{
			//alert("Device unsubscribed from Kony Messaging Service sucessfully..");
			kony.print(tmp["message"]);
			alert(tmp["message"]);
		}	
		else
			alert("Failed to unsubscribe from Kony Messaging Service!!"+tmp["message"]);
	}	
}
function pushdeRegister()
{
	kony.print("************ JS unregisterFromAPNS() called *********");
	kony.application.showLoadingScreen("sknLoading","Deregistering from push notification..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		kony.push.deRegister({});
		//ksid=-1;
		audiencePushSubs=false;
		
}
function pushRegister()
{
	kony.print("\n\n\n<--------in push register--------->\n\n\n");
	var devName = kony.os.deviceInfo().name;
//	alert("devName" + devName);
	kony.application.showLoadingScreen("sknLoading","Registering for push notification..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	if(devName=="android")
	{
		callbackAndroidSetCallbacks();
		callbackAndroidRegister();
	}else if((devName=="iPhone")||(devName=="iPhone Simulator")||(devName=="iPad")||(devName=="iPad Simulator"))
	{
		callbackiPhoneSetCallbacks();
		callbackiPhoneRegister();
	}
}
