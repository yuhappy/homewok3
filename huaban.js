function allfunc(){
    var texts=document.getElementById("content_texts").getElementsByTagName("li");
    var texts_len=texts.length;
    var images=document.getElementById("image");
    var img=document.getElementById("content_images").getElementsByTagName("li");
    var img_len=img.length;
    var icon=document.getElementById("icon");
    var l_icon=document.getElementById("l_icon");
    var r_icon=document.getElementById("r_icon");
    var temp=0;

    function showPic(){
	    for (var i=0 ; i<texts_len ; i++){
		    texts[i].onmouseover=function(){
			    for (var j = 0; j < texts_len; j++) {
				    if (this.innerText==texts[j].innerText) {
					    temp=j;
					    break;
				    };
			    };
			    for (var s=0 ; s<img_len; s++) {
				    img[s].style.display="none";
			    };
			    img[temp].style.display="";
			    clearInterval(move_pic);
		    }
		    texts[i].onmouseout=function(){
		    	move_picture();
		    }
	    };
	}
    showPic();
    

	function move(){
	    for (var i = 0; i < texts_len; i++) {
		    img[i].style.display="none";
	    };
	    img[temp].style.display="";
	    if (temp>=0 && (temp<img_len)){
		    temp++;
	    }
	    if (temp>=img_len) {
		    temp=0;
	    };
	    if (temp<0) {
		    temp=img_len-1;
	    };
    }
    var move_picture=function(){
    	move_pic=setInterval(move,2000);
    }
    move_picture();
    images.onmouseover=function(){
    	clearInterval(move_pic);
    	icon.style.display="";
    }
    images.onmouseout=function(){
    	move_pic=setInterval(move,2000);
    	icon.style.display="none"
    }

    function leftMove(){
    	temp--;
    	if (temp<0) {
    		temp=img_len-1;
    	}else{
    		temp;
    	}
	    for (var s=0 ; s<img_len; s++) {
	    	img[s].style.display="none";
	    };
		img[temp].style.display="";
		clearInterval(move_pic);
    }
    l_icon.onclick=function(){
    	leftMove();
    	return false;
    }
    
    function rightMove(){
    	temp++;
    	if (temp>=img_len) {
    		temp=0;
    	}else{
    		temp;
    	}
	    for (var s=0 ; s<img_len; s++) {
	    	img[s].style.display="none";
	    };
		img[temp].style.display="";
		clearInterval(move_pic);
    }
    r_icon.onclick=function(){
    	rightMove();
    	return false;
    }
    
}
window.onload=allfunc;