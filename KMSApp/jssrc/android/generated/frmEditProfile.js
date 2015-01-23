//Form JS File
function frmEditProfile_listboxActivityStatus_onSelection_seq0(eventobject) {
    updateActivityStatus.call(this, eventobject);
};

function frmEditProfile_chkBxPushSubs_onSelection_seq0(eventobject) {
    pushSubscription.call(this, eventobject);
};

function frmEditProfile_chkBoxSmsRegSubs_onSelection_seq0(eventobject) {
    smsSubscription.call(this, eventobject);
};

function frmEditProfile_chkBoxRegEmailSubs_onSelection_seq0(eventobject) {
    emailSubscription.call(this, eventobject);
};

function frmEditProfile_btnUpdateDetails_onClick_seq0(eventobject) {
    updateDeatils.call(this);
};

function frmEditProfile_button21405434215871_onClick_seq0(eventobject) {
    frmProfile.show();
};

function addWidgetsfrmEditProfile() {
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
        "text": "John",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
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
    var hbxEditFirstName = new kony.ui.Box({
        "id": "hbxEditFirstName",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 2, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxEditFirstName.add(
    lblEditFirstName, lblsp1, txtBoxFirstName);
    var line21405434215857 = new kony.ui.Line({
        "id": "line21405434215857",
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
        "text": "Dan",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
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
    var hbxEditLastName = new kony.ui.Box({
        "id": "hbxEditLastName",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxEditLastName.add(
    lblEditLastName, lblsp2, txtBoxLastName);
    var line21405434215858 = new kony.ui.Line({
        "id": "line21405434215858",
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
        "text": "abc@kony.com",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
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
    var hboxEmail = new kony.ui.Box({
        "id": "hboxEmail",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxEmail.add(
    lblEditEmail, lblSp5, txtBoxEmail);
    var line21405434215859 = new kony.ui.Line({
        "id": "line21405434215859",
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
        "text": "+919999999999",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
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
    var hbxEditMob = new kony.ui.Box({
        "id": "hbxEditMob",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxEditMob.add(
    lblEditMob, lblsp3, txtBoxMob);
    var line21405434215860 = new kony.ui.Line({
        "id": "line21405434215860",
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
        "focusSkin": "sknListboxKonyThemeFocus",
        "onSelection": frmEditProfile_listboxActivityStatus_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
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
    var hboxActivity = new kony.ui.Box({
        "id": "hboxActivity",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxActivity.add(
    lblActivityStatus, lblSp4, listboxActivityStatus);
    var line21405434215861 = new kony.ui.Line({
        "id": "line21405434215861",
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
        "onSelection": frmEditProfile_chkBxPushSubs_onSelection_seq0
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
    var line21405434215863 = new kony.ui.Line({
        "id": "line21405434215863",
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
        "onSelection": frmEditProfile_chkBoxSmsRegSubs_onSelection_seq0
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
    var line21405434215864 = new kony.ui.Line({
        "id": "line21405434215864",
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
        "onSelection": frmEditProfile_chkBoxRegEmailSubs_onSelection_seq0
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
    var line21405434215865 = new kony.ui.Line({
        "id": "line21405434215865",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnUpdateDetails = new kony.ui.Button({
        "id": "btnUpdateDetails",
        "isVisible": true,
        "text": "update",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmEditProfile_btnUpdateDetails_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 20, 20, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label21405434215867 = new kony.ui.Label({
        "id": "label21405434215867",
        "isVisible": true,
        "text": "Edit Profile",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 99
    }, {
        "textCopyable": false
    });
    var hbxTitle = new kony.ui.Box({
        "id": "hbxTitle",
        "isVisible": true,
        "skin": "sknHbxKonyThemeHeader",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxTitle.add(
    label21405434215867);
    var button21405434215871 = new kony.ui.Button({
        "id": "button21405434215871",
        "isVisible": true,
        "text": "Button",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmEditProfile_button21405434215871_onClick_seq0
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
    frmEditProfile.add(
    hbxEditFirstName, line21405434215857, hbxEditLastName, line21405434215858, hboxEmail, line21405434215859, hbxEditMob, line21405434215860, hboxActivity, line21405434215861, chkBxPushSubs, line21405434215863, chkBoxSmsRegSubs, line21405434215864, chkBoxRegEmailSubs, line21405434215865, btnUpdateDetails, hbxTitle, button21405434215871);
};

function frmEditProfileGlobals() {
    var MenuId = [];
    frmEditProfile = new kony.ui.Form2({
        "id": "frmEditProfile",
        "needAppMenu": true,
        "title": "Edit Profile",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmEditProfile
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