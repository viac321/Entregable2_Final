/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'W_one': '#ECE3CE',
        'W_two': '#739072',
        'W_three': '#4F6F52',
        'W_four': '#3A4D39',
        'D_one': '#323232',
        'D_two': '#295F4E',
        'D_three': '#6DB193',
        'D_four': '#F4E5C2',
      },
      backgroundImage: {
        'broken clouds': "url('/broken_clouds.webp')",
        'clear sky': "url('/clear_sky.webp')",
        'few clouds': "url('/few_clouds.webp')",
        'mist': "url('/mist.webp')",
        'rain': "url('/rain.webp')",
        'scattered clouds': "url('/scattered_clouds.webp')",
        'shower rain': "url('/shower_rain.webp')",
        'snow': "url('/snow.webp')",
        'thunderstorm': "url('/thunderstorm.webp')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

