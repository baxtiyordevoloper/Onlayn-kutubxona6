<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    propsId: {
        required: true,
        type: String
    },
    inputType: {
        default: 'text'
    },
    autoComplete: {
        type: Boolean,
        required: false
    }

})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="mb-3">
        <label v-bind:for="propsId">{{labelName}}</label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :type="inputType" class="form-control" :id="propsId"
            :autoComplete="autoComplete"
        >
    </div>
</template>

<style scoped>

</style>