
    class Register{
        constructor(){
            this.tel = document.getElementById("li1")
            this.yz = document.getElementById("li2")
            this.yzm = document.getElementById("li3")
            this.pass = document.querySelector("li4")
			this.passs = document.querySelector("li5")
			this.btn = document.querySelector("btn")

            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.onclick = function(){
                that.setLocal()
            }
        }
        setLocal(){
            this.userMsg = localStorage.getItem("userMsg");
            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];

            // 之前没有，直接存
            if(this.userMsg.length<1){
                this.userMsg.push({
                    user:this.tel.value,
                    pass:this.pass.value,
                    onoff:0
                })
            }else{
                // 之前有，判断是否重名
                var o = this.userMsg.some(val=>{
                    return val.user === this.user.value;
                })
                if(o){
                    this.span.innerHTML = "重名";
                }else{
                    this.span.innerHTML = "";
                    this.userMsg.push({
                        user:this.user.value,
                        pass:this.pass.value,
                        onoff:0
                    })
                }
            }

            localStorage.setItem("userMsg",JSON.stringify(this.userMsg))
        }
    }

    new Register();