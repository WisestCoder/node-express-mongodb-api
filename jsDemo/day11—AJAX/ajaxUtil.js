var ajaxUtil={
	getAjaxObj:function(){
		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else{
			return (new ActiveXObject("Micorsoft.XMLHTTP"));
		}
	},
	getJsonStyle:function(obj,style){
		var result=obj.responseText;
		console.log(result);
		var data=eval("("+result+")");
		console.log(data);
		return data.style;
	}
}
