module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),
  ],
}





// module.exports = {
//   important: true,
//   // Active dark mode on class basis
//   darkMode: "class",
//   i18n: {
//     locales: ["en-US"],
//     defaultLocale: "en-US",
//   },
//   purge: {
//     content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
//     // These options are passed through directly to PurgeCSS
//   },
//   theme: {
//     extend: {
//       backgroundImage: (theme) => ({
//         check: "url('/icons/check.svg')",
//         landscape: "url('/images/landscape/2.jpg')",
//       }),
//     },
//   },
//   variants: {
//     extend: {
//       backgroundColor: ["checked"],
//       borderColor: ["checked"],
//       inset: ["checked"],
//       zIndex: ["hover", "active"],
//     },
//   },
//   plugins: [],
//   future: {
//     purgeLayersByDefault: true,
//   },
// };






/** @type {import('tailwindcss').Config} */
