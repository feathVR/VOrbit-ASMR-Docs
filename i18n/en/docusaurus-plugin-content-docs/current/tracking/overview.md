---
sidebar_position: 1
---

# Tracking sources

VOrbit ASMR supports several tracking methods. After connecting, it discovers the parameters provided by each application so that you can assign them independently to the X, Y, and Z axes.

## Supported sources

| Source | Connection | First X-axis parameter to try |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP | `Head.RotZ` (first choice), `Hips.PosX` (second choice) |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

These parameters are starting points for checking the connection. Depending on what the source provides, you can assign different parameters for vertical movement or depth. An axis set to `—` is not used.

## First settings to try with VMC

The most useful VMC parameter depends on the sending application and model. For horizontal movement (X axis), try these in order:

1. `Head.RotZ`
2. `Hips.PosX`

In either case, assign only the X axis at first and leave Y and Z set to `—`.

### Example: iFacialMocap with Warudo

| Item | Setting |
| --- | --- |
| Capture method / camera | iFacialMocap |
| Connection to VOrbit ASMR | Send VMC Protocol data from Warudo |
| X | `Head.RotZ` (horizontal movement only) |
| Y | `—` |
| Z | `—` |

Enable VMC output in Warudo, then select **VMC Protocol** as the input source in VOrbit ASMR and connect.

## Recommended first setup

Assign only the X axis and check left-to-right movement first. Once the connection and calibration are working, add Y or Z only when you need them. This keeps troubleshooting straightforward.

![Tracking source connection screen](/img/screenshots/en/tutorial-2-en-light.png)

_Choose a tracking source and use Connect to check its receive status._
