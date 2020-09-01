/* eslint-disable no-unused-vars */
/* eslint-disable standard/object-curly-even-spacing */
const Mock = require('mockjs');

module.exports = {
  'POST /index.php/test': function (req, res) {
    res.send({
      state: 1,
      data: Mock.mock({
        count: 101,
        [`list|${10}`]: [{
          'id|+1': 100,
          'title': '@word(16)',
          'category': '@word(8)',
          'type|1': ['1', '2'],
          'type_name|1': ['考试','练习'],
          'category_name': '@word(32)',
          'started_at': '@date("yyyy-MM-dd HH:MM:ss")',
          'ended_at': '@date("yyyy-MM-dd HH:MM:ss")',
        }]
      })
    })
  }
};
