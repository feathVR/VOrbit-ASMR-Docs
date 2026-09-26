---
sidebar_position: 2
---

# Calibration

Calibration tells VOrbit ASMR how to interpret the values sent by your tracking application. You record your usual pose as the centre and measure how far you move while streaming (the movement range).

Each assigned axis is calibrated separately, and an axis set to `—` is always treated as centred.

## Steps

<img src="/VOrbit-ASMR-Docs/img/calibration-en.svg" alt="Four-step diagram: choose the horizontal axis, capture the centre facing forward, measure the range while moving left and right, then confirm Calibrated" width="1200" height="660" />

_Follow along with the diagram. [Open the image to zoom in](/img/calibration-en.svg)._

1. [Connect tracking](./overview) and assign a parameter to the horizontal axis.
2. Hold your usual pose and position, then press **Capture center**.
3. Press **Measure range** and move a little farther than you normally would on stream, along every assigned axis.
4. Press **Finish measuring** and confirm that the status changes from **Not calibrated** to **Calibrated**.
5. Move left and right and check that the voice moves across the range you expect.

![The Calibration card](/img/screenshots/en/calibration-en.png)

_Capture center, Measure range and Reset calibration, with the calibration status on the right._

## Fine-tune the motion

Adjust these under **Movement range** on the Position tab.

- If motion is reversed, tick **Invert** for that axis.
- If it shakes, raise **Smoothing**.
- If the voice travels too far or not far enough, adjust **Horizontal arc**, **Vertical arc** or **Depth range**.

Calibration measures your body's movement (the input); Movement range sets how far the voice travels (the output). Recalibrating does not change your Movement range settings.

## When to calibrate again

Calibration is stored per tracking source and selected parameter name. Calibrate again for the new input when you:

- change the parameter you use,
- move the camera, or
- change your model or tracker.

To fine-tune the numbers, open **Adjust calibration numerically** and enter the centre and half range for each axis directly.
