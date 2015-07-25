(function(){
 
		if (navigator.userAgent.toLowerCase().indexOf('mobile')<0) {
			var div = document.createElement("div");
			div.innerHTML = "点击获取二维码用手机查看";
			div.style.position='absolute';
			div.style.left = "0px";
			div.style.top = "0px";
			div.id = "gets"
			window.onload= function(){

		
			document.body.appendChild(div);
				
			document.getElementById('gets').addEventListener("click",function(){
				var img = new Image();
				img.src = "http://api.web0310.com/api/qrcode?c="+window.location.href;
				img.style.position="absolute";
				img.style.right = "0px";
				img.style.top = "0px";
				img.onload = function(){
					document.body.appendChild(img);
				}
			})
			}
		};
		
	 
})()
