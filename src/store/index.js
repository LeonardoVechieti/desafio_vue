import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    box: "",
    button: "",
    valida: "",
    controle: true,
    controlName: false,
    controlEmail: false,
    controlPhone: false,
    controlPassword: false,
    controlDate: false,
    emailRegex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i,
    passwordRegex: /[0-9]/i,
    phoneRegex: /[0-9]/i,
    storage: "",
  },
  getters: {
    
  },
  mutations: {
    
    setName(state, name) {
      state.name =name;
      //console.log(name)
      if (name === "") {
        state.controlName=false;   
      } else {
        state.controlName=true;  
      }
      if (name.length < 4 || (name = (string) => /\s/g.test(string))===true) {
        state.controlName=false;
       } else {
        state.controlName=true;  
      }
       console.log(state.controlName)
    },
    setEmail(state, email) {
      state.email =email;
      //console.log(email)
      if (email === "") {
        state.controlEmail=false;
      } else{
        state.controlEmail=true;
      }
      if (state.emailRegex.test(email) === true){
        state.controlEmail=false;
      }else{
        state.controlEmail=true;
      }
      console.log(state.controlEmail)
    },
    setPhone(state, phone) {
      state.phone =phone;
      //console.log(phone)
      if(state.phoneRegex.test(phone)===false || phone.length > 11){
        state.controlPhone=false;
      } else {
        state.controlPhone=true;
      }
      console.log(state.controlPhone)
    },
    setPassword(state, password) {
      state.password =password;
      //console.log(password)
      if(state.passwordRegex.test(password)===false){
        state.controlPassword=false;
      } else {
        state.controlPassword=true;
      }
      if(password.length < 6 || password.length > 9){
        state.controlPassword=false;
      }else {
        state.controlPassword=true;
      }
      console.log(state.controlPassword)
    },
    setDate(state, date) {
      state.date =date;
      //console.log(date)
      if(date === ""){
        state.controlDate=false;
            
    }else {
      state.controlDate=true;
    }
    },
    setButton(state, button) {
      state.button =button;
      console.log(button)
    },
    setBox(state,box){
      state.box = box;
      console.log(box);
    },
    setValida(state, valida){
      state.valida = valida;
      state.controle=true;
      console.log("to na funcçao valida")

      if(state.controlName===false){
        console.log("Nome Invalido");
        document.getElementById("erro-1").style.display="block";
        state.controle=false;
      } else {
        //state.controle=true;
        document.getElementById("erro-1").style.display="none";
      }
      console.log(state.controle);

      if(state.controlEmail===false){
        console.log("Email Invalido");
        document.getElementById("erro-2").style.display="block";
        state.controle=false;
      } else {
        //state.controle=true;
        document.getElementById("erro-2").style.display="none";
      }
      console.log(state.controle);

      if(state.controlPhone===false){
        console.log("Phone Invalido");
        document.getElementById("erro-3").style.display="block";
        state.controle=false;
      } else {
        //state.controle=true;
        document.getElementById("erro-3").style.display="none";
      }
      console.log(state.controle);

      if(state.controlPassword===false){
        console.log("Password Invalido");
        document.getElementById("erro-4").style.display="block";
        state.controle=false;
      } else {
        //state.controle=true;
        document.getElementById("erro-4").style.display="none";
      }
      console.log(state.controle);
      

      if(state.controlDate===false){
        console.log("Age Invalido");
        document.getElementById("erro-5").style.display="block";
        state.controle=false;
      } else {
        //state.controle=true;
        document.getElementById("erro-5").style.display="none";
      }
        console.log("final",state.controle);
        console.log(state.controle);
        if(state.controle===true){
          console.log("validou no valida");
          
          return true;
        }

        //console.log("eu sou controle", controle);
      
    },
    storage(state, storage){
      state.storage= storage;
      //local storage
      //let storage = {state.name, state.email, state.password, state.phone, state.date}
      //Transformar o objeto em string e salvar em localStorage
      localStorage.setItem('storage', JSON.stringify(storage));
      //Receber a string
      let storageString = localStorage.getItem('storage');
      //transformar em objeto novamente
      let storageObj = JSON.parse(storageString);
      console.log(storageObj.nome);
    }
  },
  actions: {
    setName({commit}, name){
      commit('setName', name);
    },
    setEmail({commit}, email){
      commit('setEmail', email);
    },
    setPhone({commit}, phone){
      commit('setPhone', phone);
    },
    setPassword({commit}, password){
      commit('setPassword', password);
    },
    setDate({commit}, date){
      commit('setDate', date);
    },
    setButton({commit}, button){
      commit('setButton', button);
    },
    setBox({commit}, box){
      commit('setBox', box);
    },
    setValida({commit}, valida){
      commit('setValida', valida);
    },
    storage({commit}, storage){
      commit('storage', storage);
    }
   
  },
  modules: {
  }
})
