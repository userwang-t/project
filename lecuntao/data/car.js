class Car{
			constructor(){
				this.url = "http://localhost/lecuntao/data/list.json";
				
				this.tbody = document.querySelector("tbody");
				
				this.load();
				this.addEvent();
				
				
			}
			load(){
				var that = this;
				ajax({
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res);
						//console.log(that.res)
						that.getLocal();
					}
				})
			}
			getLocal(){
				this.lists = localStorage.getItem("lists") ? JSON.parse(localStorage.getItem("lists")):[];
				console.log(this.lists)
				this.display();
			}
			display(){
				var str = "";
				for(var i=0;i<this.res.length;i++){
					for(var j = 0;j<this.lists.length;j++){
						if(this.res[i].goodsId == this.lists[j].id){
							//将每件商品的总价计算出
							var sum = this.res[i].price*this.lists[j].num
							console.log(this.res[i].price)
							//console.log(this.lists[j].num)
							str +=`<tr index = "${this.res[i].goodsId}">
										<td class="sel"><input type="checkbox" /></td>
										<td class="tp"><img src="${this.res[i].url}"</td>
										<td class="sp"><span><a>${this.res[i].name}</a></span></td>
										<td class="ls">￥${this.res[i].price}</td>
										<td class="sl"><input type="number" value="${this.lists[j].num}" class="num" min=1></td>
										<td class="hj">￥${sum}</td>
										<td class="cz">删除</td>
									</tr>`
						}
					}
				}
				//console.log(str);
				this.tbody.innerHTML = str;
			}
				addEvent(){
				var that = this;
				this.tbody.addEventListener("click",function(eve){
					var e = eve || window.event;
					var target = e.target || e.srcElement;
					if(target.className == "delete"){
						that.id = target.parentNode.getAttribute("index");
						target.parentNode.remove();
						//删除localstroage数组里面的其中一个数据
						that.setLocal(function(i){
							//从i开始删，删一个
							 that.lists.splice(i,1);
						});
					}
				})
				this.tbody.addEventListener("input",function(eve){
					var e = eve || window.event;
					var target = e.target || e.srcElement;
					if(target.className == "num"){
						that.id = target.parentNode.parentNode.getAttribute("index");
						that.value = target.value;
						
						that.setLocal(function(i){
							 that.lists[i].num = that.value;
						});
						
					}
				})
				
			}
			setLocal(fn){
				for(var i = 0;i<this.lists.length;i++){
					if(this.lists[i].id == this.id){
						fn(i)
					}
				}
				localStorage.setItem("lists",JSON.stringify(this.lists));
			}
			
		}
			
			
			
			
			
			
new Car();