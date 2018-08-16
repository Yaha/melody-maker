<template>
  <fieldset>
    <legend>Tracks</legend>
    <table>
      <thead>
        <tr>
          <th>Tracks</th>
          <th>Sound</th>
          <th colspan="8" />
        </tr>
      </thead>
      <tbody>
        <track-item />
      </tbody>
    </table>
  </fieldset>
</template>

<script>
import TrackItem from './TrackItem'

export default {
  components: {
    TrackItem
  }
}
</script>
