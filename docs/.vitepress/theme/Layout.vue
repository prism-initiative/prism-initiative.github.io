<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'

// Add TTS player functionality when component is mounted
onMounted(() => {
  // Add tts-player.css
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/tts-player/tts-player.css'
  document.head.appendChild(link)

  // Add TTS player configuration
  window.ttsPlayerConfig = {
    playerId: "9fdbbbc6-ce06-473b-a6bb-514f26b902d4",
    environment: "eastus.customvoice.api.speech.microsoft.com",
    playerParentDivId: "tts-player-container",
    playerLibPath: "/tts-player"
  }

  // Add tts-player.js
  const script = document.createElement('script')
  script.src = '/tts-player/tts-player.js'
  script.type = 'text/javascript'
  script.onload = () => {
    // Initialize the player once the script is loaded
    window.ttsPlayer({
      ttsPlayerConfig: window.ttsPlayerConfig,
      sourceLocation: window.location.pathname,
      voice: "en-US-AvaMultilingualNeural",
      style: "expressive",
      isFlat: true,
      xPaths: ["//main"],
      isLogging: true,
      styles: {
        audioPlayerBox: {
          boxShadow: 'none',
          backgroundColor: 'transparent'
        },
        seekBar: {
          backgroundColor: '#444',
          backgroundImage: 'linear-gradient(#0078d4, #0078d4)'
        }
      }
    })
  }
  document.head.appendChild(script)
})

// Clean up when component is unmounted
onUnmounted(() => {
  // Optional: Add cleanup code here if needed
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-before>
      <div id="tts-player-container" class="tts-player-wrapper"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* Improved styling for better integration */
.tts-player-wrapper {
  margin-right: 16px;
  position: relative;
  display: flex;
  align-items: center;
}

.audio-player-box {
  width: 36px !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

/* Hide the "Powered by Azure" section */
.label-content {
  display: none !important;
}

/* Adjust the player area spacing */
.player-area {
  margin: 0 !important;
}

/* Only show the play button initially */
.player-progress, .player-tip {
  display: none !important;
}

/* Make the play button more visible against dark background */
.audio-view-button {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 5px;
  margin: 0;
}
</style>