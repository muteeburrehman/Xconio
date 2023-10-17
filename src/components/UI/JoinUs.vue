<template>
    <section id="join">
    <div id="join">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">Join</h6>
                    <h1>Get in Touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur porro et eveniet aliquid voluptates, atque, esse enim harum molestiae dolores rerum nisi saepe voluptatum quod maxime commodi cupiditate modi?</p>
               
         
                  </div>
            </div>

         
            <form action="" class="row g-3 justify-content-center">
                <div class="col-md-5">
                  <input type="text" class="form-control" placeholder="Full Name">
                </div>

                <div class="col-md-5">
                  <input type="email" class="form-control" placeholder="Enter E-mail">
                </div>

                <div class="col-md-10">
                  <input type="text" class="form-control" placeholder="Enter Subject">
                </div>


                <div class="col-md-10">
                  <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Enter Message"></textarea>
                </div>
                 
                <div class="col-md-10 d-grid">
                  <button class="btn btn-primary">Join</button>
                </div>
               
            </form>
        </div>
    </div>
</section>
</template>

<script>
export default{

}
</script>

<style scoped>

.card-effect {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */
  background-color: #fff;
  padding: 25px;
  transition: all 0.35s ease;
  
}

.card-effect:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Adjust the values for a more pronounced hover effect */
  transform: translateY(-5px); /* Move the card slightly upwards on hover */
}

form input.form-control{
    height: 56px;
}

form .form-control {
    border: transparent;
    border-radius:0 ;
    background-color: rgba(0,0,0,0.02);
}

</style>