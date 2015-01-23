//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "kmsapp",
    appName: "KMSDemo",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.211.55.4",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "kmsapp",
    url: "https://mobilefabric-demo.konycloud.com/kmsapp/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/kmsapp/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmEditProfileGlobals();
    frmLoginGlobals();
    frmOptionsGlobals();
    frmProfileGlobals();
    frmRegistrationGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;