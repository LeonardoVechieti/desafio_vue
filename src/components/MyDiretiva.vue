<template>

  <div>

    <ul>
        <li v-for="vogal in vogais">{{ vogal }}</li>
    </ul>

  </div>

</template>

<script>
export default {

    data() {

        return {

            vogais: ['A', 'E', 'I', 'O', 'U']
        }
    }

}
</script>

<style>
</style>