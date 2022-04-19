<template>
    <div>
        <div id="divTablaCitas" class="max-auto">
        
            <div class="container">

                <!--FORMULARIO CITAS -->
                <CitasForm />
                <!--FIN FORMULARIO CITAS -->

                <!--TABLA CITAS -->
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <table id="tablaCitas" class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido paterno</th>
                                    <th scope="col">Apellido materno</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cita in citas " :key="cita.id">
                                    <td>{{ cita.nombre }}</td>
                                    <td>{{ cita.apellido_paterno }}</td>
                                    <td>{{ cita.apellido_materno }}</td>
                                    <td>{{ cita.direccion }}</td>
                                    <td>{{ cita.ciudad }}</td>
                                    <td>{{ cita.estado }}</td>
                                    <td>{{ cita.fecha }}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm" @click="cancelarCita(cita.id)">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--FIN TABLA CITAS -->
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '../EventBus'
import CitasForm from '../components/CitasForm.vue'
import swalConBootstrapButtons from '../shared/mixinSwal'
export default {
    name: 'TablaCitas',
    components: {
        CitasForm
    },
    props: ['citas'],
    data() {
        return {
            
        }
    },
    methods: {
        async cancelarCita(id) {//Método para cancelar citas
            try {
                 swalConBootstrapButtons.fire({
                    title: 'Eliminar cita',
                    text: "¿Está seguro que desea eliminar la cita?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar',
                    reverseButtons: true
                 }).then(async result => {
                     if(result.isConfirmed) {
                        const payload = { id }
                        const response = await this.$store.dispatch('cancelarCita', payload)

                        if(response.ok) {
                            const { message } = response

                            swalConBootstrapButtons.fire({
                                icon: 'success',
                                title: '¡Éxito!',
                                text: message,
                            })

                            EventBus.$emit('obtenerCitas')
                        }
                     }
                 })
            } catch (error) { 
                console.log(error)
            }
        },
    },
}
</script>

<style scoped>
#divTablaCitas {
    position: relative;
    top: 70px;
}

#tablaCitas {
    font-size: 14px;
}
</style>