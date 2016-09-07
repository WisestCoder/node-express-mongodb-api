
var eventUtil={
	//返回兼容后的事件对象
	getEvent:function(event){
		return event||window.event;
	},
	//返回兼容后的目标对象
	getTarget:function(event){
		//IE下,event对象有srcElement属性,但是没有target属性;
		//Firefox下,event对象有target属性,但是没有srcElement属性.
		//但他们的作用是相当的
		return event.srcElement||event.target;
	},
	//兼容阻止冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			//不再派发冒泡事件，取消冒泡（单词意思:停止传播蔓延）
			event.stopPropagation();
		}else{
			//取消冒泡
			event.cancelBubble=true;
		}
	},
	//兼容取消默认行为
	preventDefault:function(){
		if(event.preventDefault){
			//通知浏览器不要执行与事件关联的默认动作（单词意思:阻止默认）
			event.preventDefault();
		}else{
			//返回值为false; 也可直接 return false来取消默认行为
			event.returnValue=false;
		}
	},
	//添加监听事件兼容
	addEventFn:function(dom,type,fnName){
		if(dom.addEventListener){
			//非IE，接收三个参数：事件名(无on前缀)、处理函数、捕获和冒泡(true\false)。
			dom.addEventListener(type,fnName,false);
		}else if(dom.attachEvent){
			//IE的监听事件，接收两个参数：事件名(注意加on前缀)、处理函数。
			dom.attachEvent("on"+type,fnName);
		}
		else{
			dom["on"+type]=fnName;
		}
	},
	//移除监听事件兼容
	removeEventFn:function(dom,type,fnName){
		if(dom.removeEventListener){
			//通过addEventListenter()添加的事件必须通过removeEventListener()
			//来移除，使用移除事件时参数必须与添加事件时一致，否则无法移除，
			//使用匿名函数也无法移除
			dom.removeEventListener(type,fnName,false);
		}else if(dom.detachEvent){
			//IE的监听事件
			dom.detachEvent("on"+type,fnName);
		}
		else{
			dom["on"+type]=null;
		}
	},
	buttonEx:function(event){
		//判断是什么版本
		if(document.implementation.hasFeature("MouseEvents","2.0")){
			//0代表鼠标按下了左键，1代表按下了滚轮，2代表按下了右键
			return event.button;
		}
		else{
			//老版本IE:1鼠标左键 ;2鼠标右键;3左右同时按;4滚轮; 
			//5左键加滚轮;6右键加滚轮;7三个同时;
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}	
		}
	}	
}
