export default () => {
    // sections
    const observerSections = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const section = entry.target;
            if (entry.isIntersecting) {
                section.classList.add("animate-slide-in");
            }
        });
    });
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        observerSections.observe(section);
    });

    // topics
    const observerTopics = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const topic = entry.target;
            if (entry.isIntersecting) {
                topic.classList.remove("invisible");
                topic.classList.add("animate-slide-up");
            } else topic.classList.add("invisible");
        });
    });
    const topics = document.querySelectorAll("[id^='topic']");
    topics.forEach((topic) => {
        observerTopics.observe(topic);
    });
};
