<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(() => queryCollection('pages')
  .path(route.path)
  .first())

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <NuxtLayout
    name="page"
    :title="page?.title ?? 'Page not found'"
  >
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <div v-else>
      Page not found.
    </div>
  </NuxtLayout>
</template>
