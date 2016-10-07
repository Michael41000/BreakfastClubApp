var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var listViewModule = require("ui/list-view");
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