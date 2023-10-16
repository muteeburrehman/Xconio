<template>
  <nav-bar></nav-bar>
  <landing-page></landing-page>
  <section-comp></section-comp>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
import LandingPage from './components/UI/LandingPage.vue';
import SectionComp from './components/UI/SectionComp.vue';
export default{
  components:{
    NavBar,
    LandingPage,
    SectionComp
  }
}
</script>