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
            subClick() {
                this.$emit('subClick')
            },
            addClick() {
                this.$emit('addClick')
            },
        }
    }
</script>

<style scoped>
    .count-btn {
        float: right;
        margin-right: 10px;
    }

    .count-btn span {
        padding: 0 8px;
        background-color: #eeeeee;
        border: 1px solid #ffffff;
    }
</style>