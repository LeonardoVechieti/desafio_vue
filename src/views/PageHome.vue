<template>
  <div class="page">
    <MyLogo />
    <div class="flex">
      <MyInput
        idForm="form-1"
        placeholderInput="Full name"
        classDivForm="form"
        type="text"
        classInput="input-1"
        labelInput="name"
        idInput="name"
        value="fullName"
        smallClass="classSmall"
        fieldInput="Full Name *"
        erro="Name Invalid"
        idErro="erro-1"
      />
      <MyInput
        idForm="form-2"
        placeholderInput="foo@bar.com"
        type="email"
        classInput="input-2"
        labelInput="email"
        idInput="email"
        valueInput=""
        classDivForm="form"
        fieldInput="Email *"
        erro="Email Invalid"
        idErro="erro-2"
      />
      <MyInput
        idForm="form-3"
        classDivForm="form"
        placeholderInput="(83) 00000-0000"
        type="text"
        classInput="input-3"
        labelInput="phone"
        idInput="phone"
        fieldInput="Phone *"
        erro="Phone Invalid"
        idErro="erro-3"
      />
      <MyInput
        idForm="form-4"
        classDivForm="form"
        placeholderInput="Password"
        type="password"
        classInput="input-4"
        labelInput="password"
        idInput="password"
        fieldInput="Password *"
        erro="Password Invalid"
        idErro="erro-4"
      />
      <MyInput
        idForm="form-5"
        classDivForm="form"
        type="date"
        classInput="input-5"
        labelInput="birthday"
        idInput="Birthday"
        invalidText="Date Invalid"
        fieldInput="Birthday *"
        erro="Age Invalid"
        idErro="erro-5"
      />
    </div>
    <div class="footer">
      <div class="my-check-box">
        <MyCheckbox />
      </div>
      <div class="my-button">
        <MyButton name="Register" classButton="register" />
      </div>
    </div>
  </div>
</template>

<script>
import MyLogo from "../components/MyLogo.vue";
import MyInput from "../components/MyInput.vue";
import MyCheckbox from "../components/MyCheckbox.vue";
import MyButton from "../components/MyButton.vue";

export default {
  components: {
    MyLogo,
    MyInput,
    MyCheckbox,
    MyButton,
  },
};
</script>

<style>
.flex {
  /* background: olive; */
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: space-between; */
}
.footer {
  /* background: olive; */
  display: flex;
  justify-content: space-between;
  margin-top: 6em;
  width: 80%;
}

@media screen and (max-width: 768px) {
  .footer {
    display: block;
    margin-top: 2em;
  }
  .flex {
    /* background: rgb(255, 255, 0); */
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* justify-content: space-between; */
  }
}
</style>
