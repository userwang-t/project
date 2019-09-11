
		var smallobj = document.getElementById('zt');
		var bigobj = document.getElementById('big');	
		var moveobj = document.getElementById('move');	
		var photoobj = document.getElementById('photo');	
			
		smallobj.onmouseover = function(eve){
			var e = eve || window.event;
			//获取鼠标的位置
			var mouseX = e.clientX;
			var mouseY = e.clientY;
			//console.log(mouseX);
			//console.log(mouseY);
			//获取滑块的left,top位置
			var moveLeft = mouseX - smallobj.offsetLeft - moveobj.offsetWidth/2;
			var moveTop = mouseY - smallobj.offsetTop - moveobj.offsetHeight/2;
			//console.log(moveLeft);
			//console.log(moveTop);
			
			//设置边界
			if(moveLeft<0) moveLeft = 0;
			var endLeft = smallobj.offsetWidth-moveobj.offsetWidth;
			if(moveLeft>endLeft) moveLeft=endLeft;
			//console.log(moveLeft)
			if(moveTop<0) moveTop = 0;
			var endTop = smallobj.offsetHeight-moveobj.offsetHeight;
			if(moveTop>endTop) moveTop=endTop;
			//console.log(moveTop)
			
			//将滑块显示出来,放在后面的目的是这样可以让改变后的值直接生效,放在前面无法生效
			moveobj.style.display = 'block';
			moveobj.style.left = moveLeft+"px";
			moveobj.style.top = moveTop+"px";
			
			//将大图显示出来,设置大图的位置;
			bigobj.style.display = 'block';
			bigobj.style.left = smallobj.offsetLeft + smallobj.offsetWidth+"px";
			bigobj.style.top = smallobj.offsetTop+"px"; 
			
			
			//获取小图移动位置时对应大图的位置比例
			var photoLeft = moveLeft/(smallobj.offsetWidth-moveobj.offsetWidth)*(bigobj.offsetWidth-photoobj.offsetWidth);
			var photoTop = moveTop/(smallobj.offsetHeight-moveobj.offsetHeight)*(bigobj.offsetHeight-photoobj.offsetHeight);
			
			//获取图片的left和top值
			photoobj.style.left = photoLeft +"px";
			photoobj.style.top = photoTop +"px";
			
		}	
		
		smallobj.onmouseleave = ()=>{
			moveobj.style.display = 'none';
			bigobj.style.display = 'none';
			
		}
			

	
