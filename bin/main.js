#! /usr/bin/env node

const program = require('commander')

program
    .version(require('../package').version) // 定义当前版本
    .usage('<command> [options]') // 定义使用方法
    .command('add', 'add a new template') // 定义四个指令
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('create', 'generate a new project from a template')

// 解析命令行参数
program.parse(process.argv)