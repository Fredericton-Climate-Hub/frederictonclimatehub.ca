<template>
  <div>
    <header
      :class="[{ 'h-dvh': menuVisible, 'h-fit': !menuVisible }, `sticky top-0 z-[10000] w-full flex-none overflow-y-scroll bg-white p-125 shadow-md lg:h-fit lg:overflow-hidden`]"
    >
      <div class="flex h-full flex-wrap items-start justify-between lg:flex-nowrap lg:items-end">
        <div class="flex-none">
          <a href="/">
            <nuxt-img
              src="/img/Logo-Transparent-EN.png"
              alt="Fredericton Community Climate Hub Logo"
              sizes="210px sm:240px md:320px lg:360px"
              format="webp"
            /></a>
        </div>
        <div class="flex grow justify-end px-100 lg:hidden lg:grow-0 lg:px-0">
          <button
            class=""
            @click.prevent.stop="menuVisible = !menuVisible"
          >
            <IconMenu class="size-200 sm:size-250 md:size-300" />
          </button>
        </div>
        <nav :class="[{ 'hidden lg:flex': !menuVisible, 'flex': menuVisible }, `w-full flex-col items-end justify-start gap-x-150 divide-y divide-dashed divide-metallic-700 px-150 py-200 text-200 uppercase tracking-wider text-green-100 lg:grow lg:flex-row lg:items-end lg:justify-end lg:divide-y-0 lg:py-0 lg:text-125`]">
          <a
            href="#"
            class="inline-flex w-full py-75 hover:text-green-300 lg:w-fit lg:py-0"
          >
            About
          </a>
          <a
            href="#"
            class="inline-flex w-full py-75 hover:text-green-300 lg:w-fit lg:py-0"
          >
            Projects
          </a>
          <a
            href="#"
            class="inline-flex w-full py-75 hover:text-green-300 lg:w-fit lg:py-0"
          >
            Get Involved
          </a>
          <a
            href="#"
            class="inline-flex w-full py-75 hover:text-green-300 lg:w-fit lg:py-0"
          >
            Resources
          </a>
        </nav>
      </div>
    </header>
    <main class="grow">
      <slot />
    </main>
    <footer class="flex flex-col gap-200 bg-green-100 p-200 font-thin text-green-900 md:flex-row-reverse">
      <!-- Columns -->
      <div class="grid grow grid-cols-1 gap-300 xs:grid-cols-2 sm:grid-cols-3 md:w-1/2 lg:w-2/3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-300 2xl:gap-x-400">
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            About
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>The Hub</li>
            <li>Board of Directors</li>
            <li>Members</li>
            <li>Advisors</li>
            <li>Supporters</li>
            <li>Contact</li>
            <li>YouTube</li>
            <li>Meeting Schedule</li>
          </ul>
        </div>
        <!-- <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Projects
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>Circular Economy</li>
            <li>Active Transit</li>
          </ul>
        </div>
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Blog
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>News</li>
            <li>Fredericton</li>
            <li>New Brunswick</li>
            <li>Archive</li>
          </ul>
        </div> -->
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Get Involved
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>Join the Hub</li>
            <li>Partner with Us</li>
            <li>Volunteer</li>
            <li>Events</li>
            <li>Campaigns</li>
            <li>Newsletter</li>
            <li>Donate</li>
          </ul>
        </div>
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Resources
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>CoF Community Energy & Emissions Plan</li>
            <li>National Climate League</li>
          </ul>
        </div>
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Links
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>
              <a
                class="hover:underline"
                href="https://www.atlanticclimatehubs.ca/"
              >Atlantic Climate Hubs</a>
            </li>
            <li>
              <a
                class="hover:underline"
                href="https://www.climatereality.ca/"
              >Climate Reality Project</a>
            </li>
            <li>
              <a
                class="hover:underline"
                href="https://environment-fredericton.hub.arcgis.com/pages/dashboard_eng"
              >CoF Environmental Dashboard</a>
            </li>
            <li>
              <a
                class="hover:underline"
                href="https://climatetrace.org/"
              >Climate Trace</a>
            </li>
          </ul>
        </div>
        <div class="max-w-1200 space-y-50">
          <h3 class="font-semibold">
            Legal
          </h3>
          <ul class="space-y-50 font-thin leading-5">
            <li>By-laws</li>
            <li>Letter's Patent</li>
            <li>Privacy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <!-- Footer -->
      <div class="flex flex-col justify-between space-y-200 md:w-1/2 lg:w-1/3">
        <div>
          <nuxt-img
            src="/img/Logo-Transparent-Green-900-EN.png"
            sizes="320px 2xs:420px md:350px lg:350px xl:420px"
            format="webp"
          />
        </div>
        <div class="space-y-100">
          <!-- Address -->
          <div class="flex flex-col xl:flex-row">
            <span>180 St John St</span>
            <span class="hidden xl:block">,&ensp;</span>
            <span>Fredericton, NB</span>
            <span class="hidden xl:block">,&ensp;</span>
            <span>E3B 9A1</span>
            <span class="hidden xl:block">,&ensp;</span>
            <span>Canada</span>
          </div>
          <!-- Contact -->
          <div class="flex flex-col">
            <a href="https://frederictonclimatehub.ca">Web: frederictonclimatehub.ca</a>
            <a href="mailto:hello@example.com">Email: info@frederictonclimatehub.ca</a>
            <span>Phone: 506-999-9999</span>
          </div>
          <!-- Copyright -->
          <div class="flex flex-col xl:flex-row">
            <span>&copy; 2024-{{ new Date().getFullYear() }}</span><span class="hidden xl:block">&ensp;</span>
            <span>Fredericton Community Climate Hub Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const menuVisible = ref(false)
</script>
