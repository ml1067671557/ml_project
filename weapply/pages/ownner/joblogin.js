Page({
    data: {},
    onLoad: function(n) {
        var o = this;
        console.log(n), o.setData({
            refer: n.refer,
            name: n.name,
            status: n.status
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