<template>
  <tr>
    <td>Line name</td>
    <td>
      <select>
        <option>Frequence style</option>
      </select>
    </td>
    <td v-for="col in cols">
      <track-box :currentBox="currentBox" />
    </td>
  </tr>
</template>

<script>
import TrackBox from './TrackBox'

export default {
  props: ['cols', 'currentBox'],
  components: {
    TrackBox
  }
}
</script>
