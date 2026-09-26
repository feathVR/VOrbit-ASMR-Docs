---
sidebar_position: 2
---

# 使用 VST 橋接

VST 橋接把 DAW 或 VST 主機中的麥克風音訊送到 VOrbit ASMR，再把空間化後的音訊送回同一個外掛位置。

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-zh-Hant.svg" alt="音訊從麥克風經過 DAW 中的 VOrbit Bridge 和 DAW 輸出進入 OBS。VOrbit ASMR 與 Bridge 往返傳遞音訊，耳機作為另一條監聽路徑" width="1400" height="820" />

_表示音訊流向的示意圖。[開啟圖片放大檢視](/img/vst-bridge-flow-zh-Hant.svg)。_

直播時，**需要另外設定讓 OBS 擷取 DAW 處理後音訊的路徑**。請依環境選擇 DAW 的輸出目標或虛擬音訊裝置等方法。耳機裡聽得到並不代表已經送到 OBS，請用 OBS 的音訊電平表和簡短的測試錄製來確認。

## 設定步驟

在「裝置」分頁中選擇「DAW（VST 橋接）」後，「在 DAW 中使用（VST 橋接）」下會顯示 4 個步驟。

1. **將「VOrbit Bridge.vst3」複製到 DAW 的 VST3 資料夾**
   按「開啟橋接所在位置」，把開啟的資料夾中的 **`VOrbit Bridge.vst3` 整個資料夾**複製到 DAW 讀取的 VST3 資料夾。它的名稱是 .vst3，但其實是裝有檔案的資料夾。請不要只取出裡面的檔案。
2. **將 VOrbit ASMR 的音訊路徑設為「DAW（VST 橋接）」**
   「開始」期間無法切換，請先按「停止」。
3. **在主機中重新掃描，並插入到麥克風音軌**
   在 DAW 中重新掃描外掛，把 **VOrbit Bridge** 插入麥克風音軌，並啟用 DAW 的輸入監聽。
4. **按「開始」**
   DAW 連接後即可開始空間化。

![VST 橋接的設定畫面](/img/screenshots/zh-Hant/vst-bridge-zh-Hant.png)

_畫面中也會顯示複製來源和目前的連線狀態。圖中的路徑是開發環境的範例，實際位置取決於安裝位置。_

## DAW 一側的設定

- 輸入裝置、輸出裝置、取樣率和緩衝區都在 DAW 中設定。
- 支援的取樣率為 **44.1 kHz / 48 kHz**。
- 未與 VOrbit ASMR 連接時，外掛會讓音訊原樣通過。
- 素材的聲音和連動對方的聲音，會作為插有橋接的音軌的輸出回到 DAW。請不要插在 DAW 的總混音上（否則對方的聲音會回到對方那裡，形成回音）。
- DAW 未連接時，無法使用「音源」的播放和連動通話。
- 匯出（離線處理）和凍結時，音訊原樣通過。

## 想分別錄製聲音、素材和通話對方時

請把同一資料夾中的 **`VOrbit Bridge Multi.vst3`** 也一起複製，並在 DAW 中作為樂器載入。它單獨使用時不會發出聲音。

## 更新或停止使用時

- 更新 VOrbit ASMR 後，請重新複製新的 `VOrbit Bridge.vst3`。
- 停止使用時，請自行刪除複製的 `VOrbit Bridge.vst3`。解除安裝應用程式不會刪除它。

無法連接時，請停止 VOrbit ASMR，重新選擇音訊路徑，並在 DAW 中重新掃描外掛。
