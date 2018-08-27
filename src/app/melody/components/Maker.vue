<template>
  <div>
    <!--<div class="row flex-middle">
        <div class="col-9 col">
            <project-title/>
            <button>Add</button>
            <button>Save</button>
            <button>Download</button>
        </div>
    </div>
    <settings />-->
    <button @click="pause">Pause</button>
    <button @click="start">Play</button>
    <button @click="stop">Stop</button>
    <track-list :cols="cols" :currentBox="currentBox" :play="play"/>
  </div>
</template>

<script>
import ProjectTitle from './ProjectTitle'
import Settings from './Settings'
import TrackList from './TrackList'

export default {
  data: () => {
    return {
      cols: 100,
      tempo: 1000, // ms
      play: false,
      currentBox: 0,
      intervalId: null
    }
  },
  components: {
    ProjectTitle,
    Settings,
    TrackList
  },
  methods: {
    start () {
      this.intervalId = setInterval(this.goToNextBox, this.tempo)
      this.play = true
    },
    pause () {
      clearInterval(this.intervalId)
      this.play = false
    },
    stop () {
      this.pause()
      this.currentBox = 0
    },
    goToNextBox () {
      if(this.currentBox < this.cols) this.currentBox += 1
      else this.pause()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
