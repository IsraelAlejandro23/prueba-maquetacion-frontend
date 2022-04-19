<template>
    <div>
        <div id="alertaCitas" class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading">¡No tiene citas agendadas!</h4>
                        <p>Agende sus citas para que pueda visualizarlas en ésta sección</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'AlertaCitas' 
}
</script>

<style scoped>
#alertaCitas {
    margin-top: 80px;
}
</style>