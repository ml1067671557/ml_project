var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

Page({
    data: {
        power: wx.getStorageSync("power")
    },
    onLoad: function(t) {
        if (console.log(wx.getStorageSync("power")), console.log("----"), console.log(t), 
        console.log(o(t.result)), wx.getStorageSync("power") > 0) (e = this).setData({
            name: t.name.split(","),
            result: JSON.parse(t.result)
        }); else {
            var e = this;
            e.setData({
                name: t.name.split(",")
            });
        }
    },
    jobpublish: function(o) {
        console.log(o), wx.request({
            url: "https://www.gxfwz36524.com/index/indexlogin",
            data: {
                x: o.target.id
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), wx.navigateTo({
                    url: "../ownner/jobpublish?name=" + o.target.id + "&&result=" + JSON.stringify(t.data.result)
                });
            }
        });
    },
    joblogin: function(o) {
        wx.request({
            url: "https://www.gxfwz36524.com/index/showlogin",
            data: {
                x: o.target.id,
                schoolnum: wx.getStorageSync("schoolnum")
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), 1 == t.data.status ? t.data.status = "请仔细阅读下面的信息" : t.data.status = "报名成功,请等待信息通知", 
                wx.navigateTo({
                    url: "../ownner/joblogin?name=" + o.target.id + "&&status=" + t.data.status + "&&refer=" + t.data.refer
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