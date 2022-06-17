<template>
  <div class="page">
    <MyLogo />
    
    <MyInput  placeholderInput="Full name"
        classDivForm="form-1"
        type="text"
        classInput="input-1"
        labelInput="name"
        idInput="name"
        value="fullName"
        smallClass="classSmall"
        invalidText="Fullname Invalid"
        fieldInput="Full Name *"
        />
    <MyInput
        placeholderInput="Email"
        type="email"
        classInput="input-2"
        labelInput="email"
        idInput="email"
        valueInput=""
        classDivForm="form-2"
        fieldInput="Email *"
         
      />
      <MyInput
        classDivForm="form-3"
        placeholderInput="Phone"
        type="text"
        classInput="input-3"
        labelInput="phone"
        idInput="phone"
        invalidText="Phone Invalid"
        fieldInput="Phone *"
      />
      <MyInput
        classDivForm="form-4"
        placeholderInput="Password"
        type="password"
        classInput="input-4"
        labelInput="password"
        idInput="password"
        fieldInput="Password *"
      />
      <MyInput
        classDivForm="form-5"
        type="date"
        classInput="input-5"
        labelInput="birthday"
        idInput="Birthday"
        invalidText="Date Invalid"
        fieldInput="Birthday *"
      />
      
    
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
    width: 35em;
    
    
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
