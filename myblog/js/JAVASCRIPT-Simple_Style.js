window.onload = function()
{
    var body = document.body;
	var change_btn = document.getElementById("change_btn");
	
	change_btn.onclick = function()/*点击事件*/
	{
		var image_url = function()
		{//获取随机图片的路径方法
			var image_path = "../images/";//定义背景图片的路径常量部分；
			var image_index =parseInt(Math.floor(Math.random()*3));//用random函数获取范围在0-75的随机数字并向下取整
			                                                        //转化成int数值类型
		    return image_path+image_index+'.jpg';//利用字符串拼接返回图片路径
		};
		body.style.background = 'url('+image_url()+')';
	};

	body.style.background = 'url(../images/0.jpg)';
}