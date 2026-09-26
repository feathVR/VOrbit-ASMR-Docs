---
sidebar_position: 1
slug: /
---

# VOrbit ASMR 使用指南

<div className="home-hero">
  <div className="home-hero__copy">
    <p className="home-eyebrow">面向 2D VTuber · Windows</p>
    <h2>虚拟形象一动，声音的位置也跟着动。</h2>
    <p>VOrbit ASMR 是一款让声音跟随 2D 虚拟形象动作的虚拟仿真人头麦克风。它把你的声音放在听者周围，并以双耳音频呈现。</p>
    <div className="home-actions">
      <a className="button button--primary button--lg" href="getting-started/first-sound/">发出第一个声音</a>
      <a className="button button--outline button--lg home-actions__light" href="https://store.steampowered.com/app/5173840/">在 Steam 上查看</a>
      <a className="button button--outline button--lg home-actions__light" href="https://discord.gg/MJmu7Shger">加入 Discord</a>
    </div>
    <p className="home-availability">即将在 Steam 推出 · 可在商店页面加入愿望单</p>
  </div>
  <img className="home-hero__logo" src="/VOrbit-ASMR-Docs/img/vorbit-logo.png" alt="VOrbit ASMR 标志" width="1280" height="720" />
</div>

## 界面与操作一览

<img className="home-app-preview" src="/VOrbit-ASMR-Docs/img/home-app-zh-Hans.png" alt="VOrbit ASMR 的“位置”界面。左侧是切换界面的标签，中间是声音的位置面板，右侧是操作模式（自动追踪与手动）和校准" width="1020" height="580" />

_当前版本的“位置”界面。用位置面板确认声音的移动，需要时再连接追踪。实际效果请用耳机确认。_

## 这是什么样的应用？

<div className="home-feature-grid">
  <div className="home-feature"><span className="home-feature__number">01</span><h3>让声音立体地移动</h3><p>随着左右方向的动作，声音沿弧线绕着听者的头部移动。</p></div>
  <div className="home-feature"><span className="home-feature__number">02</span><h3>可选择追踪方式</h3><p>支持 VTube Studio、nizima LIVE 和 VMC 协议。可以先只用左右方向确认。</p></div>
  <div className="home-feature"><span className="home-feature__number">03</span><h3>与远方的对方联动</h3><p>一对一立体声通话，保持立体感与对方连接。</p></div>
</div>

## 界面构成

用左侧的标签切换界面。顶部是在任何界面都会用到的操作。

| 标签 | 功能 |
| --- | --- |
| **位置** | 声音的位置面板、操作模式（自动追踪／手动）、连接追踪、校准、移动范围 |
| **声音** | HRTF（头部相关传输函数）、房间混响、输出音量、空间化的开关 |
| **设备** | 音频路径（普通／DAW）、麦克风和输出设备、降噪、防掉音、如何接入直播 |
| **联动** | 与远方对方的一对一通话 |
| **音源** | 最多读取 4 个音频文件并播放 |
| **快捷键** | 用键盘调用各项操作 |
| **使用方法** | 教程和按目的分类的步骤 |
| **关于** | 版本、导出诊断 ZIP |

按顶部的“开始”开始处理音频，按“停止”结束。“静音”会停止送往直播和通话的所有声音。“精简视图”会切换成直播时不碍事的小窗口，“窗口置顶”让窗口始终显示在其他窗口前面。

## 从这里开始

- [发出第一个声音](getting-started/first-sound) — 初始设置和教程
- [选择追踪方式](tracking/overview) — 连接 VTube Studio、VMC、nizima LIVE
- [校准动作](tracking/calibration) — 记录中心和动作范围
- [了解音源的移动方式](spatial/overview) — 围绕头部转动与平面移动
- [把声音送进 OBS 和直播](streaming/obs) — 把处理后的声音交给直播
- [联动通话](collab/call) — 用邀请码与远方的对方连接
- [解决问题](troubleshooting/common-issues) — 掉音、没有声音、声音不动时

:::info
VOrbit ASMR 应用本体与本文档分开发布。本使用指南公开提供，方便你在购买或安装前了解设置内容和使用方法。
:::
