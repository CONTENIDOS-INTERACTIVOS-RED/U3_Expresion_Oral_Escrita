export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'La comunicación escrita efectiva',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normas fundamentales de la escritura académica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ortografía acentual, puntual y literal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Pautas esenciales para la redacción de textos en el ámbito académico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso de conectores lógicos y estructura de los párrafos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Construcción y tipología de textos académicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Tipologías textuales y su relación con el perfil del licenciado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estructura y recursos para la producción de diferentes tipos de textos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Redacción clara, cohesión y coherencia en la escritura profesional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Camps, A., & Castelló, M. (2013). La escritura académica en la universidad. Revista de Docencia Universitaria, 11(1), 17-36. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/4243793 ',
    },
    {
      referencia:
        'Muñoz, I., & Ballano Olano, I. (2015). Escribir en el contexto académico. Publicaciones de la Universidad de Deusto',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/42748 ',
    },
    {
      referencia:
        'Prina, ZE (2010). Los distintos tipos textuales y su aplicación en el aula. MV Ediciones SRL ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/36473',
    },
    {
      referencia:
        'Vega-Cocha, DP, Vásquez-Chicaiza, FP y Alcaciega-Ochoa, LJ (2024). Conectores para estructurar textos en base a la lógica. Revista científica MQRInvestigar, 8(4), 7359-7376. ',
      link: 'https://doi.org/10.56048/MQR20225.8.4.2024.7359-7376',
    },
    {
      referencia: 'Autores Varios. (2023). APA 7 para principiantes. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/APA7 ',
    },
  ],
  glosario: [
    {
      termino: 'APA',
      significado:
        'Normas de la Asociación Americana de Psicología para la escritura académica.',
    },
    {
      termino: 'Artículo de opinión',
      significado:
        'escrito en el que se expone y argumenta una postura sobre un tema.',
    },
    {
      termino: 'Citación',
      significado:
        'referencia a fuentes utilizadas en la redacción de un texto.',
    },
    {
      termino: 'Coherencia',
      significado:
        'organización de ideas de manera clara y ordenada en un escrito.',
    },
    {
      termino: 'Cohesión',
      significado:
        'relación lógica entre las partes de un texto para asegurar su comprensión.',
    },
    {
      termino: 'Informe',
      significado:
        'documento que presenta resultados de una investigación o análisis.',
    },
    {
      termino: 'Parafraseo',
      significado: 'expresión de ideas de otro autor con palabras propias.',
    },
    {
      termino: 'Plagio',
      significado:
        'uso no autorizado de ideas o textos sin dar crédito a su autor.',
    },
    {
      termino: 'Referencias',
      significado: 'lista de fuentes citadas en un documento académico.',
    },
    {
      termino: 'Relatoría',
      significado:
        'texto que describe y analiza un evento académico o conferencia.',
    },
    {
      termino: 'Resumen',
      significado: 'síntesis de la información principal de un texto.',
    },
  ],
}
