document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById("header-container");

    if (headerContainer) {
        fetch("../pages/header.html")
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
            });
    }

    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
