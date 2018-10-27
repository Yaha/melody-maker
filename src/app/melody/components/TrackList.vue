<template>
  <fieldset>
    <legend>Tracks</legend>
    <div class="auto-overflow">
      <table>
        <thead>
          <tr>
            <th>Tracks</th>
            <th>Sound</th>
            <th :colspan="cols" />
          </tr>
        </thead>
        <tbody>
          <track-line :cols="cols" :currentCol="currentCol" :play="play" :player="player"/>
          <track-line :cols="cols" :currentCol="currentCol" :play="play" :player="player"/>
          <track-line :cols="cols" :currentCol="currentCol" :play="play" :player="player"/>
        </tbody>
      </table>
    </div>
  </fieldset>
</template>

<script>
import TrackLine from './TrackLine'
import WebAudioFontPlayer from 'webaudiofont'

export default {
  props: ['cols', 'currentCol', 'play'],
  data: function () {
    const player = new WebAudioFontPlayer()
    const AudioContextFunction = window.AudioContext || window.webkitAudioContext
    const audioContext = new AudioContextFunction()
    player.audioContext = audioContext
    return {
      player: player
    }
  },
  components: {
    TrackLine
  }
}
</script>

<style lang="scss" scoped>
.auto-overflow {
  overflow-x: auto;
  max-width: 1780px;
}
</style>
