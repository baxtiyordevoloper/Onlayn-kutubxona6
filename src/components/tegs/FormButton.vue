<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
    <button type="button" class="btn" style="min-width: 25%">
        <span>{{name}}</span>
        <span v-if="loading" class="spinner-border spinner-border-sm text-light"></span>
    </button>
</template>

<style scoped>

</style>