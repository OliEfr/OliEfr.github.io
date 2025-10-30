function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


$(document).ready(function() {
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        // order of the next two lines matters
        $(this).find('img').css('display', 'none');
        $(this).find('.image2').css('display', 'inline-block');
    });
    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        // order of the next two lines matters
        $(this).find('img').css('display', 'inline-block');
        $(this).find('.image2').css('display', 'none');

    });

    $('.publication-mousecell').on('touchend', function() {
        $(this).find('video').css('display', 'none');
        // order of the next two lines matters
        $(this).find('img').css('display', 'inline-block');
        $(this).find('.image2').css('display', 'none');

    });

    $('.publication-mousecell').on('touchstart touchcancel touchmove', function() {
        $(this).find('video').css('display', 'inline-block');
        // order of the next two lines matters
        $(this).find('img').css('display', 'none');
        $(this).find('.image2').css('display', 'inline-block');
    });


    async function fetchCommits() {
        const response = await fetch(`https://api.github.com/repos/${github_username}/${github_repository}/commits`);

        let displayText
        
        if (response.ok) {
            const commits = await response.json();

            const commitDate = formatDate(commits[0].commit.author.date);
            
            // you could also display commit message
            const commitMessage = commits[0].commit.message;
            const cuttoff = 100;
            const commitMessageDisplay = commitMessage.length > cuttoff ? commitMessage.substring(0, cuttoff) + "..." : commitMessage;

            displayText = `Last updated: ${commitDate}`;
        } else {
            displayText = `Last updated: recently`;
        }

        document.getElementById('updateMessage').innerHTML = displayText
    }
    fetchCommits();
})

// fix from https://stackoverflow.com/questions/58146137/closing-a-dropdown-navbar-on-click-in-javascript
document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    const navbarItems = document.querySelectorAll(".navbar-item");

    navbarBurgers.forEach(burger_el => {
        burger_el.addEventListener('click', (event) => {
            // Toggle burger-menu
            document.getElementById(burger_el.dataset.target).classList.toggle('is-active');
            event.target.classList.toggle('is-active');
        });
        navbarItems.forEach(item => {
            item.addEventListener("click", (event) => {
                // Close burger-menu
                document.getElementById(burger_el.dataset.target).classList.remove('is-active');
                event.target.classList.remove('is-active');
            });
        });
    });

    // Open all links in a separate tab, excluding anchor links on the same page
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        // Check if the href starts with "#" or is an anchor to the current page
        if (href && !href.startsWith("#") && !href.startsWith(window.location.pathname + "#")) {
            links[i].target = "_blank";
        }
    }
});

// submission box
// document.addEventListener('DOMContentLoaded', function() {
//     const submitButton = document.getElementById('submitButton');
//     if (submitButton) {
//         submitButton.addEventListener('click', submitEmail);
//         emailInput.addEventListener('keydown', function (event) {
//             if (event.key === 'Enter') {
//                 event.preventDefault();
//                 submitButton.click();
//             }
//         });
//     };
// });

// function validateEmail(email) {
//     const re = /^.+@.+\..+$/;
//     return re.test(email.toLowerCase());
// }

// function showMessage(text, isError = false) {
//     const messageDiv = document.getElementById('message');
//     messageDiv.textContent = text;
//     messageDiv.style.display = 'block';
//     messageDiv.className = `message ${isError ? 'error' : 'success'}`;
// }

// function submitEmail() {
//     const emailInput = document.getElementById('emailInput');
//     const submitButton = document.getElementById('submitButton');
//     const email = emailInput.value.trim();

//     if (!validateEmail(email)) {
//         showMessage('Please enter a valid email address', true);
//         return;
//     }

//     submitButton.disabled = true;
    
//     // Replace this URL with your Google Apps Script web app URL
//     const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbwiGxv02KdERUK68Gaf80V0BUlMGNyyrhVJPHTj72HRXxkAKoRUw7D8zS7Wr4mTlivn/exec';
    
//     // Security check: ensure scriptUrl and hostname pair is valid to make sure other deployments do not use the same url
//     const currentHostname = window.location.hostname;
//     const isLocalhost = currentHostname === 'localhost' || currentHostname === '127.0.0.1';
//     const isOriginalSite = currentHostname === 'oliver.hausdoerfer.de';
//     const originalScriptUrl = 'https://script.google.com/macros/s/AKfycbwiGxv02KdERUK68Gaf80V0BUlMGNyyrhVJPHTj72HRXxkAKoRUw7D8zS7Wr4mTlivn/exec'

//     const isValidConfig = isLocalhost || 
//         (isOriginalSite && googleAppScriptUrl === originalScriptUrl) || 
//         (!isOriginalSite && googleAppScriptUrl !== originalScriptUrl);
    
//     if (!isValidConfig) {
//         console.log('Invalid scriptUrl. Please update the scriptUrl in this js file.');
//         showMessage('An error occurred. Please try again later.', true);
//         submitButton.disabled = false;
//         return;
//     }

//     fetch(googleAppScriptUrl, {
//         method: 'POST',
//         mode: 'no-cors', // This is critical for avoiding CORS issues with Google Apps Script
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//             email: email,
//             origin: window.location.origin
//         })
//     })
//     .then(response => {
//         console.log(response)
//         // With no-cors mode, we can't read the response, so we assume success
//         showMessage("You'll stay up-to-date with my research!");
//         emailInput.value = '';
//     })
//     .catch(error => {
//         showMessage('An error occurred. Please try again later.', true);
//         console.error('Error:', error);
//     })
//     .finally(() => {
//         submitButton.disabled = false;
//     });
// }