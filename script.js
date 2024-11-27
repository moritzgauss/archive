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
