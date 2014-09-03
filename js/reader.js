 $('#reader').html5_qrcode(function(data) {
         alert(data);
     },
     function(error) {
         //show read errors 
     }, function(videoError) {
         //the video stream could be opened
     }
 );
