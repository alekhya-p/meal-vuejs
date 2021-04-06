<template>
  <div class="home">
    <div class="section-content" align-self="center" align-v="center">
        <h1><span>Delicious Cuisines</span></h1>
        <h1 class="text-uppercase">DISCOVER THE MENU</h1>
    </div>
    <router-link class="nav-link" :to="{name: 'Meal'}" exact>
            </router-link>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
  
  }
}
</script>

<style scoped>

.home {
  height: 90vh;
   position: relative;
   background: linear-gradient(to right bottom, rgba(100, 196, 100, 0.897),
   rgba(28, 59, 83, 0.8)), url("../assets/bg-img.jpeg");
  /* background: ("../assets/bg-img.jpeg") ; */
  background-size: 100%;
 clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
 
}

h1{
  position: relative;
  font-size: 40px;
  font-weight: 400;
  color:black;
  font-family:cursive;
}
.text-uppercase{
  font-size: 50px;
  font-weight: 300;
  color: white;
  font-family: 'Times New Roman', Times, serif;

}


.section-content{
  padding: 20% 1%;
}
.banner-title {
  font-size: 7vh;
  font-weight: bolder;
}
.banner-content {
  font-size: 7vh;
  font-weight: 400;
}
.meal-banner {
  max-height: 350px;
  width: 100%;
}

</style>
