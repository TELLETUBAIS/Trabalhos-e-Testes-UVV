/* ================================
   SMOOTH SCROLL AO CLICAR NO MENU
================================== */

document.querySelectorAll('.main-header a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // evita o salto instantâneo

        const id = this.getAttribute('href'); // exemplo: #curiosidades
        const section = document.querySelector(id);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


/* ================================
   DESTACAR MENU ATIVO AO ROLAR A PÁGINA
================================== */

const sections = document.querySelectorAll("header, section, footer");
const navLinks = document.querySelectorAll(".main-header a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Define a seção ativa dependendo da posição da página
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // Remove active de todos e adiciona no correto
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


/* ================================
   HEADER FIXO NO TOPO (OPCIONAL)
================================== */

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 120) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
