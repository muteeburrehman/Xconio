<template>
  <nav class="navbar navbar-expand-lg py-3 bg-dark sticky-top">
    <div class="container">
      <a
        class="navbar-brand text-white logo"
        href="#"
        style="font: bolder; font-size: 1.5rem; font-weight: 600"
        >XConnIO</a
      >
      <button
        class="navbar-toggler text-white pt-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"><i class="fa-solid fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#home"
              >Home</a
            >
            <!-- <router-link class="nav-link active text-white" to="/home">Home</router-link> -->
          </li>

          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#team"
              >Team</a
            >
            <!-- <router-link class="nav-link active text-white" to="/team">Team</router-link> -->
          </li>

          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#contact"
              >Contact</a
            >
            <!-- <router-link class="nav-link active text-white" to="/contact">Contact</router-link> -->
          </li>
        </ul>
        <button @click="scrollToJoin"  class="btn btn-primary ms-lg-3">Join Us</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToJoin() {
      // Use document.querySelector to select the element with id "join"
      const joinElement = document.querySelector('#joinUs');
      
      if (joinElement) {
        // Scroll to the "join" element
        joinElement.scrollIntoView({
          behavior: 'smooth' // Add smooth scrolling behavior
        });
      }
    }
  }
};

</script>
