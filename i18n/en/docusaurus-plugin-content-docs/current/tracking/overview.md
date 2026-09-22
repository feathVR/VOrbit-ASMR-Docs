---
sidebar_position: 1
---

# Tracking sources

VOrbit ASMR supports several tracking methods. After connecting, it discovers the parameters provided by each application so that you can assign them independently to the X, Y, and Z axes.

## Supported sources

| Source | Connection | First X-axis parameter to try |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP | `Root.PosX` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

These parameters are starting points for checking the connection. Depending on what the source provides, you can assign different parameters for vertical movement or depth. An axis set to `—` is not used.

## Recommended first setup

Assign only the X axis and check left-to-right movement first. Once the connection and calibration are working, add Y or Z only when you need them. This keeps troubleshooting straightforward.

![Tracking source connection screen](/img/screenshots/en/tutorial-2-en-light.png)

_Choose a tracking source and use Connect to check its receive status._
