<script setup lang="ts">
const handleInputChange = (event: Event) =>
  (event.target as HTMLInputElement).value

const errorClass = 'border-red-500 placeholder:text-red-500 text-red-500 focus:border-red-500 bg-red-50'
const normalClass = 'border-gray-300 placeholder:text-gray-400 text-gray-700 focus:border-green-500 bg-gray-50'

defineProps({
  label: String,
  required: Boolean,
  errorMessage: String,
  modelValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="w-full flex flex-col gap-y-1">
    <label class="text-sm text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input v-bind="$attrs" @input="$emit('update:modelValue', handleInputChange($event))" :value="modelValue"
      :class="errorMessage ? errorClass : normalClass" class="border text-sm rounded-md p-2 w-full focus:outline-none " />
    <span v-if="errorMessage" class="text-red-500 text-xs italic">{{ errorMessage }}</span>
  </div>
</template>
