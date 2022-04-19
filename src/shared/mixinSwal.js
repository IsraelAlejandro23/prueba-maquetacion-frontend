import Swal from 'sweetalert2'

const swalConBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

export default swalConBootstrapButtons