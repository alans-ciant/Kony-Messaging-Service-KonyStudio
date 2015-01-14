var cb1="1",cb2="2",cb3="3";
var subs=[];
function deviceInfo()
{
	var devDetail=kony.os.deviceInfo();
	//kony.print("\n device Info->"+JSON.stringify(kony.os.deviceInfo().osversion));
	for(var key in devDetail)
      	{
      		//if ((key=="model" || key=="deviceid")&&(kony.os.deviceInfo().name == "thinclient"))
            //{
            	//Do not include this Key-Value pair for thinclient
            //}
            //else
            //{
            	//var detail=new Object();
            	//detail.lblKey=""+key;
            	//detail.lblVal=""+deviceInfo[key];
            	//details.push(detail);
				kony.print("\n"+key+"-"+devDetail[key]);
           // }
      	}
      	//details.push({lblKey:"freeMemory",lblVal:""+kony.os.freeMemory()});
      	//details.push({lblKey:"userAgent",lblVal:""+kony.os.userAgent()});    
}
function showEditForm(){
frmEditProfile.show();
}
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
function appLogOut()
{
	frmLogin.show();
}
function frmProfilePreShow()
{
	frmProfile.lblUsername.text=audienceFirstName+" "+audienceLastName;
	frmProfile.lblEmail.text="email :"+audienceEmail;
	frmProfile.lblMobVal.text="mob  :"+audienceMob;
	if(osVersion==8)
	{
		frmProfile.chkBoxPushSubs.setVisibility(false);
	}
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
function updateActivityStatus(list){
	if(list["selectedKeys"][0]=="1")
		audienceStatus=true;
	else
		audienceStatus=false;
	//kony.print("\nActivity:-"+audienceStatus);
}
function updateSubscription(chkBox)
{
	//subs=[];
	subs=chkBox["selectedKeys"];
	audiencePushSubs=false;
	audienceEmailSubs=false;
	audienceSmsSubs=false;
	kony.print("\n---checkBox length--->"+subs.length);
	if(kony.os.deviceInfo().name=="android")
	{
		for(var i=0;i<subs.length;i++)
		{
			kony.print("\n--chkBox selected keys-->"+subs+"  checked-->"+subs[i]+"  length-->"+subs.length);
			/*switch(subs[i]){
				case "1":audiencePushSubs=true;
					break;
				case "2":audienceEmailSubs=true;
					break;
				case "3":audienceSmsSubs=true;
			}*/
		}
	}else
	{
		for(var i=0;i<subs.length;i++)
		{
			switch(subs[i])
			{
				case "1":audiencePushSubs=true;
					break;
				case "2":audienceEmailSubs=true;
					break;
				case "3":audienceSmsSubs=true;
			}
		}
	}
	//kony.print("\n---chkBox--->"+JSON.stringify(chkBox));
}
function updateDeatils()
{
	audienceFirstName=frmEditProfile.txtBoxFirstName.text;
	audienceLastName=frmEditProfile.txtBoxLastName.text;
	audienceEmail=frmEditProfile.txtBoxEmail.text;
	audienceMob=frmEditProfile.txtBoxMob.text;
	kony.print("\n--audienceFirstName->"+audienceFirstName);
	kony.print("\n--audienceLastName-->"+audienceLastName);
	kony.print("\n--audienceEmail-->"+audienceEmail);
	kony.print("\n--audienceMob-->"+audienceMob);
	kony.print("\n--audienceStatus-->"+audienceStatus);
	kony.print("\n--audiencePushSubs-->"+audiencePushSubs);
	kony.print("\n--audienceEmailSubs-->"+audienceEmailSubs);
	kony.print("\n--audienceSmsSubs-->"+audienceSmsSubs);
	ksid=kony.store.getItem("ksid");
	kony.print("\nksid->"+ksid);
	if(ksid==null &&(audiencePushSubs==true))
	{
		pushRegister();
	}else if(ksid!=null &&(audiencePushSubs==false))
	{
		pushdeRegister();	
	}
	editAudience2();
}
function updateMessaageAlert(msg)
{
	//Defining basicConf parameter for alert
	var basicConf = {message:msg ,alertType: constants.ALERT_TYPE_INFO};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}