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
    buttonSubmit: "",
    controlName: true,
    controlEmail: true,
    controlPhone: true,
    controlPassword: true,
    controlDate: true,
    emailRegex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i,
    passwordRegex: /[0-9]/i,
    phoneRegex: /[0-9]/i,
  },
  getters: {
  },
  mutations: {
    setName(state, name) {
      state.name =name;
      console.log(name)
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
      console.log(email)
      if (email === "") {
        state.controlEmail=false;
      }
      if (state.emailRegex.test(email) === true){
        state.controlEmail=false;
        }
      console.log(state.controlEmail)
    },
    setPhone(state, phone) {
      state.phone =phone;
      console.log(phone)
      if(state.phoneRegex.test(phone)===false || phone.length > 11){
        state.controlPhone=false;
      } else {
        state.controlPhone=true;
      }
    },
    setPassword(state, password) {
      state.password =password;
      console.log(password)
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
      console.log(date)
    },
    setButton(state, button) {
      state.button =button;
      console.log(button)
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
    }
  },
  modules: {
  }
})
