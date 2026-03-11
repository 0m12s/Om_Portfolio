/* =========================================
   TYPING EFFECT
========================================= */

const roles = ["Java Developer", "Spring Boot Developer", "REST API Developer"];
const typingEl = document.getElementById("typing");

let roleIndex = 0,
  charIndex = 0,
  deleting = false;

function typeEffect() {
  const word = roles[roleIndex];

  typingEl.textContent = deleting
    ? word.slice(0, --charIndex)
    : word.slice(0, ++charIndex);

  if (!deleting && charIndex === word.length)
    setTimeout(() => (deleting = true), 1200);

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 60 : 90);
}
typeEffect();

/* =========================================
   MARQUEE
========================================= */

document.querySelectorAll("[data-marquee]").forEach((track) => {
  while (track.scrollWidth < track.parentElement.offsetWidth * 2) {
    track.innerHTML += track.innerHTML;
  }
});

/* =========================================
   THEME
========================================= */

const favicon = document.getElementById("favicon");
const toggleBtn = document.getElementById("themeToggle"); // updated to match new toggle

function updateFavicon(theme) {
  if (!favicon) return;

  favicon.href =
    theme === "dark"
      ? "icons/icons8-dark-mode-32.png"
      : "icons/icons8-light-mode-32.png";
}

/* -----------------------------------------
   INITIAL THEME LOAD
------------------------------------------ */

(function () {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);
  updateFavicon(theme);
})();

/* -----------------------------------------
   TOGGLE HANDLER
------------------------------------------ */

if (toggleBtn) {
  const thumbIcon = document.querySelector(".thumb-icon");

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateFavicon(newTheme);

    // Switch icon inside thumb
    thumbIcon.textContent = newTheme === "dark" ? "🌙" : "☀";
  });

  // Set correct icon on page load
  const initialTheme = document.documentElement.getAttribute("data-theme");

  if (thumbIcon) {
    thumbIcon.textContent = initialTheme === "dark" ? "🌙" : "☀";
  }
}

/* =========================================
   CONTACT FORM SUBMISSION
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const submitBtn = document.getElementById("submitBtn");
  const messageBox = document.getElementById("responseMessage");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    messageBox.style.display = "none";

    const data = {
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result = null;

      // Safely parse JSON (prevents crash if not JSON)
      try {
        result = await response.json();
      } catch (err) {
        result = null;
      }

      if (response.ok) {
        messageBox.style.display = "block";
        messageBox.style.color = "lightgreen";
        messageBox.textContent = "Message sent successfully!";
        contactForm.reset();
      } else {
        messageBox.style.display = "block";
        messageBox.style.color = "red";

        if (result && typeof result === "object") {
          // Show validation errors nicely
          messageBox.textContent = Object.values(result).join(" | ");
        } else {
          messageBox.textContent = "Something went wrong!";
        }
      }

      // Small delay so user can see success state
      await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (error) {
      messageBox.style.display = "block";
      messageBox.style.color = "red";
      messageBox.textContent = "Backend not reachable!";
      console.error(error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}
