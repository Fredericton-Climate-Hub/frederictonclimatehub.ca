<template>
  <div class="text-center">
    <!-- Hero -->
    <section
      class="section-fs min-h-dvh gap-y-0 py-0 font-mono text-green-100"
      style="background: radial-gradient(rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.96) 20%, rgba(255, 255, 255, 0.8) 100%), url('/img/climate-icons.png') 100px 100px;"
    >
      <div class="flex w-[85%] grow flex-col justify-center p-200 2xl:w-3/5">
        <!-- Grid -->
        <div class="grid w-full grid-cols-6 gap-25 text-100 2xs:text-150 xs:text-300 sm:grid-cols-9 md:text-400 lg:text-600">
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            C
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            O
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            M
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            M
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            U
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            N
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            I
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            T
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-500">
            Y
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            D
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            R
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            I
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            V
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            E
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-orange-300">
            N
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500 sm:col-start-3">
            C
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            L
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            I
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            M
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            A
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            T
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-500">
            E
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300 sm:col-start-4">
            A
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300">
            C
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300">
            T
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300">
            I
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300">
            O
          </span>
          <span class="flex aspect-square items-center justify-center rounded-lg bg-metallic-900 p-25 leading-none text-green-300">
            N
          </span>
        </div>
        <div class="w-full py-50 text-start font-mono text-85 sm:text-end md:text-100">
          Made in Fredericton,NB
        </div>
      </div>
      <div class="w-full">
        <span class="text-75">We are Supported by</span>
        <div class="w-full bg-green-100 p-150">
          <div class="mx-auto flex w-full flex-wrap items-center justify-center gap-x-200 gap-y-100 text-center lg:gap-x-400">
            <nuxt-img
              src="/img/partners/climatereality.png"
              height="36"
              format="webp"
            />
            <nuxt-img
              src="/img/partners/fredericton.png"
              height="28"
              format="webp"
            />
            <nuxt-img
              src="/img/partners/tamarack.png"
              height="36"
              format="webp"
            />
            <nuxt-img
              src="/img/partners/ccnb.png"
              height="60"
              format="webp"
            />
            <nuxt-img
              src="/img/partners/unb.png"
              height="42"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission / Goals -->
    <section
      class="section-fs bg-green-900"
      style="background-image: radial-gradient(rgba(83, 118, 35, 0.5) 1px, rgba(232, 243, 216, 0.5) 1px); background-size: 30px 30px;"
    >
      <h2 class="w-fit rounded-md bg-green-300 px-100 py-50 text-center uppercase text-green-900">
        Our Goal
      </h2>
      <iframe
        src="https://www.youtube.com/embed/hW3rrovHE8w?si=nryJDctpNmu1ihvi"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="aspect-[1.78] w-[375px] sm:w-[480px] md:w-[600px] lg:w-[800px]"
      />
      <div class="w-5/6 rounded-xl border border-dashed border-green-300 bg-green-700 p-200 text-125 text-green-100 xl:text-150 2xl:w-1/2">
        The advancement of climate action through education and mobilization in the Greater Fredericton Region, empowering members of our community to become environmentally conscious residents who contribute to a resilient, equitable, and livable city for all.
      </div>
      <!-- <div>
        <nuxt-img
          src="/img/fredericton.png"
          sizes="320px 2xs:420px xs:560px md:640px xl:720px"
          format="webp"
        />
      </div> -->
    </section>

    <!-- Topics -->
    <section class="section-fs border-t border-dashed border-orange-300 bg-orange-900">
      <h2 class="mx-auto w-fit rounded-md bg-orange-300 px-100 py-50 text-center uppercase text-orange-900">
        Climate Adaptation in Fredericton
      </h2>
      <div class="mx-auto flex w-4/5 flex-row flex-wrap justify-center gap-100 2xl:w-3/4">
        <div class="flex aspect-square w-full flex-col items-center justify-start xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <nuxt-img
            src="/img/woman-bike-laptop.png"
            width="240px"
            format="webp"
          />
          <span class="w-2/3 rounded-lg text-125 font-thin uppercase leading-snug tracking-widest text-orange-300">Eco Mobility</span>
        </div>
        <div class="flex aspect-square w-full flex-col items-center justify-start xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <nuxt-img
            src="/img/circular-economy.png"
            width="240px"
            format="webp"
          />
          <span class="w-2/3 rounded-lg text-125 font-thin uppercase leading-snug tracking-widest text-orange-300">Circular Economy</span>
        </div>
        <div class="flex aspect-square w-full flex-col items-center justify-start xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <nuxt-img
            src="/img/green-home.png"
            width="240px"
            format="webp"
          />
          <span class="w-2/3 rounded-lg text-125 font-thin uppercase leading-snug tracking-widest text-orange-300">Sustainable Buildings</span>
        </div>
        <div class="flex aspect-square w-full flex-col items-center justify-start xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <nuxt-img
            src="/img/light-bulb.png"
            width="240px"
            format="webp"
          />
          <span class="w-2/3 rounded-lg text-125 font-thin uppercase leading-snug tracking-widest text-orange-300">Renewable Energy</span>
        </div>
        <div class="flex aspect-square w-full flex-col items-center justify-start xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <nuxt-img
            src="/img/house-flooded.png"
            width="240px"
            format="webp"
          />
          <span class="w-2/3 rounded-lg text-125 font-thin uppercase leading-snug tracking-widest text-orange-300">Mitigation</span>
        </div>
      </div>
    </section>

    <!-- Meeting Schedule -->
    <section class="section-fs border-t border-dashed border-blue-300 bg-blue-900">
      <h2 class="mx-auto w-fit rounded-md bg-blue-300 px-100 py-50 text-center uppercase text-blue-900">
        All-Members Meetings 2025
      </h2>
      <div class="mx-auto flex w-3/4 flex-col gap-400 lg:flex-row">
        <div class="flex w-full flex-col gap-x-200 text-start lg:w-1/2 lg:text-end">
          <div class="font-thin uppercase tracking-widest">
            When
          </div>
          <div class="divide-y divide-dashed divide-blue-700">
            <div
              v-for="([date, start, end], index) in meetings.slice(upperBound, lowerBound)"
              :key="date"
              :class="[`py-75 text-150`, { 'font-bold': index === nextMeetingIndex - upperBound }]"
            >
              {{ date }}, {{ start }} - {{ end }}pm
            </div>
            <div class="py-75 text-150 text-blue-300">
              <a
                href="https://docs.google.com/document/d/1Ohz76sdByp9NuaoMkbJYSQKHKN8bKYNaQ20fAAHROk8/edit?usp=sharing"
                target="_blank"
                class="text-100 font-thin uppercase tracking-widest hover:underline"
              >
                &raquo; Agenda
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-full shrink flex-col text-left lg:w-1/2">
          <div class="font-thin uppercase tracking-widest">
            Where
          </div>
          <div class="h-[320px] py-100 lg:h-full">
            <span class="sr-only">180 St John St, Fredericton, NB, E3B 4A9</span>
            <div class="h-full rounded-lg border border-blue-700 p-[2px]">
              <LeafletMap
                :center="[45.95797050115421, -66.63825758647747]"
                :zoom="14"
                class="h-full rounded-md"
              >
                <LeafletMarker
                  :center="[45.95797050115421, -66.63825758647747]"
                  title="180 St John St"
                />
              </LeafletMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const meetings = [
  ['January 14, 2025', '6:30', '8:30'],
  ['February 11, 2025', '6:30', '8:30'],
  ['March 11, 2025', '6:30', '8:30'],
  ['April 8, 2025', '6:30', '8:30'],
  ['May 6, 2025', '6:30', '8:30'],
  ['June 3, 2025', '6:30', '8:30'],
  ['July 15, 2025', '6:30', '8:30'],
  ['August 12, 2025', '6:30', '8:30'],
  ['September 9, 2025', '6:30', '8:30'],
  ['October 21, 2025', '6:30', '8:30'],
  ['November 4, 2025', '6:30', '8:30'],
  ['December 16, 2025', '6:30', '8:30'],
]

const now = new Date()
const today = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
const timestamps = meetings.map(([d]) => new Date(d).valueOf())
const nextMeetingIndex = timestamps.findIndex(d => today.valueOf() <= d)
const previousMeetingIndex = timestamps.findIndex(d => today.valueOf() - (14 * 24 * 60 * 60 * 1000) <= d)
const upperBound = Math.max(0, Math.min(meetings.length - 5, Math.min(previousMeetingIndex, nextMeetingIndex)))
const lowerBound = upperBound + 5
</script>
