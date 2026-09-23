---
sidebar_position: 1
---

# How the source moves

VOrbit ASMR can place the source on an orbit around the listener or move it directly through Cartesian space.

<img src="/VOrbit-ASMR-Docs/img/spatial-mapping-en.svg" alt="Top-view comparison of a voice following an arc around the listener and moving along a straight line" width="1200" height="650" />

_Conceptual view for horizontal movement only. [Open the image to zoom in](/img/spatial-mapping-en.svg)._

## Orbit around the head

This is the usual mode. Horizontal and vertical values become angles around the listener, while the depth value changes the radius of the sphere.

Moving horizontally makes the voice travel along an arc around the head instead of simply crossing a flat plane. This is a good fit for natural left-to-right movement from a 2D avatar.

## Cartesian placement

Horizontal and vertical values are assigned directly to positions in metres. The depth axis moves the source forward or backward according to its configured range.

Use this mode when you want to move the source directly without orbiting it around the listener.
