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

With **View range** set to **Auto**, tracking uses the voice's reachable range for the assigned axes and settings. In manual voice mode, the range fits the farthest placed voice or source with 5% padding (minimum 0.2 m). The frontal view scales from horizontal/vertical coordinates; the top-down view scales from horizontal/depth coordinates independently. Changing depth alone does not rescale the frontal view. **Manual** sets the distance from centre to edge.

The voice is pushed outside the head and ears if tracking, dragging or external control would place it inside. Sources 1–4 do not have this restriction. Near-field correction applies when the voice approaches an ear.

## Show a dummy head mic on stream {#dummy-head-overlay}

Enable **Show a dummy head mic on stream** to place a dummy head microphone image inside the connected application (VTube Studio / nizima LIVE).

- The image swaps automatically when you switch between front and back facing.
- Drag it in that application to set its position and size.
- If it sticks to your avatar in nizima LIVE, clear **Follow the model** in the item operation window and it will stay in place.
- The images are in the folder opened by **Open image folder**; replace them with your own art using the same file names.
