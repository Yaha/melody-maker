<template>
  <div>
    <div class="row flex-middle">
        <div class="col-9 col">
            <project-title/>
            <button>Add</button>
            <button>Save</button>
            <button>Download</button>
        </div>
    </div>
    <settings />
    <track-list />
  </div>
</template>

<script>
import ProjectTitle from './ProjectTitle'
import Settings from './Settings'
import TrackList from './TrackList'

export default {
  components: {
    ProjectTitle,
    Settings,
    TrackList
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
