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

    // Añadir las partidas manualmente con sus fechas
    agregarPartida('17 de abril', 'Blancaneta', 'Tasoct');
    agregarPartida('18 de abril', 'Albacete', 'Súbditos de marwan');
    agregarPartida('19 de abril', 'Sierracar', 'Real Bestias');
    agregarPartida('19 de abril', 'Sierracar', 'Cachuchos');
    agregarPartida('22 de abril', 'Los pitufos', 'Albacete');
    agregarPartida('22 de abril', 'Cachuchos', 'Súbditos de marwan');
    agregarPartida('24 de abril', 'Blancaneta', 'Los Pitufos');
    agregarPartida('24 de abril', 'Movilidad', 'Cachuchos');
    agregarPartida('25 de abril', 'Blancaneta', 'Saoko');
    agregarPartida('25 de abril', 'Los pitufos', 'Real Bestias');
    agregarPartida('26 de abril', 'Albacete', 'Sierracar');
    agregarPartida('26 de abril', 'Radiopatio vc', 'Saoko');
    agregarPartida('26 de abril', 'Radiopatio vc', 'Cachuchos');
    agregarPartida('29 de abril', 'Los pitufos', 'Cachuchos');
    agregarPartida('29 de abril', 'Tasoct', 'Saoko');
    agregarPartida('06 de mayo', 'Blancaneta', 'Albacete');
    agregarPartida('06 de mayo', 'Tasoct', 'Sierracar');
    agregarPartida('07 de mayo', 'Movilidad', 'Sierracar');
    agregarPartida('07 de mayo', 'Tasoct', 'Cachuchos');
    agregarPartida('08 de mayo', 'Real Bestias', 'Súbditos de marwan');
    agregarPartida('08 de mayo', 'Albacete', 'Radiopatio vc');
    agregarPartida('09 de mayo', 'Cachuchos', 'Súbditos de marwan');
    agregarPartida('09 de mayo', 'Blancaneta', 'Movilidad');
    agregarPartida('10 de mayo', 'Los pitufos', 'Movilidad');
    agregarPartida('10 de mayo', 'Tasoct', 'Albacete');
    agregarPartida('10 de mayo', 'Tasoct', 'Súbditos de marwan');
    agregarPartida('13 de mayo', 'Movilidad', 'Saoko');
    agregarPartida('13 de mayo', 'Albacete', 'Radiopatio vc');
    agregarPartida('14 de mayo', 'Sierracar', 'Radiopatio vc');
    agregarPartida('14 de mayo', 'Sierracar', 'Real Bestias');
    agregarPartida('15 de mayo', 'Blancaneta', 'Real Bestias');
    agregarPartida('15 de mayo', 'Sierracar', 'Súbditos de marwan');
    agregarPartida('16 de mayo', 'Blancaneta', 'Radiopatio vc');
    agregarPartida('16 de mayo', 'Los pitufos', 'Saoko');
    agregarPartida('17 de mayo', 'Movilidad', 'Real Bestias');
    agregarPartida('17 de mayo', 'Tasoct', 'Los pitufos');
    agregarPartida('17 de mayo', 'Blancaneta', 'Cachuchos');
    agregarPartida('20 de mayo', 'Radiopatio vc', 'Súbditos de marwan');
    agregarPartida('20 de mayo', 'Albacete', 'Saoko');
    agregarPartida('21 de mayo', 'Saoko', 'Cachuchos');
    agregarPartida('21 de mayo', 'Movilidad', 'Radiopatio vc');
    agregarPartida('22 de mayo', 'Tasoct', 'Real Bestias');
    agregarPartida('22 de mayo', 'Sierracar', 'Saoko');
    agregarPartida('23 de mayo', 'Blancaneta', 'Radiopatio vc');
    agregarPartida('23 de mayo', 'Movilidad', 'Súbditos de marwan');
    agregarPartida('24 de mayo', 'Albacete', 'Real Bestias');
    agregarPartida('24 de mayo', 'Los pitufos', 'Súbditos de marwan');
    agregarPartida('24 de mayo', 'Tasoct', 'Movilidad');
    
    
    // Continuar con las demás partidas

    // Mostrar las partidas después de generarlas
    mostrarPartidas();
    actualizarPuntos();
}

// Función para agregar una partida manualmente
function agregarPartida(fecha, jugador1, jugador2) {
    partidas.push({ id: partidaIdCounter++, fecha: fecha, jugadores: [jugador1, jugador2] });
}

// Función para mostrar las partidas
function mostrarPartidas() {
    const tbody = document.querySelector('#partidas tbody');
    tbody.innerHTML = '';

    // No es necesario ordenar las partidas por fecha

    partidas.forEach(partida => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${partida.fecha}</td> <!-- Mantener el formato de fecha original -->
                        <td>${partida.jugadores.join(' vs ')}</td>`;
        tbody.appendChild(tr);
    });
}


// Llamar a la función para generar las partidas al cargar la página
window.onload = function() {
    generarPartidas(); // Generar las partidas
};



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
    jugadoresInfo['Blancaneta'].partidasGanadas = 4;
    jugadoresInfo['Blancaneta'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Blancaneta'].partidasEmpatadas = 0;
    jugadoresInfo['Blancaneta'].partidasPerdidas = 1;

    jugadoresInfo['Tasoct'].partidasGanadas = 1;
    jugadoresInfo['Tasoct'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Tasoct'].partidasEmpatadas = 1;
    jugadoresInfo['Tasoct'].partidasPerdidas = 3;

    jugadoresInfo['Los Pitufos'].partidasGanadas = 1;
    jugadoresInfo['Los Pitufos'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Los Pitufos'].partidasEmpatadas = 0;
    jugadoresInfo['Los Pitufos'].partidasPerdidas = 4;

    jugadoresInfo['Movilidad'].partidasGanadas = 1;
    jugadoresInfo['Movilidad'].partidasJugadas = 4; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Movilidad'].partidasEmpatadas = 0;
    jugadoresInfo['Movilidad'].partidasPerdidas = 3;

    jugadoresInfo['Albacete'].partidasGanadas = 2;
    jugadoresInfo['Albacete'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Albacete'].partidasEmpatadas = 1;
    jugadoresInfo['Albacete'].partidasPerdidas = 2;

    jugadoresInfo['Sierracar'].partidasGanadas = 4;
    jugadoresInfo['Sierracar'].partidasJugadas = 4; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Sierracar'].partidasEmpatadas = 0;
    jugadoresInfo['Sierracar'].partidasPerdidas = 0;

    jugadoresInfo['Real Bestias'].partidasGanadas = 2;
    jugadoresInfo['Real Bestias'].partidasJugadas = 3; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Real Bestias'].partidasEmpatadas = 1;
    jugadoresInfo['Real Bestias'].partidasPerdidas = 0;

    jugadoresInfo['Radiopatio VC'].partidasGanadas = 0;
    jugadoresInfo['Radiopatio VC'].partidasJugadas = 3; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Radiopatio VC'].partidasEmpatadas = 1;
    jugadoresInfo['Radiopatio VC'].partidasPerdidas = 2;

    jugadoresInfo['Saoko'].partidasGanadas = 1;
    jugadoresInfo['Saoko'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Saoko'].partidasEmpatadas = 0;
    jugadoresInfo['Saoko'].partidasPerdidas = 4;
    
    jugadoresInfo['Cachuchos'].partidasGanadas = 5;
    jugadoresInfo['Cachuchos'].partidasJugadas = 6; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Cachuchos'].partidasEmpatadas = 0;
    jugadoresInfo['Cachuchos'].partidasPerdidas = 1;
    
    jugadoresInfo['Súbditos de Marwan'].partidasGanadas = 1;
    jugadoresInfo['Súbditos de Marwan'].partidasJugadas = 5; // Añade el número de partidas jugadas manualmente
    jugadoresInfo['Súbditos de Marwan'].partidasEmpatadas = 2;
    jugadoresInfo['Súbditos de Marwan'].partidasPerdidas = 2;
    
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
agregarResultado('24 de abril', 'Blancaneta vs Los Pitufos', 'Blancaneta');
agregarResultado('24 de abril', 'Movilidad vs Cachuchos', 'Cachuchos');
agregarResultado('25 de abril', 'Blancaneta vs Saoko', 'Blancaneta');
agregarResultado('25 de abril', 'Los pitufos vs Real Bestias', 'Real Bestias');
agregarResultado('26 de abril', 'Radiopatio vc vs Saoko', 'Saoko');
agregarResultado('26 de abril', 'Albacete vs Sierracar', 'Sierracar');
agregarResultado('26 de abril', 'Radiopatio vc vs Cachuchos', 'Cachuchos');
agregarResultado('29 de abril', 'Tasoct vs Saoko', 'Tasoct');
agregarResultado('29 de abril', 'Los pitufos vs Cachuchos', 'Cachuchos');
agregarResultado('6 de mayo', 'Blancaneta vs Albacete', 'Blancaneta');
agregarResultado('6 de mayo', 'Tasoct vs Sierracar', 'Sierracar');
agregarResultado('7 de mayo', 'Movilidad vs Sierracar', 'Sierracar');
agregarResultado('7 de mayo', 'Tasoct vs Cachuchos', 'Cachuchos');

agregarResultado('8 de mayo', 'Real Bestias vs Súbditos de marwan', 'Cancelada');
agregarResultado('8 de mayo', ' Albacete vs Radiopatio vc', 'Cancelada');

agregarResultado('9 de mayo', ' Cachuchos vs Súbditos de marwan', 'Cachuchos');
agregarResultado('9 de mayo', ' Blancaneta vs Movilidad', 'Movilidad');

agregarResultado('10 de mayo', ' Los pitufos vs Movilidad', 'Los pitufos');
agregarResultado('10 de mayo', ' Tasoct vs Albacete', 'Tasoct');
agregarResultado('10 de mayo', ' Tasoct vs Súbditos de marwan', 'Cancelada');


// Llamar a la función para generar las partidas al cargar la página
window.onload = function() {
    generarPartidas(); // Generar las partidas
    asignarDias(); // Asignar días a las partidas
    mostrarPartidas(); // Mostrar las partidas
    actualizarPuntos(); // Actualizar puntos al cargar la página
};
