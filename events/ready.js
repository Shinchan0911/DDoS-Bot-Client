const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix;

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] DDoS BOT: Đã tải config.json.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] DDoS BOT: Kích Hoạt, Lệnh đã tải thành công!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] DDoS BOT: Config đã tải thành công!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] DDoS BOT: Đã kết nối với tên ${client.user.username}!`);
  client.user.setStatus("online");
};
