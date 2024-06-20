<script setup>
import FooterRow from "@/components/FooterRow.vue";
import HeaderRow from "@/components/HeaderRow.vue";
</script>

<template>
    <div class="container-fluid">
        <HeaderRow/>

        <router-view/>

        <FooterRow/>
    </div>
</template>

<style scoped>

</style>