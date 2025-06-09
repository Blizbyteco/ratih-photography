const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        lora: ['Lora', ...defaultTheme.fontFamily.sans]
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      fontStyle: {
        italic: 'italic',
        normal: 'normal',
      },
    },
  },
  plugins: [],
};
