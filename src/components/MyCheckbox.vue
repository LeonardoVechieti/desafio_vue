<template>
    <div class="checkbox">
        <span id="alertCheck" class="span-check"></span>
        <label class="checkbox">{{label}}
        <input type="checkbox" checked id="checkbox">
        <span class="check"></span>
        </label>
    </div>
</template>
<script>
export default {

    data() {

        return {
            label: 'I accept the terms and privacy'
        }
    }
}
</script>
<style>
span p{
    padding: 1px 7px;
    color: red;
    margin: 0 0 0 0;
    position: absolute;
}
.span-check p{
   padding: 1em;
   width: 100%;
}

.checkbox{
    position: relative;
    padding-left: 30px;
    cursor: pointer;
}
.checkbox input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.check{
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    background: #CCC;
    position: absolute;
    border-radius: 5px;
}
.checkbox input:checked ~ .check{
    background: #0DBDBD;
}
.checkbox .check::after{
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
.check:after{
    content: "";
    position: absolute;
    display: none;
}
.checkbox input:checked ~ .check::after{
    display: block;
}
</style>