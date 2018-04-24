var news = new Vue({
	el:'#news-item',
	data:{
		title:'临阵磨刀 节奏贼',
		author:'Dave Lee',
		comment:'200',
		time:'7 hours ago ',
		tags:[{item:'快攻'},{item:'盗贼'},{item:'标准'}],
		content:'大家好，我是Promise#53448。因为2号就用奥秘法冲到了传说，所以没能加入新版本冲传说的浪潮之中。但是因为3、4号连输两天之后没有继续打天梯，新版本回来已经到了16000多名。抱着破罐子破摔,死马当作活马医的心情，新版本开到唯一一张橙卡就是巴库的我，开始构筑这套节奏贼。后来发现退环境以后已经解牌稀缺，加上奇偶卡组的限制、再加上恶毒卡组的限制，环境里解牌经常不够用，所以有了我这一套宁可冒风险也绝不平庸的节奏贼。（为什么取名临阵磨刀？开场前噬月者巴库的动画不是很形象吗。）对数量最多的潜行者取得压倒性的胜率，并且对阵热门职业术士胜率达到60%，我想这套卡组应该可堪一用了，所以前来向各营地老哥分享自己的心得。刚开始时对这套卡组是没有一个准确的定位的。开到噬月者巴库之后我的思考过程大概如下：技能升级能够产生质变的职业只有圣骑士、潜行者。圣骑士的技能自不必多说，而潜行者2费提刀可以解两个2费怪简直是节奏卡组的梦想。相比圣骑士经常战吼没用的鉴定锤，我不仅低一费还不亏牌。经过思索，选择组一套快攻贼。这是我当初用过的卡组：',
		commentUser:[
		{
			userImg:'/"imgs/shu.jpg/"',
			userName:'Teo',
			userComment:'这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容',
			Time:new Date().toLocaleString(),
		},
		{
			userImg:'/"imgs/shu.jpg/"',
			userName:'Teo2',
			userComment:'这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容 这些都是评论内容',
			Time:new Date().toLocaleString(),
		}
		],
		zancount:0,
		caicount:0,
		flag:true,
	},

})

var mainNewsItem= new Vue({
	el:'#main-news-item',
	data:{
		articles:[
		{
			title:'临阵磨刀 节奏贼',
			tags:['快攻','盗贼','标准'],
			content:'大家好，我是Promise#53448.因为2号就用奥秘法冲到了传说，所以没能加入新版本冲传说的浪潮之中。但是因为3、4号连输两天之后没有继续打天梯...',
			author:'Dave Lee',
			comment:'200',
			time:new Date().toLocaleString(),
		},
		{
			title:'临阵磨刀 节奏贼2',
			tags:['快攻','盗贼','标准'],
			content:'大家好，我是Promise#53448.因为2号就用奥秘法冲到了传说，所以没能加入新版本冲传说的浪潮之中。但是因为3、4号连输两天之后没有继续打天梯...',
			author:'Dave Lee',
			comment:'200',
			time:new Date().toLocaleString(),
		},
		],

	},
	
})