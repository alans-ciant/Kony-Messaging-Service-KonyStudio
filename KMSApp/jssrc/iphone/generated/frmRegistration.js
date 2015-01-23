//Form JS File
function frmRegistration_listboxActivityStatus_onSelection_seq0(eventobject) {
    updateActivityStatus.call(this, eventobject);
};

function frmRegistration_chkBxPushSubs_onSelection_seq0(eventobject) {
    pushSubscription.call(this, eventobject);
};

function frmRegistration_chkBoxSmsRegSubs_onSelection_seq0(eventobject) {
    smsSubscription.call(this, eventobject);
};

function frmRegistration_chkBoxRegEmailSubs_onSelection_seq0(eventobject) {
    emailSubscription.call(this, eventobject);
};

function frmRegistration_btnSubmitDetails_onClick_seq0(eventobject) {
    registerAudience.call(this);
};

function addWidgetsfrmRegistration() {
    var lblEditFirstName = new kony.ui.Label({
        "id": "lblEditFirstName",
        "isVisible": true,
        "text": "First name",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblsp1 = new kony.ui.Label({
        "id": "lblsp1",
        "isVisible": true,
        "text": ":",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxFirstName = new kony.ui.TextBox2({
        "id": "txtBoxFirstName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "John",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 2, 2],
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hbxRegFirstName = new kony.ui.Box({
        "id": "hbxRegFirstName",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRegFirstName.add(
    lblEditFirstName, lblsp1, txtBoxFirstName);
    var line21405434215842 = new kony.ui.Line({
        "id": "line21405434215842",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var lblEditLastName = new kony.ui.Label({
        "id": "lblEditLastName",
        "isVisible": true,
        "text": "Last Name",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblsp2 = new kony.ui.Label({
        "id": "lblsp2",
        "isVisible": true,
        "text": ":",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxLastName = new kony.ui.TextBox2({
        "id": "txtBoxLastName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Dan",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 2, 2],
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hbxRegLastName = new kony.ui.Box({
        "id": "hbxRegLastName",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRegLastName.add(
    lblEditLastName, lblsp2, txtBoxLastName);
    var line21405434215843 = new kony.ui.Line({
        "id": "line21405434215843",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var lblEditEmail = new kony.ui.Label({
        "id": "lblEditEmail",
        "isVisible": true,
        "text": "Email",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSp5 = new kony.ui.Label({
        "id": "lblSp5",
        "isVisible": true,
        "text": ":",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxEmail = new kony.ui.TextBox2({
        "id": "txtBoxEmail",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "abc@kony.com",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 2, 2],
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hboxRegEmail = new kony.ui.Box({
        "id": "hboxRegEmail",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxRegEmail.add(
    lblEditEmail, lblSp5, txtBoxEmail);
    var line21405434215844 = new kony.ui.Line({
        "id": "line21405434215844",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var lblEditMob = new kony.ui.Label({
        "id": "lblEditMob",
        "isVisible": true,
        "text": "Mob.",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblsp3 = new kony.ui.Label({
        "id": "lblsp3",
        "isVisible": true,
        "text": ":",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxMob = new kony.ui.TextBox2({
        "id": "txtBoxMob",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "+914444444444",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 2, 2],
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hbxRegMob = new kony.ui.Box({
        "id": "hbxRegMob",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRegMob.add(
    lblEditMob, lblsp3, txtBoxMob);
    var line21405434215845 = new kony.ui.Line({
        "id": "line21405434215845",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var lblActivityStatus = new kony.ui.Label({
        "id": "lblActivityStatus",
        "isVisible": true,
        "text": "Status",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSp4 = new kony.ui.Label({
        "id": "lblSp4",
        "isVisible": true,
        "text": ":",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var listboxActivityStatus = new kony.ui.ListBox({
        "id": "listboxActivityStatus",
        "isVisible": true,
        "masterData": [
            ["1", "Active"],
            ["2", "Inactive"]
        ],
        "selectedKey": "1",
        "skin": "sknListboxKonyThemeNormal",
        "focusSkin": "sknListboxKonyThemeNormal",
        "onSelection": frmRegistration_listboxActivityStatus_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "dropDownImage": null,
        "placeholder": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var hboxRegActivity = new kony.ui.Box({
        "id": "hboxRegActivity",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 1, 0, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxRegActivity.add(
    lblActivityStatus, lblSp4, listboxActivityStatus);
    var line21405434215846 = new kony.ui.Line({
        "id": "line21405434215846",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBxPushSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBxPushSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Push Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmRegistration_chkBxPushSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [1, 0, 1, 0],
        "padding": [5, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215847 = new kony.ui.Line({
        "id": "line21405434215847",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBoxSmsRegSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBoxSmsRegSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Sms Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmRegistration_chkBoxSmsRegSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [1, 0, 1, 0],
        "padding": [5, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215848 = new kony.ui.Line({
        "id": "line21405434215848",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBoxRegEmailSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBoxRegEmailSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Email Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmRegistration_chkBoxRegEmailSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [1, 0, 1, 0],
        "padding": [5, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215849 = new kony.ui.Line({
        "id": "line21405434215849",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var btnSubmitDetails = new kony.ui.Button({
        "id": "btnSubmitDetails",
        "isVisible": true,
        "text": "submit",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmRegistration_btnSubmitDetails_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 1, 20, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmRegistration.add(
    hbxRegFirstName, line21405434215842, hbxRegLastName, line21405434215843, hboxRegEmail, line21405434215844, hbxRegMob, line21405434215845, hboxRegActivity, line21405434215846, chkBxPushSubs, line21405434215847, chkBoxSmsRegSubs, line21405434215848, chkBoxRegEmailSubs, line21405434215849, btnSubmitDetails);
};

function frmRegistrationGlobals() {
    var MenuId = [];
    frmRegistration = new kony.ui.Form2({
        "id": "frmRegistration",
        "needAppMenu": true,
        "title": "Add details",
        "enabledForIdleTimeout": false,
        "skin": "sknFormNormal",
        "addWidgets": addWidgetsfrmRegistration
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarRightSideView": "button",
            "titleBarLeftSideView": "none",
            "imageRightSideView": "logout.png",
            "closureRightSideView": appLogOut
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "deprecated": {
            "titleBarBackGroundImage": "blue_pixel.png"
        }
    });
};