---
sidebar_position: 1
---

# Common issues

## The source does not move

- Confirm that the tracking source is connected.
- Confirm that a parameter is assigned to the horizontal axis.
- Confirm that calibration is complete for every assigned axis.
- Move a little farther from the center pose and check whether the value changes.

## The sound moves, but the position feels wrong

- Recalibrate using the avatar's actual front-facing pose.
- Check axis inversion and smoothing.
- Confirm that the selected mode—Orbit around the head or Cartesian placement—matches your intent.
- Check the configured horizontal angle, vertical angle, and distance ranges.

## Another local application can no longer receive VMC

If another local application also needs the VMC UDP stream, enable VOrbit ASMR's localhost forwarding.

## There is no sound

- Confirm that the selected input and output devices are the intended devices.
- Check mute and volume in both VOrbit ASMR and Windows.
- Check whether another application has opened the audio device exclusively.
- After changing the audio route, confirm the output destination for the selected route.

![Help screen](/img/screenshots/en/tutorial-4-en-light.png)

_Use Help to open the tutorial and manual. Use headphones or earphones when checking binaural positioning._
