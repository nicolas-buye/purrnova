# 部署指南

## 部署地址

- **线上网站：** https://purrnova.netlify.app
- **Netlify 控制台：** https://app.netlify.com/sites/purrnova/overview
- **GitHub 仓库：** https://github.com/nicolas-buye/purrnova

## 如何更新网站

改完代码后，运行以下命令推送：

```bash
git add -A
git commit -m "描述你改了什么"
git push origin master
```

推送后 Netlify 会自动重新部署，等 2-3 分钟刷新网站即可看到更新。

---

## 常见问题

### 推送了但网站没更新

**最常见的原因：Netlify 连错了仓库**

曾经出现过的情况：Netlify 连着 `nicolas-buye/purrnova-37119`（一个自动生成的空仓库），而真正代码在 `nicolas-buye/purrnova`。

**检查方法：**

1. 打开 Netlify 项目 → 左侧菜单 **Site settings** → **Build & deploy**
2. 看 **Continuous Deployment** 区域
3. 检查 **Current repository** 是不是 `github.com/nicolas-buye/purrnova`
4. 如果不是，点击 **Manage repository** → **Link to different repository** → 选择正确的仓库 → 部署

### 代码没提交上去

检查本地状态：
```bash
git status          # 看有没有未提交的文件
git log --oneline   # 看本地提交记录
```

如果 `git status` 显示有红色文件，说明没提交，需要 `git add` + `git commit`。

### 强制触发部署

如果 Netlify 没自动触发，可以手动触发：
```bash
git commit --allow-empty -m "Force re-deploy"
git push origin master
```

空提交会生成一个新的 commit，强制 Netlify 重新构建。

### 查看线上效果

用 curl 快速检查线上是否有新内容：
```bash
curl -s https://purrnova.netlify.app | grep "你要找的关键词"
```

---

## 本地开发

```bash
npm run dev      # 启动开发服务器 (http://localhost:3000)
npm run build    # 构建生产版本
```
