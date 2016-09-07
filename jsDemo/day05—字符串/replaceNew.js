String.prototype.replaceNew=function(str1,str2,n){
				var arraySubStr=this.split(str1);
				var arrNew="";
				for(var i=0;i<arraySubStr.length;i++){
					if(i==arraySubStr.length-1)
						arrNew+=arraySubStr[i];
					else if(i==n-1)
						arrNew+=arraySubStr[i]+str2;
					else
						arrNew+=arraySubStr[i]+str1;
				}
				return arrNew;
			}