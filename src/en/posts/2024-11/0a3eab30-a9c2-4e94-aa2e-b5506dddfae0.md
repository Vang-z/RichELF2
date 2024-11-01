---
icon: mug-hot
title: Addressing errors when using Endless on Windows
date: 2024-11-01
category:
  - Server
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
excerpt: "Resolving errors related to using <a>Endless</a> on <a>Windows</a>, such as: [<a>undefined: syscall.SIGUSR1</a>, <a>undefined: syscall.SIGUSR2</a>, <a>undefined: syscall.SIGTSTP</a>, <a>undefined: syscall.Kill<a>]"
---

::: info
The content is referenced from [https://learnku.com/articles/51696](https://learnku.com/articles/51696)
:::

### Abstract

This article offers an approach to resolving errors encountered when using [Endless](https://github.com/fvbock/endless) on <a>Windows</a>:
```bash
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGUSR1
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGUSR2
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.SIGTSTP
*\fvbock\endless@*\endless.go:*:*: undefined: syscall.Kill
```


### Resolving

Navigate to the [`golang`](https://go.dev/) installation directory, open the <a>`src/syscall/types_windows.go`</a> file, and modify it by adding the following code:
```go
// Modify `signals`, add the following code
var signals = [...]string{
    // 1 - 15: ...

    /** Compatibility for endless on Windows */
    16: "SIGUSR1",
    17: "SIGUSR2",
    18: "SIGTSTP",
    19: "SIGSTOP",
    /** Compatibility for endless on Windows */
}

// Add the following code
/** Compatibility for endless on Windows */
func Kill(...interface{}) error {
    return nil
}

const (
    SIGUSR1 = Signal(16)
    SIGUSR2 = Signal(17)
    SIGTSTP = Signal(18)
    SIGSTOP = Signal(19)
)
/** Compatibility for endless on Windows */

```

<Sponsor />
