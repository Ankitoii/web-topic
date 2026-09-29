// ================= COPY COMMAND =================

function copyCode(button) {

    const code = button.parentElement.querySelector("code");

    navigator.clipboard.writeText(code.innerText);

    const originalText = button.innerText;

    button.innerText = "Copied ✓";

    setTimeout(() => {

        button.innerText = originalText;

    }, 1500);
}


// ================= SEARCH =================

const search = document.getElementById("search");

const cards = document.querySelectorAll(".command-card");

search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerText = "☀️";

    } else {

        themeBtn.innerText = "🌙";

    }

});