<template>
  <tr>
    <td>Line name</td>
    <td>
      <select>
        <option>Frequence style</option>
      </select>
    </td>
    <td v-for="col in cols">
      <track-box :currentCol="currentCol" :play="play" :col="col"/>
    </td>
  </tr>
</template>

<script>
import TrackBox from './TrackBox'

export default {
  props: ['cols', 'currentCol', 'play'],
  components: {
    TrackBox
  }
}
</script>
