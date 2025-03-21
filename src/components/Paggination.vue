<template>
  <div class="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
    <div class="me-2 block max-w-sm text-sm font-normal text-gray-500 sm:mb-0">
      Showing
      <span class="font-semibold text-gray-900">1-4</span>
      of
      <span class="font-semibold">20</span>
      products
    </div>
    <nav class="join">
      <button
        type="button"
        class="btn btn-soft btn-square join-item"
        aria-label="previous button"
      >
        <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
      </button>
      <button
        type="button"
        class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
      >
        1
      </button>
      <button
        type="button"
        class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
        aria-current="page"
      >
        2
      </button>
      <button
        type="button"
        class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
      >
        3
      </button>
      <button
        type="button"
        class="btn btn-soft btn-square join-item"
        aria-label="next button"
      >
        <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  </div>
</template>
