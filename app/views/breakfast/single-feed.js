var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var listViewModule = require("ui/list-view");
var dialogs = require("ui/dialogs");
var page;

var currentPicture = new Observable({
	votes: 42,
	imgSrc: "https://dalewrites.files.wordpress.com/2012/09/saturn-v-rocket.jpeg"}
);

exports.loaded = function(args){
	page = args.object;
	page.bindingContext = currentPicture;
};

exports.increaseVotes = function(){
	currentPicture.votes += 1;
};

exports.decreaseVotes = function(){
	currentPicture.votes -= 1;
	if (currentPicture.votes <= -5){
		loadNext();
}
};

exports.loadNext = function(){
	currentPicture.imgSrc = "http://www.collectspace.com/images/news-101615a-lg.jpg";
};

function loadNext(){
	currentPicture.imgSrc = "http://www.collectspace.com/images/news-101615a-lg.jpg";
}


function timeUntil(){
	var today = new Date();
	var seconds = 60 - today.getSeconds(); 
	var minutes = 60 - today.getMinutes();
	var hours = 3 - today.getHours();
	var days = 6 - today.getDay();

	if (hours < 0){
		hours *= -1;
		days -= 1;
	}

	var string = "Time until next breakfast is " 
	+ days + " days "
	+ hours + " hours "
	+ minutes + " minutes "
	+ seconds + "seconds.";

	return string;

}

exports.displayDate = function(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();

	var hh = today.getHours() + 1;
	var minutes = today.getMinutes();
	var amOrPm;

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	if (hh >= 12){
		amOrPm = "PM";
	}
	else{
		amOrPm = "AM";
	}

	if(hh > 12){
		hh -= 12;
	}

	if (minutes < 10){
		minutes = "0" + minutes;
	}

	var t = timeUntil();

	var string = "" + mm + "/" + dd + "/" + yyyy + "\n" + 
	hh + ":" + minutes + " " + amOrPm + "\n"
	+ t;


	dialogs.alert({
		title: "The current date is :",
		message: string
	}).then(function() {
		
	});

};

