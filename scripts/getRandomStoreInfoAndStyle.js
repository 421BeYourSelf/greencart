/**
 * 随机店铺信息
 */
function getRandomStoreInfoAndStyle() {
  const randomName = generateRandomName();
  const randomPhone = generateRandomPhone();
  const randomCashier = generateRandomNumber(4);
  const randomReceiptNumber = generateRandomNumber(6);
  const randomRemark = generateRandomRemark();
  const randomStyle = generateRandomStyle();

  return {
    name: randomName,
    phone: randomPhone,
    cashier: randomCashier,
    receiptNumber: randomReceiptNumber,
    remark: randomRemark,
    style: randomStyle,
  };
}


// 随机生成名字的函数
function generateRandomName() {
  const length = Math.floor(Math.random() * 4) + 2; // 随机生成2到5之间的长度

  let name = '';
  const characterPool = [
    '安', '邦', '超', '德', '方', '丰', '福', '广', '海', '华', '汇', '佳', '嘉', '建', '京', '景', '科', '康', '乐', '利',
    '龙', '美', '宁', '平', '庆', '瑞', '升', '顺', '天', '万', '文', '兴', '雅', '益', '优', '源', '跃', '展',
  ];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    name += characterPool[randomIndex];
  }

  const suffixes = ['超市', '商店', '便利店'];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return name + randomSuffix;
}

function generateRandomPhone() {
  const areaCodes = ['010', '021', '0796', '0731', '0755', '0510'];
  const randomAreaCode =
    areaCodes[Math.floor(Math.random() * areaCodes.length)];
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000)
    .toString()
    .substring(0, 8);
  return randomAreaCode + '-' + randomNumber;
}

function generateRandomNumber(length) {
  return Math.floor(Math.random() * Math.pow(10, length))
    .toString()
    .padStart(length, '0');
}

function generateRandomRemark() {
  const remarks = [
    'M',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const randomRemark = remarks[Math.floor(Math.random() * remarks.length)];
  return randomRemark + generateRandomNumber(20);
}

function generateRandomStyle() {
  const styles = ['style1', 'style2', 'style3'];
  return styles[Math.floor(Math.random() * styles.length)];
}

export default getRandomStoreInfoAndStyle;
