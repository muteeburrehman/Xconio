<template>
    <div class="hero vh-100 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="display-4 text-white">Build XConnIO landing page</h1>
                    <p class="text-white my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Est, aut. Dolores saepe voluptatibus beatae alias architecto explicabo! 
                        Obcaecati similique dolores quod enim adipisci inventore! Consequatur praesentium 
                        earum necessitatibus quidem ad?
                    </p>
                    <a href="#" class="btn btn-primary me-2">Get Started</a>
                    <a href="#" class="btn btn-outline-light">Portfolio</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Sora:wght@700&display=swap');
  
  :root {
    --primary: #0d6efd;
    --dark: #21252f;
    --body: #888;
    --box-shadow: 0 8px 22px rgba(0,0,0,0.01);
 }

 body{
    font-family: Sora, "sans-serif";
    line-height: 1.7;
    color: (--body);
 }

 h1,h2,h3,h4,h5,h6,
 .display-4 {
    color: var(--dark);
    font-weight: 700;
 }

 a{
    color: var(dark);
    text-decoration: none;
 }

 .navbar .logo {
    width: 160px;
 }

 .navbar .nav-link {
    font-size: 14px;
    font-weight: 700;
 }

 .btn{
    padding: 14px 18px;
    border-width: 2px;
    border-radius: 0;
 }
 .hero{
    background-image: url(@/assets/images/img2.jpg) ;
    background-position:center ;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 2;
 }

 .hero::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(21, 20, 51, 0.8);
    z-index: -1;
 }
</style>