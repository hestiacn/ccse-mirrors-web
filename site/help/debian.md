---
sidebarShare: true
prev: false
next: false
---

# [Debian](/debian/) Mirror

## Introduction

> [Debian](https://en.wikipedia.org/wiki/Debian), also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software.

## Backup Existing Configuration

``` sh
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

## Edit Configuration File

Write the following settings to `/etc/apt/sources.list` if you are using Debian 11 "bullseye". 

``` toml

deb https://mirrors.sustech.edu.cn/debian/ bullseye main non-free contrib
deb-src https://mirrors.sustech.edu.cn/debian/ bullseye main non-free contrib

deb https://mirrors.sustech.edu.cn/debian/ bullseye-updates main contrib non-free
deb-src https://mirrors.sustech.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.sustech.edu.cn/debian-security/ bullseye-security main contrib non-free
deb-src https://mirrors.sustech.edu.cn/debian-security/ bullseye-security main contrib non-free

```

If you are using other version,  you can change the version "buster" in the following code to your version name.

```toml
deb https://mirrors.sustech.edu.cn/debian/ buster main contrib non-free
deb-src https://mirrors.sustech.edu.cn/debian/ buster main contrib non-free

deb https://mirrors.sustech.edu.cn/debian/ buster-updates main contrib non-free
deb-src https://mirrors.sustech.edu.cn/debian/ buster-updates main contrib non-free

deb https://mirrors.sustech.edu.cn/debian-security/ buster/updates main contrib non-free
deb-src https://mirrors.sustech.edu.cn/debian-security/ buster/updates main contrib non-free
```

## Update Software Source

``` sh
apt-get update
```
