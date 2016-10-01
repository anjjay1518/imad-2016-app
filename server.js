var express = require('express');// importing software packages or libraries. express library is used to create web servers
var morgan = require('morgan'); // morgan is used for the output logs of the server
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' : {
        title:'Anjjay karthick | Webapp',
        date:'Sep 15 2016',
        heading:'Article-One',
        content:`<p>
                        Hai Hai Hai Hai Hai Hai Hai Hai Hai Hai 
                       
                        <b>Article-ONE</b>
                </p>
                <hr/>
                
               <input type="text" id="text" placeholder="name"/>
                    <input type="button" value="submit" id="submit" />
                    <ul id="namelist">
                        
                    </ul>
                    
              `
    },
    'article-two' : {
        title:'Anjjay karthick | Webapp',
        date:'Sep 20 2016',
        heading:'Article-Two',
        content:`<p>
                        Hai Hai Hai Hai Hai Hai Hai Hai Hai Hai 
                        Hai Hai Hai Hai Hai Hai Hai Hai Hai Hai 
                        <b>Article-TWO</b>
                </p>
                <hr/>
                
               <input type="text" id="text" placeholder="name"/>
                    <input type="button" value="submit" id="submit" />
                    <ul id="namelist">
                        
                    </ul>
                    </div>
                `
                
    },
    'article-three' : {
        title:'Anjjay karthick | Webapp',
        date:'Sep 23 2016',
        heading:'Article-Three',
        content:`<p>
                        Hai Hai Hai Hai Hai Hai Hai Hai Hai Hai 
                        Hai Hai Hai Hai Hai Hai Hai Hai Hai Hai 
                        <b>Article-THREE</b>
                
                </p>
                <hr/>
              
               <input type="text" id="text" placeholder="name"/>
                    <input type="button" value="submit" id="submit" />
                    <ul id="namelist">
                        
                    </ul>
                    </div>
                `
    }
    
};

function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
   
    var htmlTemplate = `
                <!doctype html>
                <html>
                    <head>
                    
                            <title> ${title} </title>
                            <meta name="viewport" content="width=device-width,initial-scale=1"/>
                            <link href="/ui/style.css" rel="stylesheet" />
                            
                    </head>
                    <body>
                        <div class="container">
                            <div>
                                <a href="/">Home</a>
                            </div>
                            <hr/>
                                <h3> ${heading} </h3>
                            <div>
                                <p>
                                    ${date}
                                </p>
                            </div>
                            <p>
                                ${content}
                            </p>
                        </div>
                    
                    </body>
                </html>`
                ;
    return htmlTemplate; 
}

app.get('/', function (req, res) { //handling specific url. get request is coming to / the below function will get executed
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
//app.get('/submit-name/:name',function(req,res)
// query is from URL : http://anjjay1518.imad.hasura-app.io/submit-name?name=karthick
app.get('/submit-name',function(req,res)
{
	//Get the name from the rquest
	//var name = req.params.name; //this is thro the paramater what we are entering
	// but we need to take from the url like /submit-name?name=XXXX
	
	//req.params.name is used to extract the data given in the parameter after / in URL
	//var name = req.params.name;
	var name = req.query.name;
	names.push(name);
	res.send(JSON.stringify(names));
});
/*var counter =0;
app.get('/counter',function(req,res){
   
        counter +=1;
        res.send(counter.toString());
    
});*/

//Edited for three articles

app.get('/:articleName',function(req,res)
{
    //articleName = article-one
    //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    var name = req.query.name;
	names.push(name);
	res.send(JSON.stringify(names));
});

app.get('/ui/main.js', function (req, res) { // if this particular url is rquested this one the below function will executed as a response.
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) { // if this particular url is rquested this one the below function will executed as a response.
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});


// server.js is the source code for the server file.it is actually executed.
