var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("WxValidate"));

getApp();

Page({
    data: {
        items: [ {
            name: "woman",
            value: "女",
            checked: "true"
        }, {
            name: "man",
            value: "男"
        } ]
    },
    showModal: function(e) {
        wx.showModal({
            content: e.msg,
            showCancel: !1
        });
    },
    onLoad: function() {
        this.initValidate(), console.log(e.default);
    },
    onReady: function() {},
    initValidate: function() {
        var o = {
            name: {
                required: !0
            },
            sex: {
                required: !0
            },
            schoolnum: {
                required: !0,
                digits: !0,
                minlength: 10
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
            },
            idcard: {
                required: !0,
                idcard: !0
            },
            tel: {
                required: !0,
                tel: !0
            }
        }, n = {
            name: {
                required: "请填写姓名"
            },
            sex: {
                required: "请勾选性别"
            },
            schoolnum: {
                required: "请输入学号",
                digits: "请输入正确的学号",
                minlength: "请输入正确的学号"
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
            },
            idcard: {
                required: "请输入身份证号码",
                idcard: "请输入正确的身份证号码"
            },
            tel: {
                required: "请输入手机号",
                tel: "请输入正确的手机号"
            }
        };
        this.WxValidate = new e.default(o, n), console.log("大大萨达" + e.default);
    },
    onShow: function() {},
    formSubmit: function(e) {
        var o = e.detail.value;
        console.log("dd" + o.name);
        if (!this.WxValidate.checkForm(e)) {
            console.log("confirm" + this.WxValidate);
            var n = this.WxValidate.errorList[0];
            return this.showModal(n), !1;
        }
        wx.request({
            url: "https://www.gxfwz36524.com/index/register",
            data: {
                name: o.name,
                sex: o.sex,
                schoolnum: o.schoolnum,
                password: o.password,
                idcard: o.idcard,
                tel: o.tel
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                console.log(e), 0 == e.data.status ? wx.showModal({
                    title: "该号已被注册",
                    icon: "none",
                    duration: 2e3
                }) : wx.showModal({
                    title: "注册成功",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    formReset: function() {
        console.log("form发生了reset事件");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});