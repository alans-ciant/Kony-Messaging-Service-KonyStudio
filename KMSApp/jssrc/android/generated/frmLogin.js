//Form JS File
function frmLogin_btnLogin_onClick_seq0(eventobject) {
    getAccessToken4.call(this);
};

function frmLogin_button21405434215868_onClick_seq0(eventobject) {
    frmRegistration.show();
};

function frmLogin_hboxLoginFooter_onClick_seq0(eventobject) {
    kony.application.openURL("https://manage.kony.com/registration");
};

function addWidgetsfrmLogin() {
    var imageKonyLogo = new kony.ui.Image2({
        "id": "imageKonyLogo",
        "isVisible": true,
        "src": "logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_CENTER,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var loginTitle = new kony.ui.Label({
        "id": "loginTitle",
        "isVisible": true,
        "text": "MESSAGING",
        "skin": "sknLoginTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var logintitle2 = new kony.ui.Label({
        "id": "logintitle2",
        "isVisible": true,
        "text": "SERVICES",
        "skin": "sknLoginTitle2"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var txtBoxLogin = new kony.ui.TextBox2({
        "id": "txtBoxLogin",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Cloud mail ID",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeLogin",
        "focusSkin": "sknTbxKonyThemeLogin",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var txtBoxPswd = new kony.ui.TextBox2({
        "id": "txtBoxPswd",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "password",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeLogin",
        "focusSkin": "sknTbxKonyThemeLogin",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var vBoxCredentials = new kony.ui.Box({
        "id": "vBoxCredentials",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vBoxCredentials.add(
    txtBoxLogin, line1, txtBoxPswd);
    var hBoxCredentials = new kony.ui.Box({
        "id": "hBoxCredentials",
        "isVisible": true,
        "skin": "hbxWhite",
        "focusSkin": "hbxWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hBoxCredentials.add(
    vBoxCredentials);
    var btnLogin = new kony.ui.Button({
        "id": "btnLogin",
        "isVisible": true,
        "text": "Login",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmLogin_btnLogin_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 10, 20, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button21405434215868 = new kony.ui.Button({
        "id": "button21405434215868",
        "isVisible": true,
        "text": "Button",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmLogin_button21405434215868_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblAccount = new kony.ui.Label({
        "id": "lblAccount",
        "isVisible": true,
        "text": "Don't have an Account?",
        "skin": "sknLblKonyThemeWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var lblSignUp = new kony.ui.Label({
        "id": "lblSignUp",
        "isVisible": true,
        "text": "Sign Up",
        "skin": "sknLblBlue"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var hboxLoginFooter = new kony.ui.Box({
        "id": "hboxLoginFooter",
        "isVisible": true,
        "onClick": frmLogin_hboxLoginFooter_onClick_seq0,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 10],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxLoginFooter.add(
    lblAccount, lblSignUp);
    frmLogin.add(
    imageKonyLogo, loginTitle, logintitle2, hBoxCredentials, btnLogin, button21405434215868, hboxLoginFooter);
};

function frmLoginGlobals() {
    var MenuId = [];
    frmLogin = new kony.ui.Form2({
        "id": "frmLogin",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "sknFormLogin",
        "addWidgets": addWidgetsfrmLogin
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};