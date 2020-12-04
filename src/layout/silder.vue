<template>
     <a-menu
            mode="inline"
            :openKeys="openKeys"
            :selectedKeys="selectedKeys"
            style="width: 256px"
            @openChange="onOpenChange">
        <a-sub-menu v-for="item in data"  :key="item.name" :title="item.name">
            <template v-if="item.children.length>0" >
                <template v-for="oitem in item.children">
                    <template v-if="oitem.children&&oitem.children.length>0">
                        <silder :key="oitem.name" :data="[oitem]"></silder>
                    </template>
                    <template v-else>
                        <a-menu-item :key="oitem.name">
                            <span>{{oitem.name}}</span>
                        </a-menu-item>
                    </template> 
                </template>
            </template>
        </a-sub-menu>    
     </a-menu>
</template>

<script>
// import {inject} from 'vue'
// import silder from './silder'
export default {
    name:'silder',
    props:{
        data:Object
    },
    // components:{silder},
    setup(props){
        // const data = inject('proMsg')
        console.log(props)

      let selectedKeys=['option21'];
      let openKeys = ['nav2'];
      let rootSubmenuKeys=[]
      const onOpenChange=(keys)=> {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            openKeys = keys;
        } else {
            openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
        console.log(openKeys)
     }
        return{
            selectedKeys,openKeys,onOpenChange
        }
    }
}
</script>