<template>
  <div class="wrapper">
    <nav class="nav">
      <a v-if="storeUsername">您好，{{storeUsername}}</a>
      <router-link :to="{ path: '/' }" v-else>登陆</router-link>
      <router-link :to="{ path: '/register' }" >注册</router-link>
    </nav>
      <router-view></router-view>
  </div>
</template>

<script>
import {computed} from 'vue'

import { useStore } from "vuex";
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const storeUsername = computed(() => {
      return store.getters.getusername
    })
    return {
      storeUsername
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.wrapper{
  height:100%;
}
.nav{
  position: relative;
  z-index:200;
  height:80px;
  line-height:80px;
  text-align:right;
  box-sizing: border-box;
  font-size:16px;
  background:#1890ff;

  >a{
    display:inline-block;
    padding-left:20px;
    padding-right:20px;
    color:#fff !important;
  }
  >a:last-child{
    margin-right:40px;
  }
}

</style>
