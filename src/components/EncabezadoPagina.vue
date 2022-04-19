<template>
    <div id="header" class="row">
        <div class="col-md-6 col-sm-12">
          <img id="imgJSD" src="../assets/logo_jaliscosedefiende.svg" />
          <img id="imgLogoJal" src="../assets/logo_jal.svg" />
        </div>

        <div class="col-md-6 col-sm-12">
          <a id="aCalculadora" class="colorAzul">Calculadora</a>
          <img
            id="iconAvisoPrivacidad"
            class="colorAzul"
            src="../assets/ico_avisoprivacidad.svg"
          />
          <a id="aAvisoPrivacidad" class="colorAzul">Aviso de privacidad</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage'
}
</script>

<style scoped>
#header {
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 80px;
    background: white;
    box-shadow: 0px 3px 21px #00000010;
    z-index: 1;
    position: relative;
}

#imgJSD {
    top: 8px;
    left: 250px;
    width: 180px;
    height: 65px;
    position: absolute;
}

#imgLogoJal {
    top: 4px;
    left: 490px;
    width: 180px;
    height: 65px;
    position: absolute;
}

#aCalculadora {
  top: 35px;
  width: 108px;
  height: 16px;
  text-decoration: none;
  text-align: left;
  letter-spacing: 0px;
  position: absolute;
}

#iconAvisoPrivacidad {
  top: 37px;
  width: 19px;
  height: 19px;
  letter-spacing: 0px;
  position: absolute;
}

#aAvisoPrivacidad {
  top: 35px;
  width: 166px;
  height: 16px;
  text-align: left;
  letter-spacing: 0px;
  text-decoration: none;
  position: absolute;
}


@media screen and (max-width: 1366px) {
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