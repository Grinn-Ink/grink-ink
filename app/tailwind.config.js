/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'primary': '#efbe14',
                'secondary': '#9c391a'
            },
            fontFamily: {
                'lokki-reddy': ['Lakki Reddy', 'cursive']
            }
        },
    }
};
