/*console.log('Loaded');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
	marginLeft = marginLeft + 1;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
	var interval = setInterval(moveRight,50);
};*/

//For the counter part
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
	//Make a request to the counter 

	
	//capture the response and store it in variable


	//render the variable in the correct span
	counter +=1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
};