/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				background: '#292531',
        button: '#FD5722',
        cyellow: '#FFDA17',
        tpurple: '#CBA5EA'
			},
    },
  },
  plugins: [],
}
