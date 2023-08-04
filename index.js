const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, addUtilities, matchUtilities, theme }) {
    // Default values
    addBase({
      ":root": {
        "--mask-image-color": "#000",
        "--mask-image-direction": "to bottom",
        "--mask-image-from": "0%",
        "--mask-image-to": "100%",
      },
    });

    matchUtilities(
      {
        // Function to generate the CSS properties based on the value from the theme
        "mask-image": (value) => ({
          maskImage: `linear-gradient(${value}, var(--mask-image-color) var(--mask-image-from), transparent var(--mask-image-to))`,
        }),
      },
      {
        // Specify the theme object that contains the image mask directions
        values: theme("imageMaskDirections"),
      }
    );

    // Dynamically changes value form arbitrary values and generate utility classes from theme imageMaskSteps object
    matchUtilities(
      {
        "mask-image-from": (value) => ({
          "--mask-image-from": value,
        }),

        "mask-image-to": (value) => ({
          "--mask-image-to": value,
        }),
      },
      {
        values: theme("imageMaskSteps"),
      }
    );
  },
  {
    theme: {
      imageMaskSteps: {
        0: "0%",
        5: "5%",
        10: "10%",
        15: "15%",
        20: "20%",
        25: "25%",
        30: "30%",
        40: "40%",
        45: "45%",
        50: "50%",
        55: "55%",
        60: "60%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
        100: "100%",
      },
      /**
       * @type {{br: string, r: string, b: string, t: string, tl: string, bl: string, l: string, tr: string}}
       */
      imageMaskDirections: {
        t: "to top",
        tr: "to top right",
        tl: "to top left",
        b: "to bottom",
        br: "to bottom right",
        bl: "to bottom left",
        r: "to right",
        l: "to left",
      },
    },
  }
);
