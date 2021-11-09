module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    // Atomics: "readonly",
    // SharedArrayBuffer: "readonly",
    // MCSERVER: "writeable",
    __dirname: 'writeable',
    // Buffer: "writeable",
    // Vue: "readonly",
    // MI: "writeable",
    // MS: "writeable",
    // TOOLS: "writeable",
    // VIEW_MODEL: "writeable",
    // RES: "readonly",
    // PAGE: "writeable",
    // $: "writeable",
    // WS: "readonly",
    // hex_md5: "readonly",
    // process: "readonly",
    logger: 'readonly',
    config: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  rules: {
    // "no-unused-vars": "warn",
    // "no-use-before-define": "warn",
    // "no-undef": "warn",
    // // "no-prototype-builtins": "off",
    // 'space-before-function-paren': ['off', 'off'],
    // 'no-extra-semi': "warn",
    // // "omitLastInOneLineBlock": true
    // // 'no-console': 'warn',
    // "beforeStatementContinuationChars": "never",
    // 'no-debugger': 'warn',
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single']
  }
}