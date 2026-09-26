---
sidebar_position: 1
---

# Tracking sources

VOrbit ASMR supports several tracking methods. After connecting, it discovers the parameters provided by each application so that you can assign them independently to the horizontal, vertical, and depth axes.

## Supported sources

| Source | Connection | Horizontal axis assigned at first |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP (default listen port 39539) | `Head.RotZ` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

On the first connection only the horizontal axis is assigned; vertical and depth are set to `—` (not used). Depending on what the source provides, you can assign other parameters to vertical movement and depth.

## Connect

1. Start the tracking application and its model first.
2. On the **Position** tab, set **Control mode** to **Auto (tracking)**.
3. Choose the application under **Tracking source** and press **Connect**.
4. The status changes to **Receiving** when data arrives. The voice dot on the pads turns from red to blue and can no longer be dragged (numbered source circles can still be moved).

![Control mode and tracking source](/img/screenshots/en/tracking-en.png)

_Choose the tracking source under Auto (tracking) and press Connect._

## Allow the connection in that application

- **VTube Studio**: enable the API in the PC version and approve the plugin request shown on the first connection.
- **VMC**: enable VMC output in the sending application. The default listen port is UDP 39539; you can change it under **Connection details**.
- **nizima LIVE**: approve the plugin connection the first time.

## Choose the parameters

Once connected, **Parameters to read** appears, where you choose a parameter for each of the horizontal, vertical and depth axes.

- Horizontal only is recommended at first. An axis set to `—` does not move.
- As a guide, use an Angle parameter (for example `ParamAngleX`) to follow model head turns, and a Position parameter (for example `FacePositionX`) to follow movement in the frame.
- To move the voice with the mouse instead of a camera, VTube Studio offers `MousePositionX` / `MousePositionY`.
- Vertical and depth input tends to pick up posture and camera-distance jitter, so add them only when the input is stable.

After changing a parameter, [calibrate](./calibration) again.

## First settings to try with VMC

The most useful VMC parameter depends on the sending application and model. The horizontal axis starts with the default `Head.RotZ` (head tilt). If it moves too little or not at all, try `Hips.PosX`.

In either case, assign only the horizontal axis at first and leave vertical and depth set to `—`.
### Example: iFacialMocap with Warudo

| Item | Setting |
| --- | --- |
| Capture method / camera | iFacialMocap |
| Connection to VOrbit ASMR | Send VMC Protocol data from Warudo |
| Horizontal | `Head.RotZ` |
| Vertical | `—` |
| Depth | `—` |

Enable VMC output in Warudo, then select **VMC Protocol** as the tracking source in VOrbit ASMR and connect.

## Letting another application receive VMC too {#vmc-forwarding}

Once VOrbit ASMR receives VMC data on a port, other applications can no longer receive it on that port. If another application on the same PC also needs the data, enable **Forward received data to port** under **Connection details** and set the port to the one that application listens on.
