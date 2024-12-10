<template>
  <header class="flex-none bg-yellow-700 p-6">
    <div class="flex justify-between">
      <div class="flex-none">
        <nuxt-link to="/">
          Fredericton Community Climate Hub
        </nuxt-link>
      </div>
      <nav class="inline-flex grow justify-end gap-x-6">
        <!-- Add page links here. -->
      </nav>
    </div>
  </header>
  <main class="grow">
    <slot />
  </main>
  <footer class="flex-none bg-yellow-800 p-4">
    <div>&copy;2023-{{ new Date().getFullYear() }} Fredericton Community Climate Hub Inc.</div>
  </footer>
</template>
