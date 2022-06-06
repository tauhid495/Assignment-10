module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    

    extend: {
      colors: {
        myBlue: '#000044',
        myYellow:'#ffb224'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
