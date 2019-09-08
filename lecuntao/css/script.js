/* 头部 */

var ulObj = document.querySelector(".top-r");
var liObj = ulObj.querySelectorAll("li");
for(var i = 1;i < liObj.length;i++){
	// liObj[i].onmouseover = function(eve){
	// 	var e = eve || window.event;
	// 	//console.log(this);
	// 	var target = e.target || e.srcElement;
	// 	if(target.className=="list"){
	// 		console.log(this.secondElementChild);
	// 	}
	liObj[i].addEventListener("mouseover",function(eve){
		var e = eve || window.event;
			//console.log(this);
			var target = e.target || e.srcElement;
				this.style.background = "#fff";
				this.firstElementChild.nextElementSibling.nextElementSibling.style.display="block";
			
		}
	);
	liObj[i].addEventListener("mouseout",function(eve){
		var e = eve || window.event;
			//console.log(this);
			var target = e.target || e.srcElement;
			this.style.background = "none";
			this.firstElementChild.nextElementSibling.nextElementSibling.style.display="none";
				// this.thirdElementChild.style.display="none";
			
		}
	)
}
/* 购物车 */
var carObj = document.querySelector('.car');
carObj.onmouseover=function(eve){
	console.log(this)
		var e = eve || window.event;
			//console.log(this);
			var target = e.target || e.srcElement;
				this.firstElementChild.nextElementSibling.nextElementSibling.style.display="block";
		
	}
carObj.onmouseout=function(eve){
	console.log(this)
		var e = eve || window.event;
			//console.log(this);
			var target = e.target || e.srcElement;
				this.firstElementChild.nextElementSibling.nextElementSibling.style.display="none";
		
	}



/* 商品价格上浮 */














