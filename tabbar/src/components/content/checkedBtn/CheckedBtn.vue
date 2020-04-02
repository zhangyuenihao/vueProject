<template>
    <div class="checkedBtn" :class="{check:isChecked}">
        <img src="~assets/image/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CheckedBtn",
        props:{
            isChecked:{
                type:Boolean,
                default(){
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    .checkedBtn {
        width: 20px;
        height: 20px;
        border: 2px solid #aaaaaa;
        border-radius: 50%;
        text-align: center;
        background-color:#ffffff ;
    }
    .check {
        background-color: var(--color-high-text);
        border: none;
    }
</style>