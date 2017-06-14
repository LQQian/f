define(['jquery','template','cookie'],function($,template){
	//控制左侧菜单的展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出功能
	$('#logout').click(function(){
		$.ajax({
			type: 'post',
			url: '/api/logout',
			dataType: 'json',
			success: function(data){
					location.href = '/login';
			}
		});
	});
	//设置请求的路径
	var pathname = location.pathname;
	//判断用户是否已经登录
	if(pathname != '/login' && !$.cookie('PHPSESSID')){
		location.href = '/login';
	}

	//获取cookie
	var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));

	if(loginInfo){
		var loginTpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
		var html = template.render('loginTpl',loginInfo);
		$('#loginInfo').html(html);
	}

});

	
