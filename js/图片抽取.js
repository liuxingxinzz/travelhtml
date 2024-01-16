function randomImage() {  
 var images = [ "省份/重庆/重庆市/重庆市",
				"省份/湖南/长沙市/长沙市",
				"省份/四川/成都市/成都市",
				"省份/云南/大理白族自治州/大理白族自治州",
				"省份/云南/丽江市/丽江市",
				"省份/浙江/杭州市/杭州市",
				"省份/江苏/苏州市/苏州市",
				"省份/广西/桂林市/桂林市",
				"省份/湖南/郴州市/郴州市",
				"省份/新疆/博尔塔拉蒙古自治州/博尔塔拉蒙古自治州",
				"省份/陕西/西安市/西安市",
				"省份/福建/厦门市/厦门市",
				"省份/江西/南昌市/南昌市",
				"省份/湖南/张家界市/张家界市",
				"省份/江苏/南京市/南京市",
				"省份/广西/柳州市/柳州市",
				"省份/安徽/黄山市/黄山市",
				"省份/甘肃/酒泉市/酒泉市",
				"省份/四川/甘孜藏族自治州/甘孜藏族自治州",
				"省份/贵州/黔南布依族苗族自治州/黔南布依族苗族自治州",
				]; 						 
 var index = Math.floor(Math.random() * images.length); 						
 document.getElementById("图片抽取").src = images[index]+".jpg"; 				
 
 // var a = document.createElement("a"); 											 
 // var text = document.createTextNode(images[index]); 							// 创建文本节点，用于设置超链接的显示文本  
 // a.href = images[index]+".html"; 												// 将文本节点设置为a元素的href属性，以指向选中的图片文件  
 // a.style.display = "none"; 														// 隐藏a元素    
 // document.body.appendChild(a); 													// 将a元素添加到文档中  
 document.getElementById("图片抽取").onclick = function() { window.open(images[index]+".html", '_blank');};
}  