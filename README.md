KonyMessagingService
====================

Application to showcase the featues of Kony Messaging Service:
- registering a user as an audience member
- subscribing to the email,push & sms messages.

# To run this app

1. Download the project
2. Import project to your Kony IDE.
3. In the project, Go to js folder under modules and open 'configproperties.js' file
4. Write down below required details in the space provided against each parameter in config.js file.
	* senderID 	: clientID generated in google console for google cloud messaging (applicable for android only). 
	* appId		: appID generated or given in the cloud KMS console.
5. Build and run the app.
6. Publish the services to your cloud instance.

 
config.js:

var KMSPROP = {

		senderID :"<Enter your senderID..>", // applicable for android only- clientID generated in google console
		appID:"<Enter your app id...>", // appID generated or given in the cloud KMS console
};
	

**Note:**
You need to setup and configure your Kony Messaging environment on your messaging cloud before running the app. Follow these tutorials 
at  http://docs.kony.com/KonyLibrary/Default.htm#../Subsystems/KMS_Console_User_Guide/Content/Notification.htm%3FTocPath%3DKony%2520MobileFabric%7CKony%2520Messaging%2520Services%7CKony%2520Messaging%2520Services%2520Console%2520User%2520Guide%7CNotification%7C_____0 
to know how to set up Kony Messaging service environment.

# Supported platforms:
**Mobile**
 * Android
 * iPhone