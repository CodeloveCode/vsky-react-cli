#!/usr/bin/env node

// .mjs文件中可以使用ES6 MODULE语法.mjs文件中无法使用require.
// 但是import不支持json文件.需要typescript.因此暂时还是使用require
// import inquirer from 'inquirer';
// import { writeFile } from "fs";
// import chalk from "chalk";
// import templateObj from "../template.json";  // 报错:Unknown file extension ".json"

const inquirer = require('inquirer')
const { writeFile } = require('fs')
const chalk = require('chalk')
const templateObj = require(`${__dirname}/../template.json`);

let questions = [
    {
        name: 'name',
        type: 'input',
        message: '请输入要删除的模板名称',
        validate(val) {
            if (val === '') {
                return 'Name is required!'
            } else if (!templateObj[val]) {
                return 'Template does not existed!'
            } else {
                return true
            }
        }
    }
]

inquirer.prompt(questions)
    .then(answers => {
        let { name } = answers
        delete templateObj[name]

        writeFile(`${__dirname}/../template.json`, JSON.stringify(templateObj), 'utf8', err => {
            if (err) {
                console.error(err.message)
            }
            console.log('\n')
            console.log(chalk.green('Removed successfully!\n'))
            console.log(chalk.grey('The latest template list is: \n'))
            console.log(templateObj)
            console.log('\n')
        })
    })
