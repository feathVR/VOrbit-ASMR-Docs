---
sidebar_position: 1
---

# トラッキングソース

VOrbit ASMRは複数のトラッキング方式に対応しています。接続後、各アプリから利用可能なパラメーターを取得し、X・Y・Z軸へ個別に割り当てられます。

## 対応ソース

| ソース | 接続方式 | 最初に試すX軸 |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP | `Head.RotZ`（第1候補）、`Hips.PosX`（第2候補） |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

表のパラメーターは、最初の接続確認に適した初期候補です。ソースが提供する値に応じて、上下方向や距離にも別のパラメーターを割り当てられます。`—`を選んだ軸は使用されません。

## VMCで最初に試す設定

VMCでは送信アプリやモデルによって、使いやすいパラメーターが異なります。横方向（X軸）は、次の順で試してください。

1. `Head.RotZ`
2. `Hips.PosX`

どちらの場合も、最初はX軸だけに割り当て、Y軸とZ軸は`—`のままにします。

### iFacialMocapとWarudoの設定例

| 項目 | 設定 |
| --- | --- |
| キャプチャー方法・カメラ | iFacialMocap |
| VOrbit ASMR側の接続方法 | WarudoからVMCプロトコルで送信 |
| X | `Head.RotZ`（横方向のみ使用） |
| Y | `—` |
| Z | `—` |

Warudo側でVMC送信を有効にし、VOrbit ASMRでは入力ソースとして「VMC Protocol」を選んで接続します。

## 最初におすすめする設定

まずX軸だけを割り当て、左右の動きを確認してください。接続とキャリブレーションが正しく動作してから、必要に応じてY軸やZ軸を追加すると、問題の切り分けが簡単です。

![トラッキングソース接続画面](/img/screenshots/ja/tutorial-2-ja-light.png)

_トラッキングソースを選び、「接続」から受信状態を確認する画面です。_
