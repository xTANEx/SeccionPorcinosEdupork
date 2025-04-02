function validacion() {
    // var btn_consult = document.getElementById('button-consult')
    var id_porcino = parseInt(document.getElementById('ID-porcino').value)
    var id_registrado = parseInt(111)

    if (id_porcino == id_registrado){
        alert("El iD " + id_porcino + " si existe en la base de datos");
    }else{
        alert("El iD " + id_porcino + " NO existente");
    }
}

function dialog_eye(){
    const mod_wind = document.getElementById('dialog-icon-eye')
    const btn_abrir = document.getElementById('abrir-dieye')
    const btn_cerrar = document.getElementById('cerrar-dieye')
    
    btn_abrir.addEventListener('click', function() {
        mod_wind.showModal(); 
    });
    
    btn_cerrar.addEventListener('click', function() {
        mod_wind.close();
    });
}

function dialog_edit(){
    const mod_wind = document.getElementById('dialog-icon-edit')
    const btn_abrir = document.getElementById('abrir-diedit')
    const btn_cerrar = document.getElementById('cerrar-diedit')
    
    btn_abrir.addEventListener('click', function() {
        mod_wind.showModal(); 
    });
    
    btn_cerrar.addEventListener('click', function() {
        mod_wind.close();
    });
}

function dialog_delete(){
    const mod_wind = document.getElementById('dialog-icon-dele')
    const btn_abrir = document.getElementById('abrir-didele')
    const btn_cerrar = document.getElementById('cerrar-didele')
    
    btn_abrir.addEventListener('click', function() {
        mod_wind.showModal(); 
    });
    
    btn_cerrar.addEventListener('click', function() {
        mod_wind.close();
    });

    
}

function navbar(){
    const menu = document.getElementById('menu')

    if (menu.checked){
        document.getElementById('bar_nav').style.display = 'initial';
    }else{
        document.getElementById('bar_nav').style.display = 'none';
    }

}