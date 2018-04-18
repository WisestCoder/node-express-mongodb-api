# 使用Node、Express 和MongoDB快速开发API接口
本教程介绍如何使用Node.js 、Express 和MongoDB (mongoose) 创建REST服务，快速开发API接口

### 1、安装NodeJs
安装NodeJS，可以访问[NodeJS官方网站](https://nodejs.org/en/)。或者[NodeJs中文网](www.nodejs.cn/)下载

检查版本

	node --version
	# => 4.12.4

### 2、安装ExpressJs
ExpressJS是运行在NodeJS上的Web应用框架。它可以用于构建Web应用或API服务（后文详述）。

	npm install -g express

请注意`-g`选项。它将会把`express`安装供全局使用，并加入`PATH`环境变量，因此你可以在任何地方运行它。

检查版本

	express --version
	# => 4.12.4

### 3、安装MongoDB
MongoDB是一个面向文档的NoSQL数据库（可用于处理大数据）。它将数据以JSON格式存储，允许执行类似SQL的查询。你可以访问[mongoDB官网](https://www.mongodb.com/)下载

安装完mongodb之后 你启动mongodb服务

### 4、快速开发API接口

当确保你安装完以上软件并且能够成功运行之后，你可以将代码克隆至本地

    git clone https://github.com/WisestCoder/angular-project-api.git

然后在angular-project-api目录下输入命令

	npm start
成功后，你的接口将会启动在`localhost:3000`下，接下来你就可以调试你的接口了

### 5、接口内容
因为接口是本人闲时开发的，如果不满足大家的需求，大家可自行开发，接口目录在`routes`文件夹下的`index.js`中，如：

	/*  查询所有商品的接口  */
	router.get('/good/selectAll', function(req, res, next) {
	  dataMani.selectall('good', function(result) {
	      //res.json(result);
	      res.send(result);
	  });
	});

接口信息如下：

	1、查询所有用户
		http://localhost:3000/user/selectAll
	2、按用户名查找用户(后接用户名)
		http://localhost:3000/user/getByUsername?username=
	3、按用户类型查找用户(后接用户类型)
		http://localhost:3000/user/getByType?type=
	4、插入用户信息(后接一个json数据)
		http://localhost:3000/user/insert?data=
	5、按用户名删除用户(后接用户名)
		http://localhost:3000//user/delectByUsername?username=
	6、按用户类型删除用户(后接用户类型)
		http://localhost:3000/user/delectByType?type=
	7、全部删除
		http://localhost:3000/user/delectAll
	8、更新用户信息(后接数组，前为查找的依据，如{'username':'001'},后为新信息,如{'username':'002','password':'12345'})
		http://localhost:3000/user/update?[{},{}]
	9、查询所有商品
		http://localhost:3000/good/selectAll
	10、关于用户的接口，也适用于商品，只需将接口地址中的user改为good，如
		http://localhost:3000/user/selectAll——>http://localhost:3000/good/selectAll
	11、  .....

当你发现你的接口已经成功运行，并且完美无误，那么恭喜！
