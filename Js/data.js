var Data =  function() {

	 var info = [

	{"gender": "male",
	 "news_desk": "BookReview", 
	 "print_page": "1", 
	 "pub_date": "2015-02-15T00:00:00Z", 
	 "firstname": "Mark"}, 


	 {"gender": "male", 
	 "news_desk": "BookReview", 
	 "print_page": "26", 
	 "pub_date": "2015-02-08T00:00:00Z", 
	 "firstname": "Gregory"}, 




	 {"gender": "male", "news_desk": "Dining", "print_page": "", "pub_date": "2015-02-04T00:00:00Z", "firstname": "Eric"}, 

	 {"gender": "male", "news_desk": "Dining", "print_page": null, "pub_date": "2015-02-04T00:00:00Z", "firstname": "Eric"}, 

	 {"gender": "female", "news_desk": "Dining", "print_page": null, "pub_date": "2015-02-04T00:00:00Z", "firstname": "Ligaya"}, 

	 {"gender": "male", "news_desk": "Culture", "print_page": null, "pub_date": "2015-02-02T11:30:00Z", "firstname": "Scott"}, 

	 {"gender": "male", "news_desk": null, "print_page": null, "pub_date": "2015-02-01T00:00:00Z", "firstname": "Sam"}, 

	 {"gender": "female", "news_desk": "BookReview", "print_page": null, "pub_date": "2015-02-01T00:00:00Z", "firstname": "Naomi"}, 

	 {"gender": "male", "news_desk": "BookReview", "print_page": "24", "pub_date": "2015-02-01T00:00:00Z", "firstname": "Ihsan"}
	 ];  

	 this.getNumberPeople = function() {return info.length; }
	 }




// var json = JSON.parse(data); 
// console.log("this is the json" + json); 