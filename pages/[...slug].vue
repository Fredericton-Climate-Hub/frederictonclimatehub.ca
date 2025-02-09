<script setup lang="ts">
import { NuxtLayout } from '#components'

const route = useRoute()
const { data: page } = await useAsyncData(() => queryCollection('default')
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
