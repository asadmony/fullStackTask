<template>
<div class="">
    <div class="container py-3 main">
        <ul class="nav nav-tabs">
            <li v-for="tab in tabs" :key="tab" class="nav-item">
                <a class="nav-link" :class="{active: tab === selected}" @click="setTab(tab)">
                {{ tab }}
                </a>
            </li>
        </ul>
        <slot></slot>
    </div>
</div>
</template>
<style scoped>
.main{
    background-color: #f2f1f1;
}
.nav-tabs{
    padding: 0 30px 0 100px;
    border: none;
}
.nav-link{
    position: relative;
    padding: 10px 20px 10px 20px;
    margin-bottom: 5px;
    border-radius: 10px 10px 0 0;
    background-color: #006442;
    color: white;
    cursor: pointer;
    border-bottom: none;
    -webkit-transition: color 1s;
    -moz-transition:    color 1s;
    -ms-transition:     color 1s;
    -o-transition:      color 1s;
    transition:         color 1s;
}
.active{
    transform: scale(1.2);
    position: relative !important;
    margin: 0;
    display: block;
    padding: 10px 30px 10px 30px !important;
    background-color: white !important;
    color: black;
    z-index: 1000;
}
</style>
<script>
    export default {
        props:{
            tabs: {
                type: Array,
                required:  true,
            },
            selected: {
                type: String,
                required: true,
            }
        },
        methods: {
            setTab(tab){
                this.$emit('selected', tab);
            }
        },
    }
</script>
