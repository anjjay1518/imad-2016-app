console.log('Loaded!');

var element = document.getElementById('id');
element.innerHTML = "Anjjay";
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    if(marginLeft >=50)
    {
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
    }
}
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
    
};