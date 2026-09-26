---
sidebar_position: 1
---

# 追踪输入源

VOrbit ASMR 支持多种追踪方式。连接后，会从各应用获取可用的参数，并可分别分配给左右、上下、深度三个轴。

## 支持的输入源

| 输入源 | 连接方式 | 首次分配的左右轴 |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP（默认监听端口 39539） | `Head.RotZ` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

首次连接时只分配左右轴，上下和深度为 `—`（不使用）。根据输入源提供的数值，也可以给上下和深度分配其他参数。

## 连接

1. 先启动追踪应用和模型。
2. 在“位置”标签中把“操作模式”设为“自动追踪”。
3. 在“输入源”中选择应用，然后按“连接”。
4. 显示变为“接收中”即表示已连接。面板上的声音点会从红色变为蓝色，无法再拖动（带编号的圆形音源仍可移动）。

![操作模式和输入源一栏](/img/screenshots/zh-Hans/tracking-zh-Hans.png)

_在“自动追踪”中选择输入源并按“连接”。_

## 在应用一侧允许连接

- **VTube Studio**：在 PC 版中启用 API，并批准首次连接时显示的插件许可。
- **VMC**：在发送端应用中启用 VMC 发送。默认监听 UDP 39539，可在“连接的详细设置”中更改端口。
- **nizima LIVE**：首次连接插件时允许连接。

## 选择要使用的参数

连接后会显示“使用的参数”，可以为左右、上下、深度各轴选择参数。

- 建议一开始只用左右。设为 `—` 的轴不会移动。
- 想跟随模型的转头，可用 Angle 类参数（例如 `ParamAngleX`）；想跟随画面内的移动，可用 Position 类参数（例如 `FacePositionX`）。
- 不用摄像头、改用鼠标移动时，可以选择 VTube Studio 的 `MousePositionX` / `MousePositionY`。
- 上下和深度容易受到姿势和摄像头距离抖动的影响，请在输入稳定时再添加。

更换参数后，请重新[校准](./calibration)。

## VMC 首先尝试的设置

VMC 中哪个参数好用，取决于发送应用和模型。左右轴默认分配 `Head.RotZ`（头部倾斜）。动作太小或不动时，请试试 `Hips.PosX`。

无论哪种情况，一开始都只分配左右，上下和深度保持 `—`。

### iFacialMocap 与 Warudo 的设置示例

| 项目 | 设置 |
| --- | --- |
| 捕捉方式・摄像头 | iFacialMocap |
| 连接到 VOrbit ASMR 的方式 | 从 Warudo 以 VMC 协议发送 |
| 左右 | `Head.RotZ` |
| 上下 | `—` |
| 深度 | `—` |

在 Warudo 中启用 VMC 发送，然后在 VOrbit ASMR 中选择“VMC Protocol”作为输入源并连接。

## 让其他应用也能接收 VMC {#vmc-forwarding}

VOrbit ASMR 接收 VMC 数据后，其他应用就无法再从同一端口接收。如果同一台电脑上的其他应用也需要这些数据，请在“连接的详细设置”中启用“转发收到的数据（端口）”，并把转发端口设为该应用监听的端口。
