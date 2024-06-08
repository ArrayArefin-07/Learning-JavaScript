
var photos = ["images/my .jpg", "images/my2.jpg"];
var ImgTag = document.querySelector("img");

var count = 0;


function next(){
    count++;

    if(count>=photos.length) {
        count = 0;
        ImgTag.src = photos[count];
    }else{
        ImgTag.src=photos[count];
    }
    
}


function prev() {
    count--;

    if(count < 0 ) {
        count = photos.length -1;
        ImgTag.src = photos[count];
    } else {
        ImgTag.src = photos[count];
    }
}