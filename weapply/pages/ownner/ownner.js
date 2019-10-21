function o(o, e, t) {
    return e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o;
}

var e, t = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("WxValidate"));

Page((e = {
    onLoad: function(o) {},
    data: {},
    showModal: function(o) {
        wx.showModal({
            content: o.msg,
            showCancel: !1
        });
    }
}, o(e, "onLoad", function(o) {
    console.log("onload"), console.log(wx.getStorage("power")), this.initValidate();
}), o(e, "onReady", function() {}), o(e, "onShow", function() {
    wx.getStorage({
        key: "power",
        success: function(o) {
            console.log(o.data), o.data >= 0 && wx.navigateTo({
                url: "./ownnerreal"
            });
        }
    });
}), o(e, "onHide", function() {}), o(e, "onUnload", function() {}), o(e, "formReset", function() {
    console.log("form发生了reset事件");
}), o(e, "register", function(o) {
    wx.navigateTo({
        url: "../register/register"
    });
}), o(e, "correct", function(o) {
    wx.navigateTo({
        url: "../register/correct"
    });
}), o(e, "onPullDownRefresh", function() {}), o(e, "initValidate", function() {
    var o = {
        schoolnum: {
            required: !0,
            digits: !0,
            minlength: 10
        },
        password: {
            required: !0,
            minlength: 6,
            maxlength: 15
        }
    }, e = {
        schoolnum: {
            required: "请输入学号",
            digits: "请输入正确的学号",
            minlength: "请输入正确的学号"
        },
        password: {
            required: "请输入密码",
            minlength: "密码长度不少于6位",
            maxlength: "密码长度不多于15位"
        }
    };
    this.WxValidate = new t.default(o, e);
}), o(e, "formSubmit", function(o) {
    console.log(o), console.log(o.detail.formId), wx.setStorage({
        key: "formId",
        data: o.detail.formId
    });
    var e = o.detail.value;
    console.log("dd" + e.schoolnum);
    var t = this;
    if (!this.WxValidate.checkForm(o)) {
        console.log("confirm" + this.WxValidate);
        var a = this.WxValidate.errorList[0];
        return this.showModal(a), !1;
    }
    wx.request({
        url: "https://www.gxfwz36524.com/index/userlogin",
        data: {
            schoolnum: e.schoolnum,
            password: e.password
        },
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function(o) {
            console.log("unstand" + o.data.password), console.log(o.data.status), "success" == o.data.status ? (t.setData({
                schoolnum: wx.getStorageSync("schoolnum"),
                password: wx.getStorageSync("password")
            }), wx.showModal({
                title: "登录成功",
                icon: "none",
                duration: 2e3
            }), wx.setStorage({
                key: "name",
                data: o.data.name
            }), wx.setStorage({
                key: "schoolnum",
                data: o.data.schoolnum
            }), wx.setStorage({
                key: "password",
                data: o.data.password
            }), wx.setStorage({
                key: "power",
                data: o.data.power
            }), wx.navigateTo({
                url: "../ownner/ownnerreal?name=" + o.data.name + "&&power=" + o.data.power
            })) : wx.showModal({
                title: "账号/密码错误",
                icon: "success",
                duration: 2e3
            });
        }
    });
}), o(e, "onReachBottom", function() {}), o(e, "onShareAppMessage", function() {}), 
e));