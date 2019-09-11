

class List{
        constructor(){
            this.url = "http://localhost/lecuntao/data/list.json";
            this.lisObj = document.getElementById("lis");
            this.load();
            this.addEvent();
        }
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
					//console.log(res)
                    that.res = JSON.parse(res)
                    that.display();
                }
            })
        }
		

		 display(){
            // console.log(this.res);
            var str = "";
            for(var i=0;i<this.res.length;i++){
                str += `<li class="lists"  index="${this.res[i].goodsId}">
							<div class="goods-info">
								<div class="goods-t"><a><img src="${this.res[i].url}"/></a></div>
								<div class="goods-b">
									<div class="pho">
										<ul class="phos">
											<li><a><img src="${this.res[i].urls}"/></a></li>
											<li><a><img src="${this.res[i].urlss}"/></a></li>
											<li><a><img src="${this.res[i].urlsss}"/></a></li>
											<li><a><img src="${this.res[i].urlssss}"/></a></li>
											<li><a><img src="${this.res[i].urlsssss}"/></a></li>
										</ul>
									</div>
															
									<div class="price"><em class="now">￥${this.res[i].price}</em><em class="befor">￥${this.res[i].oldprice}</em></div>
									<div class="inf"><a>${this.res[i].name}</a></div>
									<div class="numb"><span>商品销量</span><a>${this.res[i].num}</a></div>
									<div class="add">
										<a class="shoucan"><i></i>收藏商品</a>
										<div><a class="jiagou"><i></i>加入购物车</a></div>
									</div>
								</div>
							</div>
						</li>`
            }
            this.lisObj.innerHTML = str;
        } 
		
		addEvent(){
            var that = this;
            this.lisObj.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "jiagou"){
                    that.id = target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("index");
					console.log(that.id)
                    that.setLocal();
                }
            })
        }
		setLocal(){
            this.lists = localStorage.getItem("lists") ? JSON.parse(localStorage.getItem("lists")) : [];

            
                var onoff = true;
                for(var i=0;i<this.lists.length;i++){
                    if(this.lists[i].id === this.id){
                        this.lists[i].num ++;
                        onoff = false;
                    }
                }
                if(onoff){
                    this.lists.push({
                        id:this.id,
                        num:1
                    })
                }
            

            localStorage.setItem("lists",JSON.stringify(this.lists));
        }
		
		
		
		
		

	}

	new List();
