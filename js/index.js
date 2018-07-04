var vm = new Vue({
	el: '#app',
	data: {
		info: [{
				name: "张三",
				age: 18,
				sex: "男",
				phone: "13578992316"
			},
			{
				name: "李四",
				age: 20,
				sex: "男",
				phone: "13509992979"
			},
			{
				name: "李珊珊",
				age: 18,
				sex: "女",
				phone: "13555992317"
			},
			{
				name: "苏打撒",
				age: 18,
				sex: "男",
				phone: "13570992317"
			}
		],
		adinfo: {
			name: "",
			age: 0,
			sex: "男",
			phone: ""
		}
		//msg:'hello vue'
	},
	methods: {
		addInfo: function(e) {
			if(this.adinfo.name == "") {
				alert("名字不能为空，请重新输入！");
				return;
			}
			if(this.adinfo.age < 0) {
				alert("请输入正确的年龄！");
				return;
			}
			if(this.adinfo.phone == "" || this.adinfo.phone.length != 11) {
				alert("请输入正确的手机号！");
				return;
			}
			this.info.unshift(this.adinfo);
			this.adinfo = {
				name: "",
				age: 0,
				sex: "男",
				phone: ""
			}
		},
		rmInfo: function(i) {
			this.info.splice(i, 1);
		}
	}
});