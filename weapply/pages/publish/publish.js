var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("WxValidate"));

Page({
    data: {},
    onLoad: function(e) {
        this.initValidate();
    },
    showModal: function(e) {
        wx.showModal({
            content: e.msg,
            showCancel: !1
        });
    },
    test: function(e) {
        wx.getStorage({
            key: "power",
            complete: function(e) {
                console.log("power"), console.log(e.data), !e.data > 0 ? wx.showModal({
                    title: "权限不足",
                    success: function(e) {
                        e.confirm && console.log(e);
                    }
                }) : wx.chooseImage({
                    count: 1,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(e) {
                        wx.getImageInfo({
                            src: e.tempFilePaths[0],
                            success: function(e) {
                                console.log(e);
                            }
                        }), wx.uploadFile({
                            url: "https://www.gxfwz36524.com/index/img",
                            filePath: e.tempFilePaths[0],
                            name: "file",
                            header: {
                                "Content-type": "multipart/form-data"
                            },
                            formData: {
                                user: "test"
                            },
                            success: function(e) {
                                console.log(e);
                                e.data;
                            }
                        });
                    }
                });
            }
        });
    },
    initValidate: function() {
        var o = {
            name: {
                required: !0
            },
            idcard: {
                required: !0,
                idcard: !0
            },
            tel: {
                required: !0,
                tel: !0
            }
        }, t = {
            name: {
                required: "请输入姓名"
            },
            idcard: {
                required: "请输入身份证号码",
                idcard: "请输入正确的身份证号码"
            },
            tel: {
                required: "请输入电话号码"
            }
        };
        this.WxValidate = new e.default(o, t), console.log("大大萨达" + e.default);
    },
    formSubmit: function(e) {
        var o = e.detail.value;
        console.log(o), console.log(o.name);
        if (!this.WxValidate.checkForm(e)) {
            console.log("confirm" + this.WxValidate);
            var t = this.WxValidate.errorList[0];
            return this.showModal(t), !1;
        }
        wx.getStorage({
            key: "power",
            complete: function(e) {
                console.log("power"), console.log(e.data), !e.data > 0 ? wx.showModal({
                    title: "权限不足",
                    success: function(e) {
                        e.confirm && console.log(e);
                    }
                }) : wx.request({
                    url: "https://www.gxfwz36524.com/index/agent",
                    data: {
                        name: o.name,
                        tel: o.tel,
                        idcard: o.idcard
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        console.log(200 == e.statusCode), 200 == e.statusCode && wx.showModal({
                            title: "添加成功",
                            success: function(e) {
                                e.confirm && wx.switchTab({
                                    url: "../publish/publish"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});