<template>
  <nav-bar></nav-bar>
  <landing-page></landing-page>
  <team-comp></team-comp>
  <join-us></join-us>
  <contact-comp></contact-comp>
  <!-- <div>
    <router-view name="navbar"></router-view>
    <router-view></router-view>
  </div> -->
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
import LandingPage from './components/UI/LandingPage.vue';
import TeamComp from './components/UI/TeamComp.vue';
import JoinUs from './components/UI/JoinUs.vue';
import ContactComp from './components/UI/ContactComp.vue';
export default{
  
  name: 'App',
  components:{
    NavBar,
    LandingPage,
    TeamComp,
    JoinUs,
    ContactComp,
  }
}

</script>

<style>
/* *{
  overflow: hidden;
} */
</style>