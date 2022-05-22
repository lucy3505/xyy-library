
npm i git+ssh://git@github.com:lucy3505/xyy-library.git#v0.0.1

IgnorePlugin
不引入相应的代码
最终打包生成的代码  没有代码


noParse
不做打包
最终打包生成的代码  有代码

js  单线程
nodejs 基于js  单线程
webpack 基于nodejs  单线程  开启多进程打包
多核cpu  适合  多进程打包
happyPack  npm i happypack@5.0.1 -D

happyPack和babel-loader相关