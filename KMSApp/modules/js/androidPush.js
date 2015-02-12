/**
 * Name		:	callbackAndroidRegister
 * Author	:	Kony
 * Purpose	:	This function register the senderID on the google cloud.
**/
function callbackAndroidRegister()
{
  kony.print("senid:"+KMSPROP.senderID)
		var configToRegister = {senderid:KMSPROP.senderID};
		kony.push.register(configToRegister);
		//alert("Registration Done !!!");
}
/**
 * Name		:	callbackAndroidSetCallbacks
 * Author	:	Kony
 * Purpose	:	This function sets the callback for registration,deregistration & pushnotification events.
**/
function callbackAndroidSetCallbacks()
{
	kony.print("\n\n\n<--------in callbackAndroidSetCallbacks--------->\n\n\n");
 	kony.push.setCallbacks({onsuccessfulregistration: regSuccessAndroidCallback, onfailureregistration: regFailureAndroidCallback,
 						    onlinenotification: onlinePushNotificationAndroidCallback, offlinenotification: offlinePushNotificationAndroidCallback,
 						    onsuccessfulderegistration: unregSuccessAndroidCallback, onfailurederegistration:unregFailureAndroidCallback });
 //	alert("setCallBack Done !!!");
}
/**
 * Name		:	regSuccessAndroidCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the successful registration of the device to the GCM server & returns the callerID.
 * 
**/
function regSuccessAndroidCallback(regId)
{
	kony.print("\n\n\n<--------in regSuccessAndroidCallback--------->\n\n\n");
	kony.print("\nRegistration Id-->"+JSON.stringify(regId));
//	alert("calling subscribe kms");
	kony.application.dismissLoadingScreen();
	kony.application.showLoadingScreen("sknLoading","Subscribing for push notification...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	subscribeKMS(regId,"android");
}
/**
 * Name		:	regFailureAndroidCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the registration failure to the GCM server.
**/
function regFailureAndroidCallback(errormsg)
{
	kony.print(errormsg);
	audiencePushSubs=false;
	kony.application.dismissLoadingScreen();
	alert("Registration Failed ");
}
/**
 * Name		:	onlinePushNotificationAndroidCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the received push msg event while online.
**/
function onlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print(JSON.stringify(msg));
	alert("Message: "+msg["content"]);
}
/**
 * Name		:	offlinePushNotificationAndroidCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the received push msg event while offline
**/
function offlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	kony.print(msg);
    	alert("Message: "+msg["content"]);
}
/**
 * Name		:	unregSuccessAndroidCallback
 * Author	:	Kony
 * Purpose	:	This is the callback for the successful unregistration from the GCM server.
**/
function unregSuccessAndroidCallback()
{
	kony.print("Unregisterd Succesfully!!");
	kony.application.dismissLoadingScreen();
	unsubscribeKMS();
}
/**
 * Name		:	unregFailureAndroidCallback
 * Author	:	Kony
 * Purpose	:	This is the callback for the unsuccessful deregistration from the GCM server.
**/
function unregFailureAndroidCallback(errormsg)
{
	alert(" Unregistration Failed!!");
	alert("Error message: "+JSON.stringify(errormsg));
	kony.application.dismissLoadingScreen();
}