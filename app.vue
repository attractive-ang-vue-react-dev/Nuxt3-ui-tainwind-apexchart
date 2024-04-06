<template>
  <nav class="z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 py-3 px-4">
    <div class="flex justify-between items-center max-w-screen-2xl mx-auto">
      <div class="flex justify-start items-center">
        <a href="" class="flex mr-14">
          <img src="/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
        </a>
        <!-- Desktop menu -->
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 space-x-6 text-sm font-medium lg:flex-row xl:space-x-8 lg:mt-0">
            <li>
              <a href="#" class="block rounded text-primary-700 dark:text-primary-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#"
                class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Messages</a>
            </li>
            <li>
              <a href="#"
                class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Profile</a>
            </li>
            <li>
              <a href="#"
                class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown
                <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar"
                class="hidden z-20 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Item 1</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Item 2</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Item 3</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="px-4 pt-6">
    <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      <!-- Main widget -->
      <div
        class="p-3 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="flex items-center justify-between mb-4">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
            <h3 class="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
          </div>
          <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
            12.5%
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <ClientOnly>
          <AreaChart :options="chartOptions" :series="chartSeries" />
        </ClientOnly>
        <!-- Card Footer -->
        <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
          <div>
            <!-- Dropdown menu -->
            <USelectMenu class="w-full lg:w-48" :options="dropdownItems" placeholder="Select Days" />
          </div>
          <div class="flex-shrink-0">
            <a href="#"
              class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
              Sales Report
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!--Tabs widget -->
      <div>
        <LineChart />
        <UTabs :items="tabItems" class="border-t border-gray-200 dark:border-gray-600">
          <template #item="{ item }">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              <li v-for="(content, index) in item.content" :key="index" class="py-3 sm:py-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center min-w-0">
                    <img class="flex-shrink-0 w-10 h-10" :src="content.img" alt="imac image">
                    <div class="ml-3">
                      <p class="font-medium text-gray-900 truncate dark:text-white">
                        {{ content.name }}
                      </p>
                      <p v-if="content.email" class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{ content.email }}
                      </p>
                      <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z">
                          </path>
                        </svg>
                        2.5%
                        <span class="ml-2 text-gray-500">vs last month</span>
                      </div>
                    </div>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${{ content.price }}
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </UTabs>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useAdminStore } from '@/stores/admin'

export default defineComponent({
  setup() {
    const tabItems = [
      {
        label: 'Top Products',
        content: [
          { name: 'iPhone 14 Pro', price: '445,467', img: '/images/products/iphone.png' },
          { name: 'Apple iMac 27', price: '256,982', img: '/images/products/imac.png' },
          { name: 'Apple Watch SE', price: '201,982', img: '/images/products/watch.png' },
          { name: 'iPhone 14 Pro', price: '445,467', img: '/images/products/iphone.png' },
          { name: 'Apple iMac 27', price: '256,982', img: '/images/products/imac.png' },
          { name: 'Apple Watch SE', price: '201,982', img: '/images/products/watch.png' },
        ]
      },
      {
        label: 'Top Customers',
        content: [
          { name: 'Neil Sims', email: 'neilsims@gmail.com', price: '4453', img: '/images/users/neil-sims.png' },
          { name: 'Bonnie Green', email: 'bonniegreen@gmail.com', price: '2569', img: '/images/users/bonnie-green.png' },
          { name: 'Michael Gough', email: 'michaelgough@gmail.com', price: '2012', img: '/images/users/michael-gough.png' },
          { name: 'Neil Sims', email: 'neilsims@gmail.com', price: '4453', img: '/images/users/neil-sims.png' },
          { name: 'Bonnie Green', email: 'bonniegreen@gmail.com', price: '2569', img: '/images/users/bonnie-green.png' },
          { name: 'Michael Gough', email: 'michaelgough@gmail.com', price: '2012', img: '/images/users/michael-gough.png' }
        ]
      }
    ]
    const chartSeries = [

      {
        name: 'Revenue',
        data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
        color: '#1A56DB'
      },
      {
        name: 'Revenue (previous period)',
        data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
        color: '#FDBA8C'
      }
    ]
    const dropdownItems = [
      'Today', 'Yesterday', 'Last 7 days'
    ]
    return {
      tabItems,
      chartSeries,
      dropdownItems
    }
  },
  data() {
    return {
      chartOptions: {},

    }
  },
  mounted() {
    const adminChartsParams = useAdminStore()
    this.chartOptions = adminChartsParams.areaChartOption

  }
})
</script>