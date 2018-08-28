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
          <track-line :cols="cols" :currentCol="currentCol" :play="play" />
          <track-line :cols="cols" :currentCol="currentCol" :play="play"/>
        </tbody>
      </table>
    </div>
  </fieldset>
</template>

<script>
import TrackLine from './TrackLine'

export default {
  props: ['cols', 'currentCol', 'play'],
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
