/**
 * Svelte Action for scroll reveal animation
 * Usage: <div use:reveal={{ threshold: 0.15, delay: 0 }}>...</div>
 */
export function reveal(node: HTMLElement, { threshold = 0.15, delay = 0 } = {}) {
    // Initial state class
    node.classList.add("reveal-hidden");

    // Add specific delay class if simple delay is needed or inline style
    if (delay > 0) {
        node.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add("is-revealed");
                    observer.unobserve(node);
                }
            });
        },
        {
            threshold,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
