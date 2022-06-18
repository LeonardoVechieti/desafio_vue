<template>
    <div class="page" id="page-sucess">
            <div class="logo">
                <img class="img-logo" src="img/logo.png" alt="Logo Intern Sign Up ">
                <h1>Sucess!</h1>
            </div>
            <div class="sucess-button">
            <MyButton name="Go Back!" class="button"/>
            </div>
          
       

        </div>
</template>

<script>

import MyButton from '../components/MyButton.vue'

export default {
  

  components: {
    MyButton

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
.button{
    display: flex;
    justify-content: center;
    width: 30%;
    padding: 35px ;
}
.sucess-button{
    
  
  
}
</style>>

