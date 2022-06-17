<template>
    <div class="button">
        <button class="register">{{name}}</button>
    </div>
</template>


<script>
export default {
  name: 'MyButton',
  props: {
    name: String
  }
}
</script>

<style scoped>

.register{
    
    background-color: #0DBDBD;
    color: white;
    font-size: 17px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}
</style>