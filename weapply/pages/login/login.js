var o = getApp();

Page({
    data: {},
    onLoad: function(e) {
        console.log("options" + e.id), o.globalData.id = e.id;
        var n = this;
        console.log("999"), console.log(e), n.setData({
            Name: e.name,
            Workcontent: e.workcontent,
            Worktime: e.worktime,
            Workspace: e.workspace,
            Deadline: e.deadline,
            Workpay: e.workpay,
            Workrequire: e.workrequire
        });
    },
    login: function(o) {
        wx.getStorageSync("name") ? wx.request({
            url: "https://www.gxfwz36524.com/index/joblogin",
            data: {
                name: wx.getStorageSync("name"),
                schoolnum: wx.getStorageSync("schoolnum"),
                id: getApp().globalData.id
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                "success" == o.data.status ? wx.showModal({
                    title: "报名成功",
                    showCancel: !1,
                    icon: "success",
                    duration: 2e3
                }) : wx.showModal({
                    title: "报名重复",
                    icon: "success",
                    showCancel: !1,
                    duration: 2e3
                });
            }
        }) : wx.showModal({
            title: "请先登录",
            showCancel: !1
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