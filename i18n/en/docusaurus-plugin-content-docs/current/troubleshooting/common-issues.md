---
sidebar_position: 1
---

# Common issues

The same checks are also available in the app under **If something is not working** on the Help tab.

![The Help page](/img/screenshots/en/help-en.png)

_The Help tab: restart the tutorial, open this guide, and follow task-based instructions. Use headphones or earphones to check binaural audio._

## Crackling or dropouts

1. On the **Devices** page, check the microphone and output sample rates.
2. Set both to the same supported rate (44100 / 48000 / 88200 / 96000 Hz) in Windows Sound settings or your audio interface's control panel.
3. Press **Stop** and then **Start** again.
4. If it continues, turn on **Dropout protection mode** (adds about 30 ms of latency).

If you use an audio interface, the [DAW (VST bridge)](../audio/vst-bridge) route can be steadier.

## You cannot hear your own voice, or there is no sound

- Confirm that the top button says **Stop** (audio is running).
- Check the input meter, then the output meters. If only the input moves, check the output device and the output volume on the Sound tab.
- Check that the input and output devices are the ones you intend. Press **Refresh** after reconnecting a device.
- Check that **Mute** at the top is not on, and check Windows' own mute and volume.
- With the **DAW (VST bridge)** route, check input, output and monitoring in your DAW.

## Tracking will not connect / the dot does not turn blue

- Confirm the Position tab's control mode is **Auto (tracking)**.
- Confirm the tracking source says **Receiving**.
- Confirm that a parameter other than `—` is assigned to the axis you use.
- Confirm that the assigned axis shows **Calibrated**.

## The voice moves, but the position feels wrong

- [Calibrate](../tracking/calibration) again in your avatar's usual pose.
- Check **Invert** and **Smoothing** under **Movement range**.
- Check that **Orbit around the head (recommended)** is on or off as you intend.
- Check **Horizontal arc**, **Vertical arc** and **Depth range**.

## Another application on the same PC no longer receives VMC

Enable **Forward received data to port** under **Connection details**. See [Tracking sources](../tracking/overview#vmc-forwarding).

## Collab cannot connect

For low latency, check Steam, ownership, integration components, invitation and available places. If stable calls report no configured server, you need a supported distribution. Check that the new mode matches the code; cancel or disconnect before retrying. For legacy direct calls only, try a fixed connection or IPv6 if direct connection fails.

[Collab calls](../collab/call#call-modes)

## Doubled or echoing audio

- Check that OBS is not capturing the same signal twice ([Send the audio to OBS](../streaming/obs)).
- Check that speaker audio is not feeding back into the microphone. Headphones are recommended.

## If the problem remains

Use **Export diagnostic ZIP** on the About tab, review the contents, and attach it to your bug report. The ZIP contains no audio, invite codes or credentials.

## Muffled sound or a low rumble

Check **Ear cover** on the sound page and return both sliders to 0%. Release any hold-to-cover hotkey or Stream Deck key. If only loud peaks become quieter, check the **Safety limiter** activity indicator.

## Tracking app not found

Run the PC version of VTube Studio on the same PC and enable its API and plugin permission (default localhost:8001). The iPhone app alone cannot connect. Run nizima LIVE on the same PC and enable VOrbit ASMR in its plugin manager (default localhost:22022). While connecting, the app retries every 3 seconds. Closing while connected enables automatic connection at the next startup.

## A source set cannot be loaded

Stop all playing sources and wait for loading to finish. Check whether audio files referenced by the set have been moved or deleted.
