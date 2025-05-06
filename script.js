document.addEventListener('DOMContentLoaded', function() {
    const paisesListaDiv = document.getElementById('paises-lista');
    const searchInput = document.getElementById('searchInput');
    let paisesData = [
        {
            nombre: "Venezuela",
            bandera: "Flag_of_Venezuela.svg.png", // Reemplaza con la ruta correcta
            descripcion: "Un país sudamericano en la costa caribeña con una geografía diversa marcada por selvas tropicales, las montañas de los Andes y la costa atlántica."
        },
        {
            nombre: "Colombia",
            bandera: "Flag_of_Colombia.png", // Reemplaza con la ruta correcta
            descripcion: "Un país en el extremo norte de América del Sur, con paisajes que abarcan la selva amazónica, las tierras altas de los Andes y la costa caribeña."
        },
        {
            nombre: "Argentina",
            bandera: "Flag_of_Argentina.png", // Reemplaza con la ruta correcta
            descripcion: "Un vasto país sudamericano con terrenos variados que incluyen los picos andinos, lagos glaciares y las llanuras de las Pampas, hogar del tradicional gaucho."
        },
        {
            nombre: "Brasil",
            bandera: "Flag_of_Brazil.svg.png", // Reemplaza con la ruta correcta
            descripcion: "Un vasto país sudamericano que se extiende desde la cuenca del Amazonas en el norte hasta los viñedos y las enormes Cataratas del Iguazú en el sur."
        },
        {
            nombre: "Chile",
            bandera: "descarga.png", // Reemplaza con la ruta correcta
            descripcion: "Chile es un país diverso y dinámico, con una historia rica, una economía próspera y una cultura vibrante. ."
        },
        {
            nombre: "Uruguay",
            bandera: "Bandera_Uruguay_2018.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país democrático en el sureste de Sudamérica, conocido por su alto desarrollo humano y su estatus como el país más democrático de América Latina ."
        },
        {
            nombre: "Panama",
            bandera: "Flag_of_Panama.svg.png", // Reemplaza con la ruta correcta
            descripcion: "famoso por su posición geográfica estratégica en el Istmo de Panamá, que conecta América del Norte con América del Sur. ."
        },
        {
            nombre: "Estados Unidos",
            bandera: "Flag_of_the_United_States.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país diverso con una gran economía, líder en tecnología y con una población multicultural ."
        },
        {
            nombre: "Canada",
            bandera: "Flag_of_Canada.png", // Reemplaza con la ruta correcta
            descripcion: "Es una nación diversa, tolerante, pacífica y acogedora, conocida por su naturaleza y su impresionante belleza natural."
        },
        {
            nombre: "España",
            bandera: "Bandera_nacional_de_España.png", // Reemplaza con la ruta correcta
            descripcion: "es un país en el suroeste de Europa, con una rica historia, diversidad cultural, y una economía dinámica. Es una monarquía parlamentaria y un estado social de derecho. El país se caracteriza por su geografía variada, desde montañas hasta playas, y su clima que varía según la región. ."
        },
        {
            nombre: "Ecuador",
            bandera: "1200px-Flag_of_Ecuador.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país sudamericano conocido por su diversidad geográfica y cultural, así como por ser un importante centro de biodiversidad. Ubicado en la línea ecuatorial, su territorio abarca desde la costa del Pacífico hasta la Amazonia, pasando por la Cordillera de los Andes.  ."
        },
        {
            nombre: "China",
            bandera: "Flag_of_China.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país asiático de gran extensión y población, con una rica historia y cultura. Es la segunda potencia económica del mundo, con una economía de rápido crecimiento y una fuerte influencia global."
        },
        {
            nombre: "Japon",
            bandera: "png-clipart-flag-of-japan-empire-of-japan-half-life-s-flag-text.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país insular en el este de Asia, conocido por su cultura rica y diversa, su geografía montañosa y su sociedad altamente organizada. El país se caracteriza por una fuerte tradición, alta tecnología, una economía próspera y una población densa ."
        },
        {
            nombre: "Francia",
            bandera: "Flag_of_France.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país ubicado en Europa Occidental, miembro de la Unión Europea, con una capital en París. Es un país con una rica historia, cultura y tradición, y es conocido por su gastronomía, moda, arte y arquitectura.  ."
        },
        {
            nombre: "Italia",
            bandera: "Flag_of_Italy.svg.png", // Reemplaza con la ruta correcta
            descripcion: "Es una nación soberana en el sur de Europa con una rica historia y cultura. Se caracteriza por su forma de bota, una península que se adentra en el mar Mediterráneo. Es una república parlamentaria con una economía desarrollada y un importante papel en la Unión Europea y el mundo."
        },
        {
            nombre: "Rusia",
            bandera: "Flag_of_Russia.svg.png", // Reemplaza con la ruta correcta
            descripcion: "Es el país más grande del mundo, con una extensión de 17,098,242 km². Se encuentra en Europa Oriental y Asia del Norte, abarcando once zonas horarias. Es un país con una gran variedad de paisajes, desde llanuras y mesetas hasta montañas y bosques."
        },
        {
            nombre: "Portugal",
            bandera: "bandera-portugal-1-6600_thumb_588x506.png", // Reemplaza con la ruta correcta
            descripcion: "es un país del sur de Europa, fundado en 1143, que ocupa una superficie de 92.212 km². Con una población de 10.344.802 habitantes en 2021, su capital es Lisboa. Portugal es una república semipresidencialista con un primer ministro y un presidente.  ."
        },
        {
            nombre: "Australia",
            bandera: "Flag_of_Australia_(converted).svg.png", // Reemplaza con la ruta correcta
            descripcion: "Es el sexto país más grande del mundo, conocido por su rica cultura, paisajes espectaculares y una fauna única. Es una nación estable y democrática con una economía de alto rendimiento. Su población se concentra principalmente en las grandes ciudades costeras de la costa este.  ."
        },
        {
            nombre: "Paraguay",
            bandera: "Bandera_de_Paraguay.png", // Reemplaza con la ruta correcta
            descripcion: " es un país sin salida al mar en el corazón de Sudamérica, conocido por su rica cultura bilingüe (castellano y guaraní) y su economía diversificada que incluye agricultura, servicios e industria. Es una república presidencialista y miembro de Mercosur y Unasur, con una población que ha experimentado un crecimiento urbano significativo. ."
        },
        {
            nombre: "Alemania",
            bandera: "Flag_of_Germany.svg.png", // Reemplaza con la ruta correcta
            descripcion: "es un país europeo con una economía muy desarrollada, rica en cultura e historia, y conocido por su alta calidad de vida. Es una república federal democrática con una sociedad diversa y tolerante, donde la libertad de culto y pensamiento son altamente valoradas."
        },
        {
            nombre: "Holanda",
            bandera: "Flag_of_the_Netherlands.svg.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país de Europa Occidental conocido por su sistema de diques, canales y molinos de viento, su cultura de tolerancia, y su economía moderna. Es una monarquía constitucional parlamentaria con Ámsterdam como capital y La Haya como sede del gobierno."
        },
        {
            nombre: "India",
            bandera: "Flag_of_India.png", // Reemplaza con la ruta correcta
            descripcion: "Es la nación más poblada del mundo y la séptima más grande en superficie. Se caracteriza por su gran diversidad cultural, religiosa y geográfica, desde las montañas del Himalaya hasta las selvas tropicales. Posee una economía en crecimiento y una influencia importante en la escena global."
        },
        {
            nombre: "Mexico",
            bandera: "Bandera_de_México_(1857-1864,_1867-1880).png", // Reemplaza con la ruta correcta
            descripcion: "es un país vasto y diverso con una rica historia, cultura vibrante y una economía en desarrollo. Se encuentra en América del Norte, con una extensión territorial de 1,964,375 km², siendo el decimotercer país más extenso del mundo. Es una república representativa, democrática, federal y laica, con 32 entidades federativas."
        },
        {
            nombre: "El Salvador",
            bandera: "Flag_of_El_Salvador.svg.png", // Reemplaza con la ruta correcta
            descripcion: "es un país pequeño en Centroamérica, conocido como . Se encuentra entre Guatemala y Honduras al norte, y el Océano Pacífico al sur. Es un país montañoso y volcánico, con una cadena de volcanes que cruza de este a oeste. Su clima es cálido y húmedo en las costas y tierras bajas, y templado en las alturas del interior. ."
        },
        {
            nombre: "Haiti",
            bandera: "Flag_of_Haiti_(alternative_version).svg.png", // Reemplaza con la ruta correcta
            descripcion: "es un país ubicado en la isla La Española, en la parte occidental, y comparte frontera con la República Dominicana. Su capital es Puerto Príncipe, y es el país caribeño más poblado con más de 11 millones de habitantes. Haití es conocida por su rica cultura mestiza, su historia de resistencia y su vulnerable situación económica, siendo el país más pobre de América Latina y el Caribe."
        },
        {
            nombre: "Honduras",
            bandera: "Flag_of_Honduras_(1949–2022).svg.png", // Reemplaza con la ruta correcta
            descripcion: "Es un país centroamericano con una gran diversidad cultural y natural. Su nombre oficial es República de Honduras y se encuentra ubicada en el centro del istmo centroamericano, limitando con Guatemala, El Salvador, Nicaragua y los océanos Atlántico y Pacífico. ."
        },
        {
            nombre: "Egipto",
            bandera: "Flag_of_Egypt.svg.png", // Reemplaza con la ruta correcta
            descripcion: "es un país transcontinental ubicado en el noreste de África y parte del Medio Oriente. Su capital es El Cairo. Es conocido por su rica historia, con monumentos como las Pirámides de Giza y la Esfinge. Egipto tiene costas en el mar Mediterráneo y el mar Rojo, y limita con Libia, Sudán, Israel y la Franja de Gaza. ."
        },
        {
            nombre: "Hungria",
            bandera: "Flag_of_Hungary.png", // Reemplaza con la ruta correcta
            descripcion: "es un país sin litoral en Europa Central, conocido por su rica historia, cultura y paisajes diversos. Su capital es Budapest, y el idioma oficial es el húngaro. El país es miembro de la Unión Europea y la OTAN."
        },
        {
            nombre: "Afganistan",
            bandera: "Flag_of_Afghanistan_(2002–2004).svg.png", // Reemplaza con la ruta correcta
            descripcion: "es un país sin salida al mar situado en Asia Central, conocido por su compleja historia y sus desafiantes condiciones sociales y políticas. Es un país montañoso con una rica diversidad cultural, influenciado por el Islam, pero también por el budismo y el zoroastrismo en menor medida."
        },
        // Agrega más países aquí con sus datos (nombre, ruta de la bandera, descripción)
    ];
    
    function mostrarPaises(paises) {
        paisesListaDiv.innerHTML = ''; // Limpiar la lista anterior
        paises.forEach(pais => {
            const paisItem = document.createElement('div');
            paisItem.classList.add('pais-item');

            const banderaImg = document.createElement('img');
            banderaImg.src = pais.bandera;
            banderaImg.alt = `Bandera de ${pais.nombre}`;
            banderaImg.classList.add('bandera');

            const infoPaisDiv = document.createElement('div');
            infoPaisDiv.classList.add('info-pais');

            const nombrePaisH3 = document.createElement('h3');
            nombrePaisH3.classList.add('nombre-pais');
            nombrePaisH3.textContent = pais.nombre;

            const descripcionPaisP = document.createElement('p');
            descripcionPaisP.classList.add('descripcion-pais');
            descripcionPaisP.textContent = pais.descripcion;

            infoPaisDiv.appendChild(nombrePaisH3);
            infoPaisDiv.appendChild(descripcionPaisP);

            paisItem.appendChild(banderaImg);
            paisItem.appendChild(infoPaisDiv);

            paisesListaDiv.appendChild(paisItem);
        });
    }

    function filtrarPaises(searchText) {
        const textoBusqueda = searchText.toLowerCase();
        const paisesFiltrados = paisesData.filter(pais => {
            return pais.nombre.toLowerCase().includes(textoBusqueda);
        });
        mostrarPaises(paisesFiltrados);
    }

    searchInput.addEventListener('input', function() {
        filtrarPaises(this.value);
    });

    // Mostrar todos los países al cargar la página
    mostrarPaises(paisesData);
});