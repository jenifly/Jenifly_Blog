<template>
<div class="content">
  <header>
    <div class="unit-head">
      <div class="unit-inner unit-head-inner">
        <h1 class="h2 entry-title">写在前面</h1>
      </div><!-- unit-inner -->
    </div><!-- unit-head -->
  </header>

  <div class="bd">
    <div class="entry-content">
      <p>{{ $store.getters.homepage.t }}</p>
      <div v-for="(v, k) in $store.getters.homepage.m">
        <h2>{{ k }}</h2>
        <p>{{ v }}</p>
      </div>
    </div>
  </div><!-- bd -->

  <footer class="unit-foot">
    <div class="unit-inner unit-foot-inner">
      <p class="gotop">
        <a href="#page">Back to Top</a>
      </p>
    </div>
  </footer>

</div>
</template>
<script>
</script>

<style>
</style>
