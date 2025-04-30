<template>
  <a href="/reports/{{id}}">
    <div class="card sm:max-w-sm">
      <div class="card-body">
        <h5 class="card-title mb-2.5">{{ title }}</h5>
        <p class="mb-4">
          {{ content }}
        </p>
        <div class="card-actions">
          <button :class="buttonClassName">{{ status }}</button>
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="js">
const props = defineProps({
  id: {
    type: String,
    default: "welcome-card",
  },
  title: {
    type: String,
    default: "Welcome to Our Service",
  },
  content: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
});

const buttonClassName = () => {
  return props.status === "Pending"
    ? "btn btn-primary"
    : props.status === "Completed"
      ? "btn btn-success"
      : props.status === "Failed"
        ? "btn btn-danger"
        : "btn btn-secondary";
};
</script>
