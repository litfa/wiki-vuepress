/*
 * @Author: litfa 
 * @Date: 2021-12-08 16:36:36 
 * @Last Modified by:   litfa 
 * @Last Modified time: 2021-12-08 16:36:36 
 */
const log4js = require('log4js')
const fs = require('fs-extra')

const LOG_FILE_PATH = 'logs/current.log'

if (!fs.existsSync('logs/')) fs.mkdirSync('logs')
// 启动时自动储存上次日志文件
if (fs.existsSync(LOG_FILE_PATH)) {
  const date = new Date()
  const logFilename = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + '_' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds()
  fs.renameSync(LOG_FILE_PATH, 'logs/' + logFilename + '.log')
}

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '[%d{MM/dd hh:mm:ss}] [%[%p%]] %m'
      }
    },
    app: {
      type: 'file',
      filename: LOG_FILE_PATH,
      layout: {
        type: 'pattern',
        pattern: '%d %p %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['out', 'app'],
      level: 'info'
    }
  }
})

const getLogger = log4js.getLogger('default')

// 多参数输出，但仅限于输出 INFO 级别
logger.log = function (...p) {
  let msg = ''
  for (const v of p) {
    if (v) msg += v + ' '
  }
  getLogger.info(msg)
}

// INFO 级别输出
logger.infoLog = (info = '', value = '') => {
  let msg = value
  if (info.toUpperCase() != 'INFO') {
    msg = [info, '-', value].join(' ')
  }
  getLogger.info(msg)
}

// INFO 级别输出
logger.info = (...p) => {
  let msg = ''
  for (const v of p) {
    if (v) msg += v + ' '
  }
  getLogger.info(msg)
}

// ERROR 级别输出
logger.error = (msg, err) => {
  getLogger.error(msg)
  if (err) getLogger.error(err)
}

// WARN 级别输出
logger.warning = (title, msg = null) => {
  getLogger.warn(title)
  if (msg) getLogger.warn(msg)
}
