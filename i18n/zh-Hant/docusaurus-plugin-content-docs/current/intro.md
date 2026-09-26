---
sidebar_position: 1
slug: /
---

# VOrbit ASMR 使用指南

<div className="home-hero">
  <div className="home-hero__copy">
    <p className="home-eyebrow">給 2D VTuber · Windows</p>
    <h2>虛擬形象一動，聲音的位置也跟著動。</h2>
    <p>VOrbit ASMR 是一款讓聲音跟隨 2D 虛擬形象動作的虛擬仿真人頭麥克風。它把你的聲音放在聽者周圍，並以雙耳音訊呈現。</p>
    <div className="home-actions">
      <a className="button button--primary button--lg" href="getting-started/first-sound/">發出第一個聲音</a>
      <a className="button button--outline button--lg home-actions__light" href="https://store.steampowered.com/app/5173840/">在 Steam 上查看</a>
      <a className="button button--outline button--lg home-actions__light" href="https://discord.gg/MJmu7Shger">加入 Discord</a>
    </div>
    <p className="home-availability">即將在 Steam 推出 · 可在商店頁面加入願望清單</p>
  </div>
  <img className="home-hero__logo" src="/VOrbit-ASMR-Docs/img/vorbit-logo.png" alt="VOrbit ASMR 標誌" width="1280" height="720" />
</div>

## 畫面與操作一覽

<img className="home-app-preview" src="/VOrbit-ASMR-Docs/img/home-app-zh-Hant.png" alt="VOrbit ASMR 的「位置」畫面。左側是切換畫面的分頁，中間是聲音的位置面板，右側是操作模式（自動追蹤與手動）和校準" width="1020" height="580" />

_目前版本的「位置」畫面。用位置面板確認聲音的移動，需要時再連接追蹤。實際效果請用耳機確認。_

## 這是什麼樣的應用程式？

<div className="home-feature-grid">
  <div className="home-feature"><span className="home-feature__number">01</span><h3>讓聲音立體地移動</h3><p>隨著左右方向的動作，聲音沿弧線繞著聽者的頭部移動。</p></div>
  <div className="home-feature"><span className="home-feature__number">02</span><h3>可選擇追蹤方式</h3><p>支援 VTube Studio、nizima LIVE 和 VMC 協定。可以先只用左右方向確認。</p></div>
  <div className="home-feature"><span className="home-feature__number">03</span><h3>與遠方的對方連動</h3><p>一對一立體聲通話，保持立體感與對方連線。</p></div>
</div>

## 畫面構成

用左側的分頁切換畫面。上方是在任何畫面都會用到的操作。

| 分頁 | 功能 |
| --- | --- |
| **位置** | 聲音的位置面板、操作模式（自動追蹤／手動）、連接追蹤、校準、移動範圍 |
| **聲音** | HRTF（頭部相關傳遞函數）、房間殘響、輸出音量、空間化的開關 |
| **裝置** | 音訊路徑（一般／DAW）、麥克風和輸出裝置、降噪、防斷音、如何接入直播 |
| **連動** | 與遠方對方的一對一通話 |
| **音源** | 最多讀取 4 個音訊檔案並播放 |
| **快速鍵** | 用鍵盤呼叫各項操作 |
| **使用方法** | 教學和依目的分類的步驟 |
| **關於** | 版本、匯出診斷 ZIP |

按上方的「開始」開始處理音訊，按「停止」結束。「靜音」會停止送往直播和通話的所有聲音。「精簡檢視」會切換成直播時不礙事的小視窗，「視窗置頂」讓視窗一直顯示在其他視窗前面。

## 從這裡開始

- [發出第一個聲音](getting-started/first-sound) — 初始設定和教學
- [選擇追蹤方式](tracking/overview) — 連接 VTube Studio、VMC、nizima LIVE
- [校準動作](tracking/calibration) — 記錄中心和動作範圍
- [了解音源的移動方式](spatial/overview) — 繞著頭部轉動與平面移動
- [把聲音送進 OBS 和直播](streaming/obs) — 把處理後的聲音交給直播
- [連動通話](collab/call) — 用邀請碼與遠方的對方連線
- [解決問題](troubleshooting/common-issues) — 斷音、沒有聲音、聲音不動時

:::info
VOrbit ASMR 應用程式本體與本文件分開發佈。本使用指南公開提供，方便你在購買或安裝前了解設定內容和使用方法。
:::
