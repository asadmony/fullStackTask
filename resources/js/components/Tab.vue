<template>
    <div class="tab-container" v-if="isSelected">
        <slot></slot>
    </div>
</template>
<style>
    .tab-container{
        padding: 10px 15px 10px 15px;
        background-color: white;
        border-radius: 20px;
    }
</style>
<script>
export default {
    props:{
        isSelected: {
            type: Boolean,
        }
    }
}
</script>
