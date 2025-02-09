<template>
  <div class="flex h-fit flex-col">
    <header :class="['sticky top-0 z-[10000] w-full flex-none overflow-y-scroll bg-white shadow-md lg:h-fit lg:overflow-y-visible', { 'h-dvh': menuExpanded }]">
      <div class="flex h-full flex-col items-start justify-between lg:flex-row lg:flex-nowrap lg:items-end">
        <div class="w-full flex-none lg:w-fit">
          <div class="flex w-full flex-none items-center justify-between px-200 py-125">
            <a
              href="/"
            >
              <nuxt-img
                src="/img/Logo-Transparent-EN.png"
                alt="Fredericton Community Climate Hub Logo"
                sizes="210px sm:240px md:320px lg:360px"
                format="webp"
              /></a>

            <button
              class="inline-flex items-center justify-end space-x-100 lg:hidden lg:grow-0 lg:px-0"
              @click.prevent.stop="menuExpanded = menuExpanded ? '' : '/'"
            >
              <span class="text-125 uppercase">Menu</span>
              <IconMenu class="size-150 sm:size-200 md:size-250" />
            </button>
          </div>
        </div>
        <nav
          role="navigation"
          aria-label="Main"
          :class="['w-full grow', { 'hidden lg:flex': !menuExpanded, 'flex': menuExpanded }]"
        >
          <ul class="flex w-full grow flex-col px-150 py-200 text-200 uppercase tracking-wider text-green-100 lg:flex-row lg:items-end lg:justify-end lg:py-0 lg:text-125">
            <li
              v-for="item of nav"
              :key="item.stem"
              :class="['group space-y-100 border-b border-dashed border-metallic-700 p-100 last:border-b-0 lg:space-y-0 lg:border-b-4 lg:border-t-0 lg:border-solid lg:last:border-b-4', { 'border-white text-green-500 lg:border-green-500': [menuExpanded, $route.path].some(p => p.startsWith(item.path)), 'hover:text-green-500 lg:border-white lg:hover:border-green-500': [menuExpanded, $route.path].every(p => !p.startsWith(item.path)) }]"
            >
              <a
                :href="item.path"
                class="inline-flex w-full cursor-pointer items-center justify-between space-x-75 lg:w-fit"
                @click.stop="event => (item.children?.length > 1 && event.preventDefault()) || toggleMenu(item.path, '/')"
              >
                <span>{{ item.title }}</span>
                <IconArrowAngle
                  v-if="item.children?.length > 1"
                  :class="['flex size-200 lg:size-100', { 'rotate-180': menuExpanded === item.path }]"
                />
              </a>
              <ul
                v-if="item.children?.length > 1"
                :class="['w-full flex-col px-200 py-100 text-green-300 lg:absolute lg:left-0 lg:top-full lg:flex-row lg:justify-center lg:space-x-125 lg:border-t lg:border-green-900 lg:p-125 lg:px-0 lg:py-100 lg:drop-shadow-lg', { 'flex bg-blue-900/40 lg:bg-white': menuExpanded === item.path, 'hidden bg-white': menuExpanded !== item.path }]"
              >
                <li
                  v-for="child in item.children"
                  :key="child.stem"
                  class="border-b-0 border-t border-dashed border-metallic-700 py-100 first:border-t-0 last:content-none hover:text-green-500 lg:border-none lg:py-0 lg:after:ml-100 lg:after:font-thin lg:after:text-green-700 lg:after:content-['/'] lg:after:last:content-none"
                >
                  <a :href="child.path">{{ child.navigationTitle ?? child.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
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
            <li>
              <a
                href="https://docs.google.com/forms/d/1V_BJbM0XTcws3-XxfDshNlt9StHDldFL1KsLJpZwg3U"
                class="hover:underline"
              >Join the Hub</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1KEV0h62vndhsry19o3qBI68loUDOrGrkWAFPibkwKLQ"
                class="hover:underline"
              >Partner with Us</a>
            </li>
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
            <li>
              <a
                href="https://www.fredericton.ca/sites/default/files/2023-05/cof_ceep_synposis_2022_20220614_0_1.pdf"
                class="hover:underline"
              >CoF Community Energy & Emissions Plan</a>
            </li>
            <li>
              <a
                href="https://www.fredericton.ca/sites/default/files/2023-05/cof_corp_ceep_synposis_2022_20220614_1_0.pdf"
                class="hover:underline"
              >CoF Corporate Energy & Emissions Plan</a>
            </li>
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
                href="https://www.climatereality.ca/ncl"
                class="hover:underline"
              >National Climate League (NCL)</a>
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
            <li>
              <a
                href="https://drive.google.com/file/d/1dr68SUJGf9o0EphMcrmDyNl7SXlpuftA/view?usp=drive_link"
                class="hover:underline"
              >Letters Patent</a>
            </li>
            <li>Privacy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <!-- Footer -->
      <div class="flex flex-col justify-between space-y-200 md:w-1/2 lg:w-1/3">
        <div>
          <nuxt-img
            src="/img/Logo-Transparent-green-900-EN.png"
            sizes="320px 2xs:420px md:350px lg:350px xl:420px"
            format="webp"
          />
        </div>
        <div class="space-y-100">
          <!-- Address -->
          <div class="flex flex-col">
            <span class="sr-only">Address</span>
            <span>180 Saint John Street</span>
            <span>Fredericton, NB</span>
            <span>E3B 4A9</span>
            <span>Canada</span>
          </div>
          <!-- Contact -->
          <dl class="flex flex-col">
            <dt class="sr-only">
              Email
            </dt>
            <dd class="inline-flex items-center space-x-50">
              <IconMail />
              <a
                href="https://docs.google.com/forms/d/1OVHlw7O1mym-aOoc7LbnObPEkxmjtkuZcO0d5fu8xMQ"
                class="hover:underline"
              >{{ email }}</a>
            </dd>
            <dt class="sr-only">
              Phone
            </dt>
            <dd class="inline-flex items-center space-x-50">
              <IconPhone /><span>{{ phone }}</span>
            </dd>
            <dt class="sr-only">
              Facebook
            </dt>
            <dd class="inline-flex items-center space-x-50">
              <IconFacebook /><a
                href="https://www.facebook.com/groups/1267647161107128/"
                class="hover:underline"
              >Facebook</a>
            </dd>
            <dt class="sr-only">
              YouTube
            </dt>
            <dd class="inline-flex items-center space-x-50">
              <IconYouTube /><a
                href="https://www.youtube.com/@FrederictonCommunityClimateHub"
                class="hover:underline"
              >YouTube</a>
            </dd>
          </dl>
          <!-- Copyright -->
          <div class="inline-flex space-x-50 text-pretty">
            <span class="text-nowrap">&copy; 2024-{{ new Date().getFullYear() }}</span>
            <span>Fredericton Community Climate Hub Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { data: nav } = await useAsyncData(() => queryCollectionNavigation('default', ['navigationTitle'])
const menuExpanded = ref<string>('')

function toggleMenu(path: string, reset?: string) {
  menuExpanded.value = menuExpanded.value !== path ? path : (reset ?? '')
}

const { email, phone } = useRuntimeConfig().public.contact
</script>
