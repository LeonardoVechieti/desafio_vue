<template>
  <div class="page">
    <MyLogo />
    <MyInput />
    <div class="footer">
      <div class="my-check-box">
        <MyCheckbox />
      </div>
      <div class="my-button">
        <MyButton name="Register" />
      </div>  
    </div>
  </div>
</template>

<script>

import MyLogo from '../components/MyLogo.vue'
import MyInput from '../components/MyInput.vue'
import MyCheckbox from '../components/MyCheckbox.vue'
import MyButton from '../components/MyButton.vue'

export default {
  

  components: {
    MyLogo, 
    MyInput, 
    MyCheckbox,
    MyButton

  }
}
</script>

<style>
body{
    background-color: #ECEEF2;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.page{
    background-color: #FFFFFF;
    margin-top: 6em;
    margin-bottom: 6em;
    max-width: 550px;
    height: 100%;
    min-height: 20em;
    padding: 1.5em;
    border: none;
    border-radius: 15px;
    
}

.footer{
    display: flex;
    justify-content: space-between;
    margin-top: 6em;    
}
</style>
