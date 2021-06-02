<template>
    <div class="cell-group">
        <div class="title" v-if="title.length">{{title}}</div>
        <cell v-for="(item) in items" 
        :key="item.title" 
        :icon="item.icon" 
        :title="item.title"
        :isArrow="item.isArrow"
        :arrowText="item.arrowText"
        >      
        </cell>
    </div>
</template>

<script>
import Cell from './cell'
export default {
    components: {
        Cell
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
.cell-group {
    margin: .2rem;
    padding: .2rem;
    border-radius: 8px;
    font-size: .24rem;
    background-color: #fff;
    color: #aaa;
    .title {
        padding-bottom: .1rem;
        border-bottom: 1px solid #eee;
    }
}

</style>