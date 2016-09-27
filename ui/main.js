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
var counter =0;

button.onclick = function()
{
    counter +=1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};