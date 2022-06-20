<template>
  <div class="checkbox">
    <span id="alertCheck" class="span-check"></span>
    <label class="checkbox"
      >{{ label }}
      <input type="checkbox" checked id="checkbox" @input="valorPegar" />
      <span class="check"></span>
    </label>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      label: "I accept the terms and privacy",
    };
  },
  props: {},
  methods: {
    ...mapActions(["setBox"]),
    valorPegar(e) {
      if (this.type === "checkbox") {
        if (e.target.checked) {
          this.setBox(true);
        } else {
          this.setBox(false);
        }
        //this.setBox(e.target.value);
      }
    },
  },
};
</script>

<style scoped>
.checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.check {
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  background: #ccc;
  position: absolute;
  border-radius: 5px;
}
.checkbox input:checked ~ .check {
  background: #0dbdbd;
}
.checkbox .check::after {
  top: 5px;
  left: 9px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.check:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox input:checked ~ .check::after {
  display: block;
}
</style>
