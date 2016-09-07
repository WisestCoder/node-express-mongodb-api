/**
 * Created by CC on 2016/7/11.
 */
//cookie拼接个规律是不变。。完全可以封装一个通用的方法；
function getCookie(cookieName){
    var cookieValue="";
    var strCookies=document.cookie;//string "loginName=gaoge; name=456";  // name=value; name=value
    var arrCookies=strCookies.split("; ");  //["loginName=gaoge"，"name=456"]  数组元素仍然是string ；name=value
    for(var i=0;i<arrCookies.length;i++){
        var arrItem=arrCookies[i].split("=");//["loginName","gaoge"]      ;;["name","456"];
        if(arrItem[0]==cookieName){  //loginName  name
            //找到了cookie；
            //arrItem[1];  //  gaoge
            cookieValue=arrItem[1];
        }
    }
    return decodeURIComponent(cookieValue);
}

function setCookie(name,value,expiredays){
    var date=new Date();
    date.setDate(date.getDate()+expiredays);
    document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
}

//删除某个cookie
function removeCookie(name){
    setCookie(name,"",-1);
}

//增删改查
