<template>
  <div class="logo-wrapper">
    <nuxt-link no-prefetch to="#">
      <i class="main-logo" />
    </nuxt-link>
    <p class="title">{{ $t('commonText.traumatologyCenter') }}</p>
  </div>
</template>
<style lang="scss" scoped>
p {
  display: flex;
}
.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 40px;
}
.main-logo {
  display: block;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background-image: url("@/assets/images/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.title {
  max-width: 200px;
  font-size: 16px;
  color: green;
  text-align: center;
  font-weight: $bold-weight;
  text-align: center;
}
</style>
