const plugin = require("tailwindcss/plugin")

module.exports = plugin.withOptions(
  function () {
    return function ({ addBase, matchUtilities, theme }: any) {
      function convertToPercentage(value: number): string {
        value = value / 100
        return Math.abs(Math.min(value, 1)).toString()
      }

      // Default values
      addBase({
        ":root": {
          "--mi-mask-image-start-opacity": "rgba(0,0,0,0)",
          "--mi-mask-image-end-opacity": "rgba(0,0,0,1)",
          "--mi-mask-image-direction": "to bottom",
          "--mi-mask-image-start": "0%",
          "--mi-mask-image-end": "100%",
        },
      })

      matchUtilities(
        {
          // Function to generate the CSS properties based on the value from the theme
          "mask-image": (value: string) => ({
            maskImage: `linear-gradient(${value}, var(--mi-mask-image-start-opacity) var(--mi-mask-image-start), var(--mi-mask-image-end-opacity)  var(--mi-mask-image-end))`,
          }),
        },
        {
          // Specify the theme object that contains the image mask directions
          values: theme("imageMaskDirections"),
        }
      )

      // Dynamically changes value form arbitrary values and generate utility classes from theme imageMaskSteps object
      matchUtilities(
        {
          "mask-image-start": (value: string) => ({
            "--mi-mask-image-start": value,
          }),

          "mask-image-end": (value: string) => ({
            "--mi-mask-image-end": value,
          }),
        },
        {
          values: theme("imageMaskSteps"),
          type: "length",
        }
      )

      matchUtilities(
        {
          "mask-image-start-opacity": (value: string) => {
            if (parseInt(value) > 1) {
              value = convertToPercentage(parseInt(value))
            }
            return {
              "--mi-mask-image-start-opacity": `rgba(0,0,0, ${value})`,
            }
          },

          "mask-image-end-opacity": (value: string) => {
            if (parseInt(value) > 1) {
              value = convertToPercentage(parseInt(value))
            }
            return {
              "--mi-mask-image-end-opacity": `rgba(0,0,0, ${value})`,
            }
          },
        },
        {
          values: theme("opacity"),
        }
      )
    }
  },
  function () {
    return {
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
  }
)
