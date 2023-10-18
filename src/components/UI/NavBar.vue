<template>
  <nav class="navbar navbar-expand-lg py-3 bg-dark sticky-top">
    <div class="container">
      <a
        class="navbar-brand text-white logo"
        href="#"
        style="font-weight: 600; font-size: 1.5rem;"
      >
        XConnIO
      </a>
      <button
        class="navbar-toggler text-white pt-2"
        type="button"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { 'show': showNavbar }]" id="navbarText">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#home" @click="toggleNavbar">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#team" @click="toggleNavbar">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#contact" @click="toggleNavbar">Contact</a>
          </li>
        </ul>
        
        <a class="nav-link active " aria-current="page" href="#joinUs" @click="toggleNavbar">
          <button  class="btn btn-primary ms-lg-3">Join Us</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    // scrollToJoin() {
    //   const joinElement = document.querySelector('#joinUs');
    //   if (joinElement) {
    //     const offset = document.querySelector('.navbar').offsetHeight; // Height of the fixed navbar
    //     joinElement.scrollIntoView({
    //       behavior: 'smooth',
    //       // block: 'start',
    //       inline: 'nearest',
    //       offset: { top: offset } // Offset to compensate for the fixed navbar
    //     });
    //   }
    //   this.toggleNavbar(); // Close the navbar after clicking "Join Us"
    // }

  },
};
</script>
