
class Menu{
        constructor(){
            this.url = "http://localhost/lecuntao/data/menu.json";
            this.navlrObj = document.getElementsByClassName("navlroot");
            this.navlcObj = document.getElementsByClassName("navl");
			//console.log(this.navlrObj)
			//console.log(this.navlcObj)
            this.load();
            this.addEvent();
        }
		
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
					
                    that.res = JSON.parse(res)
					//console.log(that.res)
                    that.display();
                }
            })
        }
		

		 display(){
           // console.log(this.res);
            
            for(var i=0;i<this.res.length;i++){
				//console.log(this.res[i])
				var str = "";
				// var arr = []
				// for(let k in this.res){
				// 	arr.push(this.res[k])
				// }
				// console.log(arr)
				
				// for(var j=0;j< arr.length;j++){
					//console.log(111)
					//console.log(arr.length)
                str += `<dl>
                           <dt><a href="#">${this.res[i].name1}</a></dt>
                            <dt><a href="#">${this.res[i].name2}</a></dt>
                            <dt><a href="#">${this.res[i].name3}</a></dt>
                            <dt><a href="#">${this.res[i].name4}</a></dt>
                            <dt><a href="#">${this.res[i].name5}</a></dt>
							<dt><a href="#">${this.res[i].name6}</a></dt>
							<dt><a href="#">${this.res[i].name7}</a></dt>
                        </dl>`
				
           this.navlcObj[i].innerHTML = str;
			}
        } 
		
		addEvent(){
			var that = this;
			for(let i=0;i<this.navlrObj.length;i++){
				//console.log(i)
				this.navlrObj[i].onmouseenter=function(){
					//console.log(that.navlcObj[i])
					that.navlcObj[i].style.display = "block";
					that.navlrObj[i].style.background = "#f32613";
					that.navlrObj[i].style.color = "#fff";
					
				}
				this.navlrObj[i].onmouseleave=function(){
					//console.log(that.navlcObj[i])
					that.navlcObj[i].style.display = "none";
					that.navlrObj[i].style.background = "#dd0c1d";
				}
			}
			
            
        }

	}

	new Menu();
