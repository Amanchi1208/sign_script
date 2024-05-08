// 花小猪自动做任务和抽奖
// 20240506

let sheetNameSubConfig = "huaxiaozhu"; // 分配置表名称
let pushHeader = "【花小猪】";
let sheetNameConfig = "CONFIG"; // 总配置表
let sheetNamePush = "PUSH"; // 推送表名称
let sheetNameEmail = "EMAIL"; // 邮箱表
let flagSubConfig = 0; // 激活分配置工作表标志
let flagConfig = 0; // 激活主配置工作表标志
let flagPush = 0; // 激活推送工作表标志
let line = 21; // 指定读取从第2行到第line行的内容
var message = ""; // 待发送的消息
var messageOnlyError = 0; // 0为只推送失败消息，1则为推送成功消息。
var messageNickname = 0; // 1为用昵称替代单元格，0为不替代
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

  push(message); // 推送消息
}

// 总推送
function push(message) {
  if (message != "") {
    message = pushHeader + message; // 加上推送头
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

function give_times(P00001){
    url = "https://pcell.iqiyi.com/lotto/giveTimes"
    times_code_list = ["browseWeb", "browseWeb", "bookingMovie"]
    for(times_code in times_code_list){
      params = {
          "actCode": "bcf9d354bc9f677c",
          "timesCode": times_code,
          "P00001": P00001,
      }
      params = "?actCode=bcf9d354bc9f677c&timesCode=" + times_code + "&P00001=" + P00001 
      resp = HTTP.fetch(url + params , {
        method: "get",
      });
      console.log(resp.json())
    }
}


function lottery(url, headers, data){
  messageSuccess = ""
  messageFail = ""
  // resp = HTTP.fetch(url1 , {
  //   method: "post",
  //   headers: headers,
  //   data: data
  // });

  resp = HTTP.post(
    url,
    JSON.stringify(data),
    { headers: headers }
  );
  
  if (resp.status == 200) {
    resp = resp.json();
    console.log(resp)
    errno = resp["errno"]
    
    if(errno == 0)
    {
      reason = resp["data"]["reason"]
      group_name = ""
      if(reason == undefined || reason == "")
      {
        group_name = resp["data"]["get_reward_info"]["group_name"]
        console.log(group_name)
      }
  
      content = "抽奖：" + group_name + " " + reason
      messageSuccess += content;
      console.log(content)
    }else
    {
      content = "抽奖失败 "
      messageFail += content;
      console.log(content);
    }
  } else {
    content = "抽奖失败 "
    messageFail += content;
    console.log(content);
  }

  msg = [messageSuccess, messageFail]
  return msg

}

// 做任务
function doTask(url, headers, data, event_key_name){
  // {"errno":810001,"errmsg":"param error","data":{"token":["validation.required"],"event_key":["validation.required"]}}
  // {"errno":0,"errmsg":"success","data":{"nacc_resp":{"errno":0,"errmsg":"success","data":true},"node_resp":{"errno":0,"errmsg":"success","data":{"200000_0_00000_000000_0":{"canvas_id":0000,"group_id":0000,"canvas_turn_id":4,"node_id":0000,"node_turn_id":1,"user_id":00000,"pid":0,"start_time":"2024-05-05 09:49:36","finish_time":"2024-05-05 11:00:08","expire_time":"2024-05-05 23:59:59","fail_time":"","status":"finish","reward_list":[{"type":"send_ticket","amount":1,"params":{"agent_key":"task_agent","button_text":"去浏览","event_key":"browse_huahua_member_page","finish_button_text":"已完成",...
  

  // console.log(data)
  messageSuccess = ""
  messageFail = ""
  resp = HTTP.post(
    url,
    JSON.stringify(data),
    { headers: headers }
  );
  
  if (resp.status == 200) {
    resp = resp.json();
    console.log(resp)
    errno = resp["errno"]
    
    if(errno == 0)
    {
      content = "做任务：" + event_key_name + "完成 "
      messageSuccess += content;
      console.log(content)
    }else
    {
      content = "做任务：" + event_key_name + "失败 "
      messageFail += content;
      console.log(content);
    }
  } else {
    content = "做任务：" + event_key_name + "失败 "
    messageFail += content;
    console.log(content);
  }

  // console.log(messageSuccess)
  msg = [messageSuccess, messageFail]
  return msg
}

// 获取game_id
function getGameId(url, headers, data){
  // console.log(data)
  // messageSuccess = ""
  // messageFail = ""
  game_id = ""
  resp = HTTP.post(
    url,
    JSON.stringify(data),
    { headers: headers }
  );
  
  if (resp.status == 200) {
    resp = resp.json();
    console.log(resp)
    errno = resp["errno"]
    
    if(errno == 0)
    {
      content = "获取game_id完成 "
      // messageSuccess += content;
      console.log(content)
      
      xak = ""
      // data
      // conf
      // ext
      // content_conf
      // project_data
      // businessData
      // xakModules
      kf_prob_lottery_arry  = resp["data"]["conf"]["ext"]["content_conf"]["project_data"]["businessData"]["xakModules"]
      // console.log(kf_prob_lottery_arry)
      for(i = 0; i<kf_prob_lottery_arry.length;i++)
      {
        // {
        //   "xak": "kf-prob-lottery-xxxx",
        //   "layerId": "",
        //   "prodKey": "kf-prob-lottery"
        // },
        prodKey = ""
        // console.log(kf_prob_lottery_arry[i])
        // kf = JSON.parse(kf_prob_lottery_arry[i]);
        prodKey = kf_prob_lottery_arry[i]["prodKey"]
        // console.log(prodKey)
        if(prodKey == "kf-prob-lottery")
        {
          xak = kf_prob_lottery_arry[i]["xak"]
          console.log(xak)
        }
      }

      // 路径
      // data
      // conf
      // strategy_data
      // data
      // xaks
      // kf-prob-lottery-xxxx
      // details
      // game_info
      // game_id
      // console.log(xak)
      game_id = resp["data"]["conf"]["strategy_data"]["data"]["xaks"][xak]["details"][0]["game_info"]["game_id"]
      console.log(game_id)

    }else
    {
      content = "获取game_id完成 "
      // messageFail += content;
      console.log(content);
    }
  } else {
    content = "做任务：" + event_key_name + "失败 "
    messageFail += content;
    console.log(content);
  }

  // console.log(messageSuccess)
  // msg = [messageSuccess, messageFail]
  // return msg
  return game_id
}

// 具体的执行函数
function execHandle(cookie, pos) {
  let messageSuccess = "";
  let messageFail = "";
  let messageName = "";

  if (messageNickname == 1) {
    messageName = Application.Range("C" + pos).Text;
  } else {
    messageName = "单元格A" + pos + "";
  }
  // try {
    var url1 = "https://dop.hongyibo.com.cn/popeapi/rosenbridge/lottery/realtime_lotto"; // 抽奖
    var url2 = "https://dop.hongyibo.com.cn/popeapi/rosenbridge/common/sync_event"; // 做任务
    var url3 = "https://api.huaxz.cn/webx/chapter/product/init"; // 获取game_id，抽奖要用
    // dchn = "v6j2MG2"
    dchn = "3eGxp8p"
    // dchn = "a"

    // city_id = 666;  // 城市id
    city_id = Application.Range("D" + pos).Text;
    city_id = parseInt(city_id)
    // console.log(city_id)
    let number = 4; // 抽奖次数

    // 获取game_id
    game_id = ""
    headers = {
      "Host":"api.huaxz.cn",
      "Content-Type": "application/json;charset=utf-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
    };
    data = {
      "args":{
        "runtime_args":{
          "token":cookie,
          "city_id":city_id
        }
      },
      "dchn":dchn
    }
    game_id = getGameId(url3, headers, data)

    headers = {
      "Host":"dop.hongyibo.com.cn",
      "Content-Type": "application/json;charset=utf-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
    };

    messageSuccessTemp = ""
    messageFailTemp = ""
    // 做任务获得抽奖机会,浏览和分享
    event_key = ["browse_huahua_member_page", "user_share_activity"]
    event_key_name = ["浏览页面","分享"]

    event_key = []
    for(i=0; i<event_key.length; i++)
    {
      data = {
        "token":cookie,
        "event_key":event_key[i]
      }
      msg = doTask(url2, headers, data, event_key_name[i])
      // console.log(msg)
      messageSuccess += msg[0]
      messageFail += msg[1]
      // console.log(messageSuccess)
      // console.log(messageFail)
      sleep(2000);
    }


    // resp = HTTP.post(
    //   url2 + params,
    //   JSON.stringify(data),
    //   { headers: headers }
    // );

    // 抽奖
    // {"errno":0,"errmsg":"success","data":{"lotto_status":5,"hit_status":1,"reason":"抱歉，您的抽奖次数已到达上限","get_reward_info":null,"init_ticket_count":0}}
    // {"errno":0,"errmsg":"success","data":{"lotto_status":1,"hit_status":0,"reason":"","get_reward_info":{"group_id":7,"group_name":"花花币8个","vision_conf":{"reward_icon":"https:\/\/s.didi.cn\/xxxx?suffix=.png"},"prize_items":[{"id":0,"item_name":"","item_type":"flower_coin","extra":{"amount":8,"expire_time":"2024-08-01 00:00:00"}}],"ticket_id":3333333,"prize_id":9999},"init_ticket_count":1}}
    for(i=0; i<number; i++)
    {
      console.log("第" + (i+1) + "次抽奖")
      data = {
        "token":cookie,
        "city_id":city_id,
        "game_id":game_id,
      }
      // messageSuccessTemp,messageFailTemp = lottery(url1, headers, data)
      msg = lottery(url1, headers, data)
      messageSuccess += msg[0]
      messageFail += msg[1]
      sleep(2000);
    }


  // } catch {
  //   messageFail += messageName + "失败";
  // }

  // console.log(messageSuccess)
  sleep(2000);
  if (messageOnlyError == 1) {
    message += messageFail;
  } else {
    message += messageFail + " " + messageSuccess;
  }

  message = "帐号：" + messageName + message  // 附加账号信息

  console.log(message);
}
