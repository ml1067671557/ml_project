var o = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("WxValidate"));

getApp();

Page({
    data: {},
    onLoad: function(e) {
        this.initValidate(), console.log(o.default);
    },
    showModal: function(o) {
        wx.showModal({
            content: o.msg,
            showCancel: !1
        });
    },
    onReady: function() {},
    initValidate: function() {
        var e = {
            schoolnum: {
                required: !0,
                digits: !0,
                minlength: 10
            },
            idcard: {
                required: !0,
                idcard: !0
            },
            password: {
                required: !0,
                minlength: 6,
                maxlength: 15
            },
            confirmpassword: {
                required: !0,
                minlength: 6,
                maxlength: 15,
                equalTo: "password"
            }
        }, n = {
            schoolnum: {
                required: "请输入学号",
                digits: "请输入正确的学号",
                minlength: "请输入正确的学号"
            },
            idcard: {
                required: "请输入身份证号码",
                idcard: "请输入正确的身份证号码"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不少于6位",
                maxlength: "密码长度不多于15位"
            },
            confirmpassword: {
                required: "请输入确认密码",
                minlength: "密码长度不少于6位",
                maxlength: "密码长度不多于15位",
                equalTo: "确认密码和新密码保持一致"
            }
        };
        this.WxValidate = new o.default(e, n), console.log("大大萨达" + o.default);
    },
    formSubmit: function(o) {
        var e = o.detail.value;
        console.log(e), console.log(e.name);
        if (!this.WxValidate.checkForm(o)) {
            console.log("confirm" + this.WxValidate);
            var n = this.WxValidate.errorList[0];
            return this.showModal(n), !1;
        }
        wx.request({
            url: "https://www.gxfwz36524.com/index/correct",
            data: {
                schoolnum: e.schoolnum,
                idcard: e.idcard,
                password: e.password
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(o) {
                console.log(o.data.status), 0 == o.data.status ? wx.showModal({
                    title: "身份证号码错误",
                    icon: "none",
                    duration: 2e3
                }) : 1 == o.data.status ? wx.showModal({
                    title: "修改成功",
                    icon: "success",
                    duration: 2e3
                }) : wx.showModal({
                    title: "该用户不存在",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});