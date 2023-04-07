window.onload = function () {
    document.querySelector('.background').style.transform = 'scale(1)';
};

// setTimeout(function () {
//     document.getElementById('image').style.opacity = 1;
// }, 2000);


// Pass in the text element, image URL, and box text
const textElement = document.querySelector('.stsys,h1');
const imageUrl = '/source/student_manegment.png';
const boxText = " During my studies, I developed a Student Management System using Java Swing and SQL as a database. The project was a comprehensive tool for managing student records, including personal details, academic performance, and course information.The application was designed to be user-friendly and efficient, with a simple and intuitive interface. I implemented this software for both students and administrator. The Administrator requied to log in to use the functionality of the system once they logged in, they can insert and update student personal details, view registered students and can put their results. Sdutents donot have to log in. The interface is very userfriendly that allows students to view their roll number by putting their roll number and selected course.Additionally students can have access of Faculty , Academic Calender , Contact Information and curriculums. Over all the system provides a reliable and efficient way to manage the academics of students in an institution.  The project was a great opportunity to improve my Java skills and deepen my understanding of database design and management.  <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b style = 'font-size:40px'>     For more Info   &nbsp &nbsp &nbsp  <a  class = 'snap' href='https://github.com/anurag-bitan/Student_manegment' target='_blank' rel='noopener noreferrer'>Snap It🤞</a></b>  ";

createHoverBox(textElement, imageUrl, boxText);


var compDiv = document.querySelector('.comp'); // Select the div element with class "comp"
const textElementc = compDiv.querySelector('h1');
const imageUrlc = '/source/compdecomp.png';
const boxTextc = "Today, I want to talk about an exciting project that I had the opportunity to work on - a compressor-decompressor project using Java Swing AWT and Gzip.As you all know, file compression is an essential tool in the world of computer science. The process of compressing files reduces their size, making them easier to store, share and transmit. <br><br>This is where our project comes in - we developed a Java-based software that uses the Gzip compression algorithm to compress and decompress files.Gzip is a widely used compression algorithm that is known for its high compression ratio and fast decompression time. It is a lossless compression algorithm, which means that it does not compromise on the quality of the compressed file. Our software takes advantage of this algorithm to compress files and produce compressed files with a .gz extension.The user interface of our software is developed using Java Swing , a popular Java toolkit used to build graphical user interfaces. The user interface is straightforward and easy to use, with intuitive buttons and menus that make it easy for users to navigate and operate the software.<br> <br> The software is designed to be user-friendly and efficient, with the compression and decompression processes being fast and reliable. Our software is capable of compressing files of various sizes and formats, ranging from small text files to large media files such as videos and images.One of the unique features of our software is that it is always a lossless compression and decompression process. This means that the compressed files produced by our software retain their original quality, and the decompressed files are identical to the original files. This is an important feature for users who are concerned about the quality of their files.In conclusion, our compressor-decompressor project using Java Swing AWT and Gzip is an exciting project that we are proud to have developed. It is a user-friendly, efficient, and reliable software that is capable of compressing and decompressing files of various sizes and formats, while always maintaining the quality of the files. We believe that our project has a wide range of applications, and we hope that it will be useful to many users in the future. Thank you. <br> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b style = 'font-size:40px'>     For more Info   &nbsp &nbsp &nbsp  <a  class = 'snap' href='https://github.com/anurag-bitan/compressor_decompressor' target='_blank' rel='noopener noreferrer'>Snap It🤞</a></b> ";

createHoverBox(textElementc, imageUrlc, boxTextc);




var vlogDiv = document.querySelector('.vlogbook'); // Select the div element with class "vlogbook"
const textElementv = vlogDiv.querySelector('h1');
const imageUrlv = '/source/vlogbook.png';
const boxTextv = "It is my pleasure to share with you today our college project that we have been working on for the past several months. Our team of four friends, who are pursuing their B.Tech, have been hard at work developing a website for vloggers. Our website showcases non-popular, yet beautiful places nearby the user, and we will be deploying it soon.<br>This project is very dear to our hearts, as it is our final year project. We put in a lot of effort and long hours to create a website that will make a difference. The website is designed to provide vloggers with a platform to discover hidden gems around them and share their experiences with the world.Our team utilized several technologies to develop this web app. We used Node JS, React, HTML, CSS, Javascript, and MongoDB as our database. These technologies allowed us to create a responsive and user-friendly website that is fast, efficient, and easy to navigate.We conducted a survey before starting the project, where we gathered feedback from 165 people about what they would like to see in a vlogging website. After analyzing the results, we decided to implement a website that would help users discover non-popular, yet beautiful places around them.<br>Our website provides vloggers with a platform to showcase their talent and explore new places. They can upload videos and photos of the places they visit, and the website will recommend similar places nearby based on their interests.<br>We believe that this website will help vloggers reach a wider audience and encourage them to explore new places. It will also help promote tourism in lesser-known areas and showcase the beauty of our country.<br>In conclusion, we are proud to have developed this website, and we hope that it will make a difference in the vlogging community. We want to thank our professors for guiding us throughout the project, and our friends and family for their unwavering support. We are excited to deploy our website soon and share it with the world. Thank you.<br> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b style = 'font-size:40px'>     For more Info   &nbsp &nbsp &nbsp  <a  class = 'snap' href='https://vlogbook.netlify.app/' target='_blank' rel='noopener noreferrer'>Snap It🤞</a></b> ";

createHoverBox(textElementv, imageUrlv, boxTextv);





var header = document.querySelector('header'); // select the header element
var limit = 60; // set the scroll limit in pixels

window.addEventListener('scroll', function() {
  var opacity = 1 - (window.pageYOffset / limit); // calculate the new opacity value
  header.style.opacity = opacity; // set the new opacity value for the header element
});


function createHoverBox(textElement, imageUrl, boxText) {
    const box = document.createElement('div');
    const img = document.createElement('img');
    const text = document.createElement('p');

    // Set up the box with image and text
    box.style.position = 'absolute';
    box.style.display = 'none';
    box.style.opacity = 0;
    box.style.transition = 'opacity 0.3s ease-in-out';
    box.style.transition = 'all 1s ease-in-out';
    img.src = imageUrl;
    img.style.boxShadow = '1px 1px 2px blue, 0 0 1em grey, 0 0 0.2em rgb(255, 255, 255)';
    img.style.width = '50vw';
    // img.style.mixBlendMode='multiply';

    box.appendChild(img);

    text.innerHTML = boxText;
    text.style.textShadow = '1px 1px 2px red, 0 0 1em grey, 0 0 0.2em rgb(255, 255, 255)';
    text.style.color = 'azure';
    text.style.marginTop = '10px';
    text.style.letterSpacing = '0.2rem'
    text.style.wordSpacing = '0.5rem'
    text.style.lineHeight = '1.5rem'
    box.appendChild(text);

    // Attach event listeners to text element
    var pon = false;

    box.addEventListener('click', () => {
        if (box.style.display == 'block') {
            box.style.display = 'none';
            box.style.opacity = 0;
            pon = false;
            // logo.opacity = 1;
        }
        else {
            box.style.display = 'block';
            box.style.opacity = 1;
            pon = true;
            // logo.opacity = 0;
        }
    });

    textElement.addEventListener('mouseover', () => {
        box.style.display = 'block';
        setTimeout(() => {
            box.style.opacity = 1;
        }, 10);
    });

    textElement.addEventListener('mouseout', () => {

        if (!pon) {
            box.style.opacity = 0;
            setTimeout(() => {
                box.style.display = 'none';
            }, 300);
        }
    });

    textElement.addEventListener('click', () => {
        // const logo = querySelector('.logo');

        if (box.style.display == 'block') {
            box.style.display = 'none';
            box.style.opacity = 0;
            pon = false;
            // logo.opacity = 1;
        }
        else {
            box.style.display = 'block';
            box.style.opacity = 1;
            pon = true;
            // logo.opacity = 0;
        }
    });

    // Attach box to the document body
    document.body.appendChild(box);
}

