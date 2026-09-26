---
sidebar_position: 1
---

# How the source moves

VOrbit ASMR can move your voice around the listener's head, or across a flat plane. Both are set on the **Position** tab.

<img src="/VOrbit-ASMR-Docs/img/spatial-mapping-en.svg" alt="Top-down comparison of a voice moving on an arc around the head and a voice moving along a straight line" width="1200" height="650" />

_Conceptual diagram with horizontal movement only. [Open the image to zoom in](/img/spatial-mapping-en.svg)._

## Orbit around the head (recommended)

This is the default. With **Orbit around the head (recommended)** ticked, the voice moves on a sphere centred on the head instead of a flat plane.

- Horizontal and vertical values become angles around the listener. The swing angles come from **Horizontal arc** and **Vertical arc** under **Movement range**.
- The distance is set by **Base distance** and does not change when you move sideways or up, so the level stays steady and the voice sweeps around the ears.
- Only when a depth axis is assigned does the voice move closer or farther from the base distance, by up to the **Depth range**.

Webcam depth estimation is often unreliable, so this works well when tracking handles left/right and up/down only and you set the distance yourself with Base distance.

## Flat placement

Untick **Orbit around the head (recommended)** to map horizontal and vertical values directly to positions in metres. Depth also moves forward and back within its range. Use it when you want to move the voice's position directly rather than swing it around the head.

## Dummy head facing

**Dummy head facing** sets which way the listener faces.

- **Front**: the listener and the avatar face each other.
- **Back**: the voice comes from behind.

**Base distance** is the distance to the voice in your usual posture.

## Reading the position pads

The two pads on the Position tab show horizontal and vertical position (left) and horizontal position and depth (right). The red dot is your voice (blue while tracking), and numbered circles are mono audio files loaded on the **Audio files** tab.

With **View range** set to **Auto**, the pad scale follows how far the voice can actually travel with your current axes and settings. Set it to **Manual** to choose the distance from the centre to the edge yourself.

## Show a dummy head mic on stream {#dummy-head-overlay}

Enable **Show a dummy head mic on stream** to place a dummy head microphone image inside the connected application (VTube Studio / nizima LIVE).

- The image swaps automatically when you switch between front and back facing.
- Drag it in that application to set its position and size.
- If it sticks to your avatar in nizima LIVE, clear **Follow the model** in the item operation window and it will stay in place.
- The images are in the folder opened by **Open image folder**; replace them with your own art using the same file names.
