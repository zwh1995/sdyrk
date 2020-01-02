<template>
  <div class="down-box">
    <router-link to="/xiao">消息</router-link>
    <router-link to="/fre">朋友圈</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang='scss'>
.down-box{
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &.router-link-exact-active {
       color: #fff;
     }
  }
}

</style>