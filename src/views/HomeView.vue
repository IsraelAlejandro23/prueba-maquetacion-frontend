<template>
  <div class="main">
    <!-- IMAGENES DE FONDO -->
    <img id="imgRight" src="../assets/img_right.svg"/>
    <img id="imgLeft" src="../assets/img_left.svg" />
    <img id="imgBackPuntos" src="../assets/img_back_puntos.svg" />
    <!--FIN IMAGENES DE FONDO -->

    <!--ENCABEZADO DE LA PAGINA -->
    <EncabezadoPagina />
    <!-- FIN ENCABEZADO DE LA PAGINA-->

    <!--BOTON FLOTANTE-->
    <div id="botonFlotante">
      <span id="pillWhatsapp" class="badge rounded-pill">
        <i id="iconWhatsapp" class="fa-brands fa-whatsapp"></i>
        <span id="spanWhatsapp">33 3823 3220</span>
      </span>
    </div>
    <!--FIN BOTON FLOTANTE-->

    <!--DIVISION CON FONDO AZUL MARINO-->
    <div id="divFondoAzulMarino"></div>
    <!--FIN DIVISION CON FONDO AZUL MARINO-->

    <!--CENTRO DE LA PAGINA -->
    <CentroPagina />
    <!--FIN CENTRO DE LA PAGINA-->

    <!--PIE DE LA PAGINA -->
    <PiePagina />
    <!--FIN DE PIE DE LA PAGINA -->
  </div>
</template>

<script>
// @ is an alias to /src
import EncabezadoPagina from '@/components/EncabezadoPagina.vue'
import CentroPagina from '@/components/CentroPagina.vue'
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'HomeView',
  components: {
    EncabezadoPagina,
    CentroPagina,
    PiePagina
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
}

#divFondoAzulMarino {
    top: 602px;
    width: 1920px;
    height: 270px;
    background: #00326c;
    position: absolute;
}


#botonFlotante {
    position: fixed;
    top: 98px;
    left: 1104PX;
    width: 168px;
    height: 40px;
}

#pillWhatsapp {
    font-size: 14px;
    background: #57bbff;
}

#iconWhatsapp {
    font-size: 25px;
}

#spanWhatsapp {
    position: relative;
    top: -4px;
    left: 3px
}

@media screen and (max-width: 1366px) {
  #imgRight {
      left: 1215px;
  }

  #imgBackPuntos {
    left: 80px;
  }

  #aCalculadora {
    left: 950px;
  }

  #iconAvisoPrivacidad {
    left: 1100px;
  }

  #aAvisoPrivacidad {
    left: 1125px;
  }
}
</style>
