<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <button type="button" id="btnAgendarCita" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#agendarCitaModal">
                    <i class="fa-solid fa-circle-plus"></i> Nueva cita
                </button>
            </div>
            <div class="col-md-6 col-sm-6">
                <button type="button" id="btnRegresarPaginaPrincipal" class="btn btn-secondary btn-sm" @click="regresarPaginaPrincipal">
                   <i class="fa-solid fa-circle-left"></i> Regresar
                </button>
            </div>
        </div>

        <div class="modal fade" id="agendarCitaModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="agendarCitaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="agendarCitaModalLabel">Formulario de citas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="frmAgendarCita" @submit.prevent="agendarCita">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelNombre" for="txtNombre" class="form-label left">Nombre</label>
                                    <input type="text" class="form-control" :class="[ erroresNombre ? 'error' : '']" id="txtNombre" placeholder="Ingrese nombre" autocomplete="off" v-model="nombre">
                                    <div class="errors-bag" v-if="erroresNombre">El nombre es requerido</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelApellidoPaterno" for="txtApellidoPaterno" class="form-label left">Apellido paterno</label>
                                    <input type="text" class="form-control" :class="[ erroresApellidoPaterno ? 'error' : '']" id="txtApellidoPaterno" placeholder="Ingrese apellido paterno" autocomplete="off" v-model="apellidoPaterno">
                                    <div class="errors-bag" v-if="erroresApellidoPaterno">El apellido paterno es requerido</div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelApellidoMaterno" for="txtApellidoMaterno" class="form-label left">Apellido materno</label>
                                    <input type="text" class="form-control" :class="[ erroresApellidoMaterno ? 'error' : '']"  id="txtApellidoMaterno" placeholder="Ingrese apellido materno" autocomplete="off" v-model="apellidoMaterno">
                                    <div class="errors-bag" v-if="erroresApellidoMaterno">El apellido materno es requerido</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelEmail" for="txtEmail" class="form-label left">Email</label>
                                    <input type="email" class="form-control" :class="[ erroresEmail || erroresEmailInvalido ? 'error' : '']"  id="txtEmail" placeholder="correo@ejemplo.com" autocomplete="off" v-model="email">
                                    <div class="errors-bag" v-if="erroresEmail">El email es requerido</div>
                                    <div class="errors-bag" v-if="erroresEmailInvalido">Email inválido</div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelDireccion" for="txtDireccion" class="form-label left">Dirección</label>
                                    <input type="text" class="form-control" :class="[ erroresDireccion ? 'error' : '']"  id="txtDireccion" placeholder="Ingrese dirección" autocomplete="off" v-model="direccion">
                                    <div class="errors-bag" v-if="erroresDireccion">La dirección es requerida</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelCiudad" for="txtCiudad" class="form-label left">Ciudad</label>
                                    <input type="text" class="form-control" :class="[ erroresCiudad ? 'error' : '']"  id="txtCiudad" placeholder="Ingrese ciudad" autocomplete="off" v-model="ciudad">
                                    <div class="errors-bag" v-if="erroresCiudad">La ciudad es requerida</div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelEstado" for="txtEstado" class="form-label left">Estado</label>
                                    <input type="text" class="form-control" :class="[ erroresEstado ? 'error' : '']" id="txtEstado" placeholder="Ingrese estado" autocomplete="off" v-model="estado">
                                    <div class="errors-bag" v-if="erroresEstado">El estado es requerido</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                 <div class="mb-3">
                                    <label id="labelCodigoPostal" for="txtCodigoPostal" class="form-label left">Código postal</label>
                                    <input type="text" class="form-control" :class="[ erroresCodigoPostal || erroresCodigoPostalDigitos ? 'error' : '']" id="txtCodigoPostal" placeholder="Ingrese código postal" autocomplete="off" v-model="codigoPostal" @keypress="soloNumeros($event)">
                                    <div class="errors-bag" v-if="erroresCodigoPostal">El código postal es requerido</div>
                                    <div class="errors-bag" v-if="erroresCodigoPostalDigitos">Sólo 4 dígitos para código postal</div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                 <div class="mb-3">
                                    <label id="labelCelular" for="txtCelular" class="form-label left">Celular</label>
                                    <input type="text" class="form-control" :class="[ erroresCelular ? 'error' : '']" id="txtCelular" placeholder="Ingrese celular" autocomplete="off" v-model="numeroCelular" @keypress="soloNumeros($event)">
                                    <div class="errors-bag" v-if="erroresCelular">El número celular es requerido</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label id="labelFechaCita" for="txtFecha" class="form-label left">Fecha cita</label>
                                    <input type="text" class="form-control" :class="[ erroresFechaCita ? 'error' : '']" id="txtFecha" placeholder="Ingrese fecha" autocomplete="off" v-model="fechaCita">
                                    <div class="errors-bag" v-if="erroresFechaCita">La fecha es obligatoria</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="botonOculto">Botón oculto</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnCerrarModal" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    <button v-if="!submitted" type="submit" id="btnAgendarCita" class="btn btn-success" @click="eventoClickAuxiliar">Agendar cita</button>
                    <button v-if="submitted" class="btn btn-success" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Espere...
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//importacion de modulos necesarios para la lógica del componente
import { required, email, maxLength } from 'vuelidate/lib/validators'
import EventBus from '../EventBus'
import Cita from '../shared/Cita'
import moment from 'moment'
import swalConBootstrapButtons from '../shared/mixinSwal'
export default {
    name: 'CitasForm',
    data() {
        return {
            nombre : '',
            apellidoPaterno : '',
            apellidoMaterno : '',
            email: '',
            direccion: '',
            ciudad: '',
            estado: '',
            codigoPostal: '',
            numeroCelular : '',
            fechaCita: '',
            submitted: false,
            mostrarOverlay: false
        }
    },
    validations : {
        nombre: { required },
        apellidoPaterno: { required },
        apellidoMaterno: { required },
        email: { required, email },
        direccion: { required },
        ciudad: { required },
        estado: { required },
        codigoPostal: { required, maxLength: maxLength(5) },
        numeroCelular: { required },
        fechaCita: { required }
    },
    computed: {
        //Conjunto de propiedades computadas que se encargan de validar los campos del formulario
        erroresNombre() {
            return this.submitted && this.$v.nombre.$error && !this.$v.nombre.required
        },
        erroresApellidoPaterno() {
            return this.submitted && this.$v.apellidoPaterno.$error && !this.$v.apellidoPaterno.required
        },
        erroresApellidoMaterno() {
            return this.submitted && this.$v.apellidoMaterno.$error && !this.$v.apellidoMaterno.required
        },
        erroresEmail() {
            return this.submitted && this.$v.email.$error && !this.$v.email.required
        },
        erroresEmailInvalido() {
            return this.submitted && this.$v.email.$error && !this.$v.email.email
        },
        erroresDireccion() {
            return this.submitted && this.$v.direccion.$error && !this.$v.direccion.required
        },
        erroresCiudad() {
            return this.submitted && this.$v.ciudad.$error && !this.$v.ciudad.required
        },
        erroresEstado() {
            return this.submitted && this.$v.estado.$error && !this.$v.estado.required
        },
        erroresCodigoPostal() {
            return this.submitted && this.$v.codigoPostal.$error && !this.$v.codigoPostal.required
        },
        erroresCodigoPostalDigitos() {
            return this.submitted && this.$v.codigoPostal.$error && !this.$v.codigoPostal.maxLength
        },
        erroresCelular() {
            return this.submitted && this.$v.numeroCelular.$error && !this.$v.numeroCelular.required
        },
        erroresFechaCita() {
            return this.submitted && this.$v.fechaCita.$error && !this.$v.fechaCita.required
        }
    },
    methods: {
        eventoClickAuxiliar() {//Metodo auxiliar para dar click en boton oculto
            $('#botonOculto').click()
        },
        soloNumeros(evt) {
            //Regla para solo aceptar numeros en los campos de codigo postal y celular
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        regresarPaginaPrincipal() {//Métooo para regresar a la pagina principal
            this.$router.push({ name : 'pagina-principal'})
        },
        async agendarCita() {//Metodo que se encarga de agendar las citas
            this.submitted = true

            this.$v.$touch()

            if(!this.$v.$invalid) {

                 try {
                    //Obtenemos el curp de la store a traves de los getters
                    const curp = this.$store.getters.obtenerCurp
                    //formatemos la fecha seleccionada
                    this.fechaCita = new Date(this.fechaCita)
                    this.fechaCita = moment(this.fechaCita).format("YYYY-MM-DD HH:mm:ss")
                    //Creamos el objeto cita
                    const cita = new Cita(
                        this.nombre,
                        this.apellidoPaterno,
                        this.apellidoMaterno,
                        this.email,
                        this.direccion,
                        this.ciudad,
                        this.estado,
                        this.codigoPostal,
                        this.numeroCelular,
                        this.fechaCita,
                        curp
                    )
                    //Realizamos el request para enviar los datos de la cita
                    const payload = { cita }
                    const response = await this.$store.dispatch('agendarCita', payload)

                    if(response.ok) {
                        const { message } = response
                        //Mostramos alerta de exito
                        swalConBootstrapButtons.fire({
                            icon: 'success',
                            title: '¡Éxito!',
                            text: message,
                        })

                        this.submitted = false

                        $('#btnCerrarModal').click()//Cerramos el modal del formulario

                        EventBus.$emit('obtenerCitas')//Emitimos evento para cargar las citas
                    }
                } catch (error) {
                    console.log(error)
                }
            }else {

            }
        },
    },
    mounted() {
        //Recepcion de evento que actualiza el valor de fechaCita
        EventBus.$on('setFechaCita', (fechaCita) => {
            this.fechaCita = fechaCita
        })
    },
}
</script>

<style scoped>
#btnAgendarCita {
    float: left;
    margin-bottom: 10px;
}

.left {
    float: left;
    font-size: 15px;
}

.error {
    border-color: #f79483;
}

.errors-bag {
    font-size: .75rem;
    color: #f79483;
    float: left;
    margin-bottom: 5px;
}

#botonOculto {
    display: none;
}

#btnRegresarPaginaPrincipal {
    float: right;
}
</style>