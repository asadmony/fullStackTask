<template>
<div class="main">
    <div class="container">
        <div class="row d-flex nav-buttons">
        <a href="#">Live & Upcoming</a>
        <a href="#">Result</a>
        </div>
        <div class="row">

        </div>
    </div>
</div>
</template>
<style>
.main{
    background-color: #f2f1f1;
}
.nav-buttons > a{
    padding: 10px 20px 10px 20px;
    border-radius: 10px 10px 0 0;
    background-color: #006442;
    color: white;
}
.nav-buttons > a:focus{
    background-color: white;
    color: black;
}
</style>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
