window.onload=function(){
	let text=document.querySelector("textarea");
	let num=document.querySelector(".text span");
	let btn=document.querySelector(".qb5 input");
	let input=document.querySelector(".qb1 input");
	let ul=document.querySelector(".ab1>ul");
	//随着输入的内容,字数实时变化
	text.oninput=function(){
		let textnum=this.value.length;
		num.innerHTML=textnum;
	}
    btn.onclick=function(){
	let name=input.value;
	let con=text.value;
	console.log(name,con);
	let str=`<li class="nb1">
	          <div class="mb1">
				<div class="lb1">
					<img src="./img/tou.png">
				</div>
				<div class="lb2">
					<p class="kb1">${name}</p>
					<p class="ob1">${con}</p>
				</div>
				<div class="lb3">
					<p>2018-01-04 16:18:53</p>
				</div>
			</div>
			</li>`
			ul.innerHTML+=str;
			input.value="";
			text.value="";
			num.innerHTML=0;
		}  
	//鼠标移入每一个li进行样式变化
	ul.onmouseover=function(e){
		let event=e.target;
		//判断节点名称和类名列表
		if(event.nodeName==="LI" && event.classList.contains('list')){
			event.style.background="#ccc";
		}
		
	}
	ul.onmouseout=function(e){
		let event=e.target;
		if(event.nodeName==="LI" && event.classList.contains('list')){
			event.style.background="#fff";
		}
		
	}		

}