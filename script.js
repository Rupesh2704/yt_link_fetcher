// Array to hold the video links
let videoLinks = [];

// Function to show the saved links when the page loads
function showmylinks() {
    const listElement = document.getElementById('lists');
    listElement.innerHTML = ''; // Clear existing links

    videoLinks.forEach(video => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${video.name} 
            <button onClick="playVideo('${video.id}')">Play</button>
            <button class="delete-btn" onClick="deleteLink('${video.id}')">Delete</button>
        `;
        listElement.appendChild(li);
    });
}

// Function to get the live link and add it to the list
function getLiveLink() {
    const inputLink = document.getElementById('link').value;
    const videoId = extractVideoId(inputLink);
    
    if (videoId) {
        videoLinks.push({ name: inputLink, id: videoId });
        document.getElementById('link').value = ''; // Clear input field
        showmylinks();
    } else {
        alert('Please enter a valid YouTube link.');
    }
}

// Function to extract video ID from a YouTube URL
function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to play the video in the iframe
function playVideo(videoId) {
    const iframe = document.getElementById('maincheez');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// Function to delete a link from the list
function deleteLink(videoId) {
    videoLinks = videoLinks.filter(video => video.id !== videoId);
    showmylinks();
}

// Function to remove a link based on user input
function remlink() {
    const removeInput = document.getElementById('remove').value;
    videoLinks = videoLinks.filter(video => video.name !== removeInput);
    showmylinks();
    document.getElementById('remove').value = ''; // Clear input field
}

// Function to add a link manually (not fully implemented in this example)
function addlink() {
    const inputLink = prompt("Enter the YouTube video link:");
    const videoId = extractVideoId(inputLink);
    
    if (videoId) {
        videoLinks.push({ name: inputLink, id: videoId });
        showmylinks();
    } else {
        alert('Please enter a valid YouTube link.');
    }
}

// Function to erase all links
function remlinks() {
    videoLinks = [];
    showmylinks();
}


    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert('Form submitted successfully!'); // Replace with your logic
        // Additional functionality here
    });

