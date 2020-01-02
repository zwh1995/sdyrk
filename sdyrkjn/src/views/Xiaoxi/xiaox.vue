<template>
  <div class="ine-box">
    <dl v-for="(item,index) in inelist" :key="index">
      <dt>
        <img :src="item.img" alt="">
      </dt>
      <dt>
        {{item.title}}
      </dt>
    </dl>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inelist:[]
    }
  },
  created(){
    this.getine()
  },
  methods:{
    getine(){
      this.$http.get('/api/list').then(res=>{
        console.log(res.data.list)
        this.inelist = res.data.list
      })
    }
  }  
}
</script>
<style lang='scss'>
.ine-box{
  width: 100%;
  height: 120px;
  dl{
    display: flex;
  }
}
</style>