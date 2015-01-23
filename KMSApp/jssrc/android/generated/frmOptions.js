//Form JS File
function frmOptions_hbx2_onClick_seq0(eventobject) {
    pushRegister.call(this);
};

function frmOptions_hbx3_onClick_seq0(eventobject) {
    pushdeRegister.call(this);
};

function addWidgetsfrmOptions() {
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "How to configure KMS on Cloud",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 88
    }, {
        "textCopyable": false
    });
    var img1 = new kony.ui.Image2({
        "id": "img1",
        "isVisible": true,
        "src": "grey_arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var hbx1 = new kony.ui.Box({
        "id": "hbx1",
        "isVisible": true,
        "skin": "hbxWhite",
        "focusSkin": "hbxGrey",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 5, 3, 1],
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx1.add(
    lbl1, img1);
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "text": "Register for Push Message",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 88
    }, {
        "textCopyable": false
    });
    var img2 = new kony.ui.Image2({
        "id": "img2",
        "isVisible": true,
        "src": "grey_arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var hbx2 = new kony.ui.Box({
        "id": "hbx2",
        "isVisible": true,
        "skin": "hbxWhite",
        "focusSkin": "hbxGrey",
        "onClick": frmOptions_hbx2_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 3, 1],
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx2.add(
    lbl2, img2);
    var lbl3 = new kony.ui.Label({
        "id": "lbl3",
        "isVisible": true,
        "text": "De-register",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 88
    }, {
        "textCopyable": false
    });
    var img3 = new kony.ui.Image2({
        "id": "img3",
        "isVisible": true,
        "src": "grey_arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var hbx3 = new kony.ui.Box({
        "id": "hbx3",
        "isVisible": true,
        "skin": "hbxWhite",
        "focusSkin": "hbxGrey",
        "onClick": frmOptions_hbx3_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 3, 1],
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx3.add(
    lbl3, img3);
    var lblMsg = new kony.ui.Label({
        "id": "lblMsg",
        "isVisible": true,
        "text": "Note :  Configure KMS on Cloud before regestering for Push Message",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 3, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmOptions.add(
    hbx1, hbx2, hbx3, lblMsg);
};

function frmOptionsGlobals() {
    var MenuId = [];
    frmOptions = new kony.ui.Form2({
        "id": "frmOptions",
        "needAppMenu": true,
        "title": "KMS",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "menuNormalSkin": "sknFrmKonyThemeNormal",
        "menuFocusSkin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmOptions
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
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