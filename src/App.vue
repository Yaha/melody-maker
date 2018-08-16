<template>
  <div id="app" class="paper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="row flex-middle">
        <div class="col-3 col">
            <logo/>
        </div>
        <div class="col-9 col">
            <project-title/>
            <button>Add</button>
            <button>Save</button>
            <button>Download</button>
        </div>
    </div>
    <settings />
    <track-list />
    <router-view/>
  </div>
</template>

<script>
import ProjectTitle from './components/ProjectTitle'
import Logo from './components/Logo'
import Settings from './components/Settings'
import TrackList from './components/TrackList'

export default {
  components: {
    ProjectTitle,
    Logo,
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
