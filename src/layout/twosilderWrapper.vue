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
            <router-view></router-view>
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
<style lang="scss">
    .leftrightWrapper{
        width:100%;
        >.left{
            width:256px;
            position:absolute;
            top:80px;
            height:100%;
        }
        >.right{
            padding:20px 20px 20px 276px;
        }
        .ant-menu-inline{
            height:100%;
        }
        .ant-menu-inline .ant-menu-submenu{
            text-align:left;
        }
    }
</style>