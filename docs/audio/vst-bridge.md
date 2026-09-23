---
sidebar_position: 2
---

# VSTブリッジを使う

VSTブリッジは、DAWやVSTホスト内のマイク音声をVOrbit ASMRへ送り、空間化した音声を同じプラグイン位置へ戻します。

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-ja.svg" alt="マイク、DAWのマイクトラック内のVOrbit Bridge、DAW出力、ヘッドホンの順に音が流れ、Bridgeと下側のVOrbit ASMRが音声を往復する図" width="1400" height="660" />

_音声の流れを示す概念図です。[画像を開いて拡大](/img/vst-bridge-flow-ja.svg)できます。_

## 設定手順

1. VOrbit ASMRの「デバイス」を開き、「DAW（VSTブリッジ）」を選びます。
2. 展開された「DAWで使う（VSTブリッジ）」で「ブリッジの場所を開く」を押します。
3. **`VOrbit Bridge.vst3` フォルダー全体**を、使用するDAWが読み込むVST3フォルダーへコピーします。中のファイルだけを取り出さないでください。
4. DAWでプラグインを再スキャンします。
5. マイクのトラックへ **VOrbit Bridge** を挿します。
6. VOrbit ASMRで「開始」を押します。

![VSTブリッジの設定画面](/img/screenshots/ja/vst-bridge-ja.png)

_画面内にも、コピー元と現在の接続状態が表示されます。画像のパスは開発環境の例であり、実際の場所はインストール先によって異なります。_

## DAW側の設定

- 入力デバイス、出力デバイス、サンプルレート、バッファーはDAW側で設定します。
- 対応サンプルレートは **44.1 kHz / 48 kHz** です。
- VOrbit ASMRと接続していないとき、プラグインは音声をそのまま通します。
- VOrbit ASMRを更新したら、新しい `VOrbit Bridge.vst3` をもう一度コピーしてください。

接続できない場合は、VOrbit ASMRを停止して音声経路を選び直し、DAWでプラグインを再スキャンしてください。
