/*
 * @Author: litfa 
 * @Date: 2021-12-08 16:42:03 
 * @Last Modified by:   litfa 
 * @Last Modified time: 2021-12-08 16:42:03 
 */
const router = require('express')()
const docs = require('./../../modules/docs.js')

router.use('/', async (req, res) => {
  let { key } = req.body
  logger.info(`搜索 ip:${req.userip} ${JSON.stringify(req.body)} ${JSON.stringify(req.session)}`)

  // 忽略特殊字符
  try {
    key = new RegExp(`${key}`)
  } catch (err) {
    res.send([])
    return
  }
  let doc = await docs.find({
    title: {
      $regex: key, $options: 'i'
    },
    status: 1,
    $or: [{
      noSearch: false
    }, {
      noSearch: undefined
    }]
  }, {
    title: 1,
    info: 1,
    date: 1,
    author: 1,
    status: 1,
    _id: 1
  })
  res.send(doc)
})

module.exports = router
