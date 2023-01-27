/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'ping-once': 'ping 3s linear 1',
      }
    },
  },
  plugins: [],
}
