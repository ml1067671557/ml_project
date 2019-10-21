App({
    globalData: {
        id: "大",
        openid: ""
    },
    onLaunch: function() {
        wx.login({
            success: function(e) {
                if (console.log("code=" + e.code), e.code) {
                    wx.request({
                        url: "https://www.gxfwz36524.com/index/Openid",
                        method: "POST",
                        header: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            code: e.code
                        },
                        success: function(e) {
                            console.log(e.data.openid), getApp().globalData.openid = e.data.openid, wx.setStorage({
                                key: "openid",
                                data: getApp().globalData.openid
                            });
                        }
                    });
                }
            }
        });
    }
});