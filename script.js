document.addEventListener("DOMContentLoaded", () => {
    const repoSuffix = ".wave";

    // Folder toggle functionality
    document.querySelectorAll(".folder-item > .folder-icon").forEach((icon) => {
        icon.addEventListener("click", function () {
            const parent = this.parentNode;
            parent.classList.toggle("open");
            const subfolder = parent.querySelector(".subfolder");
            if (subfolder) {
                subfolder.style.display = parent.classList.contains("open") ? "block" : "none";
                this.textContent = parent.classList.contains("open")
                    ? "📂 beach.mori77z.de/"
                    : "📁 beach.mori77z.de/";
            }
        });
    });

// Background video functionality
const video = document.getElementById("background-video");

const startVideo = () => {
    video.play().catch((error) => {
        console.error("Error starting video playback:", error);
    });
};

document.body.addEventListener("click", startVideo, { once: true });
document.body.addEventListener("scroll", startVideo, { once: true });

    async function fetchRepos() {
        try {
            const response = await fetch("https://api.github.com/users/moritzgauss/repos");
            if (!response.ok) throw new Error("Fehler beim Laden der Repositories");

            const repos = await response.json();
            const subfolder = document.querySelector(".subfolder");
            if (!subfolder) return;

            const filtered = repos
                .filter(repo => !repo.private && repo.name.toLowerCase().endsWith(repoSuffix.toLowerCase()))
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            for (const repo of filtered) {
                const createdAt = new Date(repo.created_at);
                const month = String(createdAt.getMonth() + 1).padStart(2, "0");
                const year = createdAt.getFullYear();
                const desc = `(${month}/${year})`;

                const li = document.createElement("li");
                li.innerHTML = `
                    <span class="folder-icon">📁</span>
                    <a href="/${repo.name}</a>
                    <span class="description">${desc}</span>
                `;
                subfolder.appendChild(li);
            }
        } catch (error) {
            console.error("Fehler beim Laden der Repositories:", error);
        }
    }

    fetchRepos();
});
