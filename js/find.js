function findText() {  
  var input = document.getElementById('upinput').value;  
  var body = document.body.innerHTML;  
  
  var regex = new RegExp(input, 'g');  
  var result = body.match(regex);  
    
  if (result) {  
    alert("找到匹配项: " + result);  
  } else {  
    alert("没有找到匹配项");  
  }  
}  
