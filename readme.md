# Kettle Carte管理API的封装库

> 兼容到Kettle 7.1, 其他版本未测试

## 引用

```
npm i kettle-carte
```

## 示例:

```
const Carte = require("kettle-carte");

let client = new Carte("localhost", 80, "cluster", "cluster");

setImmediate(async () => {
  let d = await client.status();
  console.log(JSON.stringify(d));
});
```