<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LDemo />
    <l-button :loading="loading">按钮</l-button>
    <LIcon type="loading" title="加载" @click="click" />
  </div>
</template>

<script>
// @ is an alias to /src
// import LDemo from '../../components/lib/demo'

export default {
  name: 'HomeView',
  // components: {
  //   LDemo,
  // },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    click() {
      this.loading = true
    },
  },
}
</script>
