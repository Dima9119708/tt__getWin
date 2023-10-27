/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    transitionTimingFunction: false,
    transitionDelay: false,
    transitionProperty: false,
    transitionDuration: false,
    borderColor: false,
  },
  important: '#root',
  plugins: [
    (api) => {
      api.addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

      api.matchUtilities({
      });
    },
  ],
};
