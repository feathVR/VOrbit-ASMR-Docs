# Screenshot plan

This is an editorial inventory for the public guide. The five pairs below are copied from the existing `artifacts/tutorial-final-check` app captures. They show the real VOrbit ASMR UI and were visually checked for personal information, secrets, and device-specific names before inclusion.

| Image | Page | Focus | Suggested caption | Status |
| --- | --- | --- | --- | --- |
| `static/img/screenshots/ja/tutorial-0-ja-light.png` | `getting-started/first-sound` | Input/output selection and Start | 初回設定のデバイス画面。入力と出力は、まず「システム既定」のままでも確認できます。 | Included |
| `static/img/screenshots/ja/tutorial-1-ja-light.png` | `getting-started/first-sound` | Position pads and automatic tracking | 位置パッドと「オート追従」の接続欄。最初は左右の動きだけで確認します。 | Included |
| `static/img/screenshots/ja/tutorial-2-ja-light.png` | `tracking/overview` | Tracking source selector and Connect | トラッキングソースを選び、「接続」から受信状態を確認する画面です。 | Included |
| `static/img/screenshots/ja/tutorial-3-ja-light.png` | `tracking/calibration` | Center capture and movement-range measurement | 通常の姿勢を基準に記録し、使用する方向の可動範囲を測定します。 | Included |
| `static/img/screenshots/ja/tutorial-4-ja-light.png` | `troubleshooting/common-issues` | Help/manual entry point and headphone warning | 「使い方」からチュートリアルと説明書を開けます。バイノーラル確認にはヘッドホンを使用します。 | Included |

English counterparts are in `static/img/screenshots/en/` and are used by the English translations. The MIDI captures in `artifacts/midi-ux-check-final` were intentionally not copied because they contain a test controller name and therefore do not meet the public-screenshot constraint.

## Capture limitation

The application was launched from the existing `src/VOrbitAsmr/bin/Debug/net10.0-windows/win-x64/VOrbitASMR.exe` and the existing `publish/VOrbitASMR-Booth/VOrbitASMR.exe` without changing settings or audio devices. The current Computer Use connector exposed browser controls but no native Windows app binding or screenshot method, so a fresh capture could not be taken in this run. The included images are pre-existing real app captures from the repository's artifact area; no UI was fabricated or edited.
