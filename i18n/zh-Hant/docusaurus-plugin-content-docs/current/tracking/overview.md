---
sidebar_position: 1
---

# 追蹤輸入來源

VOrbit ASMR 支援多種追蹤方式。連接後，會從各應用程式取得可用的參數，並可分別指定給左右、上下、深度三個軸。

## 支援的輸入來源

| 輸入來源 | 連線方式 | 第一次指定的左右軸 |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP（預設監聽連接埠 39539） | `Head.RotZ` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

第一次連接時只指定左右軸，上下和深度為 `—`（不使用）。依輸入來源提供的數值，也可以為上下和深度指定其他參數。

## 連接

1. 先啟動追蹤應用程式和模型。
2. 在「位置」分頁中把「操作模式」設為「自動追蹤」。
3. 在「輸入來源」中選擇應用程式，然後按「連接」。
4. 顯示變為「接收中」即表示已連接。面板上的聲音點會從紅色變為藍色，無法再拖曳（帶編號的圓形音源仍可移動）。

![操作模式和輸入來源一欄](/img/screenshots/zh-Hant/tracking-zh-Hant.png)

_在「自動追蹤」中選擇輸入來源並按「連接」。_

## 在應用程式一側允許連線

- **VTube Studio**：在 PC 版中啟用 API，並核准第一次連接時顯示的外掛許可。
- **VMC**：在傳送端應用程式中啟用 VMC 傳送。預設監聽 UDP 39539，可在「連接的詳細設定」中變更連接埠。
- **nizima LIVE**：第一次連接外掛時允許連線。

## 選擇要使用的參數

連接後會顯示「使用的參數」，可以為左右、上下、深度各軸選擇參數。

- 建議一開始只用左右。設為 `—` 的軸不會移動。
- 想跟隨模型的轉頭，可用 Angle 類參數（例如 `ParamAngleX`）；想跟隨畫面內的移動，可用 Position 類參數（例如 `FacePositionX`）。
- 不用攝影機、改用滑鼠移動時，可以選擇 VTube Studio 的 `MousePositionX` / `MousePositionY`。
- 上下和深度容易受到姿勢和攝影機距離晃動的影響，請在輸入穩定時再加入。

更換參數後，請重新[校準](./calibration)。

## VMC 優先嘗試的設定

VMC 中哪個參數好用，取決於傳送應用程式和模型。左右軸預設指定 `Head.RotZ`（頭部傾斜）。動作太小或不動時，請試試 `Hips.PosX`。

無論哪種情況，一開始都只指定左右，上下和深度保持 `—`。

### iFacialMocap 與 Warudo 的設定範例

| 項目 | 設定 |
| --- | --- |
| 擷取方式・攝影機 | iFacialMocap |
| 連接到 VOrbit ASMR 的方式 | 從 Warudo 以 VMC 協定傳送 |
| 左右 | `Head.RotZ` |
| 上下 | `—` |
| 深度 | `—` |

在 Warudo 中啟用 VMC 傳送，然後在 VOrbit ASMR 中選擇「VMC Protocol」作為輸入來源並連接。

## 讓其他應用程式也能接收 VMC {#vmc-forwarding}

VOrbit ASMR 接收 VMC 資料後，其他應用程式就無法再從同一連接埠接收。如果同一台電腦上的其他應用程式也需要這些資料，請在「連接的詳細設定」中啟用「轉送收到的資料（連接埠）」，並把轉送連接埠設為該應用程式監聽的連接埠。
