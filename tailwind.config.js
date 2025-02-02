/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './contact.html',
    './notify-form.html',
    './css/**/*.css',       // Include CSS files in the css/ folder
    './js/**/*.js',         // Include JS files in the js/ folder
    './assets/**/*.{html,js}', // Include any HTML/JS files in assets/
  ],
};