module.exports = {
  plugins: {
    autoprefixer: {},
    <%_ if (options.application === 'mobile') { _%>
      'postcss-pxtorem': {
        rootValue: 75,
        propList: ['*']
        // unitPrecision: 5 * 2
      }
    <%_ } _%>
  }
}
