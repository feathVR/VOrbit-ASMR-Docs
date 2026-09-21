---
sidebar_position: 1
---

# Common issues

## The source does not move

- Confirm that the tracking source is connected.
- Confirm that a parameter is assigned to the horizontal axis.
- Check that calibration has completed for the assigned axis.
- Move the avatar farther from the neutral pose to test the range.

## The sound is present but the position feels wrong

- Recalibrate from the avatar's actual neutral pose.
- Check axis inversion and smoothing.
- Confirm that the intended orbit or Cartesian mapping mode is selected.
- Check the horizontal angle, vertical angle, and distance ranges.

## Another local VMC application stopped receiving data

Enable localhost forwarding when the VMC source is configured to share its UDP stream with another local consumer.

