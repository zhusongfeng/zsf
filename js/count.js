    function setCookie(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        console.log(exdate.toGMTString());
        console.log(document.cookie);
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    function copyWx() {

        if (!weixinNumsForCount) return;

        var copyKey = weixinNumsForCount + '_copy';

        if (getCookie(copyKey)) return;

        $.ajax({
            url: '../../wxCount.php',
            data: {
                wx: weixinNumsForCount,
                type: 1,
            },
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名,
            async: false,
            success: function (json) {
                console.log(json);
                setCookie(copyKey,1,8*60*60*1000);
            },
            error: function () {
                console.log('网络错误');
            }
        });
    }
    if (weixinNumsForCount){
        var longKey = weixinNumsForCount + '_long';
        if (!getCookie(longKey)) {
            setTimeout(function () {
                $.ajax({
                    url: '../../wxCount.php',
                    data: {
                        wx: weixinNumsForCount,
                        type: 2,
                    },
                    dataType: "jsonp",
                    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                    success: function (json) {
                        console.log(json);
                        setCookie(longKey,1,8*60*60*1000);
                    },
                    error: function () {
                        console.log('网络错误');
                    }
                });
            },60*1000);
        }
    }
