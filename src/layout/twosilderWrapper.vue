<template>
    <div class="leftrightWrapper">
        <div class="left">
        <a-menu
            mode="inline"
            :openKeys="openKeys"
            :selectedKeys="selectedKeys"
            style="width: 256px"
            @openChange="onOpenChange">

            <silder :data="menuData"></silder>
        </a-menu>
        </div>
        <div class="right"> 
        2
        
        </div>
    </div>
</template>
<script>
import silder from './silder'
export default {
  components: { silder },
  setup(){
      let menuData =[{
          name:'nav1',
          children:[
              {name:'option11'},
              {name:'option12'}
          ]
      },{
          name:'nav2',
          children:[
              {name:'option21'},
              {name:'option22',children:[
                {name:'option221'},
                {name:'option222',children:[
                    {name:'option2221'}
                ]} 
              ]}
          ]
      }]
      return {
          menuData
      }
  }
}
</script>
<style lang="scss" scoped>
    .leftrightWrapper{
        display:flex;
        position: fixed;
        top:0px;
        padding-top:80px;
        box-sizing: border-box;
        height:100%;
        width:100%;
        >.left{
            width:300px;
            position:fixed;
            height:100%;
        }
        >.right{
            flex:1;
        }
        .ant-menu-inline{
            height:100%;
        }
    }
</style>