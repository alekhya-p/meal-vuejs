<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style="color: rgba(28, 59, 83, 0.8) ">
        <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" style=" font-family:cursive" >Meal</span>
  </div>
      <form class="d-flex" @submit.prevent="searchMeal()">
        <input class="form-control me-2" type="search" v-model="searchItem" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
      <div class="home">
    <div class="section-content" align-self="center" align-v="center">
        <h2><span>Delicious Cuisines</span></h2>
        <h1 class="text-uppercase">DISCOVER THE RECIPIES OF YOUR FAVOURITE</h1>
    </div>

  </div>
    <div v-if="searchCheck">
      <div class="card text-white bg-dark mb-3" v-for="(dish, index) in meal.meals" :key="index">
        <div class="row">
          <div class="col"></div>
          <div class="col-6"><img :src="dish.strMealThumb" class="card-img-top"></div>
          <div class="col"></div>
        </div>
        <div class="card-body">
          <h1 class="card-title" style="color: rgba(100, 196, 100, 0.897)">{{dish.strMeal}}</h1>
          <p class="card-text" >{{dish.strInstructions}}</p>
          <h5 class="card-text" style="color: rgba(100, 196, 100, 0.897)">How to prepare {{dish.strMeal}} video !</h5>
          <hr/>
          <video-embed css="embed-responsive-21by9" :src="dish.strYoutube"></video-embed>
          <hr/>
          <table class="card-text table table-dark table-borderless">
              <thead>
                <tr>
                  <th style="color: rgba(100, 196, 100, 0.897)"><h5>Ingredient</h5></th>
                  <th style="color: rgba(100, 196, 100, 0.897)"><h5>Measure</h5></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dish.strIngredient1}}</td>
                  <td>{{dish.strMeasure1}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient2}}</td>
                  <td>{{dish.strMeasure2}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient3}}</td>
                  <td>{{dish.strMeasure3}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient4}}</td>
                  <td>{{dish.strMeasure4}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient5}}</td>
                  <td>{{dish.strMeasure5}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient6}}</td>
                  <td>{{dish.strMeasure6}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient7}}</td>
                  <td>{{dish.strMeasure7}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient8}}</td>
                  <td>{{dish.strMeasure8}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient9}}</td>
                  <td>{{dish.strMeasure9}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient10}}</td>
                  <td>{{dish.strMeasure10}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient11}}</td>
                  <td>{{dish.strMeasure11}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient12}}</td>
                  <td>{{dish.strMeasure12}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient13}}</td>
                  <td>{{dish.strMeasure13}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient14}}</td>
                  <td>{{dish.strMeasure14}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient15}}</td>
                  <td>{{dish.strMeasure15}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient16}}</td>
                  <td>{{dish.strMeasure16}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient17}}</td>
                  <td>{{dish.strMeasure17}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient18}}</td>
                  <td>{{dish.strMeasure18}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient19}}</td>
                  <td>{{dish.strMeasure19}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient20}}</td>
                  <td>{{dish.strMeasure20}}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else><h1>Meal Not Found !</h1></div>

  </div>
</template>

<script>
import { getRandomMeal,getMealBySearchName } from '../store/index.js';

export default {
  name: 'Meal',
  created() {
    const response = getRandomMeal();
     response
    .then((result) => this.meal = result.data )
    .catch(console.error);
  },
  updated() {

        if(this.meal.meals == null) {
          this.searchCheck = false;
          this.searchItem="";
          window.location.href = '';
        }
  },
  props: {
    msg: String
  },
  data() {
    return {
      meal: {},
      searchItem: "",
      searchCheck: Boolean,
    };
  },
  methods: {
    searchMeal() {
      if(this.searchItem != "")
      {
        const responseSearch = getMealBySearchName(this.searchItem);
        responseSearch
        .then((result) => this.meal = result.data)
        .catch((error) => console.log(error))
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  height: 90vh;
   position: relative;
   background: linear-gradient(to right bottom, rgba(100, 196, 100, 0.897),
   rgba(28, 59, 83, 0.8)), url("../assets/bg-img.jpeg");
  /* background: ("../assets/bg-img.jpeg") ; */
  background-size: 100%;
 /* clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); */
 
}

h2{
  position: relative;
  font-size: 40px;
  font-weight: 400;
  color:black;
  font-family:cursive;
}
.navbar{
  font-size: 10px;
  font-weight: 400;
  color:rgba(100, 196, 100, 0.897);
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

h1 {
  font-size: x-large;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
}
</style>
