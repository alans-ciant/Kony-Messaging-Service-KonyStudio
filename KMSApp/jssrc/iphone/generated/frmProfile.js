//Form JS File
function frmProfile_frmProfile_preshow_seq0(eventobject, neworientation) {
    frmProfilePreShow.call(this);
};

function frmProfile_chkBoxPushSubs_onSelection_seq0(eventobject) {
    checkBoxToggle.call(this, eventobject);
};

function frmProfile_chkBoxSmsSubs_onSelection_seq0(eventobject) {
    checkBoxToggle.call(this, eventobject);
};

function frmProfile_chkBoxEmailSubs_onSelection_seq0(eventobject) {
    checkBoxToggle.call(this, eventobject);
};

function addWidgetsfrmProfile() {
    var imageProfile = new kony.ui.Image2({
        "id": "imageProfile",
        "isVisible": true,
        "src": "profile_male_active.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 75,
        "referenceHeight": 75,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblUsername = new kony.ui.Label({
        "id": "lblUsername",
        "isVisible": true,
        "text": "John Dan ",
        "skin": "sknLblFontBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "text": "email : abc@gmail.com",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMobVal = new kony.ui.Label({
        "id": "lblMobVal",
        "isVisible": true,
        "text": "mob    :+919999999999",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vboxDetails = new kony.ui.Box({
        "id": "vboxDetails",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 79,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxDetails.add(
    lblUsername, lblEmail, lblMobVal);
    var hboxDetails = new kony.ui.Box({
        "id": "hboxDetails",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 0, 2],
        "padding": [0, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxDetails.add(
    imageProfile, vboxDetails);
    var line21405434215853 = new kony.ui.Line({
        "id": "line21405434215853",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBoxPushSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBoxPushSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Push Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "sknCbxKonyThemeNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmProfile_chkBoxPushSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [3, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215854 = new kony.ui.Line({
        "id": "line21405434215854",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBoxSmsSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBoxSmsSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Sms Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "sknCbxKonyThemeNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmProfile_chkBoxSmsSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [3, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215855 = new kony.ui.Line({
        "id": "line21405434215855",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    var chkBoxEmailSubs = new kony.ui.CheckBoxGroup({
        "id": "chkBoxEmailSubs",
        "isVisible": true,
        "masterData": [
            ["1", "Email Subscription"]
        ],
        "selectedKeys": ["1"],
        "skin": "sknCbxKonyThemeNormal",
        "focusSkin": "cbxNormal",
        "onSelection": frmProfile_chkBoxEmailSubs_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [3, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var line21405434215856 = new kony.ui.Line({
        "id": "line21405434215856",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {});
    frmProfile.add(
    hboxDetails, line21405434215853, chkBoxPushSubs, line21405434215854, chkBoxSmsSubs, line21405434215855, chkBoxEmailSubs, line21405434215856);
};

function frmProfileGlobals() {
    var MenuId = [];
    frmProfile = new kony.ui.Form2({
        "id": "frmProfile",
        "needAppMenu": true,
        "title": "Detail",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "preShow": frmProfile_frmProfile_preshow_seq0,
        "addWidgets": addWidgetsfrmProfile
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
            "titleBarLeftSideView": "button",
            "imageRightSideView": "logout.png",
            "imageLeftSideView": "edit.png",
            "closureRightSideView": appLogOut,
            "closureLeftSideView": showEditForm
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