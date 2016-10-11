var fileSystemModule = require("file-system");

exports.onLoaded = function(){
    var fileName = "myFile.json";
    var file = fileSystemModule.knownFolders.documents().getFile(fileName);
    var data = {name: "Brosteins", type: "filesystemexample"};
    var json = JSON.stringify(data);

    file.writeText(json);

    var theFile = file.readTextSync();

    console.log("The 'file' is: " + json);
    console.log("The 'theFile' is: " + theFile);

    file.remove();
};