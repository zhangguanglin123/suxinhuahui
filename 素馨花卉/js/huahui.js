window.onload=function(){
	let banner4=document.querySelector(".a1");
	let imgs4=document.querySelectorAll(".lun");
	let dots4=document.querySelectorAll(".aa6 div");
	let rbtn1=document.querySelector(".aa4");
	let lbtn1=document.querySelector(".aa5");
	console.log(banner4,imgs4,dots4,rbtn1,lbtn1);
	let now=0;
	let next=0;
	let w=parseInt(getComputedStyle(banner4,null).width);
	imgs4[0].style.left=0;
	console.log(rbtn1);
	dots4[0].style.backgroundColor="#ff6700";
	rbtn1.onclick=function(){
		next++;
		if(next==3){
			next=2;
			return;
		}
		imgs4[now].style.left=0;
		imgs4[next].style.left=w+"px";
		animate(imgs4[now],{left:-w},500,
			function(){
				dots4[now].style.backgroundColor="gray";
			});
		animate(imgs4[next],{left:0},500,
			function(){
				for(let i=0;i<imgs4.length;i++){
					dots4[i].style.backgroundColor="gray";
				};
				dots4[next].style.backgroundColor="#FF6700";
			});
		now=next;
	}
	lbtn1.onclick=function(){
		next--;
		if(next==-1){
			next=0;
			return;
		}
		imgs4[now].style.left=0;
		imgs4[next].style.left=-w+"px";
		animate(imgs4[now],{left:w},500,
			function(){
				dots4[now].style.backgroundColor="gray";
			}
		);
		animate(imgs4[next],{left:0},500,
			function(){
				for(let i=0;i<imgs4.length;i++){
					dots4[i].style.backgroundColor="gray";
				};
				dots4[next].style.backgroundColor="#FF6700";
			}
		);
		now=next;
	}
	
	
	for(let i=0;i<dots4.length;i++){
		dots4[i].onclick=function(){
			for(let j=0;j<imgs4.length;j++){
				imgs4[j].style.left=w+"px";
//				animate(imgs4[j],{left:-w},1000);
				dots4[j].style.backgroundColor="gray";
			}
			imgs4[i].style.left=0;
			dots4[i].style.backgroundColor="#FF6700";
//			animate(imgs4[i],{left:0},1000);
			now=i;
			next=i;
		}
	}
	let t2=setInterval(move2,2000);
            function move2(){
                    next++;
                    if(next==imgs4.length){
                            next=0;
                    }
                    imgs4[now].style.left=0;
                    imgs4[next].style.left=w+"px";
                    animate(imgs4[now],{left:-w},function(){
                            dots4[now].style.backgroundColor="";
                    })
                    animate(imgs4[next],{left:0},function(){
                            for(let j=0;j<dots4.length;j++){
                                   dots4[j].style.backgroundColor=""; 
                            }
                            dots4[next].style.backgroundColor="#FF6700";
                    })
                    now=next;
            }
            
             window.onblur=function(){
            	clearInterval(t2);
            }
            window.onfocus=function() {
            	t=setInterval(move2,2000);
            }
            //平移轮播
            let left=document.querySelector(".banner-left");
			let right=document.querySelector(".banner-right");
			let con=document.querySelector(".bbb3");
			let widths=parseInt(getComputedStyle(con,null).width)/6;
			console.log(left,right,con,widths);
			let n=0;
			right.onclick=function(){
				n++;
				if(n==4){
					n=3;
					return;
				}
				con.style.transform="translateX("+(-widths*n)+"px)";
			}
			left.onclick=function(){
				n--;
				if(n==-1){
					n=0;
					return;
				}
				con.style.transform="translateX("+(-widths*n)+"px)";
			}
			t=setInterval(right.onclick,2000);

}