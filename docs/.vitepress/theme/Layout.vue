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
      isLogging: true
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
    <template #nav-bar-title-after>
      <div id="tts-player-container" style="margin-right: 15px;"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* Additional custom styles for the player if needed */
.audio-player-box {
  width: 350px !important;
}
</style>
