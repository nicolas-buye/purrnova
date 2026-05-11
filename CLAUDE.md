# CLAUDE.md

## 协作规则

**语言：所有对话必须使用中文。**

---

## 项目概览

项目名称：PurrNova
项目类型：现代 DTC（Direct-to-Consumer）高端猫玩具品牌独立站
技术栈：Next.js 14（App Router）+ Tailwind CSS + TypeScript + Framer Motion
部署平台：Vercel

这是一个现代化、高级感、偏品牌化的猫玩具电商网站。

整体视觉方向参考：

* Apple 官网
* TikTok Shop
* 现代 Shopify DTC 品牌
* 高端宠物品牌

网站整体气质应该：

* 高级
* 极简
* 情绪化
* 有品牌感
* 强视觉冲击
* 移动端优先

避免：

* 廉价模板感
* 传统淘宝风
* 花哨低端电商风
* 儿童卡通感

目标：
网站看起来像一个真实准备上线的欧美宠物创业品牌。

---

# 品牌定位

品牌名：PurrNova

品牌气质：

* 现代
* 高级
* 温暖
* 科技感
* 极简
* 有情绪价值

目标用户：
欧美年轻养猫用户。
特别是：

* 室内养猫用户
* TikTok 用户
* 千禧一代
* Gen Z 宠物用户

品牌核心理念：
"更聪明的玩耍，让室内猫咪更快乐。"

网站需要传达：

* 猫咪幸福感
* 室内运动
* 情绪陪伴
* 主人与猫的连接感

---

# 设计系统

## 颜色系统

背景色：

* #0f0f10

次级背景：

* #18181b

卡片背景：

* #141414

边框颜色：

* #27272a

主文字：

* #ffffff

辅助文字：

* #a1a1a1

强调渐变色：

* #ff6b6b → #ffa500

避免纯黑。
避免高饱和低级配色。

整体视觉需要：
柔和、电影感、高级。

---

# 字体系统

字体：

* Inter

字体风格：

* 几何感
* 干净
* 现代
* 易读

标题层级需要明显。
Hero 标题要大。
正文尽量简洁。

避免长段文字。

---

# UI 风格规范

## 整体风格

使用：

* 大圆角
* 毛玻璃效果
* 细边框
* 柔和阴影
* 大留白
* 平滑动画

避免：

* 尖锐边角
* 信息过密
* 传统电商密集布局
* 大量文字
* Shopify 模板感

整体应该：
高级、透气、有品牌感。

---

# 动效规范

使用 Framer Motion。

动画必须：

* 克制
* 顺滑
* 高级
* 有呼吸感

允许：

* fade up
* fade in
* hover scale
* stagger reveal
* smooth scroll animation

避免：

* 过度视差
* 弹跳动画
* 旋转乱飞
* 花哨转场

动画目的是提升品牌质感，而不是炫技。

---

# 网站结构

## 页面

需要包含：

1. 首页
2. 产品详情页
3. About 页面
4. Contact 页面
5. Cart 页面 / Cart Drawer

当前阶段：
优先完成首页。

不要过度开发后端。
允许使用 mock 数据。

---

# 首页结构

首页按以下顺序布局：

## 1. Header 顶部导航

功能：

* sticky 固定导航
* 毛玻璃效果
* 初始透明
* 滚动后背景加深
* 移动端适配
* 汉堡菜单

布局：

* 左：Logo
* 中：导航
* 右：购物车图标 + 数量

导航菜单：

* Shop
* About
* Contact

风格：
极简、高级。

---

## 2. Hero 首屏

全屏高度。

视觉方向：

* 电影感
* 高级
* 情绪化
* 现代

主标题：
"Smarter Play for Indoor Cats"

副标题：
"Interactive toys designed to stimulate natural instincts and keep your cat active indoors."

CTA 按钮：
"Shop Now"

背景：
暗色渐变 + 发光漂浮猫球视觉元素。

Hero 区域应该像：

* Apple 产品发布页
* 高级创业品牌官网
* 现代 DTC 电商品牌

Hero 是最重要的视觉区域。

---

## 3. Featured Products 精选产品

展示 3 个产品。

布局：

* 桌面端：3 列
* 手机端：单列

每张卡片包含：

* 产品图片
* 产品名称
* 产品描述
* 价格
* Add to Cart 按钮

悬停效果：

* 卡片轻微上浮
* 发光阴影
* 平滑动画

产品：

### 产品 1

名称：Auto Cat Ball
价格：$29.99
描述：
"A smart rolling toy that keeps your cat active and entertained."

### 产品 2

名称：Feather Teaser Wand
价格：$14.99
描述：
"Stimulate your cat's hunting instincts with endless interactive fun."

### 产品 3

名称：Cat Tunnel
价格：$39.99
描述：
"A cozy play tunnel designed for curious indoor cats."

---

## 4. 品牌故事区块（Brand Story）

目的：
解释品牌为什么存在。

标题：
"Designed for Indoor Cats"

内容：
现代室内猫咪需要更多刺激、运动与互动。
PurrNova 希望通过智能互动玩具，让猫咪保持活力、健康和快乐。

包含 3 个 icon：

* Mental Stimulation
* Endless Energy
* Indoor Happiness

这个区块需要：
有情绪感、有品牌感。

---

## 5. 视频展示区（Video Showcase）

标题：
"As Seen on TikTok"

风格：
TikTok 风格竖屏视频卡片。

布局：

* 横向滚动
* snap scrolling
* 手机优先

每张视频卡片：

* 自动播放静音视频
* 大圆角
* 播放按钮
* 点赞数
* 短标题

整个区域需要：
现代、社交媒体感强。

---

## 6. 用户评价区（Testimonials）

布局：

* 桌面端 2x2
* 手机端单列

每张评价：

* 用户头像
* 五星评分
* 用户评价
* 用户名

整体需要：
真实、有情绪价值。

避免企业化假评论风格。

---

## 7. Footer 底部

4 列布局：

第一列：

* 品牌介绍
* 社交图标

第二列：

* Shop 链接

第三列：

* 公司页面链接

第四列：

* 邮件订阅输入框

底部：

* 版权信息

整体风格：
极简、干净。

---

# 技术要求

## 技术栈

* Next.js 14 App Router
* TypeScript
* Tailwind CSS
* Framer Motion

## 代码规范

要求：

* 组件化
* 文件结构清晰
* 响应式设计
* 移动端优先
* 使用语义化 HTML
* 良好可读性

避免：

* 大量 inline style
* 重复代码
* 巨型组件

---

# 文件结构

app/
components/
lib/
public/

采用组件化架构。

---

# 产品数据

产品数据存放：
lib/products.ts

当前阶段使用 mock JSON 数据即可。

第一阶段不需要数据库。

---

# 购物车系统

使用 React Context / local state 即可。

暂时不要接真实支付。

优先关注前端体验。

---

# 开发哲学（非常重要）

优先级：

1. 品牌感
2. 视觉高级感
3. 移动端体验
4. 动画顺滑度
5. 电商功能

不要：

* 过早开发后端
* 过度做功能
* 让 UI 看起来像模板

最终目标：
网站看起来像：
"一个真实准备上线的欧美宠物创业品牌"。

---

# 开发顺序

按顺序逐步开发：

1. Header
2. Hero Section
3. Featured Products
4. Brand Story
5. Video Showcase
6. Testimonials
7. Footer
8. 产品详情页
9. Cart 系统

始终优先视觉打磨。

---

# 最终目标

打造一个：

* 高级
* 情绪化
* 视觉强
* TikTok 风格
* 真正像品牌

的现代猫玩具独立站。

网站必须：

* 手机端体验优秀
* 适合 TikTok 引流
* 看起来真实可商用
* 不像 AI 自动生成
* 有明显品牌感

最终效果应该像：
真正准备投放广告和上线销售的欧美 DTC 品牌网站。
