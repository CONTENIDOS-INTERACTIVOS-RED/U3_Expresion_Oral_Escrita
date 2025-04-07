<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Construcción y tipología de textos académicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La construcción de textos académicos implica la aplicación de normas y convenciones que garantizan la calidad del contenido. Factores como la coherencia, cohesión, precisión y el uso adecuado de fuentes bibliográficas son fundamentales para desarrollar una escritura eficaz. 
    
    p.mb-4 La adecuada distribución de los párrafos y la integración de conectores adecuados facilitan la progresión del discurso, evitando repeticiones innecesarias y garantizando una presentación lógica de las ideas (Prina, 2010). En este sentido, la enseñanza de estrategias para la estructuración de párrafos y el uso de conectores es clave para el desarrollo de habilidades de escritura académica en los estudiantes universitarios.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En este sentido, la tipología textual juega un papel determinante, ya que define la estructura y función de cada tipo de documento. Los textos expositivos, argumentativos, descriptivos y narrativos son las principales categorías utilizadas en el ámbito académico, y cada una de ellas posee características lingüísticas y estructurales particulares que deben ser manejadas con destreza por los licenciados en formación (Muñoz & Ballano Olano, 2015).
        p.mb-5(data-aos="fade-left") La relación entre la tipología textual y el perfil del licenciado es un aspecto clave en el desarrollo profesional. Los licenciados, independientemente de su área de especialización, deben ser capaces de producir textos adecuados a cada contexto, ya sea para la divulgación de conocimientos, la redacción de informes o la elaboración de documentos científicos. 

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0  Por ejemplo, en la investigación académica, es indispensable manejar con precisión la estructura de los artículos científicos y las monografías, mientras que en el ámbito administrativo se requieren habilidades para la elaboración de informes y proyectos con un lenguaje técnico y objetivo (Prina, 2010).

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipologías textuales y su relación con el perfil del licenciado
    
    p.mb-4 En el ámbito académico, la producción escrita es un componente fundamental del proceso de enseñanza-aprendizaje. La correcta identificación y aplicación de las tipologías textuales es crucial para la formación del licenciado, ya que cada tipo de texto responde a propósitos comunicativos específicos y demanda un conjunto particular de habilidades lingüísticas y argumentativas (Prina, 2010). La relación entre la tipología textual y el perfil del licenciado radica en la capacidad de este último para emplear el tipo de texto adecuado según el contexto disciplinario y profesional en el que se desempeñe. A continuación, se presentarán las principales tipologías textuales y sus aplicaciones más comunes:

    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left").mb-4.text-white Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Tipologías textuales"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    h2(data-aos="fade-left") Relación entre la tipología textual y el perfil del licenciado
    p.mb-5 El perfil del licenciado se define por el conjunto de competencias que adquiere durante su formación universitaria. La habilidad para producir textos académicos adecuados a cada situación comunicativa es una competencia esencial que le permitirá participar en la generación y divulgación de conocimiento dentro de su disciplina (Camps & Castelló, 2013). A continuación, se presentan algunos ejemplos de cómo las tipologías textuales se relacionan con el desarrollo profesional del licenciado:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo='Investigación y producción científica') La redacción de artículos científicos, informes de investigación y monografías requiere el dominio de la estructura expositiva y argumentativa. La precisión en la redacción y la capacidad de argumentar con base en evidencia empírica son esenciales para la producción académica rigurosa.
          p(numero="2" titulo='Elaboración de informes y documentos administrativos') En el ejercicio profesional, el licenciado debe redactar informes técnicos, propuestas de proyectos y evaluaciones institucionales, los cuales requieren una estructura clara y objetiva propia de los textos expositivos.
          p(numero="3" titulo='Divulgación del conocimiento') La capacidad de adaptar la información académica a formatos más accesibles, como artículos de divulgación o materiales educativos, es fundamental para transmitir conocimientos a públicos no especializados. En este contexto, el uso de textos descriptivos y narrativos resulta especialmente útil.
    
    h2(data-aos="fade-left") Estrategias para la construcción de textos académicos según su tipología
    p.mb-5 Para la adecuada producción de textos en el ámbito académico, es importante desarrollar estrategias que permitan mejorar la coherencia, cohesión y claridad de la escritura. Algunas estrategias clave incluyen:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="95.5%" numero="+")
                h5 Identificación del propósito comunicativo
                p Antes de redactar, es fundamental definir el objetivo del texto y seleccionar la tipología más adecuada.
    
              .bg-color-white.box-shadow.p-3(x="37%" y="95.5%" numero="+")
                h5 Estructuración adecuada
                p Cada tipo de texto posee una organización específica. Los textos argumentativos requieren una introducción, desarrollo y conclusión bien definidos, mientras que los expositivos siguen una secuencia lógica y estructurada.
    
              .bg-color-white.box-shadow.p-3(x="63%" y="95.5%" numero="+")
                h5 Uso de conectores lógicos
                p Permiten relacionar ideas y asegurar la cohesión del texto. Según el tipo de discurso, los conectores pueden enfatizar causa-efecto, contraste, adición de información o conclusión.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="95.5%" numero="+")
                h5 Revisión y edición
                p La corrección de errores gramaticales, sintácticos y ortográficos es clave para garantizar la calidad del texto. Se recomienda la revisión por pares para obtener retroalimentación.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En síntesis, la tipología textual es un componente esencial en la formación del licenciado, ya que influye en su capacidad para comunicar ideas de manera efectiva dentro del ámbito académico y profesional. La adquisición de habilidades de escritura adecuadas a cada tipo de texto fortalece el perfil del licenciado, permitiéndole desenvolverse con éxito en diversos contextos disciplinares y laborales (Muñoz & Ballano Olano, 2015).
    

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estructura y recursos para la producción de diferentes tipos de textos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") El desarrollo de textos académicos requiere la aplicación de estructuras claras y el uso adecuado de recursos lingüísticos que permitan expresar ideas de manera lógica y argumentada. Cada tipo de texto tiene características particulares que deben ser respetadas para garantizar su coherencia y cohesión. En este sentido, comprender la estructura de cada tipología textual y los recursos disponibles es esencial para una producción escrita eficaz en el ámbito universitario y profesional (Prina, 2010).
        h2(data-aos="fade-left") Estructura general de los textos académicos
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Los textos académicos suelen seguir una estructura común que facilita la organización del contenido y la comprensión del lector. A continuación, se describen los principales componentes de un texto académico:
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Introducción
              p.mb-0.text-center Presenta el tema, su relevancia y el propósito del texto. Debe incluir una contextualización del problema, la justificación del estudio y una síntesis de los puntos a tratar.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Desarrollo
              p.mb-0.text-center Constituye el cuerpo principal del texto, donde se expone la información de manera organizada y argumentativa. Aquí se utilizan datos, referencias bibliográficas y análisis críticos para respaldar la exposición.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Conclusión
              p.mb-0.text-center Resume los hallazgos más relevantes, refuerza la postura presentada y puede incluir recomendaciones o sugerencias para futuras investigaciones.
    
        p.mb-4 Los recursos lingüísticos para la producción de textos académicos son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Conectores lógicos
              p Facilitan la cohesión textual y permiten establecer relaciones entre ideas (Vega-Cocha, Vásquez-Chicaiza & Alcaciega-Ochoa, 2024).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Marcadores discursivos
              p Ayudan a estructurar el texto y guiar al lector a través del contenido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11-1.png")
            .col-lg-7
              h5 Citación y referencia bibliográfica
              p El uso de fuentes confiables es clave para respaldar los argumentos y evitar el plagio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Lenguaje formal y técnico
              p Se debe emplear un lenguaje preciso, evitando coloquialismos y expresiones ambiguas.

    h2(data-aos="fade-left") Particularidades estructurales según el tipo de texto
    p.mb-5 Cada tipología textual presenta una estructura específica que responde a su función comunicativa. A continuación, se describen algunas de las más utilizadas en el ámbito académico:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo='Ensayo académico') Se compone de una introducción con una tesis central, un desarrollo con argumentos fundamentados y una conclusión reflexiva.
          p(numero="2" titulo='Informe de investigación') Incluye secciones como resumen, introducción, metodología, resultados, discusión y conclusiones.
          p(numero="3" titulo='Artículo científico') Sigue una estructura similar a la del informe de investigación, con énfasis en la presentación clara de hallazgos y evidencia empírica.
          p(numero="4" titulo='Reseña crítica') Contiene una descripción y análisis de un texto o documento, evaluando sus aportes y limitaciones.
    
    h2(data-aos="fade-left") Estrategias para mejorar la producción escrita en textos académicos
    p.mb-5 Para garantizar la calidad de los textos académicos, es recomendable aplicar diversas estrategias de escritura:

    .bg-full-width.bg-h85-6
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color.mt-5
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Planificación:</b> elaborar un esquema previo ayuda a organizar ideas de manera lógica.  
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Revisión y edición:</b> la corrección gramatical y estilística es fundamental para mejorar la claridad del texto. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Uso de ejemplos y evidencias:</b> argumentar con datos concretos refuerza la credibilidad del escrito.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Lectura crítica:</b> revisar textos de referencia permite identificar buenas prácticas en la escritura académica.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En conclusión, la estructura y los recursos empleados en la producción de textos académicos son fundamentales para asegurar la coherencia, cohesión y calidad de la información expuesta. Dominar estos aspectos permite a los estudiantes y profesionales comunicar sus ideas de manera efectiva en el ámbito universitario y científico (Muñoz & Ballano Olano, 2015).

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Redacción clara, cohesión y coherencia en la escritura profesional
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") La redacción en el ámbito profesional debe ser clara, precisa y estructurada, permitiendo la comunicación efectiva de ideas y argumentos. La claridad en la escritura evita malentendidos y facilita la comprensión del mensaje, mientras que la cohesión y la coherencia garantizan que las ideas se presenten de manera ordenada y fluida. Dominar estos aspectos es esencial para la producción de documentos académicos, informes, propuestas y otros textos utilizados en el ámbito profesional (Prina, 2010).
        h2(data-aos="fade-left") Claridad
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 La claridad en la escritura se logra mediante el uso de un lenguaje sencillo y preciso, evitando términos ambiguos o excesivamente técnicos sin justificación. Para ello, se deben considerar los siguientes aspectos:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/17.svg" alt="" style="width: 90px")
              h5.text-center Oraciones concisas y directas
              p.mb-0.text-center Se recomienda evitar estructuras gramaticales complejas que puedan dificultar la comprensión del lector.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              h5.text-center Uso adecuado de la puntuación
              p.mb-0.text-center La correcta colocación de comas, puntos y otros signos de puntuación contribuye a la fluidez del texto.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/19.svg" alt="" style="width: 90px")
              h5.text-center Evitar redundancias
              p.mb-0.text-center Expresar las ideas de manera eficiente sin repetir información innecesaria, mejora la claridad del mensaje.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/20.svg" alt="" style="width: 90px")
              h5.text-center Definir conceptos clave
              p.mb-0.text-center Cuando se introduce un término técnico o especializado, es recomendable explicarlo para garantizar la comprensión del lector (Muñoz & Ballano Olano, 2015).
        
        h2(data-aos="fade-left") Cohesión
    p.mb-5 La cohesión textual se refiere a la conexión entre las diferentes partes de un texto. Un documento bien cohesionado permite que el lector siga el hilo argumentativo sin dificultades. Para lograrlo, es fundamental:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-13(titulo="Usar conectores lógicos	" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Usar conectores lógicos	
            p Permiten establecer relaciones entre oraciones y párrafos, facilitando la continuidad del discurso.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-13(titulo="Emplear referencias internas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Emplear referencias internas
            p La repetición controlada de términos clave y el uso de pronombres ayudan a evitar confusiones.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-13(titulo="Cuidar la progresión temática" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Cuidar la progresión temática
            p Las ideas deben desarrollarse de manera gradual y organizada, evitando saltos abruptos entre conceptos (Vega-Cocha, Vásquez-Chicaiza & Alcaciega-Ochoa, 2024).
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Coherencia
    p.mb-5 La coherencia en la escritura se refiere a la lógica interna del texto y a la relación entre las ideas que se presentan. Un documento coherente sigue un orden lógico y mantiene una estructura clara. Para lograr coherencia, se deben aplicar las siguientes estrategias:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estructuración adecuada
                p.mb-0 Cada sección del texto debe estar organizada de manera que facilite la comprensión del lector.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Uso de un tono uniforme	
                p.mb-0 Mantener el mismo nivel de formalidad y precisión en todo el documento mejora su cohesión.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/26.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Relación entre ideas
                p.mb-0 Cada párrafo debe desarrollar un único tema central, evitando mezclar ideas sin conexión clara.
    
    h2(data-aos="fade-left") Estrategias para mejorar la claridad, cohesión y coherencia
    p.mb-5 Para perfeccionar la escritura profesional, se recomienda seguir las siguientes estrategias:
    
    .bg-full-width.bg-h85-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color.mt-5
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Revisión constante:</b> leer el texto en voz alta ayuda a identificar errores de redacción y problemas de fluidez.  
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Solicitar retroalimentación:</b> la opinión de un colega o asesor puede proporcionar una nueva perspectiva sobre la claridad del documento.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Utilizar herramientas de corrección:</b> programas de edición de texto y correctores ortográficos pueden ayudar a identificar errores gramaticales y estilísticos.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-4 El dominio de la redacción clara, cohesiva y coherente es esencial para la producción de documentos en el ámbito profesional. Estas habilidades permiten comunicar ideas de manera efectiva, asegurando que los textos sean comprensibles y persuasivos en distintos contextos académicos y laborales (Muñoz & Ballano Olano, 2015).

    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Normas y géneros discursivos en el ámbito educativo
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Normas y géneros discursivos en el ámbito educativo,</b> el cual ofrece un análisis detallado sobre la importancia de las normas de citación, en particular las Normas APA, y su aplicación en la escritura académica. Además, se exploran los géneros discursivos fundamentales en el contexto educativo, como el artículo de opinión, la relatoría, el resumen y el informe. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normas y géneros discursivos en el ámbito educativo.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/28.png', alt='')





    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/29270958/HACIA_UNA_TIPOLOG%C3%8DA_DE_LOS_TEXTOS" target="_blank" rel="noopener noreferrer") Kaufman, AM y Rodríguez, ME (2003). Hacia una tipología de los textos y Caracterización lingüística de los textos. En La escuela y los textos (págs. 5, 19-28 y 29-56). SEP/Santillana. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://languagetool.org/es" target="_blank" rel="noopener noreferrer") Herramienta de idioma. (sf). LanguageTool - Corrector gramatical y de estilo. Herramienta de idioma.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mKqa49RKnC4" target="_blank" rel="noopener noreferrer") La Profe Mónica. [LA PROFE MÓNICA]. (2020, 7 de julio). Aprende a diferenciar los tipos de textos o las tipologías textuales [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es el objetivo principal de esta unidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aprender a escribir cuentos y relatos cortos. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Desarrollar habilidades de escritura y comunicación oral en distintos contextos. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Memorizar reglas gramaticales sin aplicarlas en la práctica. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Redactar textos exclusivamente científicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El objetivo de la unidad es que los estudiantes adquieran competencias en redacción y expresión oral para distintos ámbitos académicos y profesionales. No se limita a un solo tipo de texto ni a la memorización de reglas sin aplicación.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Por qué es importante la escritura académica y profesional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Porque permite estructurar ideas de manera clara y fundamentada.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Porque solo se utiliza en el ámbito educativo. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Porque reemplaza completamente la comunicación oral. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Porque es una habilidad que solo se necesita en carreras de humanidades.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La escritura académica y profesional es una herramienta esencial para estructurar y transmitir ideas en diversos contextos. No se limita a un solo ámbito ni sustituye la comunicación oral.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué aspectos se consideran esenciales en la construcción textual?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso adecuado de normas de citación.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Utilización de expresiones coloquiales sin estructura definida. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Evitar la organización de ideas y la revisión del texto. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Escribir sin considerar coherencia ni cohesión.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La construcción de textos requiere normas de citación, coherencia, cohesión y una adecuada organización de ideas para garantizar claridad y precisión en la comunicación.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes estrategias ayuda a mejorar la planificación de la escritura?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escribir sin esquema ni organización previa. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Elaborar mapas conceptuales y esquemas antes de redactar.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Usar frases largas y complejas sin conexión lógica. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Omitir la revisión y edición del texto final.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La planificación es clave para una escritura efectiva. Esquematizar las ideas antes de escribir facilita la organización y claridad del texto final.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Por qué se enfatiza la relación entre la escritura y el pensamiento crítico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Porque escribir permite estructurar y analizar ideas de forma argumentada.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Porque el pensamiento crítico solo se desarrolla a través de la oralidad. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Porque escribir consiste en repetir información sin reflexionar. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Porque no es necesario fundamentar las ideas en un texto académico.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La escritura no solo comunica ideas, sino que también fomenta el pensamiento crítico al requerir análisis, argumentación y fundamentación de la información presentada.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
