<p align="center">
    <img src="https://socialify.git.ci/imoki/sign_script/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark"/>
    <br><strong><font size=50>签到脚本框架</font></strong>
    <br>基于【金山文档】的签到脚本框架
    <br>支持多账号使用、支持消息推送、易于编写新脚本
</p>

<p align="center">
    <a href="https://github.com/imoki/sign_script/stargazers"><img src="https://img.shields.io/github/stars/imoki/sign_script?style=popout-square" alt="GitHub stars"></a>
    <a href="https://github.com/imoki/sign_script/network/members"><img src="https://img.shields.io/github/forks/imoki/sign_script?style=popout-square" alt="GitHub forks"></a>
    <a href="https://github.com/imoki/sign_script/issues"><img src="https://img.shields.io/github/issues/imoki/sign_script?style=popout-square" alt="GitHub issues"></a>
</p>

## 视频教程
可参考<a href="https://github.com/SunWuyuan">孙悟元</a>开发者录制的视频
<a href="https://www.bilibili.com/video/BV18j411r79G">https://www.bilibili.com/video/BV18j411r79G</a>  

## 文本教程  
可关注“**默库**”公众号  

## 聚合脚本（polymerization）
文件夹“polymerization”为聚合脚本，运行UPDATE.js即可自动生成表格及配置内容。
### 聚合脚本优势
* 所有脚本及配置表格汇集在一个文档中，利于统一管理和配置
* 方便后续更新脚本，仅需运行UPDATE脚本即可自动新增最新表格及配置，不再需要手动新建表格框架
* 方便定时任务的添加与查看
* 支持仅推送错误消息、推送昵称等，支持更多的推送方式
* 配置灵活快捷，利于新增脚本及新配置功能
* 支持多脚本共用同一个表格，如WPS(轻量版)、WPS(客户端版)、WPS(稻壳版)脚本共用名称为wps的表格。

## 调试脚本（DEBUG、仅用于测试脚本错误）
文件夹“DEBUG”为适配聚合版脚本的调试脚本，如果运行聚合脚本出现问题，可复制此文件夹内的调试脚本并运行，可一定程度指出是何种错误。

## 非聚合脚本（独立脚本、single，非聚合脚本目前已不再维护）
文件夹“single”为独立脚本，需要手动创建表格。一个文档内只有一个脚本呢。
### 非聚合脚本表格内容参考
| cookie(默认20个) | 是否执行(是/否) | 账号名称(可不填写) | bark | 是否推送(是/否) | pushplus | 是否推送(是/否) | ServerChan | 是否推送(是/否) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| xxxxxxxx1| 是 | 昵称1 | xxxxxx | 否 | xxxxxx | 否 | xxxxxx | 否 | 
| xxxxxxxx2 | 否 | 昵称2 |   |   |   |   |   |   |				


## 签到列表

🟢: 正常运行 🔴: 暂不可用 🟡: 待测试 🟤: 随缘

| 状态 | 类别 | 终端 | 任务名称 | 名称 | 脚本名称 | 检查日期 | 是否支持多用户 | 是否需要表格 |备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 🟢️ | 签到 | WEB | 阿里云盘(极简版) | https://www.aliyundrive.com | aliyundrive_light.js | 2023-07-31 | 否 | 是 | 签到，无推送功能 |
| 🟢️ | 签到 | WEB | 阿里云盘(多用户版)  | https://www.aliyundrive.com | aliyundrive_multiuser.js | 2024-04-14 | 是 | 是 | 签到、自动领取首个任务奖励 |
| 🟤 | 签到 | WEB | 百度贴吧 | https://tieba.baidu.com | tieba.js | 2024-04-24 | 是 | 是 | 签到、只能签6个左右 |
| 🔴 | 签到 | WEB | 吾爱论坛 | https://www.52pojie.cn | 52pojie.js | 2023-08-26 | 是 | 是 | 签到 |
| 🟢️ | 签到 | WEB | 有道云笔记 | https://note.youdao.com/ | noteyoudao.js | 2023-08-08 | 是 | 是 | 签到、领取空间 |
| 🟤 | 签到 | 移动端 | WPS(轻量版) | https://vip.wps.cn/ | wps_light.js | 2023-07-31 | 是 | 是 | 适用于手机端签到，不具备绕验证码功能 |
| 🔴 | 签到 | 客户端 | WPS(客户端版) | https://vip.wps.cn/ | wps_client.js | 2023-07-31 | 是 | 是 | 适用于PC端签到，需要手动兑换奖励 |
| 🟢️ | 签到 | 小程序 | WPS(稻壳版) | https://vip.wps.cn/ | wps_docker.js | 2024-04-24 | 是 | 是 | 适用于稻壳签到，自动领取和保存每日PPT |
| 🟢️ | 签到 | WEB | 网易云游戏 | https://cg.163.com/ | wangyiyungame.js | 2023-08-26 | 是 | 是 | 签到 |
| 🟢️ | 抽奖 | WEB | 什么值得买 | https://www.smzdm.com/ | smzdm.js | 2024-04-24 | 是 | 是 | 抽奖 |
| 🟢️ | 签到 | WEB | 在线工具 | https://tool.lu/ | toolu.js | 2024-04-24 | 是 | 是 | 签到获取积分 |
| 🟡 | 签到 | 小程序 | 像素蛋糕 | 像素蛋糕AI修图呀 | cake.js | 2023-08-08 | 是 | 是 | 签到 |
| 🟡 | 签到 | 小程序 | 甜润世界 | 甜润世界 | tianrun.js | 2023-08-08 | 是 | 是 | 签到 |
| 🔴 | 多功能 | APP | 叮咚买菜-叮咚果园 | 叮咚买菜 | ddmy_ddgy.js | 2023-11-21 | 是 | 是 | 领积分、签到、浇水 |
| 🟢️ | 多功能 | APP | 叮咚买菜-叮咚鱼塘 | 叮咚买菜 | ddmy_ddyt.js | 2024-04-12 | 是 | 是 | 领积分、签到、喂饲料 |
| 🟢️ | 签到 | APP | 时光相册 | 时光相册 | everphoto.js | 2023-08-15 | 是 | 是 | 签到、领空间 |
| 🟢️ | 签到 | APP | 北京时间 | 北京时间 | btime.js | 2023-08-26 | 是 | 是 | 签到、领时间币 |
| 🟢️ | 签到 | APP | AcFun | AcFun | acfun.js | 2024-04-24 | 是 | 是 | 签到 |
| 🟢️ | 签到 | APP | 喜马拉雅 | 喜马拉雅 | xmly.js | 2024-04-24 | 是 | 是 | 签到 |
| 🟢️ | 签到 | WEB | ios游戏迷 | https://yuchen.tonghuaios.com/ | xmly.js | 2023-12-26 | 是 | 是 | 签到得积分 |
| 🟢️ | 签到 | APP | 希沃白板 | 希沃白板 | easinote.js | 2024-04-24 | 是 | 是 | 签到得空间 |
| 🟢️ | 签到 | APP | 小木虫 | 小木虫 | xmc.js | 2024-04-24 | 是 | 是 | 签到得金币 |
| 🟢️ | 签到 | WEB | 夸克网盘 | https://pan.quark.cn/ | quark.js | 2024-04-24 | 是 | 是 | 签到得空间 |
| 🟢️ | 签到 | APP | 葫芦侠3楼 | 葫芦侠3楼 | huluxia.js | 2024-04-24 | 是 | 是 | 板块签到 |

## 支持的通知列表

- Bark（iOS）
- pushplus
- Server酱
- 邮箱
- 钉钉
- Discord

## 建议  
* 不同wps版本签到间隔30分钟  
* 定时任务时间尽量上午九点半之后  
* 定时任务尽量不设在同一时间  


## 贡献者  
<a href="https://github.com/jarryyen">@jarryyen</a>、
<a href="https://github.com/darkbfly">@darkbfly</a>、
<a href="https://github.com/SunWuyuan">@孙悟元</a>

## 致开发者
代码进行了模块化的开发，即使是**零开发经验、无代码基础**也能根据以下教程快速编写出所需脚本。  
文件简要解释：UPDATE.js脚本（更新脚本）能够自动创建表格、自动填充缺失内容，不会覆盖原有数据  
除此脚本外，都是自动化脚本。  
  
### 新增脚本步骤：  
1. 向UPDATE.js脚本中写入新脚本的表格配置数据  
如原来表格信息是这样  
```js
// 分配置表名称
var subConfigWorkbook=['aliyundrive_multiuser','52pojie'];
// CONFIG表内容
var configContent=[
  ['工作表的名称','备注','只推送失败消息（是/否）','推送昵称（是/否）'],
  ['aliyundrive_multiuser','阿里云盘（多用户版）','否','否'],
  ['52pojie','吾爱破解','否','否'],
]
```
假设需要添加有道云笔记的脚本（英文noteyoudao）,则修改为如下。
```js
// 分配置表名称
var subConfigWorkbook=['aliyundrive_multiuser','52pojie','noteyoudao'];
// CONFIG表内容
var configContent=[
  ['工作表的名称','备注','只推送失败消息（是/否）','推送昵称（是/否）'],
  ['aliyundrive_multiuser','阿里云盘（多用户版）','否','否'],
  ['52pojie','吾爱破解','否','否'],
  ['noteyoudao','有道云笔记','否','否'],
]
```
此时若运行UPDATE.js脚本，则会在CONFIG表（主配置表）中看到新增了一行有道云笔记的配置，并且新增了名称为noteyoudao的表  
  
2. 新建自动化脚本，名称需要和步骤1中新增的表名称一致。如上述的noteyoudao.js。可以直接复制已有的自动化脚本，在此基础上修改。  
例如修改52pojie脚本为新增的noteyoudao脚本  
在脚本开头的几行会有此脚本的基础信息，将其修改  
原脚本为：
```js
let sheetNameSubConfig = "52pojie"; // 分配置表名称
let pushHeader = "【52pojie】";
```  
修改后脚本为：
```js
let sheetNameSubConfig = "noteyoudao"; // 这里需要和步骤1中的表名称一致
let pushHeader = "【有道云笔记】";  // 这里的内容可以随意填写，仅作为消息推送的备注
```  
  
然后修改处于脚本最末尾的execHandle函数，根据抓包的内容（例如抓取签到的包，软件抓包也不需要代码基础，IOS端可用Stream工具、安卓端可用小黄鸟、PC端可用burp）填写如下标注的几处修改的地方即可。
原脚本大致内容会为：
```js
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
  try {
    var url1 = "https://xxxxxx.com";    // 修改处①
    data ={                             // 修改处②，若是get请求则忽略此处
        "键":"值",
    }
    headers = {                         // 修改处③
      cookie: cookie,
      "键":"值",
    };

    let resp = HTTP.fetch(url1, {       // 可能修改处，若为post请求则用这块代码
      method: "post",
      headers: headers,
      data: data,
    });

    // let resp = HTTP.fetch(url1, {    // 可能修改处，若为get请求则用这块代码
    //   method: "get",
    //   headers: headers,
    // });

    if (resp.status == 200) {           // 可能修改处，按需对json格式修改。若不会修改，则可以忽略此处
      resp = resp.json();
      console.log(resp);
      messageSuccess += "帐号：" + messageName + "签到成功 " ;
      console.log("帐号：" + messageName + "签到成功 ");
    } else {
      console.log(resp.text());
      messageFail += "帐号：" + messageName + "签到失败 ";
      console.log("帐号：" + messageName + "签到失败 ");
    }
  } catch {
    messageFail += messageName + "失败";
  }

  sleep(2000);
  if (messageOnlyError == 1) {
    message += messageFail;
  } else {
    message += messageFail + " " + messageSuccess;
  }
  console.log(message);
}
```  
例如修改为noteyoudao的脚本后的内容为
```js
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
  try {
    var url1 = "https://note.youdao.com/yws/mapi/user?method=checkin";   // 修改了这里
    headers = { // 修改了这里
      cookie: cookie,   
      "User-Agent": "YNote",
      Host: "note.youdao.com",
    };

    let resp = HTTP.fetch(url1, {   // 修改了这里
      method: "post",
      headers: headers,
    });

    if (resp.status == 200) {   // 修改了这里
      resp = resp.json();
      console.log(resp);
      total = resp["total"] / 1048576;
      space = resp["space"] / 1048576;
      messageSuccess += "帐号：" + messageName + "签到成功，本次获取 " + space + " M, 总共获取 " + total + " M ";
      console.log("帐号：" + messageName + "签到成功，本次获取 " + space + " M, 总共获取 " + total + " M ");
    } else {
      console.log(resp.text());
      messageFail += "帐号：" + messageName + "签到失败 ";
      console.log("帐号：" + messageName + "签到失败 ");
    }
  } catch {
    messageFail += messageName + "失败";
  }

  sleep(2000);
  if (messageOnlyError == 1) {
    message += messageFail;
  } else {
    message += messageFail + " " + messageSuccess;
  }
  console.log(message);
}
```
此时就成功创建新脚本了。  

## 特别声明

- 本仓库发布的脚本仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

- 本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。

- 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 本人对于由此引起的任何隐私泄漏或其他后果概不负责。

- 请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。

- 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关脚本。

- 任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或Script项目的规则，则视为您已接受此免责声明。

**您必须在下载后的24小时内从计算机或手机中完全删除以上内容**

> ***您使用或者复制了本仓库且本人制作的任何脚本，则视为 `已接受` 此声明，请仔细阅读***

## 更新日志 
- 2024-04-24
    * 增添【葫芦侠3楼】脚本
    * 修复【夸克网盘】显示容量计算错误的问题
- 2024-04-23
    * 增添【夸克网盘】脚本
- 2024-04-14
    * 增添【小木虫】脚本
- 2024-04-12
    * 增添【希沃白板】脚本
    * 增加【叮咚买菜-叮咚鱼塘】自动领取积分的功能
- 2024-04-11
    * 修复【WPS(稻壳版)】不自动签到且不录取PPT的问题
    * 增加【WPS(稻壳版)】自动转存PPT到“WPS云文档”里的功能
- 2024-02-08
    * 增添【ios游戏迷】脚本
- 2023-11-21
    * 修复【叮咚买菜-叮咚果园】和【叮咚买菜-叮咚果园】浇水失败不推送问题
    * 增加对【叮咚买菜-叮咚果园】和【叮咚买菜-叮咚果园】的seedId过期校验功能
- 2023-11-15 
    * 增添【喜马拉雅】脚本 
- 2023-11-13 
    * 增添【AcFun】脚本 
- 2023-08-26 
    * 更新【叮咚买菜-叮咚果园】，增添施肥功能
- 2023-08-20 
    * 更新【叮咚买菜-叮咚果园】，增添签到接口
- 2023-08-18 
    * 增添【北京时间】脚本
- 2023-08-15 
    * 修复【叮咚买菜-叮咚鱼塘】不自动做任务的问题
    * 增添【时光相册】脚本
- 2023-08-14 
    * 更新【叮咚买菜-叮咚果园】，增添积分签到、三餐开福袋
    * 更新【叮咚买菜-叮咚鱼塘】，增添部分任务奖励领取
- 2023-08-12 
    * 更新【叮咚买菜-叮咚鱼塘】签到接口
- 2023-08-11 
    * 增添【叮咚买菜-叮咚鱼塘】脚本
    * 更新【叮咚买菜-叮咚果园】签到接口
    * 更新【吾爱论坛】脚本，增加对响应的解析，增加失败后再次签到功能，提高稳定性
- 2023-08-10 
    * 增添【叮咚买菜-叮咚果园】脚本
- 2023-08-08 
    * 增添【甜润世界】脚本
- 2023-08-06 
    * 增添【像素蛋糕】脚本
    * 取消【什么值得买】脚本的第二次抽奖功能
    * 聚合脚本中增添Discord推送
- 2023-08-05 
    * 增添【在线工具】脚本
- 2023-07-31 
    * 增添【什么值得买】脚本
- 2023-07-30
    * 修复聚合脚本中阿里云盘只推送最后一个账户的问题
    * 聚合脚本中增添钉钉机器人推送
- 2023-07-29
    * 聚合脚本中增添邮箱推送
- 2023-07-28
    * 聚合脚本中的【阿里云盘】增加"是否月末才领取奖励"配置
- 2023-07-27 
    * 增添【网易云游戏】脚本
    * 【WPS(稻壳版)】增加自动领取每日PPT功能
- 2023-07-26 
    * 推出聚合脚本

## 代码参考
<a href="https://github.com/HeiDaotu/WFRobertQL">WFRobertQL</a>、
<a href="https://github.com/kxs2018/daily_sign">daily_sign</a>、
<a href="https://www.52pojie.cn/thread-1811357-1-1.html">@qike2391</a>、
<!-- <a href="https://github.com/wd210010/just_for_happy">wd210010</a>、 -->
<a href="https://github.com/KD-happy/KDCheckin">KD-happy</a>、
<a href="https://github.com/wd210010/only_for_happly">wd210010</a></br>

## README模板来源于
<a href="https://github.com/Sitoi/dailycheckin">dailycheckin仓库</a>
