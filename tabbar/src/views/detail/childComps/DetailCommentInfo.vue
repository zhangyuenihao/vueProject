<template>
    <div class="detail-comment-info" v-if="Object.keys(commentInfo).length!==0">
        <div class="info-header">
            <h3 class="header-title">用户评价</h3>
            <div class="header-more">
                更多
                <span class="arrow-right">&gt;&gt;</span>
            </div>
        </div>
        <div class="comment-user-item">
            <div class="info-user">
                <img :src="commentInfo.user.avatar" alt="">
                <span class="comment-user-name">{{commentInfo.user.uname}}</span>
            </div>
            <p class="comment-text">{{commentInfo.content}}</p>
            <div class="comment-goods-info">
                <span class="comment-date">{{commentInfo.created|showDate}}</span>
                <span class="goods-style">{{commentInfo.style}}</span>
            </div>
        </div>
        <div class="comment-image" v-if="commentInfo.images">
            <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
        </div>

    </div>

</template>

<script>
    import {formatDate} from 'common/utils'

    export default {
        name: "DetailCommentInfo",
        props: {
            commentInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            showDate(str) {
                const date = new Date(str*1000)
                return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
            }
        }
    }
</script>

<style scoped>
    .detail-comment-info {
        border-top: 3px solid #eeeeee;
        padding: 0 20px;
    }
    .info-header {
        line-height: 60px;
        border-bottom: 1px solid rgba(204,204,204,.5);
    }
    .header-title{
        font-weight: normal;
        display: inline-block;
    }
    .header-more{
        float: right;
    }
    .info-user{
        margin: 10px 0;
    }
    .info-user img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .comment-text{
        line-height: 1.5;
    }
    .comment-goods-info{
        color: #cccccc;
        line-height: 40px;
        font-size: 13px;
    }
    .comment-date{
        margin-right: 10px;
    }
    .comment-image{
        margin-bottom: 10px;
    }
    .comment-image img{
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
</style>