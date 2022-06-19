<template>
    <div class="button">
        <button :class="classButton" @click="buttonRegister">{{name}}</button>
    </div>
</template>


<script>
import {mapActions} from "vuex"
export default {
  name: 'MyButton',
  props: {
    name: String,
    classButton: String,
  },
  methods: {
    ...mapActions(["setButton", "valida"]),
    buttonRegister(){
      if(this.classButton === "register"){
        console.log("cliquei");
        
        
        if(this.valida()==="true"){
          console.log("validou");
          this.$router.push("/sucess");
        }
          
        
        
      }
    },
   }, 
 }
</script>

<style scoped>

.register{
    padding: 10px ;
    background-color: #0DBDBD;
    color: white;
    font-size: 17px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}
.sucess{
    display: flex;
    justify-content: center;
    margin-top: 10em;
    margin-bottom: 12em;
}
.sucess button{
    width: 30%;
    padding: 35px ;
    background-color: #0DBDBD;
    color: white;
    font-size: 17px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}
@media screen and (max-width: 650px) {


    .register{
    width: 100%; 
    margin-top: 3em; 
    display: flex;
    justify-content: center;
    margin-bottom: 12em;

    }
    .register button{
        width: 50%;
        padding: 25px ;
    }
   
    
    .sucess{
    display: flex;
    justify-content: center;
    margin-top: 10em;
    margin-bottom: 12em;
}
  
    .sucess button{
        width: 50%;
        padding: 25px ;
        
    }
}

</style>