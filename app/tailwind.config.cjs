/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    plugins: [
        require('@tailwindcss/forms')
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#efbe14',
                'secondary': '#9c391a'
            },
            fontFamily: {
                'lokki-reddy': ['Lakki Reddy', 'cursive']
            }
        }
    }
};
