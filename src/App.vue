<script setup>
import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>
    <div class="container-fluid">

        <HeaderRow/>

        <div class="row mt-4">

            <CategoriesCol/>

            <div class="col-12 col-md-10 mt-4 mt-md-0">

                <BooksRow/>

                <PaginationRow/>

            </div>

        </div>

        <FooterRow/>

    </div>

</template>

<style>


</style>