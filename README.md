# SoundCloud Lyrics

Chrome Manifest V3 extension for SoundCloud with synchronized lyrics, word-by-word highlighting, multiple lyric providers and manual timing editor.

## Install

1. Download and extract the release ZIP.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the extracted `soundcloud-lyrics-v5.13` folder.
4. Open or refresh `soundcloud.com`, play a track, and open the lyrics panel.

## Features

- Automatically prefers verified word-timed lyrics, then line-timed lyrics, then plain lyrics.
- Dropdown shows only sources that returned lyrics for the current track.
- Supports LRCLIB, Better Lyrics (public endpoints), LRC Mux, LiriQo and AMLL.
- Manual lyrics and line-timing editor; sync on/off; animated active line.
- No API key required.

## Notes

Some providers may be unavailable, change their APIs, or reject cross-origin requests. Results depend on catalog coverage. Not affiliated with SoundCloud or any lyrics provider.

## Publishing on GitHub

Create a public repository (for example `soundcloud-lyrics`) and upload `manifest.json`, `content.js`, and `README.md` at the repository root. To install from a cloned repository, choose its root folder in **Load unpacked**. Add a license only after deciding how you want to license the extension.
