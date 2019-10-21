Page({
    data: {
        flag: !0,
        imgUrls: [ "../../img/login.png", "../../img/welcome.png", "../../img/lase.png" ]
    },
    formSubmit: function(a) {
        console.log(a), console.log(a.detail.value.name);
        wx.request({
            url: "https://www.gxfwz36524.com/index/find",
            data: {
                x: a.detail.value.name
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(a) {
                console.log(a), wx.navigateTo({
                    url: "../login/login?name=" + a.data.name.name + "&&worktime=" + a.data.name.worktime + "&&workcontent=" + a.data.name.workcontent + "&&workspace=" + a.data.name.workspace + "&&deadline=" + a.data.name.deadline + "&&workpay=" + a.data.name.workpay + "&&workrequire=" + a.data.name.workrequire + "&&id=" + a.data.name.id
                });
            }
        });
    },
    onLoad: function() {
        var a = this;
        wx.request({
            url: "https://www.gxfwz36524.com",
            data: {
                x: "",
                y: ""
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                console.log(e), console.log(e.data.count), a.setData({
                    requestName: e.data.name,
                    num: e.data.count
                });
            }
        });
    },
    bindReplaceInput: function(a) {
        var e = this;
        console.log(a), (e = this).setData({
            flag: !0
        }), wx.request({
            url: "https://www.gxfwz36524.com/index/search",
            method: "POST",
            data: {
                name: a.detail.value,
                flag: !0
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(a.data.name[0]), e.setData({
                    name: a.data.name[0]
                });
            }
        });
    },
    changeAutoplay: function(a) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    onPullDownRefresh: function(a) {
        var e = this;
        wx.request({
            url: "https://www.gxfwz36524.com",
            data: {
                x: "",
                y: ""
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(a) {
                console.log(a), console.log(a.data.count), e.setData({
                    requestName: a.data.name,
                    num: a.data.count
                });
            }
        }), wx.stopPullDownRefresh();
    },
    itemtap: function(a) {
        console.log(a.target.id), this.setData({
            nameinput: a.target.id,
            name: "",
            flag: !1
        });
    },
    login: function(a) {
        console.log("e.target.id" + a.target.id);
        wx.request({
            url: "https://www.gxfwz36524.com/index/login",
            data: {
                x: a.target.id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                console.log(e), wx.navigateTo({
                    url: "../login/login?name=" + e.data.name.name + "&&worktime=" + e.data.name.worktime + "&&workcontent=" + e.data.name.workcontent + "&&workspace=" + e.data.name.workspace + "&&deadline=" + e.data.name.deadline + "&&workpay=" + e.data.name.workpay + "&&workrequire=" + e.data.name.workrequire + "&&id=" + a.target.id
                });
            }
        });
    }
});