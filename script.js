// Datos de ejemplo para los jugadores
const jugadores = ['Blancaneta', 'Tasoct', 'Los Pitufos', 'Movilidad', 'Albacete', 'Sierracar', 'Real Bestias', 'Radiopatio VC', 'Saoko', 'Cachuchos','Súbditos de Marwan'];


// Array para almacenar las partidas
let partidaIdCounter = 0; // Contador para generar IDs únicos para las partidas
const partidas = [];

// Función para generar las partidas
function generarPartidas() {
    // Reiniciar el array de partidas
    partidas.length = 0;
    partidaIdCounter = 0; // Reiniciar el contador

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
                partidas.push({ id: partidaIdCounter++, dia: '', jugadores: [jugadores[i], jugadores[j]] });
                partidasEnDia++;

                if (partidasEnDia >= maxPartidasPorDia) {
                    partidasEnDia = 0; // Reiniciar el contador de partidas para el próximo día
                }
            }
        }
    }
}

// Función para asignar días a las partidas de manera aleatoria
function asignarDias(fechas) {
    // Verificar si las fechas ya están asignadas en el almacenamiento local
    const fechasAsignadas = JSON.parse(localStorage.getItem('fechasAsignadas')) || {};

    // Si no hay fechas asignadas en el almacenamiento local, asignarlas aleatoriamente
    if (Object.keys(fechasAsignadas).length === 0) {
        const fechasDisponibles = [...fechas]; // Copia de las fechas proporcionadas
        const partidasAleatorias = shuffleArray(partidas.slice()); // Barajar el orden de las partidas

        partidasAleatorias.forEach((partida, index) => {
            if (fechasDisponibles.length > 0) {
                // Seleccionar una fecha aleatoria de las fechas disponibles
                const randomIndex = Math.floor(Math.random() * fechasDisponibles.length);
                const fechaAsignada = fechasDisponibles[randomIndex];

                // Asignar la fecha aleatoria a la partida
                partida.fecha = fechaAsignada;
                fechasAsignadas[partida.id] = fechaAsignada;

                // Eliminar la fecha asignada de las fechas disponibles
                fechasDisponibles.splice(randomIndex, 1);
            } else {
                // Si no quedan fechas disponibles, asignar "por definir"
                partida.fecha = "por definir";
            }
        });
    } else {
        // Si las fechas ya están asignadas en el almacenamiento local, usarlas directamente
        partidas.forEach((partida, index) => {
            if (fechasAsignadas[partida.id]) {
                partida.fecha = fechasAsignadas[partida.id];
            } else {
                partida.fecha = "por definir";
            }
        });
    }

    // Almacenar las fechas asignadas en el almacenamiento local
    localStorage.setItem('fechasAsignadas', JSON.stringify(fechasAsignadas));
}

// Función para cambiar manualmente las fechas asignadas
function cambiarFechas(partidaId, nuevaFecha) {
    const fechasAsignadas = JSON.parse(localStorage.getItem('fechasAsignadas')) || {};
    fechasAsignadas[partidaId] = nuevaFecha;
    localStorage.setItem('fechasAsignadas', JSON.stringify(fechasAsignadas));

    // Actualizar la fecha de la partida en el array de partidas
    const partida = partidas.find(partida => partida.id === partidaId);
    if (partida) {
        partida.fecha = nuevaFecha;
    }
}



// Cambiar manualmente la fecha de una partida
cambiarFechas(0, '17 de abril');
cambiarFechas(39, '18 de abril');
cambiarFechas(46, '19 de abril');
cambiarFechas(43, '19 de abril');
cambiarFechas(20, '22 de abril');
cambiarFechas(53, '22 de abril');
cambiarFechas(4, '24 de abril');
cambiarFechas(32, '24 de abril');
cambiarFechas(7, '25 de abril');
cambiarFechas(48, '25 de abril');
cambiarFechas(34, '26 de abril');
cambiarFechas(10, '26 de abril');
cambiarFechas(50, '26 de abril');
cambiarFechas(25, '29 de abril');
cambiarFechas(13, '29 de abril');
cambiarFechas(36, '06 de mayo');
cambiarFechas(16, '06 de mayo');
cambiarFechas(28, '07 de mayo');
cambiarFechas(17, '07 de mayo');
cambiarFechas(22, '08 de mayo');
cambiarFechas(18, '08 de mayo');
cambiarFechas(3, '09 de mayo');
cambiarFechas(31, '09 de mayo');
cambiarFechas(2, '10 de mayo');
cambiarFechas(12, '10 de mayo');
cambiarFechas(54, '10 de mayo');
cambiarFechas(30, '13 de mayo');
cambiarFechas(42, '13 de mayo');
cambiarFechas(36, '14 de mayo');
cambiarFechas(40, '14 de mayo');
cambiarFechas(8, '15 de mayo');
cambiarFechas(21, '15 de mayo');
cambiarFechas(6, '16 de mayo');
cambiarFechas(24, '16 de mayo');
cambiarFechas(29, '17 de mayo');
cambiarFechas(49, '17 de mayo');
cambiarFechas(5, '17 de mayo');
cambiarFechas(51, '20 de mayo');
cambiarFechas(37, '20 de mayo');
cambiarFechas(14, '21 de mayo');
cambiarFechas(19, '21 de mayo');
cambiarFechas(52, '22 de mayo');
cambiarFechas(23, '22 de mayo');
cambiarFechas(6, '23 de mayo');
cambiarFechas(33, '23 de mayo');
cambiarFechas(35, '24 de mayo');
cambiarFechas(26, '24 de mayo');
cambiarFechas(11, '24 de mayo');

//cambiarFechas(55, 'por definir'); // no hay equipo 55, esta función sirve para quitar fecha a partidas





function mostrarPartidas() {
    const tbody = document.querySelector('#partidas tbody');
    tbody.innerHTML = '';

    // Crear un array de fechas únicas ordenadas cronológicamente
    const fechasUnicas = obtenerFechasUnicas();
    
    // Asignar posiciones a las fechas en el array de fechas únicas
    const fechaToPosicion = {};
    fechasUnicas.forEach((fecha, index) => {
        fechaToPosicion[fecha] = index;
    });

    // Ordenar las partidas por fecha y variable auxiliar
    const partidasOrdenadas = partidas.sort((a, b) => {
        const esPorDefinirA = a.fecha.includes('por definir');
        const esPorDefinirB = b.fecha.includes('por definir');

        if (esPorDefinirA && esPorDefinirB) {
            return 0; // Mantener el orden relativo si ambos contienen "por definir"
        } else if (esPorDefinirA) {
            return 1; // Ordenar a con "por definir" después de b sin "por definir"
        } else if (esPorDefinirB) {
            return -1; // Ordenar b con "por definir" después de a sin "por definir"
        } else {
            const contieneMayoA = a.fecha.includes('mayo');
            const contieneMayoB = b.fecha.includes('mayo');

            if (contieneMayoA && contieneMayoB) {
                // Ordenar de menor a mayor por día si ambos contienen "mayo"
                const diaA = parseInt(a.fecha.split(' ')[0]); // Obtener el día de la fecha A
                const diaB = parseInt(b.fecha.split(' ')[0]); // Obtener el día de la fecha B
                return diaA - diaB;
            } else if (contieneMayoA) {
                return 1; // Ordenar a con "mayo" después de b sin "mayo"
            } else if (contieneMayoB) {
                return -1; // Ordenar b con "mayo" después de a sin "mayo"
            } else {
                // Ordenar en orden normal por fecha si ninguno contiene "mayo"
                return a.fecha.localeCompare(b.fecha);
            }
        }
    });

    partidasOrdenadas.forEach(partida => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${partida.fecha}</td> <!-- Mantener el formato de fecha original -->
                        <td>${partida.jugadores.join(' vs ')}</td>`;
        tbody.appendChild(tr);
    });
}






// Función para obtener un array de fechas únicas ordenadas cronológicamente
function obtenerFechasUnicas() {
    const fechasSet = new Set();
    partidas.forEach(partida => {
        fechasSet.add(partida.fecha);
    });
    return Array.from(fechasSet).sort();
}

// Llamar a la función para mostrar las partidas
mostrarPartidas();



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
    jugadoresInfo['Blancaneta'].partidasGanadas = 1;
    jugadoresInfo['Blancaneta'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Blancaneta'].partidasEmpatadas = 0;
    jugadoresInfo['Blancaneta'].partidasPerdidas = 0;

    jugadoresInfo['Tasoct'].partidasGanadas = 0;
    jugadoresInfo['Tasoct'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Tasoct'].partidasEmpatadas = 0;
    jugadoresInfo['Tasoct'].partidasPerdidas = 1;

    jugadoresInfo['Los Pitufos'].partidasGanadas = 0;
    jugadoresInfo['Los Pitufos'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Los Pitufos'].partidasEmpatadas = 0;
    jugadoresInfo['Los Pitufos'].partidasPerdidas = 1;

    jugadoresInfo['Movilidad'].partidasGanadas = 0;
    jugadoresInfo['Movilidad'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Movilidad'].partidasEmpatadas = 0;
    jugadoresInfo['Movilidad'].partidasPerdidas = 0;

    jugadoresInfo['Albacete'].partidasGanadas = 2;
    jugadoresInfo['Albacete'].partidasJugadas = 2; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Albacete'].partidasEmpatadas = 0;
    jugadoresInfo['Albacete'].partidasPerdidas = 0;

    jugadoresInfo['Sierracar'].partidasGanadas = 1;
    jugadoresInfo['Sierracar'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Sierracar'].partidasEmpatadas = 0;
    jugadoresInfo['Sierracar'].partidasPerdidas = 0;

    jugadoresInfo['Real Bestias'].partidasGanadas = 1;
    jugadoresInfo['Real Bestias'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Real Bestias'].partidasEmpatadas = 0;
    jugadoresInfo['Real Bestias'].partidasPerdidas = 0;

    jugadoresInfo['Radiopatio VC'].partidasGanadas = 0;
    jugadoresInfo['Radiopatio VC'].partidasJugadas = 0; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Radiopatio VC'].partidasEmpatadas = 0;
    jugadoresInfo['Radiopatio VC'].partidasPerdidas = 0;

    jugadoresInfo['Saoko'].partidasGanadas = 0;
    jugadoresInfo['Saoko'].partidasJugadas = 2; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Saoko'].partidasEmpatadas = 0;
    jugadoresInfo['Saoko'].partidasPerdidas = 2;
    
    jugadoresInfo['Cachuchos'].partidasGanadas = 0;
    jugadoresInfo['Cachuchos'].partidasJugadas = 1; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Cachuchos'].partidasEmpatadas = 0;
    jugadoresInfo['Cachuchos'].partidasPerdidas = 1;
    
    jugadoresInfo['Súbditos de Marwan'].partidasGanadas = 1;
    jugadoresInfo['Súbditos de Marwan'].partidasJugadas = 2; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Súbditos de Marwan'].partidasEmpatadas = 0;
    jugadoresInfo['Súbditos de Marwan'].partidasPerdidas = 1;
    
    // Calcula los puntos
    for (const jugador in jugadoresInfo) {
        jugadoresInfo[jugador].puntos = jugadoresInfo[jugador].partidasGanadas * 3 + jugadoresInfo[jugador].partidasEmpatadas * 1; // Cada partida ganada suma 3 puntos y cada partida empatada suma 1 punto
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
            tr.style.color = '#c0c0c0'; // Plata para el segundo
        } else if (posicion === 3) {
            tr.style.color = '#cd853f'; // Bronce para el tercero
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

agregarResultado('17 de abril', 'Blancaneta vs Tasoct', 'Blancaneta');
agregarResultado('18 de abril', 'Albacete vs Súbditos de Marwan', 'Albacete');
agregarResultado('19 de abril', 'Sierracar vs Cachuchos', 'Sierracar');
agregarResultado('19 de abril', 'Real Bestias vs Saoko', 'Real Bestias');
agregarResultado('22 de abril', 'Los Pitufos vs Albacete', 'Albacete');
agregarResultado('22 de abril', 'Saoko vs Súbditos de Marwan', 'Súbditos de Marwan');





// Llamar a la función para generar las partidas al cargar la página
window.onload = function() {
    generarPartidas(); // Generar las partidas
    asignarDias(); // Asignar días a las partidas
    mostrarPartidas(); // Mostrar las partidas
    actualizarPuntos(); // Actualizar puntos al cargar la página
};