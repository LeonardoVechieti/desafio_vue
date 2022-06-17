<template>
    <div>
        <p>Compnente Mensagen</p>
        <div>
            <form id="name-form">
                <div>
                    <div class="input-container">
                        <label for="name">Nome do cliente</label>
                        <input type="text" id="name" name="name" v-model="nome" placeholder="Digite seu nome">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
    data() {

        return {
            logoimg: '/img/logo.png',
            title: 'Intern Sign Up',
            desc: 'Logo Intern Sign Up'
        }
    }
}
</script>

<style scoped>


</style> >

