var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

Page({
    data: {},
    login: function() {
        console.log("das"), wx.switchTab({
            url: "../index/index"
        });
    },
    quit: function(o) {
        wx.removeStorage({
            key: "power",
            success: function(o) {
                console.log(o.data);
            }
        }), console.log("quit"), wx.switchTab({
            url: "../ownner/ownner"
        });
    },
    onLoad: function(o) {
        console.log("ownnerreal"), console.log(o), this.setData({
            name: o.name,
            power: o.power
        });
    },
    publish: function() {
        wx.getStorageSync("power") > 0 ? wx.navigateTo({
            url: "../publish/jobpublish"
        }) : wx.showModal({
            title: "权限不足",
            icon: "success",
            duration: 2e3
        });
    },
    ownner: function() {
        wx.request({
            url: "https://www.gxfwz36524.com/index/ownner",
            data: {
                power: wx.getStorageSync("power"),
                name: wx.getStorageSync("name"),
                pschoolnum: wx.getStorageSync("schoolnum"),
                formId: wx.getStorageSync("formId"),
                openid: wx.getStorageSync("openid")
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log("1111"), console.log(e.data), console.log(o(e.data.name)), console.log(o(e.data.result)), 
                wx.getStorageSync("power") > 0 ? wx.navigateTo({
                    url: "../ownner/detail?name=" + e.data.name + "&&result=" + JSON.stringify(e.data.result)
                }) : wx.navigateTo({
                    url: "../ownner/detail?name=" + e.data.name
                });
            }
        });
    }
});