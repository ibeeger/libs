$(function() {
	$('.carBox').click(function() {
		var classNameStr = $(this).attr('class').indexOf('selectCar')
		if ($(this).attr('class').indexOf('selectCar') < 0) {
			$(this).addClass('selectCar')
			var brotherItem = $(this).siblings()
			for (var i = 0; i < brotherItem.length; i++) {
				if ($(brotherItem[i]).attr('class').indexOf('selectCar') > 0) {
					$(brotherItem[i]).removeClass('selectCar')
				}
			}
		}
	});

	$('#submitBtn').click(function() {
		var vehicletype = $(".selectCar").attr("vehicletype");
		$("#vehicletype").val(vehicletype);
		/* 判断所选车辆类型是否一致 */
		var cartype = $("#cartype").val();
		if ((cartype == '01' && (vehicletype == '03' || vehicletype == '04' || vehicletype == '52')) || (cartype == '02' && (vehicletype == '01' || vehicletype == '02' || vehicletype == '51'))) {
			var tanwindowstr = "<div class='tan'>车辆类型不一致，请您重新选择或前往个人中心修改车辆信息</div>";
			$("#tanwindow2").append(tanwindowstr);
			return;
		}

		/* 判断是否挂起维护页 */
		// detectionMt();
		/* 显示提示弹窗 */
		// openPop();
		divblackhide();
	});
})

/**
 * 打开办理事项弹窗
 */
function openPop() {
	$("#Divblack").removeClass("none");
	var a = 21;
	var nn = "确定";
	$("#timebtn").css("background-color", "#0d70d8");
	$("#timebtn").removeAttr("disabled");
	$("#timebtn").text(nn);

	var timer01 = setInterval(function() {
		a--;
		if (a < 0) {
			clearTimeout(timer01);
			nn = "确定";
			$("#timebtn").css("background-color", "#0d70d8");
			$("#timebtn").removeAttr("disabled");
		} else if (a < 10) {
			$("#timebtn").attr("disabled", true);
			$("#timebtn").css("background-color", "#d7d7d7");
			nn = "0" + a + "s";
		} else if (a >= 10) {
			nn = a + "s";
			$("#timebtn").attr("disabled", true);
			$("#timebtn").css("background-color", "#d7d7d7");
		}
	}, 1000);
}

function addUrlPara(name, value) {
	var currentUrl = location.href;
	if (/\?/g.test(currentUrl)) {
		if (/name=[-\w]{4,25}/g.test(currentUrl)) {
			currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
		} else {
			currentUrl += "&" + name + "=" + value;
		}
	} else {
		currentUrl += "?" + name + "=" + value;
	}
	location.href = location.href = currentUrl;
}

/**
 * 点击提示框确认按钮
 */
function divblackhide() {
	var vehicletype = $(".selectCar").attr("vehicletype");
	var userid = $("#userid").val();
	$.post("../../platform/enterbj/curtime_" + vehicletype + "?userid=" + userid, function(data) {
		var curTime;
		if (data.rescode == "200") {
			// addUrlPara("hiddentime", data.curTime);
			curTime = data.curTime;
		} else {
			// addUrlPara("hiddentime", mydata);
			curTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
		}
		$('#hiddentime').val(curTime);
		$("#Divblack").addClass("none");
		var path = "../../platform/enterbj/applyBjMessage";
		var vehicletype = $(".selectCar").attr("vehicletype");
		if (vehicletype == "03") {
			/* 小型客车需要环保核验 */
			path = "../../platform/enterbj/addcartype";
		}
		$('#submitForm').attr("action", path).submit()
	});
};

/**
 * 判断是否挂起维护页，挂起则跳转到维护页
 */
function detectionMt() {
	var userid = $("#userid").val();
	var vehicletype = $(".selectCar").attr("vehicletype");
	$.ajax({
		type: "post",
		url: "../../platform/enterbj/curtime_" + vehicletype + "?userid=" + userid,
		dataType: 'json',
		contentType: "application/json",
		success: function(data) {

		},
		error: function(XMLHttpRequest, textStatus) {

			if (XMLHttpRequest.status == "200") {
				window.location.href = "maintPage.jsp";
			}
		}

	});

}