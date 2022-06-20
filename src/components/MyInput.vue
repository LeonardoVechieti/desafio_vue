<template>
  <div :class="classDivForm" :id="idForm">
    <label :for="labelInput">{{ fieldInput }} </label>
    <input
      :type="type"
      :class="classInput"
      :placeholder="placeholderInput"
      :id="idInput"
      :value="valueInput"
      @input="valorPegar"
    />
    <p :id="idErro" class="erro">{{ erro }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    idForm: String,
    erro: String,
    idErro: String,
  },
  methods: {
    ...mapActions(["setName","setEmail","setPhone","setPassword","setDate","setButton",]),
    valorPegar(e) {
      if (this.classInput === "input-1") {
        this.setName(e.target.value);
      } else if (this.classInput === "input-2") {
        this.setEmail(e.target.value);
      } else if (this.classInput === "input-3") {
        this.setPhone(e.target.value);
      } else if (this.classInput === "input-4") {
        this.setPassword(e.target.value);
      } else if (this.classInput === "input-5") {
        this.setDate(e.target.value);
      } else if (this.classInput === "input-6") {
        this.setButton(e.target.value);
      }
    },
    storage() {
      //local storage
      //let storage = {name, email, password, phone, birthday}
      //Transformar o objeto em string e salvar em localStorage
      //localStorage.setItem('storage', JSON.stringify(storage));
      //Receber a string
      let storageString = localStorage.getItem("storage");
      //transformar em objeto novamente
      let storageObj = JSON.parse(storageString);
      console.log(storageObj.nome);
    },
  },
};
</script>

<style>
.erro {
  color: red;
  margin-top: 56px;
  margin-bottom: 5px;
  position: absolute;
  display: none;
}

.form {
  margin-top: 1em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
.form input {
  padding: 0.8em;
  border: 1px solid #ccc;
  border-color: #8d7a7a;
  border-radius: 5px;
  outline: none;
}
#form-1 {
  width: 100%;
}

#form-2,
#form-4 {
  width: 53%;
  padding-right: 0.6em;
}

#form-3,
#form-5 {
  width: 45.1%;
}

@media (max-width: 768px) {
  #form-1,
  #form-2,
  #form-4 {
    width: 96%;
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
    width: 45%;
  }
  #form-3 {
    width: 45%;
    margin-right: 2.1em;
  }

  .input-1,
  .input-2,
  .input-4 {
    width: 97%;
  }

  .input-3,
  .input-5 {
    width: 85%;
  }
}
</style>
