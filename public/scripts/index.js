import getRandomStoreInfoAndStyle from './getRandomStoreInfoAndStyle.js';
import randomChineseAddress from './address.js';

function getRandomDate() {
  const now = new Date();
  const randomOffset = Math.floor(Math.random() * 2 * 24 * 60 * 60 * 1000); // 0 to 2 days in milliseconds
  const randomDate = new Date(now.getTime() - randomOffset);
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  const hour = String(randomDate.getHours()).padStart(2, '0');
  const minute = String(randomDate.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hour}:${minute}`;
}

// 随机生成商品
function getRandomItems() {
  const products = [
    { name: '有机苹果', code: '2900702034090' },
    { name: '有机香蕉', code: '2900702034091' },
    { name: '有机胡萝卜', code: '2900702034092' },
    { name: '有机生菜', code: '2900702034093' },
    { name: '有机牛奶', code: '2900702034094' },
    { name: '有机无籽西瓜', code: '2900702034089' },
    { name: '有机番茄', code: '2900702034095' },
    { name: '有机黄瓜', code: '2900702034096' },
    { name: '有机菠菜', code: '2900702034097' },
    { name: '有机草莓', code: '2900702034098' },
    { name: '有机蓝莓', code: '2900702034099' },
    { name: '有机柠檬', code: '2900702034100' },
    { name: '有机葡萄', code: '2900702034101' },
    { name: '有机橙子', code: '2900702034102' },
    { name: '有机菠萝', code: '2900702034103' },
    { name: '有机芒果', code: '2900702034104' },
    { name: '有机樱桃', code: '2900702034105' },
    { name: '有机梨子', code: '2900702034106' },
    { name: '有机柚子', code: '2900702034107' },
    { name: '有机杏仁', code: '2900702034108' },
    { name: '有机核桃', code: '2900702034109' },
    { name: '有机腰果', code: '2900702034110' },
    { name: '有机菠菜', code: '2900702034111' },
    { name: '有机花椰菜', code: '2900702034112' },
    { name: '有机生姜', code: '2900702034113' },
    { name: '有机蒜头', code: '2900702034114' },
    { name: '有机洋葱', code: '2900702034115' },
    { name: '有机土豆', code: '2900702034116' },
    { name: '有机芹菜', code: '2900702034117' },
    { name: '有机茄子', code: '2900702034118' },
    { name: '有机卷心菜', code: '2900702034119' },
    { name: '有机青椒', code: '2900702034120' },
    { name: '有机红椒', code: '2900702034121' },
    { name: '有机南瓜', code: '2900702034122' },
    { name: '有机甘蓝', code: '2900702034123' },
    { name: '有机韭菜', code: '2900702034124' },
    { name: '有机芦笋', code: '2900702034125' },
    { name: '有机木瓜', code: '2900702034126' },
    { name: '有机柿子', code: '2900702034127' },
    { name: '有机黑莓', code: '2900702034128' },
    { name: '有机树莓', code: '2900702034129' },
    { name: '有机甜瓜', code: '2900702034130' },
    { name: '有机火龙果', code: '2900702034131' },
    { name: '有机百香果', code: '2900702034132' },
    { name: '有机奇异果', code: '2900702034133' },
    { name: '有机黄桃', code: '2900702034134' },
    { name: '有机李子', code: '2900702034135' },
    { name: '有机桑葚', code: '2900702034136' },
    { name: '有机石榴', code: '2900702034137' },
    { name: '有机西葫芦', code: '2900702034138' },
    { name: '有机萝卜', code: '2900702034139' },
    { name: '有机豌豆', code: '2900702034140' },
    { name: '有机秋葵', code: '2900702034141' },
    { name: '有机紫甘蓝', code: '2900702034142' },
    { name: '有机葱', code: '2900702034143' },
    { name: '有机香菜', code: '2900702034144' },
    { name: '有机芜菁', code: '2900702034145' },
    { name: '有机白萝卜', code: '2900702034146' },
  ];

  let selectedItems = [];
  let numberOfItems = Math.max(Math.floor(Math.random() * 5) + 6, 60); // 确保最少购买10样

  for (let i = 0; i < numberOfItems; i++) {
    const product = products[Math.floor(Math.random() * products.length)];
    const quantity = (Math.random() * 5 + 1).toFixed(2); // 随机数量
    const price = (Math.random() * 10 + 1).toFixed(2); // 随机价格
    const total = (quantity * price).toFixed(2); // 计算总价
    selectedItems.push({
      ...product,
      quantity: parseFloat(quantity),
      price: parseFloat(price),
      total: parseFloat(total),
    });
  }

  return selectedItems;
}

// 超市小票打印函数
function generateReceipt() {
  let items = getRandomItems();
  let dateTime = getRandomDate();
  let storeInfo = getRandomStoreInfoAndStyle();
  let totalAmount = items.reduce((sum, item) => sum + item.total, 0).toFixed(2);
  let quantitySum = items
    .reduce((sum, item) => sum + item.quantity, 0)
    .toFixed(2);

  let receipt = [];

  receipt.push(`<div class="center">${storeInfo.name}</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(
    `<div>${storeInfo.receiptNumber}</div><div>NO.${Math.floor(Math.random() * 100000000000)}</div>`,
  );
  receipt.push(`</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>${dateTime}</div><div>收银员: ${storeInfo.cashier}</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="line"></div>`);

  receipt.push(`<div class="details">`);
  receipt.push(`<div>品名/货号</div><div>单价        数量       小计</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="line"></div>`);

  items.forEach((item) => {
    receipt.push(`<div>${item.name}/${item.code}</div>`);
    receipt.push(`<div class="details">`);
    receipt.push(
      `<div></div><div>${item.price.toFixed(2)} 元    ${item.quantity.toFixed(2)}    ${item.total.toFixed(2)} 元</div>`,
    );
    receipt.push(`</div>`);
  });

  receipt.push(`<div class="line"></div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>数量:${quantitySum} 件数:${items.length}</div>`);
  receipt.push(`<div></div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>原价合计:</div><div>${totalAmount}元</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>折让:</div><div>0.00</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>应付合计:</div><div>${totalAmount}元</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="details">`);
  receipt.push(`<div>付款: 微信支付</div><div>${totalAmount}元</div>`);
  receipt.push(`</div>`);
  receipt.push(`<div class="line"></div>`);
  receipt.push(`<div>备注信息: ${storeInfo.remark}</div>`);
  receipt.push(`<div class="center">${dateTime}</div>`);
  receipt.push(`<div class="center">谢谢惠顾 欢迎下次光临</div>`);
  receipt.push(`<div class="center">联系电话: ${storeInfo.phone}</div>`);
  receipt.push(`<div class="center">地址: ${randomChineseAddress()}</div>`);
  receipt.push(`<div class="center">请在7天内凭小票在服务台开具发票</div>`);

  return { receipt: receipt.join('\n'), style: storeInfo.style };
}

// 初始显示小票
const { receipt, style } = generateReceipt();
document.getElementById('receipt').classList.add(style);
document.getElementById('receipt').innerHTML = receipt;

document.getElementById('btn').addEventListener('click', function () {
  const { receipt, style } = generateReceipt();
  document.getElementById('receipt').classList.add(style);
  document.getElementById('receipt').innerHTML = receipt;

  downloadImage();
});

function downloadImage() {
  const element = document.getElementById('receipt');
  html2canvas(element).then(function (canvas) {
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = img;
    link.download = `小票.png`;
    link.click();
  });
}
