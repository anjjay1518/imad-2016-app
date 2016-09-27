/*console.log('Loaded!');

var element = document.getElementById('id');
element.innerHTML = "Anjjay";
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 2;
    if(marginLeft >=400)
    {
        alert("Reaches the limit");
    }
    else
    {
        img.style.marginLeft = marginLeft + 'px';
    }
}
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
    
};*/

//For counter video

var button = document.getElementById('counter');
//var counter =0;
button.onclick = function()
{
    //counter +=1;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE )
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
    };
    
    request.open('GET','http://anjjay1518.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_button');
submit.onclick = function()
{
  var names = ['name1','name2','name3','name4','name5'];  
  var list='';
  for(var i=0;i<names.length;i++)
  {
      list = '<li>' + names[i] + '</li>';

  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};

