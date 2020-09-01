// 根目录下  commitlint.config.js
/* 
  默认规则继承自@commitlint/config-conventional
  Header: <type>(<scope>): <subject>
  Body: <body>
  Footer: <footer>
  changelog只生成type为feat、fix、revert类型的Header信息

  rule格式：[Level, Applicable, Value]
  Level: [0..2]; 0: 禁用规则，1: warning，2: error
  Applicable: always | never
  Value: 这条规则的值
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
		'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'upgrade',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
      ]
    ],
  }
}