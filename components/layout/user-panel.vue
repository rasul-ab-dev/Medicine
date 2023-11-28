<template>
    <div class="user-panel">
        <MainLogo/>
    <!-- <div class="user-info">
    <h3>Administrator</h3>
    <p>Ady familiyasy</p>
    </div> -->
    </div>
</template>

<script lang="ts">
import MainLogo from './main-logo.vue'
import Vue from 'vue'
export default Vue.extend({
    components: {
        MainLogo
    }
})
</script>
<style scoped>
.user-info {
    padding-left: 30px;
}
</style>