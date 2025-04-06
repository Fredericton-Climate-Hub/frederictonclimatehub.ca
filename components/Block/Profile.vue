<template>
  <article class="mt-600 flex rounded-sm border border-blue-700 bg-blue-900 p-200">
    <div class="w-full">
      <div
        v-if="avatar"
        class="mb-100 flex aspect-5/7 w-full min-w-1200 md:float-right md:-mt-400 md:ml-200 md:w-1/2 lg:max-w-2400 xl:w-1/3"
      >
        <img :src="avatar">
      </div>
      <slot />
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  avatar?: string
}>()
</script>

<style>
h2 {
  @apply text-200 xl:text-250 2xl:text-300 mb-75 mt-0;
}
</style>
