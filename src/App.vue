<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background-color: #ECEEF2;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    
}
.page{
  background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    padding: 1.5em 0; 
    border: none;
    border-radius: 15px;
    
    
}

@media (max-width: 768px){
  .page{   
    width: 25em;
    padding: 0;
    margin: 0;
}
body{
  background-color: white;
  margin-top: 5em;
  margin-bottom: 0;  
}
}
</style>