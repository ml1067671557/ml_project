Page({
    data: {},
    del: function(e) {
        wx.showModal({
            title: "你确定要删除该工作吗？",
            success: function(o) {
                o.confirm && (console.log("用户点击确定"), wx.request({
                    url: "https://www.gxfwz36524.com/index/del",
                    data: {
                        id: e.target.id
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        wx.request({
                            url: "https://www.gxfwz36524.com/index/update",
                            data: {
                                x: e.data.id.id
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e.data);
                            }
                        }), console.log(e.data.id.id), wx.navigateTo({
                            url: "../ownner/ownnerreal"
                        });
                    }
                }));
            }
        });
    },
    formSubmit: function(e) {
        console.log("form发生了submit事件，携带数据为：", e.detail.value.checkbox), console.log(e.detail.value), 
        console.log(e.detail.value.checkbox[0]), wx.request({
            url: "https://www.gxfwz36524.com/index/status",
            data: {
                x: e.detail.value.checkbox,
                y: e.detail.value.textarea,
                worktitle: e.detail.value.worktitle
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.showModal({
                    title: "通知成功",
                    success: function(e) {
                        e.confirm && wx.navigateTo({
                            url: "../ownner/ownnerreal"
                        });
                    }
                });
            }
        });
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            name: e.name.split(","),
            result: JSON.parse(e.result)
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