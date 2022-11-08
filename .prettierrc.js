module.exports = {
  arrowParens: 'always', // (x) => {} 箭头函数参数只有一个时要有小括号
  bracketSpacing: true, // // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: 'lf', // 结尾是 \n
  htmlWhitespaceSensitivity: 'strict', //Specify the global whitespace sensitivity for HTML files 所有空格都保留
  bracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: true, //在jsx中使用单引号代替双引号
  printWidth: 100, // 超过最大值换行
  proseWrap: 'never', //不强制换行 is an option for Markdown. It doesn't affect how JavaScript is formatted.
  quoteProps: 'as-needed', // 当没有严格要求时，禁止对象字面量属性名称使用引号
  semi: false, // 句尾不添加分号
  singleQuote: true, // 使用单引号代替双引号
  tabWidth: 2, // 缩进字节数
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  useTabs: false, // 缩进不使用tab，使用空格
  vueIndentScriptAndStyle: false,
}
