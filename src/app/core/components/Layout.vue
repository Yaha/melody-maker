<template>
  <div>
    <nav class="border split-nav">
      <div class="nav-brand">
        <logo />
      </div>
      <div class="collapsible">
        <div class="collapsible-body">
          <ul class="inline">
            <li><router-link :to="{ name: 'melody' }">Make melody</router-link></li>
            <li><router-link :to="{ name: 'sounds' }">Make sounds</router-link></li>
            <li><router-link :to="{ name: 'documentation' }">Documentation</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><a href="https://github.com/martingautier/melody-maker">Github</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>
