<template>
    <div class="dataList">
        <item-list>
            <div slot="title">{{}}</div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
        <item-list>
            <div slot="title"></div>
            <div slot="item-content"></div>
        </item-list>
    </div>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    export default {
        name: "ListBar",
        props:{
          dataList:{
              type:Object,
              default(){
                  return {}
              }
          }
        },
        components{
            ItemList
        }
    }
</script>

<style scoped>

</style>