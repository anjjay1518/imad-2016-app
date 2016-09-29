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
//var counter = 0;
button.onclick = function()
{
	//Create a request 
    var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
	if(request.readyState === XMLHttpRequest.DONE)
	{
		if(request.status === 200)
		{
			var counter = request.responseText;
			var span = document.getElementById('count');
			span.innerHTML = counter.toString();
		}
	}
};
	
	//Make a request to the counter
	request.open('GET','http://anjjay1518.imad.hasura-app.io/counter', true);
	request.send(null);

	//render the variable in the correct span
	/*counter +=1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();*/
};