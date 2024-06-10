// load & unload event
window.addEventListener("load", function(){
    console.log("load");
});

window.addEventListener("unload", function(){
    console.log("unload");
});

//scroll
 
window.addEventListener("scroll", function(){
    console.log("scroll");
});

// resize event

window.addEventListener('resize', function(){
    // console.log("resize");
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});