function e(e, o, r) {
    return o in e ? Object.defineProperty(e, o, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = r, e;
}

var o, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("WxValidate"));

Page((o = {
    data: {},
    showModal: function(e) {
        wx.showModal({
            content: e.msg,
            showCancel: !1
        });
    },
    onLoad: function(e) {
        this.initValidate(), wx.request({
            url: "https://www.gxfwz36524.com/index/getmaxid",
            data: {
                x: "",
                y: ""
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e.data.result), wx.request({
                    url: "https://www.gxfwz36524.com/index/correctid",
                    data: {
                        x: e.data.result,
                        y: ""
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        console.log(e.data);
                    }
                });
            }
        });
    },
    initValidate: function() {
        var e = {
            workname: {
                required: !0
            },
            workcontent: {
                required: !0
            },
            worktime: {
                required: !0
            },
            workspace: {
                required: !0
            },
            workrequire: {
                required: !0
            },
            workpay: {
                required: !0
            },
            deadline: {
                required: !0
            }
        }, o = {
            workname: {
                required: "请填写工作名称"
            },
            workcontent: {
                required: "请填写工作内容"
            },
            worktime: {
                required: "请填写工作时间"
            },
            workspace: {
                required: "请填写工作地点"
            },
            workrequire: {
                required: "请填写工作要求"
            },
            workpay: {
                required: "请填写工作薪资"
            },
            deadline: {
                required: "请填写工作截止日期"
            }
        };
        this.WxValidate = new r.default(e, o), console.log("大大萨达" + r.default);
    },
    onReady: function() {},
    formSubmit: function(e) {
        var o = e.detail.value;
        console.log("params" + o);
        if (!this.WxValidate.checkForm(e)) {
            console.log("confirm" + this.WxValidate);
            var r = this.WxValidate.errorList[0];
            return this.showModal(r), !1;
        }
        wx.request({
            url: "https://www.gxfwz36524.com/index/jobpublish",
            data: {
                workname: o.workname,
                workcontent: o.workcontent,
                provide: wx.getStorageSync("name"),
                worktime: o.worktime,
                workplace: o.workspace,
                deadline: o.deadline,
                workpay: o.workpay,
                workrequire: o.workrequire,
                pschoolnum: wx.getStorageSync("schoolnum")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                console.log("jobpublish"), console.log(e.data), console.log(e.data.status), "success" == e.data.status ? wx.showModal({
                    title: "提交成功",
                    icon: "none",
                    duration: 2e3,
                    success: function(e) {
                        e.confirm && wx.navigateTo({
                            url: "../ownner/ownnerreal"
                        });
                    }
                }) : wx.showModal({
                    title: "重复提交",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {}
}, e(o, "showModal", function(e) {
    wx.showModal({
        content: e.msg,
        showCancel: !1
    });
}), e(o, "onUnload", function() {}), o));