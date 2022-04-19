<template>
    <div>
        <div id="overlay">
            <div class="d-flex justify-content-center">
                <div id="spinner" class="spinner-grow text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Overlay' 
}
</script>

<style  scoped>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#spinner {
    margin-top: 280px;
}
</style>