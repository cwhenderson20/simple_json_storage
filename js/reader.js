$(document).ready(function() {
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
                maxWidth: 275
            }
        );
    }

    function previewFile(img) {
        $('#img-preview').css('background-image', 'url(' + img + ')');
    }

    $('#file-input').html5_qrcode(function(data) {
        $('#read').html(data);
    }, function(error) {
        $('#read_error').html(error);
    }, function(videoError) {
        $('#vid_error').html(videoError);
    });
});
