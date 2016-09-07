var cookieObj={
	setCookie:function(name,nameValue,days){
		var date=new Date();
		date.setDate(date.getDate()+days);
//		document.cookie=name+"="+nameValue+";expires="+date;
		document.cookie=name+"="+encodeURIComponent(nameValue)+";expires="+date;
	},
	getCookie:function(name){
		var cookieValue;
		var arrCookie=document.cookie.split("; ");
		for(var i=0;i<arrCookie.length;i++){
			var nameArr=arrCookie[i].split("=");
			if(nameArr[0]==name){
				cookieValue=nameArr[1];
			}
		}
		if(cookieValue){
			return decodeURIComponent(cookieValue);
		}else{
			return cookieValue;
		}
	},
	removeCookie:function(name){
		this.setCookie(name,"",-1);
	}
}
