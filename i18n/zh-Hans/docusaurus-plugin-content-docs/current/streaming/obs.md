---
sidebar_position: 1
---

# 把声音送进 OBS 和直播

把处理后的声音**只通过一个通道**交给 OBS。“设备”标签的“如何接入直播”中也有同样的说明。

![送进 OBS 的方法图](/img/screenshots/zh-Hans/help-streaming-zh-Hans.png)

_“使用方法”标签中的“把声音送进 OBS 和直播”。通常只用方法 A 或 B；如果不想听到自己的实时声音，请使用下方的 VB-CABLE 步骤。不要叠加采集方法。_

## 方法 A：应用程序音频采集（推荐）

在 OBS 中添加“应用程序音频采集”，并选择 VOrbit ASMR。只会采集 VOrbit ASMR 的声音，不需要其他软件。

## 方法 B：音频输出采集

在 VOrbit ASMR 中选择耳机等输出设备，然后在 OBS 中添加“音频输出采集”并选择同一设备。流向该设备的游戏声音、提示音等也会一起被采集。

## 不在耳机里听到自己的声音，同时送进 OBS（VB-CABLE）

如果 OBS 能录到声音，但耳机里持续听到自己的声音让你不舒服，可使用 [VB-Audio Virtual Cable（VB-CABLE）](https://vb-audio.com/Cable/)分开输出。以下适用于“普通”音频路径；最初检查时可以听自己的声音，直播时无需一直监听。

1. 从官方网站安装 VB-CABLE。Windows 会出现播放设备 **CABLE Input** 和录音设备 **CABLE Output**。
2. 在 VOrbit ASMR 中按“停止”，在“设备”中把输出改为 **CABLE Input (VB-Audio Virtual Cable)**，然后按“开始”。麦克风输入保持不变。Windows 的默认播放设备仍设为耳机，不要改成 CABLE Input。
3. 在 OBS 中只添加一个“音频输入采集”，设备选择 **CABLE Output (VB-Audio Virtual Cable)**。不要再用上面的方法 A 或 B 同时采集 VOrbit ASMR。
4. 关闭 OBS 对该来源的音频监听，并关闭 Windows 对 CABLE Output 的“侦听此设备”，否则声音可能回到耳机。
5. 确认 OBS 电平表有反应，录制一小段并播放。录制中应有处理后的左右变化，直播时耳机中则不应持续听到自己的声音。

**CABLE Input 是 VOrbit ASMR 送入声音的一端；CABLE Output 是 OBS 接收的一端。**仅关闭 OBS 的监听无法阻止 VOrbit ASMR 直接向耳机播放。还要避免 OBS 从桌面音频或原始麦克风重复采集。

## 录一小段确认

直播前，一边左右移动声音一边录制约 20 秒，然后用耳机播放。确认左右有变化，且声音没有重复。

:::warning 声音重复的原因
如果同一声音同时通过桌面音频和单独的来源采集，或 OBS 还直接采集了未处理的麦克风，声音就会重复。请查看 OBS 的电平表，确认处理后的声音只从一个通道进入。
:::

## 使用 DAW 时

音频路径设为“DAW（VST 桥接）”时，处理后的声音从 DAW 输出。请设置让 OBS 采集 DAW 处理后声音的路径。详情请参阅[使用 VST 桥接](../audio/vst-bridge)。

## 显示仿真人头图片（可选）

也可以在直播画面中显示仿真人头麦克风的图片。在“位置”标签中启用“在直播画面中显示仿真人头麦克风”，然后在 VTube Studio 或 nizima LIVE 中调整位置和大小。详情请参阅[音源的移动方式](../spatial/overview#dummy-head-overlay)。
