/**
 * Name		:	callbackiPhoneRegister
 * Author	:	Kony
 * Purpose	:	It register the device to the APNS.
**/
function callbackiPhoneRegister()
{
	kony.print("\n\n\n<--------in callbackiPhoneRegister--------->\n\n\n");
	var notificationTypes = [0, 1, 2];
	kony.push.register(notificationTypes);
	//alert("Registration Done !!!");
}
/**
 * Name		:	callbackiPhoneSetCallbacks
 * Author	:	Kony
 * Purpose	:	It sets the callback function for registration,push notification events.
**/
function callbackiPhoneSetCallbacks()
{
	kony.print("\n\n\n<--------in callbackiPhoneSetCallbacks--------->\n\n\n");
		var callbacksTable = {onsuccessfulregistration: regSuccessiPhoneCallback,onfailureregistration: regFailureiPhoneCallback,
							onlinenotification: onlinePushNotificationiPhoneCallback,offlinenotification: offlinePushNotificationiPhoneCallback,
							onsuccessfulderegistration: unregSuccessiPhoneCallback,onfailurederegistration: unregFailureiPhoneCallback };
		kony.push.setCallbacks(callbacksTable);
	//	alert("setCallBack Done !!!");
}
/**
 * Name		:	regSuccessiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback function for successful registration on the APNS.
**/
function regSuccessiPhoneCallback(regId)
{
	kony.print("\n\n\n<--------in regSuccessiPhoneCallback--------->\n\n\n");
	kony.print("\n Registerd to iPhone push server : "+ regId);
	kony.application.dismissLoadingScreen();
	kony.application.showLoadingScreen("sknLoading","Subscribing for push notification...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    subscribeKMS(regId,"iphone");
}
/**
 * Name		:	regFailureiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback function for the unsuccessful registration event.
**/
function regFailureiPhoneCallback(errormsg)
{
	kony.print("\n\n************ JS regFailureCallback() called *********");
	kony.print("Error message: "+JSON.stringify(errormsg));
	kony.application.dismissLoadingScreen();
	//alert("Unable to register..");
	audiencePushSubs=false;
	//alert("Error message: "+JSON.stringify(errormsg));
}
/**
 * Name		:	onlinePushNotificationiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback function for the push message recieving event while online.
**/
function onlinePushNotificationiPhoneCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print("\n received push"+JSON.stringify(msg));
	alert("Message: "+msg["alert"]);
}
/**
 * Name		:	offlinePushNotificationiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback function for the push message recieving event while offline.
**/
function offlinePushNotificationiPhoneCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	alert("Message: "+msg["alert"]);
	kony.print(msg);
}
/**
 * Name		:	unregSuccessiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback for the successful deregistration from the APNS.
**/
function unregSuccessiPhoneCallback()
{
	kony.application.dismissLoadingScreen();
   // alert("Unregisterd Sucesfully!!");
	unsubscribeKMS();
}
/**
 * Name		:	unregFailureiPhoneCallback
 * Author	:	Kony
 * Purpose	:	Callback for the unsuccessful deregistration event.
**/
function unregFailureiPhoneCallback(errormsg)
{
	//alert(" Unregistration Failed!!");
	//alert("Error message: "+JSON.stringify(errormsg));
	kony.print(errormsg);
	kony.application.dismissLoadingScreen();
}
