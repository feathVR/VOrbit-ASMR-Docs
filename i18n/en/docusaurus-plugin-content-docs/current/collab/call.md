---
sidebar_position: 1
---

# Collab calls

Send stereo ASMR audio to remote partners. Connection steps depend on the call mode and edition.

![The Collab page](/img/screenshots/en/collab-en.png)

_Current app screen. Available features depend on the distribution._

## Call modes and editions {#call-modes}

The current source includes **Low latency** and **Stable call** on the Collab page. Both use 48 kHz stereo Opus audio. These new modes are in development: public distribution integration and real calls between separate PCs are not yet fully verified. Availability depends on the edition you received.

| Mode | Requirements and behavior |
| --- | --- |
| **Low latency** | Requires Steam running, the integration components and ownership. Up to four people including yourself. The room ends when its host leaves. |
| **Stable call** | Stereo calls through a server configured by the distributor. Capacity depends on that server. The current receiver buffers about 200 ms before playback, increasing delay. Unavailable in editions without a configured server. |

### Connecting with the new modes

1. Everyone selects input/output and starts audio processing. Connect the DAW first when using VST Bridge.
2. Choose the same call mode. It cannot be changed while creating an invitation, connecting or in a call.
3. The host creates an invitation and shares it privately with participants. Participants paste it and connect. These modes do not require returning a response code.
4. Use **Copy room invitation** for additional participants. Disconnect to leave. Automatic recovery after a dropped connection is not implemented yet.

The free edition cannot create rooms or issue codes; it can only join a compatible stable-call room. It cannot join the product edition's low-latency room. Free-edition distribution and access configuration are also pending public-release work. Codes from the two modes are incompatible. A delay or loss display of “—” means unmeasured, not zero.

## Legacy one-to-one calls {#legacy-call}

The instructions below apply to editions that exchange an invitation and a response code. They differ from the new modes.

![How a Collab call connects](/img/screenshots/en/help-collab-en.png)

_Legacy invitation/response exchange. The new modes are described above._

1. **Both press Start**
   Both people first choose their microphone and output and press **Start** at the top. Headphones are recommended.
2. **Send an invite code (inviter)**
   On the **Collab** tab, press **Create an invite code** and send the copied code privately to your partner, for example by Discord DM.
3. **Paste it and send the answer back (invited partner)**
   Paste the code under **Paste the code your partner sent you** and press **Connect**. An answer code is copied automatically; send it back to the inviter.
4. **Paste the answer code (inviter)**
   Paste the answer code and press **Connect**. Setup is complete when both sides show **In call**.

:::warning An invite code is a key to the call
Anyone with the invite code can join the call. Never post it in a public channel. If an attempt fails, create a fresh code instead of reusing it.
:::

## During the call

- Adjust **Partner volume** and mute
- Check **Delay** and **Packet loss**
- End the call with **Disconnect**

Audio files you play on the **Audio files** tab are also sent to your partner during a call.

## Using a real binaural microphone

If you already have a binaural microphone or a stereo recording setup, tick **Use a real binaural microphone (send it as-is, without spatialization)**. Its left and right channels are sent to your partner unchanged. Leave it unticked for an ordinary microphone.

This setting cannot be changed while running.

## If it will not connect {#cannot-connect}

For low latency, check Steam, ownership, integration components, invitation and available places. If stable calls report no configured server, you need a supported distribution. Check that the new mode matches the code; cancel or disconnect before retrying. For legacy direct calls only, try a fixed connection or IPv6 if direct connection fails.
