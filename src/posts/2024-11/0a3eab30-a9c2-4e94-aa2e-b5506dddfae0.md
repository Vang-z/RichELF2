---
icon: mug-hot
title: 解决Windows下使用Endless报错
date: 2024-11-01
category:
  - 服务端
tag:
  - Golang
  - Endless
  - Windows
author: Vang-z
pageInfo: [ "Author", "Date", "Category", "Tag", "Word", "ReadingTime", "PageView" ]
head:
  - - meta
    - name: baidu-site-verification
      content: codeva-wyHhajg1iV
editLink: true
contributors: true
lastUpdated: true
comment: true
prev: false
next: false
excerpt: "解决<a>Windows</a>下使用<a>Endless</a>相关报错, [<a>undefined: syscall.SIGUSR1</a>, <a>undefined: syscall.SIGUSR2</a>, <a>undefined: syscall.SIGTSTP</a>, <a>undefined: syscall.Kill</a>]。"
---

::: info
文章内容参考于[https://learnku.com/articles/51696](https://learnku.com/articles/51696)
:::

### 摘要

本文提供了一个用于解决<a>Windows</a>下使用[Endless](https://github.com/fvbock/endless)出现以下报错的思路:
```bash
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGUSR1
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGUSR2
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGTSTP
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.Kill
```


### 解决方案

前往[`golang`](https://go.dev/)安装目录下的<a>`src/syscall/types_windows.go`</a>文件, 修改并添加以下代码:
```go
// 修改 `signals`, 添加以下代码
var signals = [...]string{
    // 1 - 15: ...

    /** 兼容 endless windows */
    16: "SIGUSR1",
    17: "SIGUSR2",
    18: "SIGTSTP",
    19: "SIGSTOP",
    /** 兼容 endless windows */
}

// 添加以下代码
/** 兼容 endless windows */
func Kill(...interface{}) error {
    return nil
}

const (
    SIGUSR1 = Signal(16)
    SIGUSR2 = Signal(17)
    SIGTSTP = Signal(18)
    SIGSTOP = Signal(19)
)
/** 兼容 endless windows */

```

<Sponsor />
