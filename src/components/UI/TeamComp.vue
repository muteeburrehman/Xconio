<template>
    <section id="team">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                   <h6 class="text-primary">Team</h6>
                   <h1>Meet Our Crew Members</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsam nostrum! Consequuntur vitae reprehenderit commodi exercitationem quasi reiciendis amet perferendis dolorem laudantium earum, corporis harum, quos nam veritatis corrupti autem!</p>

                </div>
            </div>
            <div class="row text-center" style="justify-content: center;">
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="@/assets/images/pic2.jpg" alt="">
                        <h5 class="mb-0 mt-4">Omer Akram</h5>
                        <p>Foss Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="@/assets/images/pic1.jpg" alt="">
                        <h5 class="mb-0 mt-4">Asim Farooq</h5>
                        <p>Python Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                
              
              
             
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

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
section{
    padding-top:120px ;
    padding-bottom:120px ;
}

.team-member img {
    width: 125px;
    height: 125px;
    border-radius: 100px;
}
.social-icons {
    display: flex;
    justify-content: center;
}
.social-icons a{
    width: 34px;
    height: 34px;
    background-color: var(--primary);
    border-radius: 2px solid var (--primary);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-left: 5px;
    transition: all 0.4s ease;
    border: 2px solid var(--primary);
}

.social-icons a:hover{
    color: var(--primary);
    background-color:transparent ;
    border-color: var(--primary);
}
</style>