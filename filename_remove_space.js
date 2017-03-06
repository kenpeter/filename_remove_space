var glob = require("glob");
var fs = require('fs');

var video_path = "/var/www/html/test/testme/test_youtube_dl/video";

glob(video_path + "/**/*.mp4", function (er, files) {
	files.map(function(singleFile){
	  // singleFile is full path
	  var arr = singleFile.split("/");
	  var lastElement = arr[arr.length - 1];
	  var tmpFileName = lastElement.replace(/[&\/\\#,+()$~%'":*?<>{}\ ]/g, "_");
	  var tmpFullFile = video_path + "/"+ tmpFileName;
	  
	  fs.rename(singleFile, tmpFullFile, function(err) {
	    if ( err ) console.log('ERROR: ' + err);
	    
	    console.log("--Done one--");
	    console.log(tmpFullFile);
	  });
	  
	});
});


