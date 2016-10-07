var cameraModule = require("camera");
var firebase = require("nativescript-plugin-firebase");
var permissions = require("nativescript-permissions");            
var myImage = require("ui/image");
var config = require("../../config");


exports.pageLoaded = function(args) {
    var page = args.object;
    myImage = page.getViewById("myImage");
    myImage.src = "https://placehold.it/150x150";
    page.bindingContext = {};
}
 

exports.tapAction = function() {
	
	/*
	 * 	Permissions in the AndroidManifest.xml didn't reach this file, 
	 * 	may be a build issue, but adding permissions here fixed the 
	 * 	inability to save photos to the phone gallery.
	 */
	permissions.requestPermission(
		[
		 	android.Manifest.permission.READ_EXTERNAL_STORAGE,
		 	android.Manifest.permission.WRITE_EXTERNAL_STORAGE
		], 
        "In order to select or take pictures we need your permission"
		
	).then(function () {
           console.log("Permissions granted");
           
           //	Uses the tns camera module and returns an imageSource
           //	Save memory space by setting the width and height
           cameraModule.takePicture({
        	   width: 300, 
        	   height: 300, 
        	   keepAspectRatio: true,
        	   saveToGallery: true
           }).then( function(picture) {
        	   
        	   console.log("Check Gallery");
        	   
        	   // Sets the picture as the image seen in the return screen
        	   myImage.imageSource = picture;
        	   console.log("src = " + myImage.src);
        	   
        	   // Form friendly (but large) version of the picture
        	   var imageData = picture.toBase64String("jpg");
        	   
        	   //TODO Create Picture View Model
        	   //TODO link the photo with a user
        	  
        	   
        	   //var userJson = JSON.parse(JSON.stringify(firebase.getCurrentUser()));
        	   //var userFolder = userJson.get("uid") || "TestUser";
        	  
        	   firebase.init({
	       			url: config.apiUrl
	       		}).then( function (instance) {
	       			
	       				console.log("firebase.init done");
	       				
	       				// Will be the user specific folder in the firebase heirarchy
		       			var userFolder = "TestUser";
		       			
		       			/*	
		       			 * 	Note: 
		       			 *	This block of code mirrors the user-model-views.js access methods.
		       			 *	I believe that "set" can overwrite other data in a directory,
		       			 *	whereas "update" is a non destructive function (commented out 
		       			 *	below for the moment). I'll ask about it later. 
		       			 *	Firebase isn't accessible atm, so I'm not sure about it.
		       			 */
		       			
		       			console.log("Set value on firebase");
		       			firebase.setValue("/Users/"+ userFolder +"/Photos", {
		       				'image': imageData
						});
		       			
		       			/*
		       			console.log("update value on firebase");
		       			firebase.update(
		       				'Users/TestUser/Photos',
		       				{ 
		       					'image': imageData
		       				}
		       			).then(
		       			      function (result) {
		       			        console.log("created key: " + result.key);
		       			      }
		       			 );
		       			 */
		       			
		       			console.log("Uploaded image");
		       			
	       		 }, function (error) {
	       				console.log("firebase.init error: " + error);
	       		 });
            	  
           });
       }).catch(function () {
    	   // 	Unable to access the files where a localcopy of the photo
    	   //	is temporarily stored.
           console.log("Permissions denied");
           reject();
       });

}



