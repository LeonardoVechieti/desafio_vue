<template>
  <div>
    <form class="form">
        <div class="input" id="form-1">
            <label for="name">Full Name *</label>
            <input type="text" id="name" class="input-1" placeholder="Name">
            <span id="alertName" class="alert"></span>
        </div>
            
        <div class="input" id="form-2">
            <label for="email">Email *</label>
            <input type="email" id="email" class="input-2" placeholder="foo@bar.com">
            <span id="alertEmail" class="alert"></span>
        </div>
        <div class="input" id="form-3">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" class="input-3" placeholder="(83) 00000-0000">
            <span id="alertPhone" class="alert"></span>
        </div>
            
            
        <div class="input" id="form-4">
            <label for="password">Password *</label>
            <input type="password" id="password" class="input-4">
            <span id="alertPassword" class="alert"></span>
        </div>
        <div class="input" id="form-5">
            <label for="date">Birthday *</label>
            <input type="date" id="date" class="input-5" placeholder="">
            <span id="alertDate" class="alert"></span>
        </div>
            
    </form>
  </div>  
</template>

<style scoped>
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
#form-1 {
  width: 95%;
}
#form-1,
#form-2 {
  padding-bottom: 15px;
  
}

#form-2,
#form-4 {
  width: 55%;
  
}

#form-3,
#form-5 {
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
  #form-1,
  #form-2,
  #form-4 {
    width: 97%;
  }
  #form-3,
  #form-5 {
    display: flex;
    flex-flow: column;
    order: +1;
    margin: 0;
    padding-left: 0;
    padding-top: 1em;
    
  }


  #form-5 {
    width: 55%;
  }
    #form-3 {
    
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

</style>>

