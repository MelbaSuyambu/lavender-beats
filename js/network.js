// network.js
let qualityLevels = ["Low", "Medium", "High"];
let currentQuality = "High";

function simulateNetworkChange() {
    let randomQuality = qualityLevels[Math.floor(Math.random() * qualityLevels.length)];
    
    if (randomQuality !== currentQuality) {
        currentQuality = randomQuality;
        showNetworkStatus(randomQuality);
    }
}

function showNetworkStatus(quality) {
    const statusBar = document.getElementById('networkStatus');
    statusBar.innerText = `Network detected: ${quality}. Switching to ${quality} Quality.`;
    
    statusBar.className = `network-status ${quality.toLowerCase()}`;
    statusBar.style.display = 'block';

    // Auto hide after 3 seconds
    setTimeout(() => {
        statusBar.style.display = 'none';
    }, 3000);
}

// Simulate network changes every 10 seconds
setInterval(simulateNetworkChange, 10000);
