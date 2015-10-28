(function(){
	function regcss(str){
	//行内	/style\s*?=\s*?(['"])[\s\S]*?\1/
	
		return str.replace(/<s*style[^>]*>(.|[rn])*?<s*/style[^>]*>/gi, '');
	};


	function regjs(str){
		return   str.replace(/<s*script[^>]*>(.|[rn])*?<s*/script[^>]*>/gi, '');
	}

	function reghtml(str){
		str = str.replace(/</?[^>]+>/g, '');
	    str = str.replace(/&[a-z]+;/gi, '');

	    return str;
	}
})

