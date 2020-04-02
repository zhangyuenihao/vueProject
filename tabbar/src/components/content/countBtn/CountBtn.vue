<template>
    <div class="count-btn">
        <span class="sub" @click="subClick">-</span>
        <span class="number" slot="number">{{count}}</span>
        <span class="add" @click="addClick">+</span>
    </div>
</template>

<script>
    export default {
        name: "CountBtn",
        props: {
            count: {
                type: Number,
                default() {
                    return 1
                }
            }
        },
        methods: {
            subClick(count) {
                this.$emit('subClick', count)
            },
            addClick(count) {
                this.$emit('addClick', count)
            },
        },
        watch: {
            count(value) {
                this.count = value
            }
        }
    }
</script>

<style scoped>
    .count-btn {
        float: right;
        margin-right: 10px;
        vertical-align: middle;
    }

    .count-btn span {
        padding: 2px 8px;
        background-color: #eeeeee;
        border: 1px solid #ffffff;
    }
</style>