var cb1="1",cb2="2",cb3="3";
var subs=[];

/**
 * Name		:	showEditForm
 * Author	:	Kony
 * Purpose	:	To display the frmEditProfile.
**/
function showEditForm(){
frmEditProfile.show();
}
/**
 * Name		:	checkBoxToggle
 * Author	:	Kony
 * Purpose	:	To reset the checkbox to its original status.
**/
function checkBoxToggle(chkBox)
{
	//kony.print(JSON.stringify(chkBox));
	//frmProfile.chkBoxPushSubs["selectedKeys"]=subs;
	switch(chkBox["id"])
	{
		case "chkBoxPushSubs":
			if(audiencePushSubs)
				frmProfile.chkBoxPushSubs.selectedKeys=["1"];
			else
				frmProfile.chkBoxPushSubs.selectedKeys=[];
			break;
		case "chkBoxSmsSubs":
			if(audienceSmsSubs)
				frmProfile.chkBoxSmsSubs.selectedKeys=["1"];
			else
				frmProfile.chkBoxSmsSubs.selectedKeys=[];
			break;
		case "chkBoxEmailSubs":
			if(audienceEmailSubs)
				frmProfile.chkBoxEmailSubs.selectedKeys=["1"];
			else
				frmProfile.chkBoxEmailSubs.selectedKeys=[];
	}
}
/**
 * Name		:	appLogOut
 * Author	:	Kony
 * Purpose	:	To logout from the application.
**/
function appLogOut()
{
	frmLogin.txtBoxLogin.text="";
	frmLogin.txtBoxPswd.text="";
	frmLogin.show();
}
/**
 * Name		:	frmProfilePreShow
 * Author	:	Kony
 * Purpose	:	For setting some values to the form in the preshow of it.
**/
function frmProfilePreShow()
{
	frmProfile.lblUsername.text=audienceFirstName+" "+audienceLastName;
	frmProfile.lblEmail.text="email :"+audienceEmail;
	frmProfile.lblMobVal.text="mob  :"+audienceMob;
	/*if(osVersion==8)
	{
		frmProfile.chkBoxPushSubs.setVisibility(false);
	}*/
	if(audiencePushSubs==true)
	{
		frmEditProfile.chkBxPushSubs.selectedKeys=["1"];
		frmProfile.chkBoxPushSubs.selectedKeys=["1"];
		//subs.push("1");
	}else{
		frmEditProfile.chkBxPushSubs.selectedKeys=[];
		frmProfile.chkBoxPushSubs.selectedKeys=[];
	}
	if(audienceEmailSubs==true){
		frmEditProfile.chkBoxRegEmailSubs.selectedKeys=["1"];
		frmProfile.chkBoxEmailSubs.selectedKeys=["1"];
		//subs.push("2");
	}else{
		frmEditProfile.chkBoxRegEmailSubs.selectedKeys=[];
		frmProfile.chkBoxEmailSubs.selectedKeys=[];
	}
	if(audienceSmsSubs==true){
		frmEditProfile.chkBoxSmsRegSubs.selectedKeys=["1"];
		frmProfile.chkBoxSmsSubs.selectedKeys=["1"];
		//subs.push("3");
	}else{
		frmEditProfile.chkBoxSmsRegSubs.selectedKeys=[];
		frmProfile.chkBoxSmsSubs.selectedKeys=[];
	}
	//frmProfile.chkBoxPushSubs["selectedKeys"]=subs;
	if(audienceStatus)
		frmProfile.imageProfile.src="profile_male_active.png";
	else
		frmProfile.imageProfile.src="profile_male_unavailable.png";
	frmEditProfile.txtBoxFirstName.text=audienceFirstName;
	frmEditProfile.txtBoxLastName.text=audienceLastName;
	frmEditProfile.txtBoxEmail.text=audienceEmail;
	frmEditProfile.txtBoxMob.text=audienceMob;
	//frmEditProfile.chkBoxEditSubs["selectedKeys"]=subs;
	if(audienceStatus)
		frmEditProfile.listboxActivityStatus.selectedKey="1";
	else
		frmEditProfile.listboxActivityStatus.selectedKey="2";
}
/**
 * Name		:	updateActivityStatus
 * Author	:	Kony
 * Purpose	:	To update the activity status of the audience member while updating the details.
**/
function updateActivityStatus(list){
	if(list["selectedKeys"][0]=="1")
		audienceStatus=true;
	else
		audienceStatus=false;
	//kony.print("\nActivity:-"+audienceStatus);
}
/**
 * Name		:	updateDeatils
 * Author	:	Kony
 * Purpose	:	To update the details oh the audience member.
**/
function updateDeatils()
{
	audienceFirstName=frmEditProfile.txtBoxFirstName.text;
	if(audienceFirstName==null||audienceFirstName==""){
  	alert("please enter first name");
  	return;
  	}
	audienceLastName=frmEditProfile.txtBoxLastName.text;
	if(audienceLastName==null||audienceLastName==""){
  	alert("please enter last name");
  	return;
  	}
	audienceEmail=frmEditProfile.txtBoxEmail.text;
	if(audienceLastName==null||audienceLastName==""){
  	alert("please enter email id");
  	return;
  	}
	audienceMob=frmEditProfile.txtBoxMob.text;
	if(audienceMob==null||audienceMob==""){
  	alert("please enter mobile number");
  	return;
  	}
	/*kony.print("\n--audienceFirstName->"+audienceFirstName);
	kony.print("\n--audienceLastName-->"+audienceLastName);
	kony.print("\n--audienceEmail-->"+audienceEmail);
	kony.print("\n--audienceMob-->"+audienceMob);
	kony.print("\n--audienceStatus-->"+audienceStatus);
	kony.print("\n--audiencePushSubs-->"+audiencePushSubs);
	kony.print("\n--audienceEmailSubs-->"+audienceEmailSubs);
	kony.print("\n--audienceSmsSubs-->"+audienceSmsSubs);*/
	ksid=kony.store.getItem("ksid");
	kony.print("\nksid->"+ksid);
	if(ksid==null &&(audiencePushSubs==true))
	{
		if(kony.os.deviceInfo().name=="iPhone Simulator"){
			//audiencePushSubs=false;
			alert("push doesn't support in iPhone simulator.");
			return;
		}else{
			pushRegister();
		}
	}else if(ksid!=null &&(audiencePushSubs==false))
	{
		pushdeRegister();	
	}
	editAudience2();
}
/**
 * Name		:	updateMessaageAlert
 * Author	:	Kony
 * Purpose	:	To display the messages as an alert.
**/
function updateMessaageAlert(msg)
{
	//Defining basicConf parameter for alert
	var basicConf = {message:msg ,alertType: constants.ALERT_TYPE_INFO};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}