const addressDatabase = [
  '北京市东城区东华门街道景山前街4号',
  '上海市浦东新区世纪大道100号',
  '广东省广州市天河区体育东路138号',
  '四川省成都市武侯区人民南路四段15号',
  '浙江省杭州市西湖区龙井路25号',
  // 可以添加更多的地址
];

// 生成随机地址的函数
function randomChineseAddress() {
  // 获取随机索引
  const randomIndex = Math.floor(Math.random() * addressDatabase.length);
  // 返回随机选择的地址
  return addressDatabase[randomIndex];
}

export default randomChineseAddress;
