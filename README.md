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

## 文字教程及反馈  
公众号“**默库**”  

## 聚合脚本（polymerization）
文件夹“polymerization”内的所有脚本统称为聚合脚本，运行UPDATE.js即可自动生成表格及配置内容。
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
文件夹“single”为独立脚本，需要手动创建表格。文件夹“single”内的非聚合脚本目前已不再维护。**请使用文件夹“polymerization”内的脚本**

## 签到列表

🟢: 正常运行 🔴: 暂不可用 🟡: 待测试 🟤: 随缘

| 状态 | 类别 | 终端 | 任务名称 | 名称 | 脚本 | 检查日期 |备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |:---: |
| 🟢️ | 签到 | WEB | 阿里云盘(多用户版)  | https://www.aliyundrive.com | aliyundrive_multiuser.js | 2024-04-14 | 签到、自动领取首个任务奖励 |
| 🟤 | 签到 | WEB | 百度贴吧 | https://tieba.baidu.com | tieba.js | 2024-05-29 | 签到、只能签6个左右 |
| 🔴 | 签到 | WEB | 吾爱论坛 | https://www.52pojie.cn | 52pojie.js | 2023-08-26 | 签到 |
| 🟢️ | 签到 | WEB | 有道云笔记 | https://note.youdao.com/ | noteyoudao.js | 2023-08-08 | 签到、领取空间 |
| 🟤 | 签到 | 移动端 | WPS(轻量版) | https://vip.wps.cn/ | wps_light.js | 2023-07-31 | 适用于手机端签到，不具备绕验证码功能 |
| 🔴 | 签到 | 客户端 | WPS(客户端版) | https://vip.wps.cn/ | wps_client.js | 2023-07-31 | 适用于PC端签到，需要手动兑换奖励 |
| 🔴 | 多功能 | 小程序 | WPS(稻壳版) | https://vip.wps.cn/ | wps_docker.js | 2024-05-16 | 适用于稻壳，自动领取和保存每日PPT |
| 🟢️ | 签到 | WEB | 网易云游戏 | https://cg.163.com/ | wangyiyungame.js | 2023-08-26 | 签到 |
| 🟢️ | 抽奖 | WEB | 什么值得买 | https://www.smzdm.com/ | smzdm.js | 2024-05-11 | 抽奖的碎银子 |
| 🟢️ | 签到 | WEB | 在线工具 | https://tool.lu/ | toolu.js | 2024-05-11 | 签到获取积分 |
| 🟡 | 签到 | 小程序 | 像素蛋糕 | 像素蛋糕AI修图呀 | cake.js | 2023-08-08 | 签到 |
| 🟡 | 签到 | 小程序 | 甜润世界 | 甜润世界 | tianrun.js | 2023-08-08 | 签到 |
| 🔴 | 多功能 | APP | 叮咚买菜-叮咚果园 | 叮咚买菜 | ddmy_ddgy.js | 2023-11-21 | 领积分、签到、浇水 |
| 🟡 | 多功能 | APP | 叮咚买菜-叮咚鱼塘 | 叮咚买菜 | ddmy_ddyt.js | 2024-04-12 | 领积分、签到、喂饲料 |
| 🟡 | 签到 | APP | 时光相册 | 时光相册 | everphoto.js | 2023-08-15 | 签到、领空间 |
| 🟡 | 签到 | APP | 北京时间 | 北京时间 | btime.js | 2023-08-26 | 签到、领时间币 |
| 🟢️ | 签到 | APP | AcFun | AcFun | acfun.js | 2024-05-08 | 签到得香蕉 |
| 🟢️ | 签到 | APP | 喜马拉雅 | 喜马拉雅 | xmly.js | 2024-05-29 | 签到 |
| 🟡 | 签到 | WEB | ios游戏迷 | https://yuchen.tonghuaios.com/ | tonghua.js | 2023-12-26 | 签到得积分 |
| 🟢️ | 签到 | APP | 希沃白板 | 希沃白板 | easinote.js | 2024-05-29 | 签到得空间 |
| 🟢️ | 签到 | APP | 小木虫 | 小木虫 | xmc.js | 2024-05-03 | 签到得金币 |
| 🟢️ | 签到 | WEB | 夸克网盘 | https://pan.quark.cn/ | quark.js | 2024-05-29 | 签到得空间 |
| 🟢️ | 签到 | APP | 葫芦侠3楼 | 葫芦侠3楼 | huluxia.js | 2024-05-25 | 板块签到 |
| 🔴 | 多功能 | WEB | 爱奇艺 | https://www.iqiyi.com | iqiyi.js | 2024-05-11 | 签到，白金抽奖,做任务得成长值 |
| 🟢️ | 签到 | WEB | 中兴社区 | https://bbs.ztedevices.com/ | ztebbs.js | 2024-05-26 | 签到,得经验和流星 |
| 🟢️ | 签到 | APP | 小米商城 | 小米商城 | mi.js | 2024-05-26 | 签到,得米金 |
| 🟢️ | 签到 | WEB | 看雪论坛 | https://bbs.kanxue.com/ | kanxue.js | 2024-05-26 | 签到,得雪币 |
| 🟢️ | 签到 | WEB | 哔哩哔哩 | https://www.bilibili.com/ | bilibili.js | 2024-05-26 | 直播签到,得经验、辣条和银瓜子 |
| 🟢️ | 多功能 | APP | vivo社区 | https://bbs.vivo.com.cn/newbbs/ | vivo.js | 2024-05-26 | 签到得积分,抽奖 |
| 🟢️ | 多功能 | WEB | 中国移动云盘 | https://yun.139.com/ | caiyun.js | 2024-05-26 | 签到得彩云,做任务 |
| 🟢️ | 多功能 | 小程序 | WPS(打卡版) | https://vip.wps.cn/ | wps_daka.js | 2024-05-29 | 金山文档微信小程序报名和打卡，领取权益 |
| 🟢️ | 多功能 | APP | 天翼云盘 | 天翼云盘 | tianyi.js | 2024-05-26 | 签到空间，抽奖 |
| 🟢️ | 签到 | WEB | 阿里云盘(自动更新token版)  | https://www.aliyundrive.com | aliyun.js | 2024-05-29 | 签到，领取奖励（已无法自动领奖励），领取备份奖励 |
| 🟢️ | 多功能 | WEB | 宽带技术网  | https://www.chinadsl.net/| chinadsl.js | 2024-05-29 | 签到得积分、做任务、领取猫粮 |
| 🟢️ | 签到 | APP | golo汽修大师  | golo汽修大师 | golo.js | 2024-05-29 | 签到得积分,自动更新token |
| 🟢️ | 签到 | APP | 海信爱家  | 海信爱家 | hxaj.js | 2024-05-11 | 签到得积分,自动更新token |
| 🟢️ | 签到 | APP | 中国联通  | 中国联通 | zglt.js | 2024-05-25 | 签到 |
| 🟢️ | 签到 | WEB | 中兴商城 | https://www.ztemall.com/cn/ | ztemall.js | 2024-05-29 | 签到,得积分 |
| 🟢️ | 签到 | WEB | 万能福利吧 | https://www.wnflb2023.com/ | wnflb.js | 2024-05-29 | 签到,得积分 |

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
<a href="https://github.com/SunWuyuan">@孙悟元</a>、
<a href="https://github.com/wawmb">@wawmb</a>

## 致开发者
代码进行了模块化的开发，即使是**零开发经验、无代码基础**也能根据以下教程快速编写出所需脚本。  
文件简要解释：UPDATE.js脚本（更新脚本）能够自动创建表格、自动填充缺失内容，不会覆盖原有数据  
除此脚本外，都是自动化脚本。  
  
### 新增脚本步骤（两步走）：  
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
假设需要添加某雪的脚本（英文mouxue）,则修改为如下。
```js
// 分配置表名称
var subConfigWorkbook=['aliyundrive_multiuser','52pojie','mouxue'];
// CONFIG表内容
var configContent=[
  ['工作表的名称','备注','只推送失败消息（是/否）','推送昵称（是/否）'],
  ['aliyundrive_multiuser','阿里云盘（多用户版）','否','否'],
  ['52pojie','吾爱破解','否','否'],
  ['mouxue','某雪论坛','否','否'],
]
```
此时若运行UPDATE.js脚本，则会在CONFIG表（主配置表）中看到新增了一行有道云笔记的配置，并且新增了名称为mouxue的表  
  
2.根据TEMPLATE.js模板新建自动化脚本（三小步。详细步骤请看文章）  
在模板文件中，按Ctrl+F进行搜索，输入“修改这里”，就可以定位到要修改的地方了。仅有几处需要修改，根据模板内的说明可修改。  
能定位到脚本开头有几处需要修改的地方，名称需要和步骤1中新增的表名称一致如mouxue.js。  
能定位到脚本末尾有几处需要修改的地方，根据抓包的内容（例如抓取签到的包，软件抓包也不需要代码基础，IOS端可用Stream工具、安卓端可用小黄鸟、PC端可用burp）  
  
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
- 2024-05-29
    * 增添【万能福利吧】脚本
- 2024-05-27
    * 修复【WPS(打卡版)】，提示消息内容。
- 2024-05-25
    * 修复【中兴商城】消息推送内容变量错误的问题
    * 更新【WPS(打卡版)】，增加打卡渠道2
- 2024-05-24
    * 增添【中兴商城】脚本
    * 更新【百度贴吧】，增加cookie自动识别功能，复制整个cookie或者单独复制BDUSS内的值都可以执行
- 2024-05-12
    * 修复聚合脚本选择“只推送失败消息”依旧会推送的问题
- 2024-05-11
    * 增添【golo汽修大师】脚本
    * 增添【海信爱家】脚本
- 2024-05-10
    * 增加【爱奇艺】做任务得成长值功能
    * 增添【宽带技术网】脚本
- 2024-05-08
    * 增添【WPS(打卡版)】脚本
    * 修复【花小猪】做任务不增加抽奖次数的问题
    * 增添【天翼云盘】脚本
    * 增添【阿里云盘(自动更新token版) 】脚本
- 2024-05-07
    * 增添【vivo社区】脚本
    * 增添【中国移动云盘】脚本
- 2024-05-05
    * 修复【夸克网盘】实际签到成功，文字却显示失败的问题
    * 增加【爱奇艺】白金抽奖功能
    * 增添【看雪论坛】脚本
    * 增添【哔哩哔哩】脚本
- 2024-05-04
    * 增添【小米商城】脚本
- 2024-05-03
    * 聚合脚本pushplus推送增加标题
    * 更新【夸克网盘】，显示累计签到天数和周签到天数，精简文字
    * 增添【中兴社区】脚本
- 2024-05-02
    * 增添【花小猪】脚本
- 2024-04-30
    * 增添【爱奇艺】脚本
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
<a href="https://www.52pojie.cn/thread-1784167-1-1.html">@佚名RJ</a>、
<!-- <a href="https://github.com/wd210010/just_for_happy">wd210010</a>、 -->
<a href="https://github.com/KD-happy/KDCheckin">KD-happy</a>、
<a href="https://github.com/wd210010/only_for_happly">wd210010</a>、
<a href="https://github.com/Sitoi/dailycheckin">dailycheckin</a>、
<a href="https://github.com/BeaCox/pediy-CheckIn">BeaCox</a>、
<a href="">@Jerry不是猫</a>、
<a href="https://www.52pojie.cn/thread-1869673-43-1.html">@凌帝。</a>

</br>

## README模板来源于
<a href="https://github.com/Sitoi/dailycheckin">dailycheckin仓库</a>
