<script setup>
import FooterRow from "@/components/FooterRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import HeaderRow from "@/components/HeaderRow.vue";
</script>

<template>
    <div class="container-fluid">
        <HeaderRow/>

        <div class="row mt-4">
            <CategoriesCol/>

            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <router-view/>
            </div>

        </div>
            <FooterRow/>
    </div>
</template>

<style scoped>

</style>