/** @type {import('tailwindcss').Config} */
export default {
  // Настраиваем Tailwind для сканирования всех .html и .js файлов в корне и src
  content: ["./*.html", "./src/**/*.{html,js}"], 
  theme: {
    // В Tailwind v4+ используйте @theme для определения кастомных токенов (шрифтов, цветов).
    // Это автоматически создает utility-классы, например, 'bg-primary' или 'font-inter'.
    // Чтобы активировать, просто раскомментируйте блок ниже.
    /*
    '@theme': {
      // Пример кастомных цветов:
      '--color-primary': 'hsl(210, 80%, 55%)',
      '--color-secondary': 'hsl(30, 100%, 70%)',
      // Пример кастомного шрифта (будет доступен как 'font-inter'):
      '--font-inter': 'Inter, sans-serif',
    },
    */
    extend: {
      // Старый синтаксис 'extend' также работает для других настроек (отступы, тени).
      // spacing: {
      //   '13': '3.25rem',
      // },
    },
  },
  plugins: [],
}
