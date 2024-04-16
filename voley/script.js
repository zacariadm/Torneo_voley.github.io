// Datos de ejemplo para los jugadores
const jugadores = ['Blancaneta', 'Tasoct', 'Los Pitufos', 'Mobilidad', 'Karasuno', 'Sierracar', 'Totitos VC', 'Radiopatio VC', 'Saoko', 'Cachuchos','Súbditos de Marguan'];

// Array para almacenar las partidas
const partidas = [];

// Función para generar las partidas
function generarPartidas() {
    // Reiniciar el array de partidas
    partidas.length = 0;

    // Número máximo de partidas por día
    const maxPartidasPorDia = 1;
    let partidasEnDia = 0;

    // Iterar sobre los jugadores
    for (let i = 0; i < jugadores.length; i++) {
        for (let j = i + 1; j < jugadores.length; j++) {
            // Verificar si ya se enfrentaron
            const yaSeEnfrentaron = partidas.some(partida => {
                return (partida.jugadores.includes(jugadores[i]) && partida.jugadores.includes(jugadores[j]));
            });

            if (!yaSeEnfrentaron && partidasEnDia < maxPartidasPorDia) {
                partidas.push({ dia: '', jugadores: [jugadores[i], jugadores[j]] });
                partidasEnDia++;

                if (partidasEnDia >= maxPartidasPorDia) {
                    partidasEnDia = 0; // Reiniciar el contador de partidas para el próximo día
                }
            }
        }
    }
}

// Función para asignar días a las partidas
function asignarDias() {
    const fechas = [];
    let indexFecha = 0;
    let indexAuxiliar = 1; // Variable auxiliar para mantener el orden de las fechas
    partidas.forEach((partida, index) => {
        partida.fecha = fechas[indexFecha]; // Cambiar el nombre de la propiedad a "fecha"
        partida.auxiliar = indexAuxiliar; // Agregar la variable auxiliar
        indexFecha = (indexFecha + 1) % fechas.length;
        if (indexFecha === 0) {
            indexAuxiliar++; // Incrementar la variable auxiliar cuando cambia la fecha
        }
    });
}

// Función para mostrar las partidas en la tabla ordenadas por fecha y variable auxiliar
function mostrarPartidas() {
    const tbody = document.querySelector('#partidas tbody');
    tbody.innerHTML = '';

    // Ordenar las partidas por fecha y variable auxiliar
    const partidasOrdenadas = partidas.sort((a, b) => {
        if (a.fecha === b.fecha) {
            return a.auxiliar - b.auxiliar; // Ordenar por la variable auxiliar si las fechas son iguales
        } else {
            return a.fecha.localeCompare(b.fecha); // Ordenar por fecha si son diferentes
        }
    });

    partidasOrdenadas.forEach(partida => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${partida.fecha}</td> <!-- Cambiar "dia" a "fecha" -->
                        <td>${partida.jugadores.join(' vs ')}</td>`;
        tbody.appendChild(tr);
    });
}

// Objeto para almacenar partidas ganadas y puntos por cada jugador
let jugadoresInfo = {};

// Función para inicializar la información de los jugadores
function inicializarJugadoresInfo() {
    jugadores.forEach(jugador => {
        jugadoresInfo[jugador] = {
            partidasGanadas: 0,
            puntos: 0
        };
    });
}

// Función para actualizar los puntos y las partidas ganadas de los jugadores
function actualizarPuntos() {
    inicializarJugadoresInfo();
    
    // Define el número de partidas jugadas manualmente para cada jugador
    jugadoresInfo['Blancaneta'].partidasGanadas = 0;
    jugadoresInfo['Blancaneta'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Blancaneta'].partidasEmpatadas = 0;
    jugadoresInfo['Blancaneta'].partidasPerdidas = 0;

    jugadoresInfo['Tasoct'].partidasGanadas = 0;
    jugadoresInfo['Tasoct'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Tasoct'].partidasEmpatadas = 0;
    jugadoresInfo['Tasoct'].partidasPerdidas = 0;

    jugadoresInfo['Los Pitufos'].partidasGanadas = 0;
    jugadoresInfo['Los Pitufos'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Los Pitufos'].partidasEmpatadas = 0;
    jugadoresInfo['Los Pitufos'].partidasPerdidas = 0;

    jugadoresInfo['Mobilidad'].partidasGanadas = 0;
    jugadoresInfo['Mobilidad'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Mobilidad'].partidasEmpatadas = 0;
    jugadoresInfo['Mobilidad'].partidasPerdidas = 0;

    jugadoresInfo['Karasuno'].partidasGanadas = 0;
    jugadoresInfo['Karasuno'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Karasuno'].partidasEmpatadas = 0;
    jugadoresInfo['Karasuno'].partidasPerdidas = 0;

    jugadoresInfo['Sierracar'].partidasGanadas = 0;
    jugadoresInfo['Sierracar'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Sierracar'].partidasEmpatadas = 0;
    jugadoresInfo['Sierracar'].partidasPerdidas = 0;

    jugadoresInfo['Totitos VC'].partidasGanadas = 0;
    jugadoresInfo['Totitos VC'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Totitos VC'].partidasEmpatadas = 0;
    jugadoresInfo['Totitos VC'].partidasPerdidas = 0;

    jugadoresInfo['Radiopatio VC'].partidasGanadas = 0;
    jugadoresInfo['Radiopatio VC'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Radiopatio VC'].partidasEmpatadas = 0;
    jugadoresInfo['Radiopatio VC'].partidasPerdidas = 0;

    jugadoresInfo['Saoko'].partidasGanadas = 0;
    jugadoresInfo['Saoko'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Saoko'].partidasEmpatadas = 0;
    jugadoresInfo['Saoko'].partidasPerdidas = 0;
    
    jugadoresInfo['Cachuchos'].partidasGanadas = 0;
    jugadoresInfo['Cachuchos'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Cachuchos'].partidasEmpatadas = 0;
    jugadoresInfo['Cachuchos'].partidasPerdidas = 0;
    
    jugadoresInfo['Súbditos de Marguan'].partidasGanadas = 0;
    jugadoresInfo['Súbditos de Marguan'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Súbditos de Marguan'].partidasEmpatadas = 0;
    jugadoresInfo['Súbditos de Marguan'].partidasPerdidas = 0;
    
    // Calcula los puntos
    for (const jugador in jugadoresInfo) {
        jugadoresInfo[jugador].puntos = jugadoresInfo[jugador].partidasGanadas * 3; // Cada partida ganada suma 3 puntos
    }
    for (const jugador in jugadoresInfo) {
        jugadoresInfo[jugador].puntos = jugadoresInfo[jugador].partidasEmpatadas * 1; // Cada partida ganada suma 3 puntos
    }
    mostrarPuntos();
}


// Función para mostrar los puntos en la tabla
function mostrarPuntos() {
    const tbody = document.querySelector('#puntos tbody');
    tbody.innerHTML = '';

    // Ordenar los jugadores por puntos de mayor a menor
    const jugadoresOrdenados = Object.keys(jugadoresInfo).sort((a, b) => {
        return jugadoresInfo[b].puntos - jugadoresInfo[a].puntos; // Cambio en la dirección de ordenamiento
    });

    // Mostrar los puntos y las partidas jugadas en la tabla
    jugadoresOrdenados.forEach((jugador, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${jugador}</td>
                        <td>${jugadoresInfo[jugador].puntos}</td>
                        <td>${jugadoresInfo[jugador].partidasGanadas}</td>
                        <td>${jugadoresInfo[jugador].partidasEmpatadas}</td>
                        <td>${jugadoresInfo[jugador].partidasPerdidas}</td>
                        <td>${jugadoresInfo[jugador].partidasJugadas}</td>`;

        tbody.appendChild(tr);
        
        // Asignar la posición al jugador (index + 1 para que comience en 1 en lugar de 0)
        const posicion = index + 1;
        tr.dataset.posicion = posicion;

        // Aplicar color especial a los tres primeros jugadores
        if (posicion === 1) {
            tr.style.color = 'gold'; // Oro para el primero
        } else if (posicion === 2) {
            tr.style.color = 'silver'; // Plata para el segundo
        } else if (posicion === 3) {
            tr.style.color = '#cd7f32'; // Bronce para el tercero
        }
    });
}

// Función para mostrar los resultados de las partidas en la tabla de resultados
function agregarResultado(dia, enfrentamiento, ganador) {
    const tbody = document.querySelector('#resultados tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${dia}</td>
                    <td>${enfrentamiento}</td>
                    <td>${ganador}</td>`;
    tbody.appendChild(tr);
}  
// Resultados 

agregarResultado('...', '...', '...');






// Llamar a la función para generar las partidas al cargar la página
window.onload = function() {
    generarPartidas(); // Generar las partidas
    asignarDias(); // Asignar días a las partidas
    mostrarPartidas(); // Mostrar las partidas
    actualizarPuntos(); // Actualizar puntos al cargar la página
};