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


function writeText(text, element, delay) {
    // Get the current text of the element
    const currentText = element.innerText;

    // Calculate the length of the new text
    const newTextLength = text.length;

    // Calculate the total duration of the animation
    const duration = newTextLength * delay;

    // Create a new promise to handle the animation
    return new Promise((resolve) => {
        // Define the animation function
        function animate(currentIndex, currentDelay) {
            // Add the next character to the current text
            const nextCharacter = text.charAt(currentIndex);
            element.innerText = currentText + nextCharacter;

            // Wait for the delay before adding the next character
            setTimeout(() => {
                // If there are more characters, continue the animation
                if (currentIndex + 1 < newTextLength) {
                    animate(currentIndex + 1, delay);
                } else {
                    // If the animation is complete, resolve the promise
                    resolve();
                }
            }, currentDelay);
        }

        // Start the animation
        animate(0, delay);
    });
}

// Example usage:
const descElement = document.querySelector('.desc');
writeText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis nisi natus consequatur quod incidunt reprehenderit praesentium nesciunt laboriosam libero maiores explicabo id amet excepturi omnis, a exercitationem hic! Minus laborum inventore enim eius architecto vel quisquam natus, excepturi eum, distinctio deleniti beatae. Adipisci repudiandae sit nesciunt ipsum, fugit culpa 👀', descElement, 50)
    .then(() => writeText('This is a big text that continues for a while', descElement, 50));
