<template>
  <NuxtLayout name="default">
    <header
      class="flex w-full justify-center bg-blue-900"
      role="banner"
    >
      <h1 class="p-300 text-300 xl:text-400 2xl:text-500">
        {{ title ?? $route.name }}
      </h1>
    </header>
    <article class="mx-auto w-4/5 py-300">
      <slot />
    </article>
  </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<style>
h2 {
  @apply text-200 xl:text-250 2xl:text-300 mb-75 mt-200;
}

p {
  @apply my-100 first:mt-0 last:mb-0;
}

article p a,
article ul a {
  @apply text-blue-500;
}

article ul li {
  @apply my-25;
}
</style>
