---
sidebar_position: 1
---

# 把聲音送進 OBS 和直播

把處理後的聲音**只透過一個通道**交給 OBS。「裝置」分頁的「如何接入直播」中也有同樣的說明。

![送進 OBS 的方法圖](/img/screenshots/zh-Hant/help-streaming-zh-Hant.png)

_「使用方法」分頁中的「把聲音送進 OBS 和直播」。通常只用方法 A 或 B；若不想聽到自己的即時聲音，請使用下方的 VB-CABLE 步驟。不要疊加擷取方法。_

## 方法 A：應用程式音訊擷取（推薦）

在 OBS 中新增「應用程式音訊擷取」，並選擇 VOrbit ASMR。只會擷取 VOrbit ASMR 的聲音，不需要其他軟體。

## 方法 B：音訊輸出擷取

在 VOrbit ASMR 中選擇耳機等輸出裝置，然後在 OBS 中新增「音訊輸出擷取」並選擇同一裝置。流向該裝置的遊戲聲音、提示音等也會一起被擷取。

## 不在耳機聽到自己的聲音，同時送進 OBS（VB-CABLE）

如果 OBS 錄得到聲音，但耳機持續傳回自己的聲音讓你不舒服，可以使用 [VB-Audio Virtual Cable（VB-CABLE）](https://vb-audio.com/Cable/)分開輸出。以下適用於「一般」音訊路徑；初次檢查時可以聽自己的聲音，直播時不必持續監聽。

1. 從官方網站安裝 VB-CABLE。Windows 會出現播放裝置 **CABLE Input** 和錄音裝置 **CABLE Output**。
2. 在 VOrbit ASMR 按「停止」，於「裝置」將輸出改為 **CABLE Input (VB-Audio Virtual Cable)**，再按「開始」。麥克風輸入保持不變。Windows 的預設播放裝置仍設為耳機，不要改成 CABLE Input。
3. 在 OBS 只新增一個「音訊輸入擷取」，裝置選 **CABLE Output (VB-Audio Virtual Cable)**。不要再同時以方法 A 或 B 擷取 VOrbit ASMR。
4. 關閉 OBS 對此來源的音訊監聽，也關閉 Windows 對 CABLE Output 的「聆聽此裝置」，否則聲音可能回到耳機。
5. 確認 OBS 音量表有反應，錄製一小段並播放。錄影應有處理後的左右變化，使用時耳機則不應持續聽到自己的聲音。

**CABLE Input 是 VOrbit ASMR 送入聲音的一端；CABLE Output 是 OBS 接收的一端。**只關閉 OBS 監聽無法阻止 VOrbit ASMR 直接向耳機播放。也請避免 OBS 從桌面音效或原始麥克風重複擷取。

## 錄一小段確認

直播前，一邊左右移動聲音一邊錄製約 20 秒，然後用耳機播放。確認左右有變化，且聲音沒有重複。

:::warning 聲音重複的原因
如果同一聲音同時透過桌面音效和單獨的來源擷取，或 OBS 還直接擷取了未經處理的麥克風，聲音就會重複。請查看 OBS 的電平表，確認處理後的聲音只從一個通道進入。
:::

## 使用 DAW 時

音訊路徑設為「DAW（VST 橋接）」時，處理後的聲音從 DAW 輸出。請設定讓 OBS 擷取 DAW 處理後聲音的路徑。詳情請參閱[使用 VST 橋接](../audio/vst-bridge)。

## 顯示仿真人頭圖片（選用）

也可以在直播畫面中顯示仿真人頭麥克風的圖片。在「位置」分頁中啟用「在直播畫面中顯示仿真人頭麥克風」，然後在 VTube Studio 或 nizima LIVE 中調整位置和大小。詳情請參閱[音源的移動方式](../spatial/overview#dummy-head-overlay)。
