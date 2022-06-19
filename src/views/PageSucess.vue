<template>
    <div class="page" id="page-sucess">
            <div class="logo">
                <img class="img-logo" src="img/logo.png" alt="Logo Intern Sign Up ">
                <h1>Sucess!</h1>
            </div>
            <div @click="goBack()">
            <MyButton name="Go Back!" class="sucess" />
            </div>
          
       

        </div>
</template>

<script>

import MyButton from '../components/MyButton.vue'

export default {
  

  components: {
    MyButton

  },
  methods: {
    
    goBack(){
        this.$router.push("/");
      }
    }
} 
 

</script>

<style scoped>

.logo {
    padding: 0 8em 0 8em ;
    text-align: center;
    text-decoration: none;
    font-size: 1.2em;
    margin: 0;
    
}

.logo h1{
    margin: 0;
}

</style>>

