// 飞客茶馆自动签到（修改这里，这里填是什么签到）
// 20240608 （修改这里）

let sheetNameSubConfig = "flyert"; // 分配置表名称（修改这里，这里填表的名称，需要和UPDATE文件中的一致，自定义的）
let pushHeader = "【飞客茶馆】";    //（修改这里，这里给自己看的，随便填）
let sheetNameConfig = "CONFIG"; // 总配置表
let sheetNamePush = "PUSH"; // 推送表名称
let sheetNameEmail = "EMAIL"; // 邮箱表
let flagSubConfig = 0; // 激活分配置工作表标志
let flagConfig = 0; // 激活主配置工作表标志
let flagPush = 0; // 激活推送工作表标志
let line = 21; // 指定读取从第2行到第line行的内容
var message = ""; // 待发送的消息
var messageArray = [];  // 待发送的消息数据，每个元素都是某个账号的消息。目的是将不同用户消息分离，方便个性化消息配置
var messageOnlyError = 0; // 0为只推送失败消息，1则为推送成功消息。
var messageNickname = 0; // 1为推送位置标识（昵称/单元格Ax（昵称为空时）），0为不推送位置标识
var messageHeader = []; // 存放每个消息的头部，如：单元格A3。目的是分离附加消息和执行结果消息
var messagePushHeader = pushHeader; // 存放在总消息的头部，默认是pushHeader,如：【xxxx】

var jsonPush = [
  { name: "bark", key: "xxxxxx", flag: "0" },
  { name: "pushplus", key: "xxxxxx", flag: "0" },
  { name: "ServerChan", key: "xxxxxx", flag: "0" },
  { name: "email", key: "xxxxxx", flag: "0" },
  { name: "dingtalk", key: "xxxxxx", flag: "0" },
  { name: "discord", key: "xxxxxx", flag: "0" },
]; // 推送数据，flag=1则推送
var jsonEmail = {
  server: "",
  port: "",
  sender: "",
  authorizationCode: "",
}; // 有效邮箱配置

flagConfig = ActivateSheet(sheetNameConfig); // 激活推送表
// 主配置工作表存在
if (flagConfig == 1) {
  console.log("开始读取主配置表");
  let name; // 名称
  let onlyError;
  let nickname;
  for (let i = 2; i <= 100; i++) {
    // 从工作表中读取推送数据
    name = Application.Range("A" + i).Text;
    onlyError = Application.Range("C" + i).Text;
    nickname = Application.Range("D" + i).Text;
    if (name == "") {
      // 如果为空行，则提前结束读取
      break; // 提前退出，提高效率
    }
    if (name == sheetNameSubConfig) {
      if (onlyError == "是") {
        messageOnlyError = 1;
        console.log("只推送错误消息");
      }

      if (nickname == "是") {
        messageNickname = 1;
        console.log("单元格用昵称替代");
      }

      break; // 提前退出，提高效率
    }
  }
}

flagPush = ActivateSheet(sheetNamePush); // 激活推送表
// 推送工作表存在
if (flagPush == 1) {
  console.log("开始读取推送工作表");
  let pushName; // 推送类型
  let pushKey;
  let pushFlag; // 是否推送标志
  for (let i = 2; i <= line; i++) {
    // 从工作表中读取推送数据
    pushName = Application.Range("A" + i).Text;
    pushKey = Application.Range("B" + i).Text;
    pushFlag = Application.Range("C" + i).Text;
    if (pushName == "") {
      // 如果为空行，则提前结束读取
      break;
    }
    jsonPushHandle(pushName, pushFlag, pushKey);
  }
  // console.log(jsonPush)
}

// 邮箱配置函数
emailConfig();

flagSubConfig = ActivateSheet(sheetNameSubConfig); // 激活分配置表
if (flagSubConfig == 1) {
  console.log("开始读取分配置表");
  for (let i = 2; i <= line; i++) {
    var cookie = Application.Range("A" + i).Text;
    var exec = Application.Range("B" + i).Text;
    if (cookie == "") {
      // 如果为空行，则提前结束读取
      break;
    }
    if (exec == "是") {
      execHandle(cookie, i);
    }
  }

  message = messageMerge()// 将消息数组融合为一条总消息
  push(message); // 推送消息
}

// 将消息数组融合为一条总消息
function messageMerge(){
  for(i=0; i<messageArray.length; i++){
    if(messageArray[i] != "" && messageArray[i] != null)
    {
      message += messageHeader[i] + messageArray[i] + " "; // 加上推送头
    }
  }
  if(message != "")
  {
    console.log(message)  // 打印总消息
  }
  return message
}

// 总推送
function push(message) {
  if (message != "") {
    message = messagePushHeader + message // 消息头最前方默认存放：【xxxx】
    let length = jsonPush.length;
    let name;
    let key;
    for (let i = 0; i < length; i++) {
      if (jsonPush[i].flag == 1) {
        name = jsonPush[i].name;
        key = jsonPush[i].key;
        if (name == "bark") {
          bark(message, key);
        } else if (name == "pushplus") {
          pushplus(message, key);
        } else if (name == "ServerChan") {
          serverchan(message, key);
        } else if (name == "email") {
          email(message);
        } else if (name == "dingtalk") {
          dingtalk(message, key);
        } else if (name == "discord") {
          discord(message, key);
        }
      }
    }
  } else {
    console.log("消息为空不推送");
  }
}

// 推送bark消息
function bark(message, key) {
  if (key != "") {
    let url = "https://api.day.app/" + key + "/" + message;
    // 若需要修改推送的分组，则将上面一行改为如下的形式
    // let url = 'https://api.day.app/' + bark_id + "/" + message + "?group=分组名";
    let resp = HTTP.get(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    sleep(5000);
  }
}

// 推送pushplus消息
function pushplus(message, key) {
  if (key != "") {
    // url = "http://www.pushplus.plus/send?token=" + key + "&content=" + message;
    url = "http://www.pushplus.plus/send?token=" + key + "&content=" + message + "&title=" + pushHeader;  // 增加标题
    let resp = HTTP.fetch(url, {
      method: "get",
    });
    sleep(5000);
  }
}

// 推送serverchan消息
function serverchan(message, key) {
  if (key != "") {
    url =
      "https://sctapi.ftqq.com/" +
      key +
      ".send" +
      "?title=消息推送" +
      "&desp=" +
      message;
    let resp = HTTP.fetch(url, {
      method: "get",
    });
    sleep(5000);
  }
}

// email邮箱推送
function email(message) {
  var myDate = new Date(); // 创建一个表示当前时间的 Date 对象
  var data_time = myDate.toLocaleDateString(); // 获取当前日期的字符串表示
  let server = jsonEmail.server;
  let port = parseInt(jsonEmail.port); // 转成整形
  let sender = jsonEmail.sender;
  let authorizationCode = jsonEmail.authorizationCode;

  let mailer;
  mailer = SMTP.login({
    host: server,
    port: port,
    username: sender,
    password: authorizationCode,
    secure: true,
  });
  mailer.send({
    from: pushHeader + "<" + sender + ">",
    to: sender,
    subject: pushHeader + " - " + data_time,
    text: message,
  });
  // console.log("已发送邮件至：" + sender);
  console.log("已发送邮件");
  sleep(5000);
}

// 邮箱配置
function emailConfig() {
  console.log("开始读取邮箱配置");
  let length = jsonPush.length; // 因为此json数据可无序，因此需要遍历
  let name;
  for (let i = 0; i < length; i++) {
    name = jsonPush[i].name;
    if (name == "email") {
      if (jsonPush[i].flag == 1) {
        let flag = ActivateSheet(sheetNameEmail); // 激活邮箱表
        // 邮箱表存在
        // var email = {
        //   'email':'', 'port':'', 'sender':'', 'authorizationCode':''
        // } // 有效配置
        if (flag == 1) {
          console.log("开始读取邮箱表");
          for (let i = 2; i <= 2; i++) {
            // 从工作表中读取推送数据
            jsonEmail.server = Application.Range("A" + i).Text;
            jsonEmail.port = Application.Range("B" + i).Text;
            jsonEmail.sender = Application.Range("C" + i).Text;
            jsonEmail.authorizationCode = Application.Range("D" + i).Text;
            if (Application.Range("A" + i).Text == "") {
              // 如果为空行，则提前结束读取
              break;
            }
          }
          // console.log(jsonEmail)
        }
        break;
      }
    }
  }
}

// 推送钉钉机器人
function dingtalk(message, key) {
  let url = "https://oapi.dingtalk.com/robot/send?access_token=" + key;
  let resp = HTTP.post(url, { msgtype: "text", text: { content: message } });
  // console.log(resp.text())
  sleep(5000);
}
// 推送Discord机器人
function discord(message, key) {
  let url = key;
  let resp = HTTP.post(url, { content: message });
  //console.log(resp.text())
  sleep(5000);
}
function sleep(d) {
  for (var t = Date.now(); Date.now() - t <= d; );
}

// 激活工作表函数
function ActivateSheet(sheetName) {
  let flag = 0;
  try {
    // 激活工作表
    let sheet = Application.Sheets.Item(sheetName);
    sheet.Activate();
    console.log("激活工作表：" + sheet.Name);
    flag = 1;
  } catch {
    flag = 0;
    console.log("无法激活工作表，工作表可能不存在");
  }
  return flag;
}

// 对推送数据进行处理
function jsonPushHandle(pushName, pushFlag, pushKey) {
  let length = jsonPush.length;
  for (let i = 0; i < length; i++) {
    if (jsonPush[i].name == pushName) {
      if (pushFlag == "是") {
        jsonPush[i].flag = 1;
        jsonPush[i].key = pushKey;
      }
    }
  }
}

// cookie字符串转json格式
function cookie_to_json(cookies) {
  var cookie_text = cookies;
  var arr = [];
  var text_to_split = cookie_text.split(";");
  for (var i in text_to_split) {
    var tmp = text_to_split[i].split("=");
    arr.push('"' + tmp.shift().trim() + '":"' + tmp.join(":").trim() + '"');
  }
  var res = "{\n" + arr.join(",\n") + "\n}";
  return JSON.parse(res);
}

// 获取10 位时间戳
function getts10() {
  var ts = Math.round(new Date().getTime() / 1000).toString();
  return ts;
}

// 获取13位时间戳
function getts13(){
  // var ts = Math.round(new Date().getTime()/1000).toString()  // 获取10 位时间戳
  let ts = new Date().getTime()
  return ts
}

// 符合UUID v4规范的随机字符串 b9ab98bb-b8a9-4a8a-a88a-9aab899a88b9
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getUUIDDigits(length) {
    var uuid = generateUUID();
    return uuid.replace(/-/g, '').substr(16, length);
}
 


// 获取sign，返回小写
function getsign(data) {
  var sign = Crypto.createHash("md5")
    .update(data, "utf8")
    .digest("hex")
    // .toUpperCase() // 大写
    .toString();
  return sign;
}


// 具体的执行函数
function execHandle(cookie, pos) {
  let messageSuccess = "";
  let messageFail = "";
  let messageName = "";
  // 推送昵称或单元格，还是不推送位置标识
  if (messageNickname == 1) {
    // 推送昵称或单元格
    messageName = Application.Range("C" + pos).Text;
    if(messageName == "")
    {
      messageName = "单元格A" + pos + "";
    }
  }

  posLabel = pos-2 ;  // 存放下标，从0开始
  messageHeader[posLabel] = messageName

  // =================修改这块区域，区域开始=================
  url1 = "https://www.flyert.com/plugin.php"; // 获取formhash、签到url（修改这里，这里填抓包获取到的地址）
  formhash = ""

  // （修改这里，这里填抓包获取header，全部抄进来就可以了，按照如下用引号包裹的格式，其中小写的cookie是从表格中读取到的值。）
  headers= {
    'Cookie': cookie,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  }

  // （修改这里，这里填抓包获取data，全部抄进来就可以了，按照如下用引号包裹的格式。POST请求才需要这个，GET请求就不用它了）
  data = {
  }
  
  // （修改这里，以下请求方式三选一即可)
  // // 请求方式1：POST请求，抓包的data数据格式是 {"aaa":"xxx","bbb":"xxx"} 。则用这个
  // resp = HTTP.post(
  //   url1,
  //   JSON.stringify(data),
  //   { headers: headers }
  // );

  // // 请求方式2：POST请求，抓包的data数据格式是 aaa=xxx&bbb=xxx 。则用这个
  // resp = HTTP.post(
  //   url1,
  //   data,
  //   { headers: headers }
  // );

  resp = HTTP.get(
    url1,
    { headers: headers }
  );
  // 正则匹配
  Reg = [
    /"formhash" value="(.+?)" \/>/i, 
  ]

  valueName = [
    "formhash",
  ]

  html = resp.text();
  // console.log(html)
  for(i=0; i< Reg.length; i++)
  {
    flagTrue = Reg[i].test(html); // 判断是否存在字符串
    if (flagTrue == true) {
      let result = Reg[i].exec(html); // 提取匹配的字符串，["你已经连续签到 1 天，再接再厉！"," 1 "]
      // result = result[0];
      result = result[1];
      if(i == 1){
        content = valueName[i] + ":" + result + " "
        messageSuccess += content;
      }else
      {
        formhash = result
        content = "formhash:" + result + " "
      }
      console.log(content)
    } else {
      content = "formhash获取失败 "
      messageFail += content;
    }
  }

  params = "?id=k_misign:sign&operation=qiandao&formhash=" + formhash + "&from=insign&is_ajax=1&infloat=yes&handlekey=qiandao&inajax=1&ajaxtarget=fwin_content_qiandao"
  url1 = url1 + params
  // 请求方式3：GET请求，无data数据。则用这个
  resp = HTTP.get(
    url1,
    { headers: headers }
  );
  
  if (resp.status == 200) {
    // （修改这里，这里就是自己写了，根据抓包的响应自行修改）
    resp = resp.text();
    console.log(resp)

    // 失败：
    // <?xml version="1.0" encoding="gbk"?>
    // <root><![CDATA[<h3 class="flb"><em>提示信息</em><span><a href="javascript:;" class="flbc" onclick="hideWindow('qiandao');" title="关闭">关闭</a></span></h3>
    // <div class="c altw">
    // <div class="alert_error">未定义操作<script type="text/javascript" reload="1">if(typeof errorhandle_qiandao=='function') {errorhandle_qiandao('未定义操作', {});}</script></div>
    // </div>
    // <p class="o pns">
    // <button type="button" class="pn pnc" id="closebtn" onclick="hideWindow('qiandao');"><strong>确定</strong></button>
    // <script type="text/javascript" reload="1">if($('closebtn')) {$('closebtn').focus();}</script>
    // </p>
    // ]]></root>

    // 重复签到、已经签到过了：
    // <?xml version="1.0" encoding="gbk"?>
    // <root><![CDATA[<h3 class="flb"><em>提示信息</em><span><a href="javascript:;" class="flbc" onclick="hideWindow('qiandao');" title="关闭">关闭</a></span></h3>
    // <div class="c altw">
    // <div class="alert_info"><script type="text/javascript" reload="1">if(typeof succeedhandle_qiandao=='function') {succeedhandle_qiandao('', '每天只能签到一次！请明天再来签到，祝您工作开心、愉快！', {});}hideWindow('qiandao');showDialog('每天 只能签到一次！请明天再来签到，祝您工作开心、愉快！', 'notice', null, function () { window.location.href =''; }, 0, null, null, null, null, 1, 1);</script></div>
    // </div>
    // <p class="o pns">
    // <span class="z xg1">1 秒后页面跳转</span>

    // 签到成功
    // <?xml version="1.0" encoding="gbk"?>
    // <root><![CDATA[    <style>
    //         *{
    //             margin: 0;
    //             padding: 0;
    //         }
    //         .clearfix:before, .clearfix:after {
    //             display: block;
    //             content: "";
    //             height: 0;
    //             clear: both;
    //             visibility: hidden;
    //         }
    //         ul ,li{
    //             list-style: none;
    //         }
    //         i, em{
    //             font-style: normal;
    //         }
    //         .clearfix {
    //             zoom: 1;
    //         }
    //         .modal {
    //             position: fixed;
    //             z-index: 999;
    //             left: 0;
    //             top: 0;
    //             bottom: 0;right: 0;
    //             width: 100%;
    //             height: 100%;
    //             background: rgba(50,50,50,0.3);
    //         }
    //         .pops{
    //             position: relative;
    //             width: 100%;
    //             height: 100%;
    //         }
    //         .check-ins{
    //             position: absolute;
    //             top: 0; left: 0; bottom: 0; right: 0;
    //             margin: auto;
    //           /*  margin-top: -240px;
    //             margin-left: -240px;*/
    //             width: 440px;
    //             height: 440px;
    //             background: #FFFFFF;
    //             border-radius: 2px;
    //             padding: 20px;
    //             z-index: 1001;

    //         }

    //         .check-ins .tit{
    //             text-align: center;
    //             vertical-align: middle;
    //             font-size: 20px;
    //             color: #FF5C00;
    //             letter-spacing: 0;
    //             line-height: 20px;
    //             margin-top:8px;
    //         }
    //         .check-ins .tit i{
    //             display: inline-block;
    //             width: 29px;
    //             height: 24px;
    //             background: url(STYLEIMGDIR/dui.png) no-repeat;
    //             margin-right: 20px;
    //         }
    //         .check-ins .tit span{
    //             font-size: 14px;
    //             color: #FF5C00;
    //             letter-spacing: 0;
    //             text-align: center;
    //             line-height: 20px;
    //             margin-left:10px;
    //         }
    //         .pops .sign-day .day{
    //             margin: 24px 0 0 10px;
    //         }
    //         .check-ins .sign-day li{
    //             position: relative;
    //             float: left;
    //             width: 32px;
    //             height: 32px;
    //             line-height: 32px;
    //             margin-left: 32px;
    //             text-align: center;
    //             border-radius: 50%;
    //             font-size: 14px;
    //             color: #64646E;
    //             letter-spacing: 0;
    //             background: #E4E4E6;
    //         }

    //         .check-ins .sign-day li:not(:first-child):after{
    //             content:"";
    //             display: block;
    //             position: absolute;
    //             left: -32px;
    //             top: 15px;
    //             width: 32px;
    //             height: 2px;
    //             background: #E4E4E6;
    //         }
    //         .check-ins .sign-day li.active {
    //             color: #FFF ;
    //             background: #FF5C00;
    //         }
    //         .check-ins .sign-day li.active:after{
    //             background: #FF5C00;
    //         }

    //         .check-ins .sign-day li:first-child{
    //                   margin: 0;
    //               }
    //         .check-ins-cnt{
    //             font-size: 14px;
    //             color: #64646E;
    //             letter-spacing: 0;
    //             text-align: center;
    //             line-height: 14px;
    //             margin-top:14px;
    //         }
    //         .check-ins-cnt span{
    //             color: #FF5C00;
    //         }
    //         .referral{
    //             position: relative;
    //         }
    //         .referral .referral-tit{
    //             position: absolute;
    //             top:-10px;
    //             left: 50%;
    //             margin-left: -40px;
    //             width: 80px;
    //             height: 20px;
    //             text-align: center;
    //             font-size: 14px;
    //             color: #323232;
    //             line-height: 20px;
    //             background: #fff;
    //         }

    //         .flowersection{
    //             position: relative;
    //         }

    //         .flowersection .flower_tips{
    //             height: 20px;
    //             text-align: center;
    //             font-size: 14px;
    //             color: #323232;
    //             line-height: 20px;
    //             background: #fff;
    //             margin-top: 19px;
    //         }

    //         .flowersection .flower_tips span{
    //             color: #FF5C00;
    //         }

    //         .flowersection .flower_btn_div{
    //             text-align: center;
    //             margin-top: 29px;
    //         }

    //         .flowersection .flower_btn{
    //             background: #0062E6;
    //             font-size: 14px;
    //             color: #FFFFFF;
    //             letter-spacing: 0;
    //             text-align: center;
    //             padding: 5px 20px;
    //             width: 200px;
    //             height: 22px;
    //         }
    //         .flowersection .referral-cnt{
    //             width:440px;
    //             height: 210px;
    //             margin-top:28px;

    //         }

    //         .flowersection .referral-cnt img{
    //             width:440px;
    //             height: 210px;
    //         }
    //         .close{
    //             position: absolute;
    //             top:20px;
    //             right: 20px;
    //             font-size: 18px;
    //             color: #969696;
    //         }
    //     </style>
    // </head>
    // <body>


    // <div class="modal">
    //     <div class="pops">
    //         <div class="check-ins">
    //             <div class="close" onclick="hideWindow('qiandao')">X</div>
    //             <div class="tit">
    //               签到成功<span>+2威望</span>
    //             </div>
    //                         <p class="check-ins-cnt">连续签到<span>7</span>天额外奖励10威望，你还差<span>4</span>天哦~</p>
    //                         <div class="sign-day">
    //                 <ul class="day clearfix">    <li  class="active" >1</li>
    //     <li  class="active" >2</li>
    //     <li  class="active" >3</li>
    //     <li >4</li>
    //     <li >5</li>
    //     <li >6</li>
    //     <li >7</li>

    //                 </ul>
    //             </div>


    //             <div class="flowersection referral" >
    //                 <div class="flower_btn_div" >
    //                     <span ><a class="flower_btn"href="forum.php?mod=forumdisplay&amp;fid=all&amp;filter=digest&amp;digest=1&amp;orderby=dateline">逛社区，给优质内容作者送花</a>  </span>
    //                 </div>


    //                 <div class="flower_tips">
    //                                         今日可免费送<span>3</span>朵花，送花成功威望<span>+1</span>，别忘了用掉哦！
    //                                     </div>

    //                 <div class="referral-cnt" id='signqiandaobox'>
    //                     <div><a  data-track="qiandao_图片广告"    data-title="飞客黑话"  href="" target="_blank"><img nodata-echo="yes" src="" border="0" ></a><img  nodata-echo="yes" style="float:none;display:none;height:1px;width:1px;" src=""></div>                </div>
    //             </div>
    //                     </div>
    //     </div>
    // </div>]]></root>

    
    // signFlag = resp.indexOf("alert_info")   // 已经签到过了
    // signFlag2 = resp.indexOf("succeedhandle_qiandao")  // 已经签到过了
    // signFlag1 = resp.indexOf("签到成功")  // 签到成功，gbk编码无法解析
    // signFlag2 = resp.indexOf("每天只能签到一次")  // 已经签到过了，gbk编码无法解析
    signFlag1 = resp.indexOf("check-ins")  // 签到成功
    signFlag2 = resp.indexOf("succeedhandle_qiandao")  // 已经签到过了

    if(signFlag1 != -1){  // 第一次签到
      // 这里是签到成功
      content = "签到成功 "  // // 给自己看的，双引号内可以随便写
      messageSuccess += content;
      console.log(content)
    }else
    { 
      if(signFlag2 != -1){  // 已签到、重复签到
        content = "今天已签到 "  // // 给自己看的，双引号内可以随便写
        messageSuccess += content;
        console.log(content)
      }else{
        content = "签到失败 "
        messageFail += content;
        console.log(content);
      }
    }

  } else {
    content = "签到失败 "
    messageFail += content;
    console.log(content);
  }

  // =================修改这块区域，区域结束=================

  sleep(2000);
  if (messageOnlyError == 1) {
    messageArray[posLabel] = messageFail;
  } else {
    messageArray[posLabel] = messageFail + " " + messageSuccess;
  }

  if(messageArray[posLabel] != "")
  {
    console.log(messageArray[posLabel]);
  }
}