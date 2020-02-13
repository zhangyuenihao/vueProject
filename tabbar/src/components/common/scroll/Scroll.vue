<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
<<<<<<< HEAD

</template>

<script>
    import BScroll from 'better-scroll'
=======
    
</template>

<script>
    import  BScroll from 'better-scroll'
>>>>>>> origin/dev
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:3,
                pullUpLoad:true
            })

        },
        methods:{
            scrollTo(x,y,time){
                this.scroll.scrollTo(x,y,time)
            }
=======

            })
>>>>>>> origin/dev
        }
    }
</script>

<style scoped>

</style>