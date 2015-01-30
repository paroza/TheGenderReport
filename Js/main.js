//Create the empty array that will include the male data and the female data 
 
var totalMenFront = new Array(); 
var firstNames = [];

$(document).ready(function(){
	init(); 
	//display(); 
}); 

function init() {

	var totalWomenFront = new Array();
	//getDataNYT(); 

	//getWPData(); 
}

function showData1() {
	console.log("show the canvas");

	if(document.getElementById("graph").style.display == 'none')  {
		document.getElementById("graph").style.display='block';
	}

	else
	{
	document.getElementById("graph").style.display = 'none';
	}
	
}; 


function getDataNYT() {
	console.log("I am in the process and about to call the ajax function");
	$.ajax({
		url:"http://api.nytimes.com/svc/search/v2/articlesearch.json?fl=byline&facet_field=section_name&begin_date=20100101&end_date=20150130&api-key=fc509326b88c497dd36d9f8939c9f1eb:13:71126316",
		type: 'GET', 
		crossDomain:"true",
			success:function(response){
			alert("success");
			console.log("I can call the API"); 
			console.log(response); 

			//var firstNames = [];
			for (var i = 0; i < response.response.docs.length; i++) {
				var doc = response.response.docs[i];
				//if there is a person that wrote this:
				if (doc.byline && doc.byline.person && doc.byline.person[0]){
					firstNames.push(doc.byline.person[0].firstname);
				}
			}
			//print out the first Names
			console.log(firstNames);
		  	showData(); 
		  	//make a JSON Object 
			}, //end of success function

		error:function(x,e){
			if(x.status==0){
				alert('You are offline!!\n Please Check Your Network.');
				}else if(x.status==404){
					alert('Requested URL not found.');
				}else if(x.status==500){
					alert('Internel Server Error.');
				}else if(e=='parsererror'){
					alert('Error.\nParsing JSON Request failed.');
				}else if(e=='timeout'){
					alert('Request Time out.');
				}else {
					alert('Unknow Error.\n'+x.responseText);
				}
			}
		}); 
	}





function getWPData() {
	console.log("calling WP"); 
        var params = { 
            // Specify your developer key 
            key: 'F75F9692-6BA5-4950-A227-78F09670392E', 
            // Specify values for optional parameters, as needed 
            //content_set: , 
            //callback: , 
        }; 
          
        $.ajax({ 
            // Specify values for path parameters (shown as {...})  
            url: 'http://api.washingtonpost.com/trove/v1/channels/result?F75F9692-6BA5-4950-A227-78F09670392E', 
            type: 'GET', 
            crossDomain:"true",
            beforeSend: function (xhr) { 
                debugger; 
                xhr.overrideMimeType("application/json"); 
            } 
        }) 
        .done(function(data) { 
            alert("success"); 
        }) 
        .fail(function() { 
            alert("error"); 
        }); 
    }; 


function getGender() {
	//Mimi code for gender

}

function showData() {

	for (var i = 0 ; i< firstNames.length; i ++) {
		console.log("went through this" + i + "times");
		//replacing the whole thing
		//$('#nytwomen').html('<span>' + firstNames[i] +'<span><br>');
		//show the total  number: 
		$('#nytwomen').html('<span>' + firstNames.length +'<span><br>');
		console.log(firstNames.length); 
	}; 

}

// function byNewsDesk() {

// 	//get the newsdesk 
// 	console.log("calling news desk"); 
// }


// function byYear() {
// 	console.log("by year"); 
// }

// function byFrontPage() {
// 	console.log("byfrontpage"); 
// }

