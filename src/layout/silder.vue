<template>
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
        // const onOpenChange=(openKeys)=> {
        //     console.log(openKeys)
        //     // const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        //     // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        //     //     this.openKeys = openKeys;
        //     // } else {
        //     //     this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        //     // }
        // }
        // return{
        //     data,onOpenChange
        // }
    }
}
</script>