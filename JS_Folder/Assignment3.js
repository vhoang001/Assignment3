document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the image element
    const image = document.querySelector(".Logo");

    // Function to fade in the image
    function fadeIn() {
        let opacity = 0;
        const interval = 50; // Adjust the interval for smoother or faster fading
        const duration = 1000; // Adjust the duration of the fade (in milliseconds)
        const delta = 1 / (duration / interval);

        const fadeInterval = setInterval(function() {
            opacity += delta;
            image.style.opacity = opacity.toFixed(2); // Limit opacity to 2 decimal places

            if (opacity >= 1) {
                clearInterval(fadeInterval); // Stop the interval when opacity reaches 1
            }
        }, interval);
    }

    // Call the fadeIn function when the page is loaded
    fadeIn();
});


document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the image element
    const menu = document.querySelector(".FibMenu-Container");

    // Function to fade in the image
    function fadeIn() {
        let opacity = 0;
        const interval = 50; // Adjust the interval for smoother or faster fading
        const duration = 1000; // Adjust the duration of the fade (in milliseconds)
        const delta = 1 / (duration / interval);

        const fadeInterval = setInterval(function() {
            opacity += delta;
            menu.style.opacity = opacity.toFixed(2); // Limit opacity to 2 decimal places

            if (opacity >= 1) {
                clearInterval(fadeInterval); // Stop the interval when opacity reaches 1
            }
        }, interval);
    }

    // Call the fadeIn function when the page is loaded
    fadeIn();
});

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the image element
    const images = document.querySelector(".MathFav-Images");

    // Function to fade in the image
    function fadeIn() {
        let opacity = 0;
        const interval = 50; // Adjust the interval for smoother or faster fading
        const duration = 1000; // Adjust the duration of the fade (in milliseconds)
        const delta = 1 / (duration / interval);

        const fadeInterval = setInterval(function() {
            opacity += delta;
            images.style.opacity = opacity.toFixed(2); // Limit opacity to 2 decimal places

            if (opacity >= 1) {
                clearInterval(fadeInterval); // Stop the interval when opacity reaches 1
            }
        }, interval);
    }

    // Call the fadeIn function when the page is loaded
    fadeIn();
});

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the image element
    const images = document.querySelector(".LocationNHour");

    // Function to fade in the image
    function fadeIn() {
        let opacity = 0;
        const interval = 50; // Adjust the interval for smoother or faster fading
        const duration = 1000; // Adjust the duration of the fade (in milliseconds)
        const delta = 1 / (duration / interval);

        const fadeInterval = setInterval(function() {
            opacity += delta;
            images.style.opacity = opacity.toFixed(2); // Limit opacity to 2 decimal places

            if (opacity >= 1) {
                clearInterval(fadeInterval); // Stop the interval when opacity reaches 1
            }
        }, interval);
    }

    // Call the fadeIn function when the page is loaded
    fadeIn();
});