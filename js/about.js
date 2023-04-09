function zoomOutEffect() {
    const background = document.querySelector('.background');
    setTimeout(() => {
        background.style.transform = 'scale(1.2)';
        setTimeout(() => {
            background.style.transition = '2s';
            background.style.transform = 'scale(1)';
        }, 2000);
    }, 100);
}

setTimeout(function () {
    document.getElementById('image').style.opacity = 1;
}, 2000);


var header = document.querySelector('header'); // select the header element
var limit = 60; // set the scroll limit in pixels

window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    var opacity = 1 - (window.pageYOffset / limit); // calculate the new opacity value
    header.style.opacity = opacity; // set the new opacity value for the header element
});


function downloadFile() {
    var url = "https://drive.google.com/file/d/1_sOemyB_Sx9J6XRawPhdznwZtnqpoVlG/view?usp=sharing"; // Replace with the URL of your file
    var filename = "Anurag_Bhattacharya_resume.pdf"; // Replace with the desired filename
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
