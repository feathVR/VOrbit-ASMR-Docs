---
sidebar_position: 1
---

# Tracking sources

VOrbit ASMR accepts motion from several tracking sources. The source-specific parameter list is discovered when the connection is established.

## Supported sources

| Source | Connection | Typical first axis |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP | `Root.PosX` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

The first axis is only a starting point. You can assign different parameters to the horizontal, vertical, and distance axes when the source provides them.

## Recommended first setup

Start with the horizontal axis only. Add vertical and distance axes after the basic connection and calibration work correctly.

