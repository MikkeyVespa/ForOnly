document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const buttons = document.querySelectorAll(".round-button");

    let activeButton = null;

    container.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("round-button")) {
            if (activeButton === target) {
                target.textContent = "+";
                target.style.width = "40px";
                target.style.height = "40px";
                target.style.borderRadius = "50%";
                target.style.opacity = "0.7";
                activeButton = null;
            } else {
                if (activeButton) {
                    activeButton.textContent = "+";
                    activeButton.style.width = "40px";
                    activeButton.style.height = "40px";
                    activeButton.style.borderRadius = "50%";
                    activeButton.style.opacity = "0.7";
                }

                activeButton = target;
                const description = target.dataset.description;

                target.textContent = description;

                const minWidth = 40;
                const maxWidth = 370;
                const textWidth = description.length * 11;

                target.style.width = Math.min(maxWidth, Math.max(minWidth, textWidth)) + "px";
                target.style.borderRadius = "40%";
                target.style.opacity = "1";
                target.style.borderRadius = "20px";
            }
        } else {
            if (activeButton) {
                activeButton.textContent = "+";
                activeButton.style.width = "40px";
                activeButton.style.height = "40px";
                activeButton.style.opacity = "0.7";
                activeButton = null;
            }
        }
    });
});
