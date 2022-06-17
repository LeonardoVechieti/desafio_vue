<template>
    <div class="logo">
        <img :src="logoimg" :alt="desc">
        <h1> {{title}} </h1>
    </div>
</template>
<script>
export default {
    
    data() {

        return {
            logoimg: 'img/logo.png',
            title: 'Intern Sign Up',
            desc: 'Logo Intern Sign Up'
        }
    }
}
</script>
<style scoped>
    .logo {
    
    text-align: center;
    text-decoration: none;
    font-size: 1.2em;
    
    
}

.logo h1{
    margin: 0;
}
</style> >

