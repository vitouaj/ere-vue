<template>
  <div class="w-full">
    <div
      class="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="dropdown relative inline-flex">
        <button
          id="dropdown-default"
          type="button"
          class="dropdown-toggle btn btn-outline btn-secondary font-normal"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          <span class="icon-[tabler--clock]"></span>
          Last 30 days
          <span
            class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"
          ></span>
        </button>
        <ul
          class="dropdown-menu dropdown-open:opacity-100 hidden min-w-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-default"
        >
          <li>
            <a class="dropdown-item" href="javascript:void(0)">Last 3 days</a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:void(0)">Last 7 days</a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:void(0)">Last 30 days</a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:void(0)">Last 3 months</a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:void(0)">Last year</a>
          </li>
        </ul>
      </div>
      <label class="input-group max-w-xs">
        <span class="input-group-text">
          <span class="icon-[tabler--search] size-6"></span>
        </span>
        <input type="search" class="input grow" placeholder="Search" />
      </label>
    </div>

    <div class="mt-8 overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                aria-label="product"
              />
            </th>
            <th>Product</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  aria-label="product"
                />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="bg-base-content/10 h-10 w-10 rounded-md">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/components/table/product-2.png"
                      alt="product image"
                    />
                  </div>
                </div>
                <div>
                  <div class="text-sm opacity-50">Apple</div>
                  <div class="font-medium">iPhone 14 Pro</div>
                </div>
              </div>
            </td>
            <td>Stealth black</td>
            <td>
              <div class="flex items-center">
                <span
                  class="badge badge-primary badge-soft me-2 rounded-full p-1"
                >
                  <span class="icon-[tabler--device-mobile]"></span>
                </span>
                Phone
              </div>
            </td>
            <td>$599</td>
            <td>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--dots-vertical] size-5"></span>
              </button>
            </td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  aria-label="product"
                />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="bg-base-content/10 h-10 w-10 rounded-md">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/components/table/product-1.png"
                      alt="product image"
                    />
                  </div>
                </div>
                <div>
                  <div class="text-sm opacity-50">Apple</div>
                  <div class="font-medium">Watch series 7</div>
                </div>
              </div>
            </td>
            <td>Peach</td>
            <td>
              <div class="flex items-center">
                <span class="badge badge-info badge-soft me-2 rounded-full p-1">
                  <span class="icon-[tabler--device-watch]"></span>
                </span>
                Watch
              </div>
            </td>
            <td>$999</td>
            <td>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--dots-vertical] size-5"></span>
              </button>
            </td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  aria-label="product"
                />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="bg-base-content/15 h-10 w-10 rounded-md">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/components/table/product-19.png"
                      alt="product image"
                    />
                  </div>
                </div>
                <div>
                  <div class="text-sm opacity-50">Meta</div>
                  <div class="font-medium">Quest</div>
                </div>
              </div>
            </td>
            <td>Elegant white</td>
            <td>
              <div class="flex items-center">
                <span
                  class="badge badge-success badge-soft me-2 rounded-full p-1"
                >
                  <span class="icon-[tabler--device-vision-pro]"></span>
                </span>
                VR headset
              </div>
            </td>
            <td>$499</td>
            <td>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--dots-vertical] size-5"></span>
              </button>
            </td>
          </tr>
          <!-- row 4 -->
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  aria-label="product"
                />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="bg-base-content/15 h-10 w-10 rounded-md">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/components/table/product-5.png"
                      alt="product image"
                    />
                  </div>
                </div>
                <div>
                  <div class="text-sm opacity-50">Apple</div>
                  <div class="font-medium">Macbook Pro 16</div>
                </div>
              </div>
            </td>
            <td>Space gray</td>
            <td>
              <div class="flex items-center">
                <span
                  class="badge badge-warning badge-soft me-2 rounded-full p-1"
                >
                  <span class="icon-[tabler--device-laptop]"></span>
                </span>
                Laptop
              </div>
            </td>
            <td>$1999</td>
            <td>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
              <button
                class="btn btn-circle btn-text btn-sm"
                aria-label="Action button"
              >
                <span class="icon-[tabler--dots-vertical] size-5"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
      <div
        class="me-2 block max-w-sm text-sm font-normal text-gray-500 sm:mb-0"
      >
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
          <span
            class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"
          ></span>
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
          <span
            class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"
          ></span>
        </button>
      </nav>
    </div>
  </div>
</template>
