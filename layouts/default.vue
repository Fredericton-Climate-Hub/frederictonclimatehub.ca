<template>
  <header class="flex-none bg-yellow-700 p-125">
    <div class="flex justify-between">
      <div class="flex-none">
        <nuxt-link to="/">
          Fredericton Community Climate Hub
        </nuxt-link>
      </div>
      <nav class="inline-flex grow justify-end gap-x-100">
        <!-- Add page links here. -->
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
  <footer class="flex-none bg-yellow-800 p-100">
    <div>&copy;2023-{{ new Date().getFullYear() }} Fredericton Community Climate Hub Inc.</div>
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
    <div class="flex flex-col justify-between space-y-100 md:w-1/2 lg:w-1/3">
      <img
        src="/img/Logo-Transparent-Green-900.png"
        class="w-[300px] xl:w-[400px]"
      >
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
</template>
