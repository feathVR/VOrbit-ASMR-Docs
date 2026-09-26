---
sidebar_position: 2
---

# 使用 VST 桥接

VST 桥接把 DAW 或 VST 宿主中的麦克风音频送到 VOrbit ASMR，再把空间化后的音频送回同一个插件位置。

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-zh-Hans.svg" alt="音频从麦克风经过 DAW 中的 VOrbit Bridge 和 DAW 输出进入 OBS。VOrbit ASMR 与 Bridge 往返传递音频，耳机作为另一条监听路径" width="1400" height="820" />

_表示音频流向的示意图。[打开图片放大查看](/img/vst-bridge-flow-zh-Hans.svg)。_

直播时，**需要另外设置让 OBS 采集 DAW 处理后音频的路径**。请根据环境选择 DAW 的输出目标或虚拟音频设备等方法。耳机里听得到并不代表已经送到 OBS，请用 OBS 的音频电平表和简短的测试录制来确认。

## 设置步骤

在“设备”标签中选择“DAW（VST 桥接）”后，“在 DAW 中使用（VST 桥接）”下会显示 4 个步骤。

1. **将“VOrbit Bridge.vst3”复制到 DAW 的 VST3 文件夹**
   按“打开桥接所在位置”，把打开的文件夹中的 **`VOrbit Bridge.vst3` 整个文件夹**复制到 DAW 读取的 VST3 文件夹。它的名字是 .vst3，但其实是装有文件的文件夹。请不要只取出里面的文件。
2. **将 VOrbit ASMR 的音频路径设为“DAW（VST 桥接）”**
   “开始”期间无法切换，请先按“停止”。
3. **在宿主中重新扫描，并插入到麦克风轨道**
   在 DAW 中重新扫描插件，把 **VOrbit Bridge** 插入麦克风轨道，并启用 DAW 的输入监听。
4. **按“开始”**
   DAW 连接后即可开始空间化。

![VST 桥接的设置界面](/img/screenshots/zh-Hans/vst-bridge-zh-Hans.png)

_界面中也会显示复制来源和当前的连接状态。图中的路径是开发环境的示例，实际位置取决于安装位置。_

## DAW 一侧的设置

- 输入设备、输出设备、采样率和缓冲区都在 DAW 中设置。
- 支持的采样率为 **44.1 kHz / 48 kHz**。
- 未与 VOrbit ASMR 连接时，插件会让音频原样通过。
- 素材的声音和联动对方的声音，会作为插有桥接的轨道的输出返回 DAW。请不要插在 DAW 的总混音上（否则对方的声音会回到对方那里，形成回声）。
- DAW 未连接时，无法使用“音源”的播放和联动通话。
- 导出（离线处理）和冻结时，音频原样通过。

## 想分别录制声音、素材和通话对方时

请把同一文件夹中的 **`VOrbit Bridge Multi.vst3`** 也一起复制，并在 DAW 中作为乐器加载。它单独使用时不会发出声音。

## 更新或停止使用时

- 更新 VOrbit ASMR 后，请重新复制新的 `VOrbit Bridge.vst3`。
- 停止使用时，请自行删除复制的 `VOrbit Bridge.vst3`。卸载应用不会删除它。

无法连接时，请停止 VOrbit ASMR，重新选择音频路径，并在 DAW 中重新扫描插件。
