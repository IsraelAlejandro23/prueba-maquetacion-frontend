<template>
    <div>
        <div id="center" class="mx-auto">
            <div id="divPrincipal" class="mx-auto">
                Campañas activas de vacunación contra Covid-19 (ZMG)
            </div>

            <img id="iconPrev" src="../assets/ico_left.svg" />
            <img id="iconNext" src="../assets/ico_left.svg" />

            <div id="divCentral" class="mx-auto">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div id="primerCard" class="card cardStyles">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <img id="firstGroupImage" src="../assets/group_5447.svg" />
                                </h5>
                                <p id="primerTexto" class="card-text">Personas de 18 y más</p>
                                <p id="segundoTexto" class="card-text colorAzul">
                                    <span id="badgePill" class="badge rounded-pill">1</span>
                                    Primera Dósis
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                        <div id="segundCard" class="card cardStyles">
                            <div class="card-body">
                                <h5 class="card-title">
                                <img id="secondGroupImage" src="../assets/group_5447.svg" />
                                </h5>
                                <p id="primerTexto" class="card-text">Personas de 18 y más</p>
                                <p id="segundoTexto" class="card-text colorAzul">
                                    <span id="badgePill" class="badge rounded-pill">1</span>
                                    Primera Dósis
                                </p>
                                <p id="tercerTexto" class="card-text colorNaranja">
                                    ASTRA ZENECA
                                </p>
                                <p id="cuartoTexto" class="card-text colorNaranja">
                                    Primera dósis aplicada antes del 15 de Agosto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div id="divFinal" class="mx-auto">
            <div id="divFinalPrimerTexto" class="col-md-12">
                <p id="comenzarAhora" class="colorAzul">Comenzar ahora</p>
            </div>

            <div id="divFinalSegundoTexto" class="col-md-12">
                <p id="p1">Ingresa tu CURP para agendar una cita </p>
                <p id="p2">o para <a id="linkSegundoTexto" class="colorAzul">cancelar una cita</a> ya registrada.</p>
            </div>

            <div id="divFinalInputBoton" class="col-md-12">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <img src="../assets/ico_user.svg" />
                        </span>
                        <input
                            id="txtCURP"
                            type="text"
                            class="form-control"
                            :class="[erroresCurp || erroresCurpLength || mostrarErrorRegexp ? 'errorDiv' : '']"
                            placeholder="Introduce tu CURP"
                            aria-label="Introduce tu CURP"
                            aria-describedby="basic-addon1"
                            v-model="curp"
                            
                        />
                        <div id="divErrors" v-if="existenErrores">
                            <span class="spanError" v-if="erroresCurp">El curp es obligatorio</span>
                            <span class="spanError" v-if="erroresCurpLength">El curp debe contener 18 caracteres</span>
                            <span class="spanError" v-if="curpInvalido">El curp es inválido</span>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <button id="btnContinuar" type="button" class="btn btn-primary btn-lg" @click="verCitas">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
            <div id="divFinalTercerTexto">
                <p>
                Si no conoces tu CURP
                <a id="linkTercerTexto" class="colorAzul">consulta aquí</a>
                </p>
          </div>
        </div>
    </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import $ from 'jquery'
export default {
    name:'CenterPage',
    data() {
        return {
            curp: '',
            submitted: false,
            mostrarErrorRegexp: false,
        }
    },
    validations: {
        curp : {
            required,
            maxLength: maxLength(18),
        }
    },
    computed: {
        //Propiedades computadas para validar el campo de la curp
        existenErrores() {
            return (this.submitted && this.$v.curp.$error) || this.mostrarErrorRegexp
        },
        erroresCurp() {
            return this.submitted && this.$v.curp.$error && !this.$v.curp.required
        },
        erroresCurpLength() {
            return this.submitted && this.$v.curp.$error && !this.$v.curp.maxLength
        },
        curpInvalido() {
            return this.mostrarErrorRegexp && !this.erroresCurp
        }
    },
    methods: {
        validarCurp() {//Método para validar curp
            const patronRegexpCurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
            const regexp = new RegExp(patronRegexpCurp)
            const esCurpValida = regexp.test(this.curp)
            return esCurpValida
        },
        verCitas() {//Método que se encargar de visualizar las citas a partir de la curp
            this.submitted = true

            this.$v.$touch()

            if(!this.$v.$invalid) {

                if(!this.validarCurp()) {
                    this.mostrarErrorRegexp = true
                }else {
                    this.$store.commit('SET_CURP', { curp: this.curp })
                    this.$router.push({ name : 'mis-citas'})
                }
            }
        }
    },
    mounted() {
        const txt = $('#txtCURP')

        txt.keyup(function() {//Transformamos en mayusculas al escribir en el textbox
            $(this).val($(this).val().toUpperCase())
        })
    },
}
</script>

<style scoped>
#center {
    top: 18px;
    height: 769px;
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0px 3px 15px #00000027;
    position: absolute;
}

#divPrincipal {
    top: 106px;
    width: 666px;
    height: 80px;
    text-align: center;
    color: #015db1;
    letter-spacing: 0px;
    position: relative;
    font-size: 40px;
    font-weight: bold;
}

#iconPrev {
    top: 316px;
    width: 14px;
    height: 26px;
    position: absolute;
}

#iconNext {
    top: 316px;
    width: 14px;
    height: 26px;
    position: absolute;
}

#divCentral {
    width: 700px;
    top: 160px;
    height: 200px;
    position: relative;
}

div#primerCard {
    left: 6px;
}

div#segundoCard {
    left: 6px;
}

img#firstGroupImage {
    left: -110px;
    position: relative;
}

img#secondGroupImage {
    position: relative;
    left: -110px;
}

#primerTexto {
    text-align: left;
    letter-spacing: 0px;
    color: #00326c;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    top: -11px;
}

#segundoTexto {
    text-align: left;
    letter-spacing: 0px;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    position: relative;
    top: -33px;
}

#tercerTexto {
    text-align: left;
    letter-spacing: 0px;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    top: -50px;
}

#cuartoTexto {
    text-align: left;
    letter-spacing: 0px;
    position: absolute;
    top: 120px;
    font-size: 15px;
    font-weight: bold;
}

#badgePill {
    font-style: initial;
    background-color: #37aefd;
}

#divFinal {
    width: 700px;
    top: 380px;
    height: 200px;
    position: relative;
}

#comenzarAhora {
    font-size: 28px;
    left: -16px;
    position: absolute;
}

#divFinalSegundoTexto {
    width: 352px;
    font-size: 20px;
    top: 50px;
    position: absolute;
    left: -15px;
}

#linkSegundoTexto {
    font-style: italic;
}

p#p2 {
    position: absolute;
    top: 23px;
}

#divFinalInputBoton {
    position: relative;
    top: 135px;
    left: -15px;
}

#txtCURP {
    box-shadow: 0px 0px 5px #8d8a7d98;
   /* border: 0.5px solid #eaedef;*/
    border-radius: 4px;
    height: 45px;
}

#btnContinuar {
    background: #015db1;
    border-radius: 16px;
    width: 168px;
    font-size: 15px;
    left: -60px;
    position: relative;
}

div#divErrors {
    position: absolute;
    top: 45px;
    left: 2px;
}

#divFinalTercerTexto {
    left: -15px;
    top: 210px;
    font-size: 14px;
    position: absolute;
}

.spanError {
    color: #f79483;
    font-size: 15px;
}

.errorDiv {
    border-color: #f79483;
}

@media screen  and (max-width: 1366px){
    #center {
        left: 220px;
        width: 900px;
    }

    #iconPrev {
        left: 68px;
    }

    #iconNext {
        left: 825px;
    }
}
</style>