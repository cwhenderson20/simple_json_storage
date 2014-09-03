function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  preview.src = fileSource;
  

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}