<template>
  <div class="max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
    <div class="flex flex-col md:flex-row gap-10">
      <div class="md:w-1/3 text-center mb-8 md:mb-0">
        <img
          src="https://i.pravatar.cc/300"
          alt="Profile Picture"
          class="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
        />
        <h1 class="text-2xl font-bold mb-2">John Doe</h1>
        <p class="">Student</p>

        <div class="pt-4">
          <button
            disabled="true"
            class="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div class="flex flex-col w-full gap-8">
        <div class="md:pl-8">
          <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
          <div>
            <label class="text-sm block" for="#name">Name</label>
            <input
              type="text"
              value="John Doe"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
          <div>
            <label class="text-sm block" for="#name">Phone</label>
            <input
              type="number"
              value="092091201"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
          <div>
            <label class="text-sm block" for="#name">Email</label>
            <input
              type="email"
              value="johndoe@gmail.com"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
        </div>

        <div class="md:pl-8">
          <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
          <div>
            <label class="text-sm block" for="#name">Name</label>
            <input
              type="text"
              value="John Doe"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
          <div>
            <label class="text-sm block" for="#name">Phone</label>
            <input
              type="number"
              value="092091201"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
          <div>
            <label class="text-sm block" for="#name">Email</label>
            <input
              type="email"
              value="johndoe@gmail.com"
              class="ps-3 max-w-lg border-2 border-gray-300 rounded-lg w-full h-10 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-blue-900 transition-all duration-300"
              id="name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
