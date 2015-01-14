function callbackAndroidRegister()
{
  kony.print("senid:"+KMSPROP.senderID)
		var configToRegister = {senderid:KMSPROP.senderID};
		kony.push.register(configToRegister);
		//alert("Registration Done !!!");
}
function callbackAndroidSetCallbacks()
{
	kony.print("\n\n\n<--------in callbackAndroidSetCallbacks--------->\n\n\n");
 	kony.push.setCallbacks({onsuccessfulregistration: regSuccessAndroidCallback, onfailureregistration: regFailureAndroidCallback,
 						    onlinenotification: onlinePushNotificationAndroidCallback, offlinenotification: offlinePushNotificationAndroidCallback,
 						    onsuccessfulderegistration: unregSuccessAndroidCallback, onfailurederegistration:unregFailureAndroidCallback });
 //	alert("setCallBack Done !!!");
}
function regSuccessAndroidCallback(regId)
{
	kony.print("\n\n\n<--------in regSuccessAndroidCallback--------->\n\n\n");
	kony.print("\nRegistration Id-->"+JSON.stringify(regId));
//	alert("calling subscribe kms");
	kony.application.dismissLoadingScreen();
	kony.application.showLoadingScreen("sknLoading","Subscribing for push notification...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	subscribeKMS(regId,"android");
}

function regFailureAndroidCallback(errormsg)
{
	kony.print(errormsg);
	audiencePushSubs=false;
	kony.application.dismissLoadingScreen();
	alert("Registration Failed ");
}

function onlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print(JSON.stringify(msg));
	alert("Message: "+msg["content"]);
}

function offlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	kony.print(msg);
    	alert("Message: "+msg["content"]);
}


function unregSuccessAndroidCallback()
{
	kony.print("Unregisterd Succesfully!!");
	kony.application.dismissLoadingScreen();
	unsubscribeKMS();
}

function unregFailureAndroidCallback(errormsg)
{
	alert(" Unregistration Failed!!");
	alert("Error message: "+JSON.stringify(errormsg));
	kony.application.dismissLoadingScreen();
}

