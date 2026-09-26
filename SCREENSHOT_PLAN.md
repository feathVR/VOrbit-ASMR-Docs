# Screenshot plan

All application screenshots in this guide are rendered from the current VOrbit ASMR UI by the app repository's offscreen harness. The harness does not open audio devices or tracking connections and does not touch the user's saved settings. Every image was visually checked for personal information, secrets and device-specific names. No UI was fabricated or edited.

## How to regenerate

From the application repository (`VOrbit-ASMR`), build and run the documentation capture mode, then copy the images:

```sh
dotnet build tools/ControlSmoke/ControlSmoke.csproj -c Debug
tools/ControlSmoke/bin/Debug/net10.0-windows/win-x64/VOrbitControlSmoke.exe <output-dir> --docs ja en
```

The harness writes `<name>-<language>.png`. Copy `*-ja.png` to `static/img/screenshots/ja/` and `*-en.png` to `static/img/screenshots/en/`. `home-<language>.png` goes to `static/img/home-app-<language>.png` instead. Other language codes (`zh-Hans`, `zh-Hant`, `ko`, `ru`, `es`, `pt-BR`) render the same set in those languages.

Full-window images use the minimum window size (1020×580) in the light theme. Card images are cropped from a taller render.

## Inventory

| Image | Page | Content |
| --- | --- | --- |
| `img/home-app-*.png` | `intro` | Position page, Auto mode |
| `tutorial-*.png` | `getting-started/first-sound` | Getting started guide, step 1 on the Devices page |
| `device-*.png` | `getting-started/first-sound` | Devices page, Normal route |
| `position-manual-*.png` | `getting-started/first-sound` | Position page, Manual mode |
| `device-card-*.png` | `audio/routes` | Whole Devices card, Normal route |
| `vst-bridge-*.png` | `audio/vst-bridge` | Devices card with DAW (VST bridge) steps expanded |
| `tracking-*.png` | `tracking/overview` | Control mode card |
| `calibration-*.png` | `tracking/calibration` | Calibration card |
| `sound-*.png` | `spatial/sound` | Sound page |
| `help-streaming-*.png` | `streaming/obs` | Help topic "Send the audio to OBS", expanded |
| `help-collab-*.png` | `collab/call` | Help topic "Collab call", expanded |
| `collab-*.png` | `collab/call` | Collab card |
| `playback-*.png` | `features/other` | Audio files page |
| `hotkeys-*.png` | `features/other` | Hotkeys page |
| `help-*.png` | `troubleshooting/common-issues` | Help page |

The VST bridge image shows the harness's own build path as the bridge location; the page says it is an example. The bridge notice banner that appears for audio-interface users is dismissed for these captures.

## Diagrams for other languages

The SVG diagrams (`quick-start`, `calibration`, `spatial-mapping`, `vst-bridge-flow`) are hand-made in Japanese and English. The versions for `zh-Hans`, `zh-Hant`, `ko`, `ru`, `es` and `pt-BR` are generated from the English SVG by `node scripts/svg-i18n.js`, which replaces each text string with the translation in `scripts/svg-i18n.json` and stops if a string is missing. After editing an English diagram, update the JSON and run the script again, then check in a browser that no text runs past its box (the Russian, Spanish and Portuguese strings are the longest).
