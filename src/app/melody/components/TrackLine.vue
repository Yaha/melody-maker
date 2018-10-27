<template>
  <tr>
    <td>Line name</td>
    <td>
      <select v-model="sound">
        <option v-for="option in sounds" :value="option.key" :key="option.key">
          {{ option.name }}
        </option>
      </select>
    </td>
    <td v-for="col in cols" :key="col" style="padding: 0">
      <track-box :currentCol="currentCol" :play="play" :col="col" :player="player" :soundObject="soundObject"/>
    </td>
  </tr>
</template>

<script>
import TrackBox from './TrackBox'
import Sounds from '@/config/sounds'

export default {
  components: {
    TrackBox
  },
  props: ['cols', 'currentCol', 'play', 'player'],
  data: function () {
    return {
      sound: Sounds[0].key,
      loadedSound: '',
      soundObject: {}
    }
  },
  computed: {
    sounds: function () {
      return Sounds
    }
  },
  mounted () {
    this.loadStyle()
  },
  methods: {
    loadStyle (sound = null) {
      const self = this
      if (sound === null) sound = this.sound

      if (sound === this.loadedSound) return

      this.$store.commit('setFetching', true)
      this.$bus.$emit('pause')
      const soundConfig = Sounds.find(function (sound) {
        return sound.key === self.sound
      })

      if (typeof window[soundConfig.key] !== 'undefined') {
        this.soundObject = window[soundConfig.key]
        this.player.loader.decodeAfterLoading(this.player.audioContext, soundConfig.key)
        this.$store.commit('setFetching', false)
        this.loadedSound = sound
      } else {
        const url = '/sounds/' + soundConfig.file
        this.axios.get(url).then((response) => {
          this.soundObject = response.data
          window[soundConfig.key] = this.soundObject
          this.player.loader.decodeAfterLoading(this.player.audioContext, soundConfig.key)
          this.$store.commit('setFetching', false)
          this.loadedSound = sound
        })
      }
    }
  },
  watch: {
    sound: function (newStyle, oldStyle) {
      this.loadStyle(newStyle)
    }
  }
}
</script>
