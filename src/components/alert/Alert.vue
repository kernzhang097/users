<template>
  <div class="container">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      {{alert}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    alert: String
  }
}
</script>

<style>

</style>
