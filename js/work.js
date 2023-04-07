window.onload = function () {
    document.querySelector('.background').style.transform = 'scale(1)';
};

setTimeout(function () {
    document.getElementById('image').style.opacity = 1;
}, 2000);


// Pass in the text element, image URL, and box text
const textElement = document.querySelector('.stsys,h1');
const imageUrl = '/source/student_manegment.png';
const boxText = " During my studies, I developed a Student Management System using Java Swing and SQL as a database. The project was a comprehensive tool for managing student records, including personal details, academic performance, and course information.The application was designed to be user-friendly and efficient, with a simple and intuitive interface. I implemented this software for both students and administrator. The Administrator requied to log in to use the functionality of the system once they logged in, they can insert and update student personal details, view registered students and can put their results. Sdutents donot have to log in. The interface is very userfriendly that allows students to view their roll number by putting their roll number and selected course.Additionally students can have access of Faculty , Academic Calender , Contact Information and curriculums. Over all the system provides a reliable and efficient way to manage the academics of students in an institution.  The project was a great opportunity to improve my Java skills and deepen my understanding of database design and management.     For more Info    <a  class = 'snap' href='https://github.com/anurag-bitan/Student_manegment' target='_blank' rel='noopener noreferrer'>Snap It🤞</a> ";

createHoverBox(textElement, imageUrl, boxText);




























function createHoverBox(textElement, imageUrl, boxText) {
    const box = document.createElement('div');
    const img = document.createElement('img');
    const text = document.createElement('p');

    // Set up the box with image and text
    box.style.position = 'absolute';
    box.style.display = 'none';
    box.style.opacity = 0;
    box.style.transition = 'opacity 0.3s ease-in-out';
    box.style.transition= 'transform 1s ease-in-out';
    img.src = imageUrl;
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
    var pon=false;

    box.addEventListener('click', () => {
        if(box.style.display == 'block'){
            box.style.display = 'none';
            box.style.opacity = 0;
            pon = false;
            // logo.opacity = 1;
        }
        else{
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

        if(!pon){
            box.style.opacity = 0;
        setTimeout(() => {
            box.style.display = 'none';
        }, 300);
        }
    });

    textElement.addEventListener('click', () => {
        // const logo = querySelector('#logo');
    
        if(box.style.display == 'block'){
            box.style.display = 'none';
            box.style.opacity = 0;
            pon = false;
            // logo.opacity = 1;
        }
        else{
            box.style.display = 'block';
            box.style.opacity = 1;
            pon = true;
            // logo.opacity = 0;
        }
    });

    // Attach box to the document body
    document.body.appendChild(box);
}

