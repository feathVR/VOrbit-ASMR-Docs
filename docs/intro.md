---
sidebar_position: 1
slug: /
---

# VOrbit ASMR 操作ガイド

<div className="home-hero">
  <div className="home-hero__copy">
    <p className="home-eyebrow">2D VTuber向け · Windows</p>
    <h2>アバターが動くと、声の位置も動く。</h2>
    <p>VOrbit ASMRは、2Dアバターの動きに声を連動させるバーチャル・ダミーヘッドマイクです。ヘッドホンで聴く人の周囲へ声を配置し、バイノーラル音響で届けます。</p>
    <div className="home-actions">
      <a className="button button--primary button--lg" href="getting-started/first-sound/">最初の音を出す</a>
      <a className="button button--outline button--lg home-actions__light" href="https://store.steampowered.com/app/5173840/">Steamで見る</a>
      <a className="button button--outline button--lg home-actions__light" href="https://discord.gg/MJmu7Shger">Discordに参加</a>
    </div>
    <p className="home-availability">Steamで公開予定 · ストアページからウィッシュリストに追加できます</p>
  </div>
  <img className="home-hero__logo" src="/VOrbit-ASMR-Docs/img/vorbit-logo.png" alt="VOrbit ASMR ロゴ" width="1280" height="720" />
</div>

## 画面と操作のイメージ

<img className="home-app-preview" src="/VOrbit-ASMR-Docs/img/home-app-ja.png" alt="VOrbit ASMRの「位置」画面。左に画面を切り替えるタブ、中央に声の位置パッド、右に操作モード（オート追従とマニュアル）と較正の欄" width="1020" height="580" />

_現行アプリの「位置」画面。位置パッドで声の動きを確認し、必要ならトラッキングを接続します。実際の音の聞こえ方はヘッドホンで確認してください。_

## どんなアプリ？

<div className="home-feature-grid">
  <div className="home-feature"><span className="home-feature__number">01</span><h3>声を立体的に動かす</h3><p>横方向の動きに合わせ、声がリスナーの頭の周囲を弧を描いて移動します。</p></div>
  <div className="home-feature"><span className="home-feature__number">02</span><h3>トラッキングを選べる</h3><p>VTube Studio、nizima LIVE、VMCプロトコルから入力できます。まずは左右の動きだけで確認できます。</p></div>
  <div className="home-feature"><span className="home-feature__number">03</span><h3>離れた相手とコラボ</h3><p>1対1のステレオ通話で、立体的な音のまま相手とつながります。</p></div>
</div>

## 画面の構成

左端のタブで画面を切り替えます。上部には、どの画面からでも使う操作が並んでいます。

| タブ | できること |
| --- | --- |
| **位置** | 声の位置パッド、操作モード（オート追従／マニュアル）、トラッキングの接続、較正、動きの範囲 |
| **音** | HRTF（頭部伝達関数）、部屋の響き、出力音量、空間化のオン・オフ |
| **デバイス** | 音声経路（通常／DAW）、マイクと出力先、ノイズ軽減、音切れ対策、配信に乗せる方法 |
| **コラボ** | 離れた相手との1対1通話 |
| **音源** | 音声ファイルを4つまで読み込んで再生 |
| **ホットキー** | キーボードから操作を呼び出す割り当て |
| **使い方** | チュートリアルと、目的別の手順 |
| **アプリについて** | バージョン、診断ZIPの書き出し |

上部の「開始」で音声の処理を始め、「停止」で止めます。「ミュート」は、配信と通話へ出る音をすべて止めます。「縮小表示」は配信中に邪魔にならない小さな画面に切り替え、「常に手前」はほかのウィンドウより前に表示し続けます。

## ここから始める

- [最初の音を出す](getting-started/first-sound) — 初回設定とチュートリアル
- [トラッキング方法を選ぶ](tracking/overview) — VTube Studio、VMC、nizima LIVEとの接続
- [動きを較正する](tracking/calibration) — 中央と可動範囲の記録
- [音源の動き方を理解する](spatial/overview) — 頭の周囲を回る配置と平面配置
- [OBS・配信へ音を載せる](streaming/obs) — 加工後の声を配信へ渡す方法
- [コラボ通話](collab/call) — 離れた相手と招待コードでつながる
- [問題を解決する](troubleshooting/common-issues) — 音切れ、音が出ない、動かない場合

:::info
VOrbit ASMR本体は、このドキュメントとは別に配布されます。この操作ガイドは、購入・導入前にも設定内容や利用方法を確認できるよう一般公開しています。
:::
