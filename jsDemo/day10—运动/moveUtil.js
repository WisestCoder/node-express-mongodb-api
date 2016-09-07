
function getStyle(dom,styleName){
	if(dom.currentStyle){
		return dom.currentStyle[styleName];//针对ie获取非行间样式
	}
	else{
		return window.getComputedStyle(dom,false)[styleName];
	}
}
//target={
//	"width":100,
//	"height":200,
//}					attr="width",target[attr]=200;

function moveStart(dom,target,fn){
	clearInterval(dom.timer);
	dom.timer=setInterval(function(){
		var flag=true;
		for(var attr in target){
			if(attr=="opacity"){
				var curStyle=parseInt(parseFloat(getStyle(dom,attr))*100);
			}
			else{
				var curStyle=Math.round(parseFloat(getStyle(dom,attr)));
			}
			if(!curStyle){
				curStyle=0;
			}
			var speed=(target[attr]-curStyle)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(curStyle==target[attr]){
				
			}
			else{
				if (attr == "opacity") {
					dom.style.filter = "alpha(opacity=" + parseInt(curStyle + speed) + ")";
					dom.style.opacity = (curStyle + speed) / 100;
				}
				else{
					dom.style[attr]=curStyle+speed+"px";
					flag=false;
				}
			}
		}
		if(flag){
			clearInterval(dom.timer);
			if(fn){
				fn();
			}
		}
	},5);
}
