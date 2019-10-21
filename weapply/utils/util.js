var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(o) {
        var e = o.getFullYear(), n = o.getMonth() + 1, s = o.getDate(), i = o.getHours(), r = o.getMinutes(), u = o.getSeconds();
        return [ e, n, s ].map(t).join("/") + " " + [ i, r, u ].map(t).join(":");
    },
    showBusy: function(t) {
        return wx.showToast({
            title: t,
            icon: "loading",
            duration: 1e4
        });
    },
    showSuccess: function(t) {
        return wx.showToast({
            title: t,
            icon: "success"
        });
    },
    showModel: function(t, o) {
        wx.hideToast(), wx.showModal({
            title: t,
            content: JSON.stringify(o),
            showCancel: !1
        });
    }
};