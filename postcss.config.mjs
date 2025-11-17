const config = {
  plugins: ["@tailwindcss/postcss"],
  content: [ 
    // ... 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    // ... 
]
};

export default config;
