let data = [
  {
    name: '用例1：简单文本',
    text: '123abc飞鹅',
  },
  {
    name: '用例2：打印文本',
    text: '<CB>测试标题</CB><CB>换行1</CB><CB>2222</CB>广东广州市番禺区琶洲回家广场<BR>表头1<BR>表头2<BR>表头3<BR>客户: 老大爷<BR>客户手机 13672438300<BR>客户地址 广东广州市新港中路3977号<BR>打印时间: 2020-06-19 13:39  <BR>单号: 草稿单<BR>打印次数 0  <BR>================================<BR>货名 (单位) 货号<BR>多规格<BR><RIGHT>     数量   拿货价          金额</RIGHT>--------------------------------<BR>py 货品1587439141.2718248 (个) Python<BR>红色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439141.2718248 (个) Python<BR>红色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439141.2718248 (个) Python<BR>红色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439141.2718248 (个) Python<BR>蓝色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439141.2718248 (个) Python<BR>蓝色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439141.2718248 (个) Python<BR>蓝色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439141.2718248 (个) Python<BR>黄色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439141.2718248 (个) Python<BR>黄色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439141.2718248 (个) Python<BR>黄色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439621.1580117 (个) Python<BR>红色 L<BR><RIGHT>       21       25           525</RIGHT>py 货品1587439621.1580117 (个) Python<BR>红色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439621.1580117 (个) Python<BR>红色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439621.1580117 (个) Python<BR>蓝色 L<BR><RIGHT>       21       25           525</RIGHT>py 货品1587439621.1580117 (个) Python<BR>蓝色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439621.1580117 (个) Python<BR>蓝色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439621.1580117 (个) Python<BR>黄色 L<BR><RIGHT>       21       25           525</RIGHT>py 货品1587439621.1580117 (个) Python<BR>黄色 M<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439621.1580117 (个) Python<BR>黄色 XL<BR><RIGHT>        1       25            25</RIGHT>旺仔小馒头 (包) <BR>香草味<BR><RIGHT>        2       30            60</RIGHT>旺仔小馒头 (包) <BR>草莓味<BR><RIGHT>        1       30            30</RIGHT>洁柔纸巾 (包) <BR><BR><RIGHT>        3       10            30</RIGHT>py 货品1587439921.186087 (个) Python<BR>红色 L<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439921.186087 (个) Python<BR>红色 M<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439921.186087 (个) Python<BR>红色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439921.186087 (个) Python<BR>蓝色 L<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439921.186087 (个) Python<BR>蓝色 M<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439921.186087 (个) Python<BR>蓝色 XL<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439921.186087 (个) Python<BR>黄色 L<BR><RIGHT>        2       25            50</RIGHT>py 货品1587439921.186087 (个) Python<BR>黄色 M<BR><RIGHT>        1       25            25</RIGHT>py 货品1587439921.186087 (个) Python<BR>黄色 XL<BR><RIGHT>        1       25            25</RIGHT>固态 (个) <BR>3<BR><RIGHT>        1        0             0</RIGHT>固态 (个) <BR>5电<BR><RIGHT>        1        0             0</RIGHT>固态 (个) <BR>996<BR><RIGHT>        1        0             0</RIGHT>固态 (个) <BR>路<BR><RIGHT>        1        0             0</RIGHT>固态 (个) <BR>6<BR><RIGHT>        1        0             0</RIGHT>固态 (个) <BR>1<BR><RIGHT>        1        0             0</RIGHT>py 货品1586936390.415456 (个) Python<BR>红色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1586936390.415456 (个) Python<BR>红色 M<BR><RIGHT>        3       25            75</RIGHT>py 货品1586936390.415456 (个) Python<BR>红色 XL<BR><RIGHT>        2       25            50</RIGHT>py 货品1586936390.415456 (个) Python<BR>蓝色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1586936390.415456 (个) Python<BR>蓝色 M<BR><RIGHT>        3       25            75</RIGHT>py 货品1586936390.415456 (个) Python<BR>蓝色 XL<BR><RIGHT>        2       25            50</RIGHT>py 货品1586936390.415456 (个) Python<BR>黄色 L<BR><RIGHT>        1       25            25</RIGHT>py 货品1586936390.415456 (个) Python<BR>黄色 M<BR><RIGHT>        3       25            75</RIGHT>py 货品1586936390.415456 (个) Python<BR>黄色 XL<BR><RIGHT>        2       25            50</RIGHT>py 货品1587440674.5501642 (个) Python<BR>红色 L<BR><RIGHT>        2       25            50</RIGHT>py 货品1587440674.5501642 (个) Python<BR>红色 M<BR><RIGHT>        1       25            25</RIGHT>py 货品1587440674.5501642 (个) Python<BR>红色 XL<BR><RIGHT>        2       25            50</RIGHT>py 货品1587440674.5501642 (个) Python<BR>蓝色 L<BR><RIGHT>        2       25            50</RIGHT>py 货品1587440674.5501642 (个) Python<BR>蓝色 M<BR>',
  },
  {
    name: '用例3：货币符号',
    text: '￥$₸￡€¥',
  },
  {
    name: '用例4：特殊字符',
    text: `~!@#$&*()=:/,;?+"'`,
  },
  {
    name: '用例5：转义字符',
    text: `\n\b\t\v\f\r\"\'`,
  },
  {
    name: '用例6：Unicode字符',
    text: '\u0008\u0009\u000C\uFEFF',
  },
  {
    name: '用例7：空字符',
    text: '/&nbsp;  ',
  },
];

module.exports = data;