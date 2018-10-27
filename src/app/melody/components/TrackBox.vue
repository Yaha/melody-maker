<template>
  <div :class="classes" @click.left="nextNote" @click.right="prevNote">{{ content }}</div>
</template>

<script>

export default {
  props: ['currentCol', 'play', 'col', 'player', 'soundObject'],
  data: () => {
    return {
      notes: {
        ' ': {
          className: ''
        },
        'C': {
          className: 'C'
        }, // do
        'C#': {
          className: 'CD'
        }, // do#
        'D': {
          className: 'D'
        }, // ré
        'D#': {
          className: 'DD'
        }, // ré#
        'E': {
          className: 'E'
        }, // mi
        'F': {
          className: 'F'
        }, // fa
        'F#': {
          className: 'FD'
        }, // fa#
        'G': {
          className: 'G'
        }, // sol
        'G#': {
          className: 'GD'
        }, // sol#
        'A': {
          className: 'A'
        }, // la
        'A#': {
          className: 'AD'
        }, // la#
        'B': {
          className: 'B'
        } // si
      },
      note: ' ',
      active: false
    }
  },
  computed: {
    content: function () {
      return this.note
    },
    classes: function () {
      return 'note ' + this.notes[this.note].className + ' ' + (this.active ? 'active' : '')
    }
  },
  methods: {
    nextNote (event) {
      event.preventDefault()
      const keys = Object.keys(this.notes)
      let currentIndex = keys.indexOf(this.note)
      let nextIndex = currentIndex + 1
      if (nextIndex >= keys.length) {
        this.note = ' '
      } else {
        this.note = keys[nextIndex]
      }
    },
    prevNote (event) {
      event.preventDefault()
      const keys = Object.keys(this.notes)
      let currentIndex = keys.indexOf(this.note)
      let prevIndex = currentIndex - 1
      if (prevIndex < 0) {
        this.note = keys[keys.length - 1]
      } else {
        this.note = keys[prevIndex]
      }
    },
    playNote () {
      const audioContext = this.player.audioContext
      const preset = this.soundObject
      const when = 0 // now
      const rangeIndex = 4
      let noteIndex = 0
      switch (this.note) {
        case 'C':
          noteIndex = 0
          break
        case 'C#':
          noteIndex = 1
          break
        case 'D':
          noteIndex = 2
          break
        case 'D#':
          noteIndex = 3
          break
        case 'E':
          noteIndex = 4
          break
        case 'F':
          noteIndex = 5
          break
        case 'F#':
          noteIndex = 6
          break
        case 'G':
          noteIndex = 7
          break
        case 'G#':
          noteIndex = 8
          break
        case 'A':
          noteIndex = 9
          break
        case 'A#':
          noteIndex = 10
          break
        case 'B':
          noteIndex = 11
          break
      }
      const pitch = 12 * rangeIndex + noteIndex
      const duration = 0.5
      const volume = 1
      this.player.queueWaveTable(audioContext, audioContext.destination, preset, when, pitch, duration, volume)
    }
  },
  watch: {
    currentCol (newValue) {
      if (this.play && this.col === newValue) {
        this.active = true
        if (this.note !== ' ') {
          this.playNote()
        }
      } else {
        this.active = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  user-select: none;
  &.active {
    border: 1px solid #fff;
  }
  &.C {
    background-color: #ff0000; // do
  }
  &.CD {
    background-color: #ff5e00; // do#
  }
  &.D {
    background-color: #fb0; // ré
  }
  &.DD {
    background-color: #e6ff00; // ré#
  }
  &.E {
    background-color: #8f0; // mi
  }
  &.F {
    background-color: #2bff00; // fa
  }
  &.FD {
    background-color: #0f3; // fa#
  }
  &.G {
    background-color: #00ff91; // sol
  }
  &.GD {
    background-color: #0fe; // sol#
  }
  &.A {
    background-color: #00b2ff; // la
  }
  &.AD {
    background-color: #05f; // la#
  }
  &.B {
    background-color: #0800ff; // si
  }
}
</style>
