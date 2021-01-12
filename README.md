NodeJs项目.
提供一个CLI工具, 用于使用脚手架来创建一个新项目. 或者对现有项目的脚手架进行升级.

## 使用指南:

* 添加模板 

``` bash
vsky-cli add
```

* 删除模板

``` bash
vsky-cli remove 
```

* 展示模板列表

``` bash
vsky-cli list
```

* 根据指定模板创建一个项目

``` bash
vsky-cli create 模板名 新项目名
```

## 发布到npm仓库:

npm login
npm publish
24小时内删除:npm unpublish --force
