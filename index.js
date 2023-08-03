const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme }) {

    /**
     * @type {{br: string, r: string, b: string, t: string, tl: string, bl: string, l: string, tr: string}}
     */
    const directions = {
        t: "to top",
        tr: "to top right",
        tl: "to top left",
        b: "to bottom",
        br: "to bottom right",
        bl: "to bottom left",
        r: "to right",
        l: "to left",
    };

    /**
     * @type {string[]}
     */
    const steps = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

    const utilities = Object.entries(directions).reduce(
        (result, [shorthand, direction]) => {
            const variants = steps.map((step) => {
                const className = `.image-mask-${shorthand}-${step}`;
                return {
                    [className]: {
                        maskImage: `linear-gradient(${direction}, rgba(0, 0, 0, 1.0) ${step}%, transparent 100%)`,
                    },
                };
            });

            const stepClasses = Object.assign(...variants);
            return {
                ...result,
                ...stepClasses,
            };
        },
        {}
    );

    addUtilities(utilities);
}, { theme: {

    }});