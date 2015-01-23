//Form JS File
function frmRegistration_btnSignOut_onClick_seq0(eventobject) {
    appLogOut.call(this);
};

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

function frmRegistration_button21405434215869_onClick_seq0(eventobject) {
    frmProfile.show();
};

function frmRegistration_btnSubmitDetails_onClick_seq0(eventobject) {
    registerAudience.call(this);
};

function addWidgetsfrmRegistration() {
    var lblDummy = new kony.ui.Label({
        "id": "lblDummy",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "textCopyable": false
    });
    var lblProfileTitle = new kony.ui.Label({
        "id": "lblProfileTitle",
        "isVisible": true,
        "text": "Add Details",
        "skin": "sknLblKonyThemeTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {
        "textCopyable": false
    });
    var btnSignOut = new kony.ui.Button({
        "id": "btnSignOut",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnKonyThemeLogOut",
        "focusSkin": "sknBtnKonyThemeLogOut",
        "onClick": frmRegistration_btnSignOut_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var hboxTitle = new kony.ui.Box({
        "id": "hboxTitle",
        "isVisible": true,
        "skin": "sknHbxKonyThemeHeader",
        "focusSkin": "sknHbxKonyThemeHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
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
    hboxTitle.add(
    lblDummy, lblProfileTitle, btnSignOut);
    var lblEditFirstName = new kony.ui.Label({
        "id": "lblEditFirstName",
        "isVisible": true,
        "text": "First name",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtBoxFirstName = new kony.ui.TextBox2({
        "id": "txtBoxFirstName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "John",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
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
        "margin": [0, 2, 1, 1],
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [0, 0, 0, 0],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtBoxLastName = new kony.ui.TextBox2({
        "id": "txtBoxLastName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Dan",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
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
        "margin": [0, 1, 1, 1],
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [0, 0, 0, 0],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtBoxEmail = new kony.ui.TextBox2({
        "id": "txtBoxEmail",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "abc@kony.com",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
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
        "margin": [0, 1, 1, 1],
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [0, 0, 0, 0],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var txtBoxMob = new kony.ui.TextBox2({
        "id": "txtBoxMob",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "+914444444444",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeNormal",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
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
        "margin": [0, 1, 1, 1],
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [0, 0, 0, 0],
        "padding": [5, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
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
        "margin": [0, 1, 1, 1],
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [5, 1, 1, 0],
        "padding": [2, 2, 2, 2],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": "checkbox_tick.png",
        "untickedImage": "checkbox.png"
    });
    var line21405434215847 = new kony.ui.Line({
        "id": "line21405434215847",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [5, 1, 1, 0],
        "padding": [2, 2, 2, 2],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": "checkbox_tick.png",
        "untickedImage": "checkbox.png"
    });
    var line21405434215848 = new kony.ui.Line({
        "id": "line21405434215848",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
        "margin": [5, 1, 1, 0],
        "padding": [2, 2, 2, 2],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": "checkbox_tick.png",
        "untickedImage": "checkbox.png"
    });
    var line21405434215849 = new kony.ui.Line({
        "id": "line21405434215849",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var button21405434215869 = new kony.ui.Button({
        "id": "button21405434215869",
        "isVisible": true,
        "text": "Button",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmRegistration_button21405434215869_onClick_seq0
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
        "margin": [20, 5, 20, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmRegistration.add(
    hboxTitle, hbxRegFirstName, line21405434215842, hbxRegLastName, line21405434215843, hboxRegEmail, line21405434215844, hbxRegMob, line21405434215845, hboxRegActivity, line21405434215846, chkBxPushSubs, line21405434215847, chkBoxSmsRegSubs, line21405434215848, chkBoxRegEmailSubs, line21405434215849, button21405434215869, btnSubmitDetails);
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