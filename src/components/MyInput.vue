<template>
  <div>
  <form class="form">
    <div :class="classDivForm" >
      <label :for="labelInput">{{ fieldInput }}  </label>
      <input
        :type="type"
        :class="classInput"
        :placeholder="placeholderInput"
        :id="idInput"
        :value="valueInput"
      />
    
  </div>
  </form>
  </div>
</template>

<script>

export default {
  name: "MyInput",
  components: {},
  props: {
    placeholderInput: String,
    classInput: String,
    idInput: String,
    labelInput: String,
    type: String,
    classDivForm: String,
    valueInput: String,
    fieldInput: String,
    
  }
  
 }
</script>

<style scooped>
.form {
background-color: #FFFFFF;
margin-top: 1em;
margin-bottom: 2em;
border: none;
border-radius: 15px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
  
}

.form label {
  display: flex;
  justify-content: flex-start;
}

.form input {
    padding: 0.8em;
    border: 1px solid #CCC;
    border-color: #8d7a7a ;
    border-radius: 5px;
    outline: none;
}
.form-1 {
  width: 95%;
}
.form-1,
.form-2 {
  padding-bottom: 15px;
  
}

.form-2,
.form-4 {
  width: 50%;
  
}

.form-3,
.form-5 {
  width: 35%;
  padding-left: 2em;
  
}
.input-1 {
  width: 100%;
  
}

.input-2,
.input-4 {
  width: 100%;
}

.input-3,
.input-5 {
  width: 100%;
  color: #838282;
}

@media (max-width: 768px){

    .input{
      
    }
  .form-1,
  .form-2,
  .form-4 {
    width: 97%;
  }
  .form-3,
  .form-5 {
    display: flex;
    flex-flow: column;
    order: +1;
    margin: 0;
    padding-left: 0;
    padding-top: 1em;
    
  }


  .form-5 {
    width: 55%;
  }
    .form-3 {
    
  }


  .input-1,
  .input-2,
  .input-4 {
    width: 97%;
  }

  .input-3,
  .input-5{
    width: 50%;
  }
 
  
}


</style>