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
        "01d": "bg-[url(/clear_sky.webp)]",
        "01n": "bg-[url(/01n.webp]",
        "02d": "bg-[url(/few_clouds.webp)]",
        "02n": "bg-[url(/02n.webp)]",
        "03d": "bg-[url(/scattered_clouds.webp)]",
        "03n": "bg-[url(/03n.webp)]",
        "04d": "bg-[url(/broken_clouds.webp)]",
        "04n": "bg-[url(/04n.webp)]",
        "09d": "bg-[url(/shower_rain.webp)]",
        "09n": "bg-[url(/09n.webp)]",
        "10d": "bg-[url(/rain.webp)]",
        "10n": "bg-[url(/10n.webp)]",
        "11d": "bg-[url(/11d.webp)]",
        "11n": "bg-[url(/11n.webp)]",
        "13d": "bg-[url(/snow.webp)]",
        "13n": "bg-[url(/13n.webp)]",
        "50d": "bg-[url(/mist.webp)]",
        "50n": "bg-[url(/50n.webp)]",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

