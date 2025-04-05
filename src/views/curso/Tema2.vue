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
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left").mb-4.text-white Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
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

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                h5 Estrategias exitosas
                p Documentación de campañas y prácticas efectivas para replicarlas en futuras expansiones.
    
              .bg-color-white.box-shadow.p-3(x="29%" y="34%" numero="+")
                h5 Gestión de calidad
                p Análisis de problemas de calidad detectados y medidas para su resolución.
    
              .bg-color-white.box-shadow.p-3(x="59%" y="6%" numero="+")
                h5 Optimización de costos
                p Identificación de áreas donde reducir costos sin comprometer la calidad del producto o servicio.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="35%" numero="+")
                h5 Atención al cliente
                p Evaluación y mejora de protocolos para garantizar la satisfacción y fidelización de los clientes.
    
              .bg-color-white.box-shadow.p-3(x="76.5%" y="57%" numero="+")
                h5 Nuevas oportunidades de mercado
                p Reflexión sobre segmentos o mercados no abordados que podrían representar una expansión futura.





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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

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
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
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
