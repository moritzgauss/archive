// Folder toggle functionality
document.querySelectorAll(".folder-item > .folder-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.classList.toggle("open");
        const subfolder = parent.querySelector(".subfolder");
        if (subfolder) {
            subfolder.style.display = parent.classList.contains("open") ? "block" : "none";
            this.textContent = parent.classList.contains("open") ? "📂 beach.mori77z.de" : "📁 beach.mori77z.de";
        }
    });
});

// Background video functionality
const video = document.createElement("video");
video.src = "https://github.com/moritzgauss/archive/raw/refs/heads/main/background%20video-1.mov";
video.loop = true; // Enable looping
video.muted = false; // Enable sound
document.body.appendChild(video);

// Function to start the video
const startVideo = () => {
    video.style.display = "block"; // Show video
    video.play().catch((error) => {
        console.error("Error starting video playback:", error);
    });
};

// Add click and scroll event listeners for video playback
document.body.addEventListener("click", startVideo, { once: true });
document.body.addEventListener("scroll", startVideo, { once: true });
