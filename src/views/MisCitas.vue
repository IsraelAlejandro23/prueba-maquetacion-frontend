<template>
    <div>
        <div class="main">
            <!-- IMAGENES DE FONDO -->
            <img id="imgRight" src="../assets/img_right.svg"/>
            <img id="imgLeft" src="../assets/img_left.svg" />
            <img id="imgBackPuntos" src="../assets/img_back_puntos.svg" />
            <!--FIN IMAGENES DE FONDO -->

            <!--ENCABEZADO DE LA PAGINA -->
            <EncabezadoPagina />
            <!-- FIN ENCABEZADO DE LA PAGINA-->

            <!--DIVISION CON FONDO AZUL MARINO-->
            <div id="divFondoAzulMarino"></div>
            <!--FIN DIVISION CON FONDO AZUL MARINO-->

            <!--TABLA CITAS Y ALERTA CITAS -->
            <TablaCitas :citas="citas" v-if="existenCitas"/>
            <AlertaCitas v-if="!mostrarOverlay && !existenCitas"/>
            <!--FIN TABLA CITAS Y ALERTA CITAS-->

            <!--PIE DE LA PAGINA -->
            <PiePagina />
            <!--FIN DE PIE DE LA PAGINA -->

            <!--OVERLAY -->
            <Overlay v-if="mostrarOverlay"/>
            <!--FIN OVERLAY -->
        </div>
    </div>
</template>

<script>
import EncabezadoPagina from '@/components/EncabezadoPagina.vue'
import TablaCitas from '@/components/TablaCitas.vue'
import PiePagina from '@/components/PiePagina.vue'
import CitasForm from '@/components/CitasForm.vue'
import Overlay from '@/components/Overlay.vue'
import AlertaCitas from '@/components/AlertaCitas.vue'
import EventBus from '../EventBus'
export default {
    name : 'MisCitas',
    components : { 
        EncabezadoPagina, 
        TablaCitas,
        PiePagina,
        CitasForm,
        Overlay,
        AlertaCitas
    },
    data() {
        return {
            citas: [],
            mostrarOverlay: false
        }
    },
    computed: {
        existenCitas() {
            return this.citas.length > 0
        }
    },
    methods: {
        async obtenerCitas() {
            try {
                this.mostrarOverlay = !this.mostrarOverlay

                const payload =  { curp : this.$store.getters.obtenerCurp }
                const response = await this.$store.dispatch('obtenerCitas', payload)

                if(response.ok) {
                    this.citas = response.citas
                    this.mostrarOverlay = !this.mostrarOverlay
                }
            } catch (error) {
                console.log(error)
                this.mostrarOverlay = !this.mostrarOverlay
            }
        }
    },
    created() {
        this.obtenerCitas()
    },
    mounted() {
        EventBus.$on('obtenerCitas', () => this.obtenerCitas())
    
        $('#txtFecha').datetimepicker()
        
        $('#txtFecha').change(function(e) { 
            e.stopImmediatePropagation()
            const fechaCita = $(this).val()
            EventBus.$emit('setFechaCita', fechaCita)
        })
    },
}
</script>

<style scoped>
#main {
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1077px;
    background: #ffffff;
}

#imgRight {
    top: 475px;
    width: 184px;
    height: 264px;
    position: absolute;
    z-index: 1;
    left: 1200px;
} 

#imgLeft {
    top: 138px;
    left: -70px;
    width: 184px;
    height: 264px;
    position: absolute;
}

#imgBackPuntos {
    position: absolute;
    top: 652px;
    width: 81px;
    height: 85px;
    z-index: 1;
    left: 100px;
}

#divFondoAzulMarino {
    top: 602px;
    width: 1920px;
    height: 270px;
    background: #00326c;
    position: absolute;
}
</style>