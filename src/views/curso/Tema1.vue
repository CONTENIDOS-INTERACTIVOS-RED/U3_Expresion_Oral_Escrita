<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Normas fundamentales de la escritura académica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") La escritura académica es una habilidad esencial en la formación profesional de un licenciado en educación. Su correcta aplicación permite la transmisión efectiva del conocimiento, facilita la comprensión de textos especializados y contribuye a la producción de documentos que cumplen con los estándares académicos. 
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Dentro de este marco, la ortografía juega un papel crucial, ya que influye en la claridad, precisión y credibilidad de los textos. Esta sección aborda la ortografía acentual, puntual y literal, proporcionando estrategias para mejorar su aplicación en la escritura académica.
        
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Ortografía acentual, puntual y literal
    
    p.mb-4 La ortografía en el ámbito académico no solo representa el conjunto de normas que rigen la escritura, sino que también garantiza la correcta interpretación del mensaje. Existen tres aspectos fundamentales que deben ser dominados:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ortografía acentual
                p.mb-0 Uso correcto de la tilde para marcar la sílaba tónica en las palabras.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ortografía puntual
                p.mb-0 Aplicación adecuada de los signos de puntuación para estructurar el discurso escrito.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ortografía literal
                p.mb-0 Uso correcto de las letras según las reglas ortográficas del idioma.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Ortografía acentual
        p.mb-5 El uso adecuado de la tilde es esencial para diferenciar palabras con significados distintos y para evitar confusiones en la lectura. Existen tres tipos principales de palabras en función de su acentuación:
        .bg-color-19.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 <b>Agudas:</b> llevan tilde si terminan en vocal, n o s (ejemplo: acción, café).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 <b>Graves o llanas:</b> se acentúan cuando no terminan en vocal, n o s (ejemplo: árbol, ágil).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 <b>Esdrújulas y sobresdrújulas:</b> siempre llevan tilde (ejemplo: música, explícitamente).
        .bg-color-20.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El desconocimiento de estas reglas genera errores comunes, como la omisión o el uso indebido de la tilde en palabras homónimas, por ejemplo, tú (pronombre) y tu (adjetivo posesivo), o sí (afirmación) y si (conjunción condicional).
    
    .bg-full-width.bg-h85-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                h5.mt-5 Ejercicios.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Dictados focalizados:</b> escuchar y escribir palabras que requieran tilde. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Corrección de textos:</b> identificar y corregir errores ortográficos en párrafos. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Uso de reglas mnemotécnicas:</b> asociar palabras con ejemplos concretos para recordar cuándo se usa la tilde.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Ortografía puntual
    p.mb-5 La correcta utilización de los signos de puntuación permite estructurar el mensaje y evitar ambigüedades. Entre los signos más relevantes en la escritura académica se encuentran:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Punto y seguido
                p.text-center Separa ideas dentro de un mismo párrafo, permitiendo la continuidad del discurso.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Punto y aparte
                p.text-center Marca el final de un párrafo, indicando un cambio de enfoque o de contenido.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Coma
                p.text-center Separa elementos en una enumeración, aclaraciones o frases incidentales. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Punto y coma
                p.text-center Conecta oraciones relacionadas con un alto grado de independencia. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Dos puntos
                p.text-center Introduce una enumeración o una cita textual.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Signos de interrogación y exclamación
                p.text-center Delimitan preguntas y expresiones enfáticas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/14.png', alt='')
    
        p.mb-4 El mal uso de los signos de puntuación puede alterar el sentido del mensaje. Por ejemplo, la ausencia de una coma en la frase "Vamos a comer niños" cambia completamente su significado con respecto a "Vamos a comer, niños".


    .bg-full-width.bg-h85-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                h5.mt-5 Ejercicios.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Revisión de textos con puntuación incorrecta:</b> identificar errores y corregirlos.  
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Uso de diagramas de estructura de oraciones:</b> representar visualmente el uso de signos de puntuación. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Práctica de lectura en voz alta:</b> detectar pausas naturales para aplicar correctamente los signos de puntuación.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Ortografía literal
    p.mb-5 La ortografía literal se refiere a la correcta escritura de cada palabra, evitando errores relacionados con la confusión entre letras similares. Entre las reglas más importantes se encuentran:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo='Uso de la "b" y la "v"') Las palabras terminadas en -bir (excepto hervir, servir y vivir) se escriben con b (ejemplo: escribir, recibir).
          p(numero="2" titulo='Uso de la "g" y la "j"') Los verbos terminados en -ger y -gir se escriben con g (ejemplo: proteger, dirigir), con excepción de tejer y crujir.
          p(numero="3" titulo='Uso de la "h"') Las palabras que inician con hue- o hie- llevan h (ejemplo: huevo, hiedra).
          p(numero="4" titulo='Uso de la "s", "c" y "z"') Los sustantivos terminados en -oso y -osa se escriben con s (ejemplo: hermoso, sabrosa).
    
    p.mb-4 El desconocimiento de estas normas genera errores ortográficos que afectan la credibilidad de un texto académico. Un ejemplo es la confusión entre has (del verbo haber), haz (del verbo hacer) y as (carta de la baraja o persona destacada en algo).

    .bg-full-width.bg-h85-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                h5.mt-5 Ejercicios.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Juegos de palabras homófonas:</b> diferenciar términos con escritura similar pero significados distintos.   
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Ejercicios de completar palabras con letras omitidas:</b> identificar la ortografía correcta de términos específicos.  
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 <b>Revisión de textos con errores comunes:</b> subrayar y corregir palabras mal escritas.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El dominio de la ortografía acentual, puntual y literal es esencial para la escritura académica, ya que influye directamente en la claridad y comprensión del mensaje. La correcta aplicación de las normas ortográficas no solo permite estructurar mejor el discurso, sino que también contribuye a la credibilidad y profesionalismo del texto.
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/19.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") A lo largo de esta sección, se han presentado estrategias y ejercicios para fortalecer la ortografía en el ámbito académico. La práctica constante de estos métodos permitirá mejorar la precisión en la escritura, optimizando la producción de textos en el entorno universitario y profesional. Como señala Prina (2010), el desarrollo de una escritura adecuada es una competencia indispensable para cualquier licenciado en educación, pues le permite organizar y comunicar sus ideas de manera efectiva.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Pautas esenciales para la redacción de textos en el ámbito académico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") La escritura en el ámbito académico es una competencia fundamental para la formación profesional y el desarrollo del conocimiento. A través de la redacción, se organizan ideas, se argumentan posturas y se comunican hallazgos con claridad y precisión. La calidad de los textos académicos depende de diversos factores, entre ellos, la coherencia, la cohesión, el uso adecuado del lenguaje y el respeto por las normas de citación y referencia (Camps & Castelló, 2013).
        h2(data-aos="fade-left") Redacción académica
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La redacción académica se caracteriza por su formalidad y estructura rigurosa. A diferencia de otros tipos de escritura, este estilo requiere un uso preciso del lenguaje y una argumentación basada en la evidencia. 

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo='Claridad') La información debe expresarse de manera comprensible, evitando ambigüedades y frases innecesariamente complejas (Muñoz & Ballano Olano, 2015).
          p(numero="2" titulo='Precisión') Cada palabra y concepto deben utilizarse con exactitud, evitando términos vagos o coloquiales.
          p(numero="3" titulo='Objetividad') La escritura debe sustentarse en hechos, datos y argumentos fundamentados, sin recurrir a opiniones personales sin respaldo (Prina, 2010).
          p(numero="4" titulo='Concisión') Se deben evitar redundancias y expresar las ideas de manera directa y eficaz.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo='Formalidad') Es esencial el uso de un lenguaje profesional, evitando expresiones coloquiales o informales.
          p(numero="2" titulo='Estructura lógica') Las ideas deben seguir un orden coherente que facilite la comprensión del lector.
          p(numero="3" titulo='Rigor argumentativo') Todo enunciado debe estar respaldado con evidencia de fuentes confiables, lo que otorga validez y credibilidad a los argumentos expuestos.
          p(numero="4" titulo='Uso de un tono impersonal') Se recomienda evitar el uso de la primera persona para mantener la neutralidad y objetividad en la exposición de ideas.

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white El cumplimiento de estos principios fortalece la calidad del texto académico, permitiendo una mejor transmisión del conocimiento y facilitando la lectura y comprensión de los argumentos presentados (Camps & Castelló, 2013).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/25.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") A lo largo de esta sección, se han presentado estrategias y ejercicios para fortalecer la ortografía en el ámbito académico. La práctica constante de estos métodos permitirá mejorar la precisión en la escritura, optimizando la producción de textos en el entorno universitario y profesional. Como señala Prina (2010), el desarrollo de una escritura adecuada es una competencia indispensable para cualquier licenciado en educación, pues le permite organizar y comunicar sus ideas de manera efectiva. 
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Otro aspecto clave en la redacción académica es la necesidad de estructurar el contenido en párrafos bien definidos. Cada párrafo debe presentar una idea principal respaldada por información secundaria o ejemplos específicos. La estructura del texto debe permitir un desarrollo progresivo de las ideas, evitando saltos abruptos entre un punto y otro. Para ello, es recomendable planificar previamente el contenido mediante la elaboración de esquemas o mapas conceptuales (Camps & Castelló, 2013).
    
    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Estrategias para mejorar la redacción académica
            p.mb-4(data-aos="fade-right") Se invita a la lectura del documento Estrategias para mejorar la redacción académica, el cual ofrece un conjunto de recomendaciones clave para desarrollar una escritura clara, precisa y estructurada en el ámbito académico. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias para mejorar la redacción académica.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/27.png', alt='')
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Uso de conectores lógicos y estructura de los párrafos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El uso adecuado de conectores lógicos y la correcta estructuración de los párrafos son fundamentales para garantizar la claridad, coherencia y cohesión en los textos académicos. Un texto bien estructurado permite que las ideas fluyan de manera lógica y ordenada, facilitando la comprensión del lector. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-15.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La redacción académica requiere que los párrafos sean construidos con precisión, evitando la dispersión de ideas y asegurando que cada unidad textual contribuya al desarrollo del argumento principal (Muñoz & Ballano Olano, 2015).
    
    h2(data-aos="fade-left") Conectores lógicos en la redacción académica
    p.mb-5 Los conectores lógicos son palabras o expresiones que establecen relaciones entre las diferentes partes de un texto, permitiendo la continuidad del discurso. Estos conectores cumplen diversas funciones dentro de la estructura textual, tales como agregar información, contrastar ideas, establecer relaciones de causa y consecuencia o indicar conclusiones (Vega-Cocha, Vásquez-Chicaiza & Alcaciega-Ochoa, 2024).

    .titulo-figura
      h5 Tabla 1.
      span Tipos de conectores lógicos
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-8.text-white.text-center Conector
            th.bg-color-8.text-white.text-center Concepto
            th.bg-color-8.text-white.text-center Ejemplo
        tbody
          tr
            td.text-bold Aditivos
            td Permiten sumar información al discurso, reforzando el argumento principal.
            td Además, asimismo, de igual manera, también.
          tr
            td.text-bold Contraste
            td Introducen una idea opuesta o una diferencia con respecto a lo previamente mencionado.
            td Sin embargo, no obstante, por el contrario, aunque.
          tr
            td.text-bold Causales
            td Expresan la relación de causa o motivo entre dos ideas.
            td Porque, debido a, dado que, ya que.
          tr
            td.text-bold Consecutivos
            td Indican una consecuencia lógica derivada de una idea anterior.
            td Por lo tanto, en consecuencia, así que, de modo que
          tr
            td.text-bold Condicionales
            td Expresan una condición necesaria para que ocurra algo.
            td Si, en caso de que, siempre que, a menos que.
          tr
            td.text-bold Orden
            td Organizan la secuencia de ideas dentro de un texto.
            td Primero, en segundo lugar, finalmente, por último.
          tr
            td.text-bold Explicativos
            td Introducen una aclaración o reformulación de una idea previa.
            td Es decir, en otras palabras, dicho de otro modo.
          tr
            td.text-bold Conclusión
            td Resumen el contenido expuesto o refuerzan el cierre de un argumento.
            td En resumen, en síntesis, en conclusión, por ende.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/29.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El uso adecuado de estos conectores garantiza que los textos académicos sean comprensibles, fluidos y bien organizados. Según Vega-Cocha, Vásquez-Chicaiza & Alcaciega-Ochoa (2024), el abuso de conectores o su uso inadecuado puede generar confusión en el lector, por lo que se recomienda emplearlos de manera equilibrada y pertinente.
    
    h2(data-aos="fade-left") Estructura de los párrafos en la escritura académica
    p.mb-5 Un párrafo es una unidad de información que desarrolla una idea central con el apoyo de ideas secundarias. La correcta estructuración de los párrafos es esencial para garantizar la coherencia del texto y facilitar la lectura (Prina, 2010).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/29-1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Oración temática	
              p.mb-0 Presenta la idea principal del párrafo. Debe ser clara y precisa.
        .bg-color-2.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Oraciones de apoyo	
              p.mb-0 Desarrollan y amplían la idea central con argumentos, ejemplos o datos. Son las oraciones secundarias que explican, ejemplifican o amplían la idea principal. Pueden incluir datos, citas o argumentos. 
        .bg-color-2.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Oración de cierre	
              p.mb-0 Refuerza la idea principal y puede dar pie a la transición hacia el siguiente párrafo.

    p.mb-4 Cada párrafo debe contener una sola idea principal para evitar confusión y garantizar la coherencia del texto. Además, los párrafos deben estar conectados entre sí mediante el uso de conectores lógicos adecuados, asegurando una progresión fluida del argumento (Muñoz & Ballano Olano, 2015).

    h2(data-aos="fade-left") Tipos de párrafos en la redacción académica
    p.mb-5 Dependiendo de su función dentro del texto, los párrafos pueden clasificarse en diferentes tipos:


    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/33.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Párrafo introductorio
                p.mb-0 Presenta el tema del texto y anticipa los puntos que se desarrollarán. Debe captar la atención del lector y proporcionar contexto.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/34.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Párrafo de desarrollo
                p.mb-0 Contiene el cuerpo argumentativo del texto, desarrollando las ideas con evidencia y análisis.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/35.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Párrafo de transición
                p.mb-0 Conecta diferentes secciones del texto, asegurando la continuidad lógica del discurso.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/36.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Párrafo de conclusión
                p.mb-0 Resume las ideas principales y refuerza la postura argumentativa sin introducir nueva información.
    
    h2(data-aos="fade-left") Extensión y cohesión de los párrafos

    .bg-color-3.mb-5(data-aos="fade-up").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/37.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Los párrafos deben mantener un equilibrio entre la extensión y la claridad. Un párrafo demasiado corto puede no desarrollar suficientemente una idea, mientras que uno demasiado largo puede dificultar la comprensión del lector (Prina, 2010). Se recomienda que los párrafos sean de entre 5 y 8 oraciones, dependiendo del nivel de profundidad del tema abordado.

    p.mb-4 Para garantizar la cohesión entre los párrafos, se pueden emplear estrategias como la repetición de palabras clave, el uso de pronombres referenciales y la inclusión de conectores lógicos adecuados. Estas técnicas permiten que el lector siga el hilo argumentativo sin dificultades.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/39.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El empleo eficaz de conectores lógicos y la correcta estructuración de los párrafos son aspectos esenciales para la escritura académica. La combinación de ambos elementos permite construir textos organizados, argumentativos y comprensibles. Como señalan Muñoz & Ballano Olano (2015), la falta de cohesión en los párrafos y el uso inadecuado de conectores pueden afectar la calidad de un escrito, dificultando su lectura y comprensión.
        p.mb-5(data-aos="fade-left") Además, la adecuada distribución de los párrafos y la integración de conectores adecuados facilitan la progresión del discurso, evitando repeticiones innecesarias y garantizando una presentación lógica de las ideas (Prina, 2010). En este sentido, la enseñanza de estrategias para la estructuración de párrafos y el uso de conectores es clave para el desarrollo de habilidades de escritura académica en los estudiantes universitarios.

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white.mt-5 Por lo tanto, dominar el uso de conectores y la construcción de párrafos es una competencia fundamental para la producción de textos en el ámbito académico. La práctica constante y la aplicación de estas estrategias permitirán mejorar significativamente la claridad y coherencia de la escritura, contribuyendo a la efectividad de la comunicación en el contexto universitario y profesional.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/40.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/176664 " target="_blank" rel="noopener noreferrer") Castillo, M. (2005). Curso propedéutico de ortografía y redacción: (ed.). Universidad Abierta para Adultos (UAPA). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://languagetool.org/es" target="_blank" rel="noopener noreferrer") Herramienta de idioma. (sf). LanguageTool - Corrector gramatical y de estilo. Herramienta de idioma.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8kOuOenY5yQ" target="_blank" rel="noopener noreferrer") La Profe Mónica. [LA PROFE MÓNICA]. (2021, 24 de junio). Todo sobre categorías gramaticales con ejercicios [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
