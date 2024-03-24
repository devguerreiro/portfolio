export default () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const section = entry.target;
            if (entry.isIntersecting) section.classList.remove("invisible");
            else section.classList.add("invisible");
        });
    });
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        observer.observe(section);
    });
};
