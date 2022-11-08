module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  /**
   * "plugin:vue/essential" 仅包含Base Rules和Priority A:Essential，
   * "plugin:vue/recommended" 包含Base Rules、Priority A:Essential、Priority B: Strongly Recommended、Priority C: Recommended。
   * 想要有vue/attributes-order 和 vue/order-in-components
   */
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁止style标签内写静态样式
    'vue/no-static-inline-styles': 'warn',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
