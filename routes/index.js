var express = require('express');
var router = express.Router();

router.get('/api/header.json', function(req, res, next) {
  res.json({
  		"ret":true,
		  "data":{
		  	"list":[{
					"title" :"大家说英语",
					"id":"1",
					"url":"/list/1"
				},{
					"title" :"空中英语教室",
					"id":"2",
					"url":"/list/2"
				},{
					"title" :"彭蒙惠英语",
					"id":"3",
					"url":"/list/3"
				},{
					"title" :"科学美国人",
					"id":"4",
					"url":"/list/4"
				},{
					"title" :"冬吴相对论",
					"id":"5",
					"url":"/list/5"
				},{
					"title" :"走遍美国",
					"id":"6",
					"url":"/list/6"
				},{
					"title" :"英文名著",
					"id":"7",
					"url":"/list/7"
				},{
					"title" :"托福考试",
					"id":"8",
					"url":"/list/8"
				},{
					"title" :"美国脱口秀",
					"id":"9",
					"url":"/list/9"
				},{
					"title" :"BBC听力资料",
					"id":"10",
					"url":"/list/10"
				},{
					"title" :"外教课堂",
					"id":"11",
					"url":"/list/11"
				}],
		    "listType": [
		      {
		        "title": "常速英语",
		        "list": [
		          {
		            "id": 1,
		            "title": "音频"
		          },{
		            "id": 2,
		            "title": "视频"
		          },{
		            "id": 3,
		            "title": "翻译"
		          }],
		        "id": 1
		      },{
		        "title": "慢速英语",
		        "list": [
		          {
		            "id": 1,
		            "title": "科技报道"
		          },{
		            "id": 2,
		            "title": "词汇掌故"
		          },{
		            "id": 3,
		            "title": "美国故事"
		          },{
		            "id": 4,
		            "title": "时事新闻"
		          },{
		            "id": 5,
		            "title": "经济报道"
		          },{
		            "id": 6,
		            "title": "建国史话"
		          },{
		            "id": 7,
		            "title": "教育报道"
		          },{
		            "id": 8,
		            "title": "自然探索"
		          },{
		            "id": 9,
		            "title": "健康报道"
		          },{
		            "id": 10,
		            "title": "美国万花筒"
		          },{
		            "id": 11,
		            "title": "科学动态"
		          },{
		            "id": 12,
		            "title": "农业报道"
		          },{
		            "id": 13,
		            "title": "美国专栏"
		          },{
		            "id": 14,
		            "title": "美国人物"
		          }],
		        "id": 2
		      },{
		        "title": "英语教学",
		        "list": [
		          {
		            "id": 1,
		            "title": "流行美语"
		          },{
		            "id": 2,
		            "title": "美语三级跳"
		          },{
		            "id": 3,
		            "title": "美国习惯用语"
		          },{
		            "id": 4,
		            "title": "学个词"
		          },{
		            "id": 5,
		            "title": "AS IT IS"
		          },{
		            "id": 6,
		            "title": "体育美语"
		          },{
		            "id": 7,
		            "title": "美语怎么说"
		          },{
		            "id": 8,
		            "title": "商务礼节美语"
		          },{
		            "id": 9,
		            "title": "双语新闻"
		          },{
		            "id": 10,
		            "title": "美语咖啡屋"
		          },{
		            "id": 11,
		            "title": "中级美语"
		          },{
		            "id": 12,
		            "title": "美语训练班"
		          },{
		            "id": 13,
		            "title": "VOA每日一课"
		          },{
		            "id": 14,
		            "title": "OMG美语"
		          },{
		            "id": 15,
		            "title": "VOA相关资料"
		          }],
		        "id": 3
		      }]
		  }
  })

});
router.get('/api/index.json', function(req, res, next) {
  res.json(
  	{
	  "ret":true,
	  "data":{
	  	"list":[{
	  		"id":1,
	  		"link":"detail/1",
	  		"category":"空中英语教室",
	  		"title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	  		"time":"2017-11-1"
	  	},{
	  		"id":2,
	  		"link":"detail/2",
	  		"category":"暖湾 ",
	  		"title":"宠物鱼品牌推广～",
	  		"time":"2017-11-1"
	  	},{
	  		"id":3,
	  		"link":"detail/3",
	  		"category":" AS IT IS",
	  		"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
	  		"time":"2017-11-17"
	  	},{
	  		"id":4,
	  		"link":"detail/4",
	  		"category":"AS IT IS ",
	  		"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
	  		"time":"2017-11-17"
	  	},{
	  		"id":5,
	  		"link":"detail/5",
	  		"category":"AS IT IS",
	  		"title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
	  		"time":"2017-11-17"
	  	},{
	  		"id":6,
	  		"link":"detail/6",
	  		"category":"VOA常速英语",
	  		"title":"Clearing Explosive Remnants of War in the West Bank",
	  		"time":"2017-11-16"
	  	},{
	  		"id":7,
	  		"link":"detail/7",
	  		"category":"AS IT IS",
	  		"title":"Japan Seeks to Expand Influence in Southeast Asia",
	  		"time":"2017-11-16"
	  	},{
	  		"id":8,
	  		"link":"detail/8",
	  		"category":"科技报道",
	  		"title":"Distant Star Refuses to Die",
	  		"time":"2017-11-16"
	  	},{
	  		"id":9,
	  		"link":"detail/9",
	  		"category":"空中英语教室",
	  		"title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	  		"time":"2017-11-16"
	  	},{
	  		"id":10,
	  		"link":"detail/10",
	  		"category":"科技报道",
	  		"title":"Distant Star Refuses to Die",
	  		"time":"2017-11-16"
	  	},{
	  		"id":11,
	  		"link":"detail/11",
	  		"category":"AS IT IS",
	  		"title":"Japan Seeks to Expand Influence in Southeast Asia",
	  		"time":"2017-11-16"
	  	},{
	  		"id":12,
	  		"link":"detail/12",
	  		"category":"科技报道",
	  		"title":"Distant Star Refuses to Die",
	  		"time":"2017-11-16"
	  	},{
	  		"id":13,
	  		"link":"detail/13",
	  		"category":"AS IT IS",
	  		"title":"Japan Seeks to Expand Influence in Southeast Asia",
	  		"time":"2017-11-16"
	  	},{
	  		"id":14,
	  		"link":"detail/14",
	  		"category":"科技报道",
	  		"title":"Distant Star Refuses to Die",
	  		"time":"2017-11-16"
	  	},{
	  		"id":15,
	  		"link":"detail/15",
	  		"category":"VOA常速英语",
	  		"title":"Clearing Explosive Remnants of War in the West Bank",
	  		"time":"2017-11-15"
	  	},{
	  		"id":16,
	  		"link":"detail/16",
	  		"category":"科技报道",
	      "title":"Distant Star Refuses to Die",
	  		"time":"2017-11-15"
	  	},{
	      "id":17,
	      "link":"detail/17",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":18,
	      "link":"detail/18",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":19,
	      "link":"detail/19",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":20,
	      "link":"detail/20",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":21,
	      "link":"detail/21",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":22,
	      "link":"detail/22",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":23,
	      "link":"detail/23",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":24,
	      "link":"detail/24",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":25,
	      "link":"detail/25",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":26,
	      "link":"detail/26",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":27,
	      "link":"detail/20",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":28,
	      "link":"detail/21",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":29,
	      "link":"detail/22",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":30,
	      "link":"detail/23",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":31,
	      "link":"detail/20",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    },{
	      "id":32,
	      "link":"detail/21",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":33,
	      "link":"detail/22",
	      "category":"AS IT IS",
	      "title":"Japan Seeks to Expand Influence in Southeast Asia",
	      "time":"2017-11-16"
	    },{
	      "id":34,
	      "link":"detail/23",
	      "category":"空中英语教室",
	      "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
	      "time":"2017-11-16"
	    }],
	    "friendList":[{
	      "id":1,
	      "title":"小马过河"
	    },{
	      "id":2,
	      "title":"雅思培训"
	    },{
	      "id":3,
	      "title":"留学机构"
	    },{
	      "id":4,
	      "title":"出国语言培训"
	    },{
	      "id":5,
	      "title":"大学生"
	    },{
	      "id":6,
	      "title":"人人听力网"
	    },{
	      "id":7,
	      "title":"英语口语"
	    },{
	      "id":8,
	      "title":"英文小说网"
	    },{
	      "id":9,
	      "title":"口译"
	    },{
	      "id":10,
	      "title":"翻译资格考试"
	    },{
	      "id":11,
	      "title":"GCT"
	    },{
	      "id":12,
	      "title":"英文六级"
	    },{
	      "id":13,
	      "title":"英文小说网"
	    },{
	      "id":14,
	      "title":"英语学习网站"
	    },{
	      "id":15,
	      "title":"泰语学习网站"
	    },{
	      "id":16,
	      "title":"英蕊幼儿英语"
	    },{
	      "id":17,
	      "title":"手抄报"
	    },{
	      "id":18,
	      "title":"简单学习网"
	    },{
	      "id":19,
	      "title":"哈尔滨英语"
	    },{
	      "id":20,
	      "title":"韩语学习网"
	    },{
	      "id":21,
	      "title":"职称英语考试"
	    },{
	      "id":22,
	      "title":"家教"
	    },{
	      "id":23,
	      "title":"在线英语培训"
	    }]
	  }
	}
  )
});
router.get('/api/detail.json', function(req, res, next) {
  res.json(
	  	{
		"ret":true,
		"data":{
			"detail":{
				"title":req.query.id + "Leonardo da Vinci Painting Sells for Record $450 Million",
				"content":"<p>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p >A painting painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million.painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million.painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million.of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p>The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.</p><img style='float:left' src='http://www.easyvoa.com/uploads/allimg/171117/1H91V549-0.jpg'/><p style='float:right;width:729px'>Many historians have described Ford as a good man facing a difficult situation. He tried to fix a troubled economy, end United States' involvement in Vietnam, and show people that the U.S. government could continue to operate after a crisis.</p><p style='float:right;width:729px'>Many historians have described Ford as a good man facing a difficult situation. He tried to fix a troubled economy, end United States' involvement in Vietnam, and show people that the U.S. government could continue to operate after a crisis.</p><p style='float:right;width:729px'>Many historians have described Ford as a good man facing a difficult situation. He tried to fix a troubled economy, end United States' involvement in Vietnam, and show people that the U.S. government could continue to operate after a crisis.</p><p style='float:right;width:729px'>Many historians have described Ford as a good man facing a difficult situation. He trnomy, end United States' involvement in Vietnam, and show people that the U.er a crisis.</p>"
			}
		}
	}
  )
});
router.get('/api/list.json', function(req, res, next) {
  res.json(
	  {
			"ret":true,
			"data":{
				"list":[{
					"id":1,
					"title":"2014年最新大家说英语学习资料信息",
					 "link":"/detail/1"
				},{
					"id":2,
					"title":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					 "link":"/detail/2"
				},{
					"id":3,
					"title":"大家说英语：20110226 MP3在线课程 复习课程",
					 "link":"/detail/3"
				},{
					"id":4,
					"title":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					 "link":"/detail/4"
				},{
					"id":5,
					"title":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					 "link":"/detail/5"
				},{
					"id":6,
					"title":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					 "link":"/detail/6"
				},{
					"id":7,
					"title":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					 "link":"/detail/7"
				},{
					"id":8,
					"title":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					 "link":"/detail/8"
				},{
					"id":9,
					"title":"大家说英语：20110219 MP3在线课程 每周复习",
					 "link":"/detail/9"
				},{
					"id":10,
					"title":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					 "link":"/detail/10"
				},{
					"id":11,
					"title":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					 "link":"/detail/11"
				},{
					"id":12,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":13,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":14,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":15,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":16,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":17,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":18,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":19,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				},{
					"id":20,
					"title":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					 "link":"/detail/12"
				}
			]
			}
		}
  )
});
module.exports = router;
