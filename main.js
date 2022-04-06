// creamos una variable y como valor le asignamos el elemento HTML con id 'clock'
const display = document.getElementById('clock');
// definimos variables a utilizar en las funciones de alarma
let alarmTime = null;
let  alarmTimeOut = null;
// definimos una variable cuyo valor es un audio que se utilizará en la alarma
const audio = new Audio('mixkit-morning-clock-alarm-1003.wav');
audio.loop = true;
/**
 * 
 * @param {entero que indica hs, mins, o s} time 
 * @returns entero de dos dígitos
 */
function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}
/**
 * creamos una variable que tiene como valor el tiempo actual
 * y tres variables que reciben su valor correspondiente, formateado
 * por la función anterior
 * 
 * Asigna un resultado al texto interno de la variable 'display'
 */
function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText = `${hour}:${minutes}:${seconds}`;
}
// Le establecemos el valor seleccionado mediante el input HTML a la variable
function setAlarmTime(value) {
    alarmTime = value;
}
/**
 * Crea una variable con el tiempo actual y otra con el tiempo que se 
 * seleccionó para hacer sonar la alarma
 * 
 * Si el tiempo establecido de la alarma es mayor al actual, establece
 * una variable con la diferencia de ms entre el tiempo actual y el de la alarma
 * 
 * Y utiliza dicha variable para hacerla sonar cuando dicho tiempo haya pasado
 */
function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeOut = timeToAlarm.getTime() - current.getTime();

            alarmTimeOut = setTimeout(() => audio.play(), timeOut);
            alert('The alarm had been set');
        }
    }
}

function deleteAlarm() {
    audio.pause();

    if (alarmTimeOut != null) {
        clearTimeout(alarmTimeOut);
        alert('The alarm had been deleted')
    }
}


setInterval(updateTime, 1000)

