$(document).ready(function() {
    if (localStorage.scanResults) 
    	addResults(false, localStorage.scanResults);
    document.getElementById('file-input').onchange = function(e) {
        function loadImageOrientation(file, callback, options) {
            loadImage.parseMetaData(file, function(data) {
                if (data.exif) {
                    options.orientation = data.exif.get('Orientation');
                    testvar = options.orientation;
                }
                loadImage(file, callback, options);
            });
        }

        loadImageOrientation(
            e.target.files[0], // uploads the selected file and loads it into an array
            function(img) { // callback that occurs when the selected file is uploaded
                var imageSource = img.toDataURL();
                qrcode.decode(imageSource);
                //previewFile(imageSource);
            }, {
                noRevoke: true,
                canvas: true,
                maxWidth: 1000
            }
        );
    }

    function previewFile(img) {
        $('#img-preview').css('background-image', 'url(' + img + ')');
    }

    function addResults(newResults, results) {
    	if (newResults)  {
    		$("#results-title").html("Current scan results:");
    	} else {
    		$("#results-title").html("Previous scan results:");
    	}
    	$("#results-body").html(JSON.parse(results));
    }

    $('#file-input').html5_qrcode(function(data) {
        localStorage.scanResults = JSON.stringify(data);
        addResults(true, localStorage.scanResults);
    }, function(error) { 								// these don't work yet; all results are considered "success"
        $('#read_error').html(error);
    }, function(videoError) {
        $('#vid_error').html(videoError);
    });
});
