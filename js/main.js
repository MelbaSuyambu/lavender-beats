var userGuideAudio = document.getElementById('userGuideAudio');

// Function to play user guide audio
function playUserGuide() {
    userGuideAudio.play();
}

// Process text input command for home page
function processCommand() {
    var input = document.getElementById('voiceInput').value.trim().toLowerCase();
    console.log('You typed:', input);

    if (input.includes('user manual')) {
        playUserGuide();
    } else if (input.includes('go to happy')) {
        window.location.href = 'happy.html';
    } else if (input.includes('go to dance')) {
        window.location.href = 'dance.html';
    } else if (input.includes('go to gym')) {
        window.location.href = 'gym.html';
    } else if (input.includes('go to library')) {
        window.location.href = 'library.html';
    } else {
        alert('Command not recognized. Please try again.');
    }

    // Auto-clear the input box after processing
    document.getElementById('voiceInput').value = '';
}
