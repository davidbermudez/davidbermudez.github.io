// deshablitar menu contextual
document.oncontextmenu = function(){return false}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDk3d_kgjLfXDZWBtKt8I76uNGO40h5LCg",
    authDomain: "buscaminas-ea3f6.firebaseapp.com",
    projectId: "buscaminas-ea3f6",
    storageBucket: "buscaminas-ea3f6.appspot.com",
    messagingSenderId: "33385946765",
    appId: "1:33385946765:web:3e99585771f53408978cc4",
    measurementId: "G-523RV8PLGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var base_path = 'https://davidbermudez.github.io/buscaminas/js/';
var tiempo = 0;
var bombas = 0;
var celda = {fila: 0, columna: 0, valor: '0'}
var matriz = [];
var nivel = 0; // principiante
var niveles = [
    [7, 7, 10, "Principiante"],
    [15, 15, 40, "Intermedio"],
    [30, 30, 99, "Experto"],
    [20, 20, 50, "Personalizado"],
    ];        
dibujaTablero(nivel);
var estado = 0; // previo
var inter = setInterval(function(){
    if(estado==1){
        tiempo++;
        marcadorTiempo();
    } else pauseInterval();
},1000,"JavaScript");

var imageTime = [    
    'time0.gif','time1.gif','time2.gif',
    'time3.gif','time4.gif','time5.gif',
    'time6.gif','time7.gif','time8.gif',
    'time9.gif'
];

var imageOpen = [    
    'open0.gif','open1.gif','open2.gif',
    'open3.gif','open4.gif','open5.gif',
    'open6.gif','open7.gif','open8.gif'
];

preloadImage(imageTime);
preloadImage(imageOpen);

function preloadImage(data)
{    
    let  total = data.length;    
    let imgArray = new Array();
    for(let i = 0; i < total; i++)
    {
        var tmpImage = new Image();
        tmpImage.src = base_path + 'images/' + data[i];
        imgArray.push(tmpImage);
    }
}

function dibujaTablero(nivel){
    let ancho_celda = 25;
    let ancho_borde = 14;
    let ancho_digit = 18;
    let alto_digit = ancho_digit * 23 / 13;
    let ancho = ((niveles[nivel][0] + 1) * ancho_celda);
    bombas = niveles[nivel][2];

    // interfaz
    base = document.getElementById('tablero');
    base.setAttribute('style','display: grid;\ngrid-template-rows: ' + ancho_borde + 'px ' + alto_digit + 'px ' + ancho_borde + 'px ' + ancho + 'px ' + ancho_borde + 'px');
    // ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
    border_sup = document.createElement('div');
    border_sup.id = 'border_superior';
    
    border_sup.setAttribute('style', 'display: grid;\ngrid-template-columns: ' + 
        ancho_borde + 'px ' + ancho + 'px ' + 
        ancho_borde + 'px;');
    
    base.appendChild(border_sup);
    // esquinas y barra superior
    esquina_sup_izq = document.createElement('div');
    superior_central = document.createElement('div');
    esquina_sup_der = document.createElement('div');

    esquina_sup_izq.setAttribute('style', 'background-image: url("js/images/bordertl.gif");\nbackground-size: contain');
    superior_central.setAttribute('style', 'background: url("js/images/bordertb.gif") repeat-x;\nbackground-size: contain;');
    esquina_sup_der.setAttribute('style', 'background-image: url("js/images/bordertr.gif");\nbackground-size: contain');

    esquina_sup_izq.id = 'esquina_sup_izq';
    superior_central.id = 'superior_central';
    esquina_sup_der.id = 'esquina_sup_der';

    border_sup.appendChild(esquina_sup_izq);
    border_sup.appendChild(superior_central);
    border_sup.appendChild(esquina_sup_der);

    // marcador

    marcador = document.createElement('div');
    marcador.id = 'marcador';
    marcador.setAttribute('style', 'display: grid;\ngrid-template-columns: ' + 
        ancho_borde + 'px ' + ancho + 'px ' + 
        ancho_borde + 'px;')

    base.appendChild(marcador);
    
    borde_izquierdo = document.createElement('div');
    marcador_central = document.createElement('div');
    borde_derecho = document.createElement('div');
    
    borde_izquierdo.setAttribute('style', 
        'background: url("js/images/borderlr.gif") repeat-y;\nbackground-size: contain;');
    tamanno_central = ancho - ancho_digit * 6;
    marcador_central.setAttribute('style', 
        'display: grid; grid-template-columns:' + 
        ancho_digit + 'px ' + ancho_digit + 'px ' + 
        ancho_digit + 'px ' + tamanno_central + 'px ' + 
        ancho_digit + 'px ' + ancho_digit + 'px ' + 
        ancho_digit + 'px;\nbackground-color: #C0C0C0;');
    borde_derecho.setAttribute('style', 
        'background: url("js/images/borderlr.gif") repeat-y;\nbackground-size: contain;');

    marcador.appendChild(borde_izquierdo);
    marcador.appendChild(marcador_central);
    marcador.appendChild(borde_derecho);
    
    timer_0 = document.createElement('div');
    timer_1 = document.createElement('div');
    timer_2 = document.createElement('div');
    icono = document.createElement('div');
    timer_3 = document.createElement('div');
    timer_4 = document.createElement('div');
    timer_5 = document.createElement('div');

    timer_0.id = 'timer0';
    timer_1.id = 'timer1';
    timer_2.id = 'timer2';
    icono.id = "icono";
    timer_3.id = 'timer3';
    timer_4.id = 'timer4';
    timer_5.id = 'timer5';
    
    timer_0.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')
    timer_1.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')
    timer_2.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')
    icono.setAttribute('style', 'background: url("js/images/facesmile.gif") no-repeat center;background-size: contain;');
    icono.setAttribute('onclick','buttoninit(event)');
    timer_3.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')
    timer_4.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')
    timer_5.setAttribute('style', 'background: url("js/images/time0.gif") no-repeat;\nbackground-size:contain;')

    marcador_central.appendChild(timer_0);
    marcador_central.appendChild(timer_1);
    marcador_central.appendChild(timer_2);
    marcador_central.appendChild(icono);
    marcador_central.appendChild(timer_3);
    marcador_central.appendChild(timer_4);
    marcador_central.appendChild(timer_5);

    // separador central

    separador = document.createElement('div');
    separador.id = 'separador';
    separador.setAttribute('style', 'display: grid;\ngrid-template-columns: ' +
        ancho_borde + 'px ' + ancho + 'px ' +
        ancho_borde + 'px;')

    base.appendChild(separador);

    cruce_izquierdo = document.createElement('div');
    linea_central = document.createElement('div');
    cruce_derecho = document.createElement('div');
    
    cruce_izquierdo.setAttribute('style', 'background: url("js/images/borderjointl.gif");\nbackground-size: contain');
    linea_central.setAttribute('style', 'background: url("js/images/bordertb.gif") repeat-x;\nbackground-size: contain');
    cruce_derecho.setAttribute('style', 'background: url("js/images/borderjointr.gif");\nbackground-size: contain');

    separador.appendChild(cruce_izquierdo);
    separador.appendChild(linea_central);
    separador.appendChild(cruce_derecho);
    
    let columnas = filas = '';
    for(let i = 0; i <= niveles[nivel][0]; i++){
        filas = filas + ancho_celda + 'px ';
    }
    for(let i = 0; i <= niveles[nivel][1]; i++){
        columnas = columnas + ancho_celda + 'px ';
    }
    // tablero central (contenedor de celdas)

    contenedor = document.createElement('div');
    contenedor.setAttribute('style', 'display:grid; grid-template-columns: ' + 
        ancho_borde + 'px ' +
        ancho + 'px '+
        ancho_borde + 'px;');
    contenedor.id = 'contenedor';
    
    base.appendChild(contenedor);

    lateral_izquierdo = document.createElement('div');
    lateral_izquierdo.id = 'lateral_izq';
    lateral_izquierdo.setAttribute('style', 'background: url("js/images/borderlr.gif") repeat-y;\nbackground-size: contain;');
    contenedor.appendChild(lateral_izquierdo);
    
    casillas = document.createElement('div');
    casillas.id = "casillas";            
    casillas.setAttribute('style', 
        'display: grid;\ngrid-template-columns: ' + columnas + ';\n' + 
        'grid-template-rows:' + filas)
    contenedor.appendChild(casillas);

    lateral_derecho = document.createElement('div');
    lateral_derecho.id = 'lateral_der';
    lateral_derecho.setAttribute('style', 'background: url("js/images/borderlr.gif") repeat-y;\nbackground-size: contain;');
    contenedor.appendChild(lateral_derecho);
    
    for(let i = 0; i <= niveles[nivel][0]; i++){
        for(let j = 0; j <= niveles[nivel][1]; j++){
            celda = document.createElement('div');
            celda.setAttribute('id', 'celda['+ i +']['+ j + ']');
            // celda.setAttribute('fil', i);
            // celda.setAttribute('col', j);
            celda.setAttribute('style', 
                'background-image: url("js/images/blank.gif");\nbackground-size: contain');
            celda.setAttribute('onmousedown','clickin(event, ' + i + ', ' + j + ') ');
            casillas.appendChild(celda);
        }
    }
    // borde inferior
    border_inf = document.createElement('div');
    border_inf.id = 'border_inferior';
    border_inf.setAttribute('style', 'display: grid;\ngrid-template-columns: ' +
        ancho_borde + 'px ' + ancho + 'px ' +
        ancho_borde + 'px;');            
    base.appendChild(border_inf);
    // esquinas y barra inferior
    esquina_inf_izq = document.createElement('div');
    inferior_central = document.createElement('div');
    esquina_inf_der = document.createElement('div');

    esquina_inf_izq.setAttribute('style', 'background-image: url("js/images/borderbl.gif");\nbackground-size: contain');
    inferior_central.setAttribute('style', 'background: url("js/images/bordertb.gif") repeat-x;\nbackground-size: contain;');
    esquina_inf_der.setAttribute('style', 'background-image: url("js/images/borderbr.gif");\nbackground-size: contain');

    esquina_inf_izq.id = 'esquina_inf_izq';
    inferior_central.id = 'inferior_central';
    esquina_inf_der.id = 'esquina_inf_der';

    border_inf.appendChild(esquina_inf_izq);
    border_inf.appendChild(inferior_central);
    border_inf.appendChild(esquina_inf_der);            

    marcadorBomba();
}

function buttoninit() {
    reiniciaTablero(nivel);
    estado = 0; // previo
    tiempo = 0;
    pauseInterval();
    marcadorTiempo();
}

function reiniciaTablero(n) {
    matriz = [];
    /*matriz.forEach(function(e){
        e.valor = '0';
    })*/
    for(let i = 0; i <= niveles[n][0]; i++){
        for(let j = 0; j <= niveles[n][1]; j++){
            let casilla = document.getElementById('celda['+ i +']['+ j + ']');
            casilla.setAttribute('style', 
                'background-image: url("js/images/blank.gif");\nbackground-size: contain');
            casilla.setAttribute('onmousedown','clickin(event, ' + i + ', ' + j + ') ');
        }
    }
    let celda = document.getElementById('icono');
    celda.setAttribute('style', 'background: url("js/images/facesmile.gif") no-repeat center;\nbackground-size: contain');    
}

function clickin(event, fila, columna){    
    switch(event.buttons){
        case 1:
            if(estado==1){
                destapar(fila, columna);
                if(comprobarVictoria()){
                    victoria()
                }
            } else if(estado==0) {
                iniciarJuego(fila, columna);
            }
            break;
        case 2:
            if(estado==1){
                marcar(fila, columna);
            }
            break;
        default:
            alert(event);
    }
}

function victoria(){
    estado = 3;
    let celda = document.getElementById('icono');
    celda.setAttribute('style', 'background: url("js/images/facewin.gif") no-repeat center;\nbackground-size: contain');
    nivel = niveles[nivel][3];
    let nick = prompt(nivel, "Nick?");
    db.collection(nivel).add({
        Nick: nick,
        Ip: "Lovelace",
        time: tiempo
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        mostrarTabla(niveles[nivel][3]);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });    
}

function mostrarTabla(nivel){
    let salida = 'MEJORES TIEMPOS:';
    db.collection(nivel).orderBy("time", "asc").limit(3)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                salida = salida + '\n' + doc.data().Nick + ' => ' + doc.data().time;                
            });
            alert(salida);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });    
}

function comprobarVictoria(){
    let premio = matriz.filter(celda => celda.valor != 'd' && celda.valor != 'b' && celda.valor != 'B');    
    if (premio.length==0) {        
        return true;
    } else return false;
}

function finalizar(f, c) {
    let celda = document.getElementById('icono');
    celda.setAttribute('style', 'background: url("js/images/facedead.gif") no-repeat center;\nbackground-size: contain');
    estado = 2; // Finalizado-derrotado
    pauseInterval();
    // destapar bombas    
    matriz.forEach(function(e){        
        if(e.valor == '0B' && !(e.fila==f && e.columna==c)) {            
            let casilla = document.getElementById('celda[' + e.fila + '][' + e.columna + ']');
            casilla.setAttribute('style', 'background: url("js/images/bombrevealed.gif");\nbackground-size: contain');
        }
    })
}

function destapar(f, c){    
    valor = matriz.filter(celda => celda.fila == f && celda.columna == c);    
    let celda = document.getElementById('celda[' + f + '][' + c + ']');
    // destapamos la bomba pulsada
    if(valor[0]['valor']=='0B') {
        celda.setAttribute('style', 'background: url("js/images/bombdeath.gif");\nbackground-size: contain');
        finalizar(f, c);
    }
    let val = valor[0]['valor'];
    // Revelamos su valor
    if(val!='00' && val!='0B'){
        celda.setAttribute('style', 'background: url("js/images/open' + val[1] + '.gif");\nbackground-size: contain');
        valor[0]['valor'] = 'd' + val[1];
    } else {
        descubrir(f,c);
    }    
}

function descubrir(f, c) {    
    let esCero = matriz.filter(casilla => casilla.fila == f && casilla.columna == c);    
    let celda = document.getElementById('celda[' + f + '][' + c + ']');
    let val = esCero[0]['valor'];
    if(val=="00") {
        esCero[0]['valor'] = 'b0';
        celda.setAttribute('style', 'background: url("js/images/open0.gif");\nbackground-size: contain');
        if(f>0) descubrir(f - 1, c);
        if(f<niveles[nivel][0]) descubrir(f + 1, c);
        if(c>0) descubrir(f, c - 1);
        if(c<niveles[nivel][1]) descubrir(f, c + 1);
        if(f>0 && c>0) descubrir(f - 1, c - 1);
        if(f>0 && c<niveles[nivel][1]) descubrir(f - 1, c + 1);
        if(f<niveles[nivel][0] && c>0) descubrir(f + 1, c - 1);
        if(f<niveles[nivel][0] && c<niveles[nivel][1]) descubrir(f + 1, c + 1);
    }
    let v = parseInt(val[1]);
    if (v<=8 && v>=1){
        celda.setAttribute('style', 'background: url("js/images/open' + v +'.gif");\nbackground-size: contain');
        esCero[0]['valor'] = 'd' + v;
    }
}

function iniciarJuego(f, c){
    // genera una matriz aleatoria de bombas evitando poner una en la casilla f, c
    for(let i = 0; i <= niveles[nivel][0]; i++){
        for(let j = 0; j <= niveles[nivel][1]; j++){
            celda = {fila: i, columna: j, valor: '00'}
            matriz.push(celda);
        }
    }
    let b = [];
    while (b.length<niveles[nivel][2]){
        let aleatorio = Math.round(Math.random() * (matriz.length - 1));
        while(matriz[aleatorio].valor == '0B'){
            aleatorio = Math.round(Math.random() * (matriz.length - 1));
        }
        if(matriz[aleatorio].fila != f && matriz[aleatorio].columna != c){
            matriz[aleatorio].valor = '0B';
            b = matriz.filter(celda => celda.valor == '0B');
        }
    }    
    // una vez colocadas las bombas, colocamos los números
    let noBombas = matriz.filter(celda => celda.valor != '0B');
    noBombas.forEach(function(elemento){
        let fil = elemento.fila;
        let col = elemento.columna;
        let bom = 0;
        // sumar bombas por arriba
        if(fil > 0){
            if(col > 0){
                let arriba1 = matriz.filter(celda => celda.fila == fil - 1 && celda.columna == col - 1 && celda.valor == '0B');
                bom = bom + arriba1.length;
            }
            
            let arriba2 = matriz.filter(celda => celda.fila == fil - 1 && celda.columna == col && celda.valor == '0B');
            bom = bom + arriba2.length;

            if(col < niveles[nivel][1]){
                let arriba3 = matriz.filter(celda => celda.fila == fil - 1 && celda.columna == col + 1 && celda.valor == '0B');
                bom = bom + arriba3.length;
            }
        }
        // sumar bombas laterales
        if(col > 0) {
            let lateral1 = matriz.filter(celda => celda.fila == fil && celda.columna == col - 1 && celda.valor == '0B');
            bom = bom + lateral1.length;
        }
        if(col < niveles[nivel][1]) {
            let lateral2 = matriz.filter(celda => celda.fila == fil && celda.columna == col + 1 && celda.valor == '0B');
            bom = bom + lateral2.length;
        }
        // sumar bombas por abajo
        if(fil < niveles[nivel][0]){
            if(col > 0){
                let abajo1 = matriz.filter(celda => celda.fila == fil + 1 && celda.columna == col - 1 && celda.valor == '0B');
                bom = bom + abajo1.length;
            }
            
            let abajo2 = matriz.filter(celda => celda.fila == (fil + 1) && celda.columna == col && celda.valor == '0B');
            bom = bom + abajo2.length;
            
            if(col < niveles[nivel][1]){
                let abajo3 = matriz.filter(celda => celda.fila == fil + 1 && celda.columna == col + 1 && celda.valor == '0B');
                bom = bom + abajo3.length;
            }
        }
        // asignar puntuación
        pos = matriz.filter(celda => celda.fila == fil && celda.columna == col);
        pos[0]['valor'] = '0' + bom.toString();
    });    
    estado = 1; // En juego
    tiempo = 0;
    destapar(f, c);
    continueInterval();
    console.log(matriz);
}

function marcar(f, c){
    console.log(matriz);
    valor = matriz.filter(celda => celda.fila == f && celda.columna == c && (celda.valor != 'b' || celda.valor != 'd'));
    if (valor.length > 0) {
        valor[0]['valor'] = "M" + valor[0]['valor'];
        let celda = document.getElementById('celda[' + f + '][' + c + ']');
        celda.setAttribute('style', 'background: url("js/images/bombflagged.gif");\nbackground-size: contain');
        bombas--;
        marcadorBomba();        
    }
}

function marcadorBomba(){
    let dg = '000';
    if (bombas>=0) {
        dg = dg + bombas.toString();
        dg = dg.substr(dg.length - 3, 3);
    } else {
        let digito = bombas.toString().length;
        dg = '-' + dg.substr(0, 1 - digito) + Math.abs(bombas).toString();
        dg = dg.substr(dg.length - 3, 3);
        console.log(dg);
    }
    
    dg = dg.split('');
    dg.map(function(key, index){                
        digito = document.getElementById('timer' + index);
        digito.setAttribute('style', 'background: url("js/images/time' + key + '.gif") no-repeat;\nbackground-size:contain;')
        if (key=='') return;
    });
}

function marcadorTiempo(){
    let dg = '000' + tiempo.toString();
    dg = dg.substr(dg.length-3, 3);
    dg = dg.split('');                                
    dg.map(function(key, index){
        indice = index + 3;
        digito = document.getElementById('timer' + indice);        
        digito.setAttribute('style', 'background: url("js/images/time' + 
            key + '.gif") no-repeat;\nbackground-size:contain;')
    });
}

function pauseInterval(){
    clearInterval(inter);
}

function continueInterval(){
    inter = setInterval(function(){
        if(estado==1){
            tiempo++;
            marcadorTiempo();
        } else pauseInterval();
   }, 1000);
}

