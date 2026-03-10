import { useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000 }) => {
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;

                    const startTime = performance.now();

                    const animate = (time) => {
                        const progress = Math.min((time - startTime) / duration, 1);

                        const eased = easeOutCubic(progress);

                        const value = Math.floor(eased * end);

                        el.textContent = value.toLocaleString();

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 1 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>0</span>;
};

export default CountUp;