const translations = {
    es: {
        clickHint: "Toca para más info",
        title: "Guía Técnica ECOLAB",
        quizBtn: "Examen 🎓",
        quizTitleBase: "Examen de Seguridad",
        quizQuestionLabel: "Pregunta",
        quizOf: "de",
        quizRestart: "Intentar de nuevo",
        productQuizBtn: "🎯 Test de Producto",
        returnToProduct: "Volver al Producto",
        returnToStart: "Volver al Inicio",
        quizFeedbackCorrect: "¡Correcto! ✅",
        quizFeedbackIncorrect: "Incorrecto ❌",
        quizResultExcellence: "¡Enhorabuena! 🌟 Has aprobado con excelencia. Eres un experto en Ecolab.",
        quizResultGood: "Buen trabajo 👍, pero necesitas repasar un poco más para ser un experto.",
        quizResultStudy: "¡Ánimo! 💪 Necesitas estudiar más las fichas técnicas antes de volver a intentarlo.",
        modalTitlePrefix: "Instrucciones para",
        quizQuestions: {
            purpose: "¿Para qué sirve el producto {name}?",
            danger: "¿Cuál es el peligro principal de {name}?",
            forbidden: "¿Dónde NO se debe usar {name}?"
        },
        products: [
            {
                id: "multi-quat",
                image: "images/multi-quat.png",
                name: "22 Multi-Quat",
                tagline: "Desinfectante de 4ª Generación",
                desc: "Desinfectante específico para tablas de corte, utensilios y superficies en contacto con alimentos. NO es un desengrasante.",
                steps: [
                    "1. Limpiar y aclarar la superficie con agua y jabón.",
                    "2. Aplicar el producto desinfectante."
                ],
                warning: "REGLA DE ORO: NO ACLARAR (No-Rinse) tras aplicar para evitar la re-contaminación con agua del grifo.",
                colorClass: "border-red",
                textClass: "text-red",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Información Principal</h3>
                        <p><strong>Para qué sirve:</strong> Desinfectar encimeras, tablas de cortar, platos y cubiertos.</p>
                        <p><strong>Cómo se usa:</strong> Se aplica sobre la superficie ya limpia y se deja secar solo. No necesita aclarado.</p>
                        <p><strong>En la formación:</strong> Lo verás usar para todo lo que toca alimentos directamente.</p>
                        
                        <h3>2. Su función real (La desinfección final)</h3>
                        <p>No es un desengrasante. Si hay una mancha de salsa en la mesa y echas <strong>22 Multi-Quat</strong>, solo estarás 'desinfectando la salsa', pero la mancha seguirá ahí.</p>
                        <ul>
                            <li><strong>Paso 1:</strong> Limpias la suciedad con agua y jabón.</li>
                            <li><strong>Paso 2:</strong> Aplicas <strong>22 Multi-Quat</strong> para matar los microbios.</li>
                        </ul>

                        <h3 class="danger-title">3. El concepto 'No-Rinse' (Sin enjuague)</h3>
                        <p class="highlight-box">Esto es lo más importante de la formación. Al estar diluido correctamente, es seguro para la salud.</p>
                        <p><strong>Uso:</strong> Rocías la encimera o metes los cubiertos en el líquido, y <strong>NO los aclaras con agua</strong> después. Si los aclaras con agua del grifo, podrías volver a contaminarlos. Se deja secar al aire.</p>

                        <h3>4. ¿Dónde lo vas a usar tú?</h3>
                        <ul>
                            <li><strong>Tablas de cortar:</strong> Cada vez que cambies de un alimento a otro (ej: de carne a verdura).</li>
                            <li><strong>Encimeras:</strong> Al empezar y al terminar el turno.</li>
                            <li><strong>Utensilios:</strong> Pinzas, cuchillos o recipientes de servicio.</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "future-dc",
                image: "images/future-dc.webp",
                name: "Future DC",
                tagline: "Limpiador Desinfectante Clorado",
                desc: "Limpiador concentrado de color azul para suelos y paredes de cocina.",
                steps: [
                    "Elimina bacterias eficazmente.",
                    "Blanquea las juntas de los azulejos."
                ],
                warning: "Producto clorado.",
                colorClass: "border-orange",
                textClass: "text-orange",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Para qué sirve</h3>
                        <p>Fregar suelos y limpiar paredes. Es el <strong>limpiador principal</strong> para la limpieza diaria.</p>
                        
                        <h3>2. Nota Visual de Color</h3>
                        <p class="highlight-box">Aunque la etiqueta es NARANJA, el líquido concentrado es <strong>AZUL/VERDOSO</strong>. Al diluirse en el cubo, el agua se vuelve azul clarito.</p>

                        <h3>3. ¿Qué es?</h3>
                        <p>Limpiador desinfectante clorado. Hace dos trabajos:</p>
                        <ul>
                            <li><strong>Limpia:</strong> Rompe la grasa y suciedad.</li>
                            <li><strong>Desinfecta:</strong> Mata bacterias y hongos gracias a su base de cloro.</li>
                        </ul>

                        <h3>4. ¿Dónde se usa?</h3>
                        <ul>
                            <li>Suelo de la cocina.</li>
                            <li>Paredes de azulejos.</li>
                            <li>Cubos de basura (para quitar olor).</li>
                            <li>Desagües.</li>
                        </ul>

                        <h3>5. Cómo se aplica</h3>
                        <p>Dilución mediante máquina dispensadora. No necesita aclarado en la mayoría de los suelos; fregar y <strong>dejar secar solo</strong>.</p>
                        
                        <h3 class="danger-title">SEGURIDAD</h3>
                        <p class="highlight-box"><strong>¡ADVERTENCIA CRÍTICA!</strong> Si cae líquido concentrado (azul oscuro directo del bote) en ojos o piel, lavar inmediatamente con <strong>mucha agua</strong>.</p>
                    </div>
                `
            },
            {
                id: "floor-cleaner",
                image: "images/floor-cleaner.jpg",
                name: "Floor Cleaner",
                tagline: "Detergente de Alta Potencia",
                desc: "Diseñado para romper la capa de grasa pesada en suelos antes de la desinfección.",
                steps: [
                    "Usar para fregado previo.",
                    "Elimina grasa incrustada."
                ],
                warning: "",
                colorClass: "border-floor",
                textClass: "text-floor",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Para qué sirve</h3>
                        <p>Es un limpiador de suelos de alto rendimiento diseñado para eliminar la grasa acumulada y devolver la tracción al suelo (para que no resbale).</p>
                        
                        <h3>2. ¿Por qué es diferente al Future?</h3>
                        <p class="highlight-box"><strong>Future DC</strong> es para desinfectar a diario. <strong>Floor Cleaner</strong> es un desengrasante que ataca la grasa orgánica y el aceite.</p>
                        
                        <h3>3. ¿Dónde se usa?</h3>
                        <ul>
                            <li>Zonas de cocción y freidoras.</li>
                            <li>Cualquier área donde el suelo se sienta resbaladizo.</li>
                            <li>Suelos con acumulación de grasa pesada.</li>
                        </ul>

                        <h3>4. Instrucciones del Manual</h3>
                        <ul>
                            <li><strong>Agua Caliente:</strong> Funciona mucho mejor con agua caliente para derretir la grasa.</li>
                            <li><strong>Sin Aclarado:</strong> Normalmente no necesita aclarado, pero es vital dejar que el suelo se seque por completo.</li>
                        </ul>

                        <h3 class="danger-title">5. Seguridad</h3>
                        <div class="highlight-box">
                            <p><strong>⚠️ Cartel de 'Suelo Mojado': Obligatorio.</strong> Mientras está húmedo, el suelo puede patinar mucho hasta que se seca.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "greasecutter",
                image: "images/greasecutter.webp",
                name: "Greasecutter",
                tagline: "Desengrasante de Alto Rendimiento",
                desc: "Para campanas extractoras, hornos y planchas. Usar en superficies frías o templadas.",
                steps: [
                    "Aplicar sobre grasa carbonizada.",
                    "Dejar actuar según instrucciones."
                ],
                warning: "CORROSIVO: ACLARAR SIEMPRE con agua abundante.",
                colorClass: "border-brown",
                textClass: "text-brown",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Propósito</h3>
                        <p>Eliminar la grasa quemada en hornos, planchas y campanas. Es un desengrasante agresivo para grasa carbonizada (negra y pegajosa).</p>
                        
                        <h3>2. ¿Dónde SÍ se usa?</h3>
                        <ul>
                            <li>Hornos y parrillas (interior y rejillas).</li>
                            <li>Filtros de campanas extractoras (si son de acero).</li>
                            <li>Planchas de cocina tras el servicio.</li>
                        </ul>

                        <h3 class="danger-title">3. ¿Dónde NO se usa? (CRÍTICO)</h3>
                        <p class="highlight-box"><strong>NO usar en Aluminio</strong> (lo vuelve negro e irreversible), mármol, granito, madera o plásticos blandos.</p>

                        <h3>4. Reglas de Oro de Seguridad</h3>
                        <ul>
                            <li><strong>⚠️ Protección Obligatoria:</strong> Usar guantes de goma y gafas 🧤👓. Es <strong>CORROSIVO</strong> y quema piel y ojos.</li>
                            <li><strong>🚿 Aclarado:</strong> A diferencia del rojo, este <strong>SIEMPRE</strong> requiere aclarado con abundante agua. No debe quedar residuo.</li>
                            <li><strong>🌬️ Ventilación:</strong> No respirar el vapor si se aplica en superficies calientes.</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "lime-a-way",
                image: "images/lime-a-way.webp",
                name: "Lime-A-Way",
                tagline: "Desincrustante Ácido",
                desc: "Elimina la cal en lavavajillas automáticos y baños maría.",
                steps: [],
                warning: "PELIGRO MORTAL: NUNCA MEZCLAR CON PRODUCTOS CLORADOS (como Future DC). Libera gas cloro tóxico.",
                colorClass: "border-green",
                textClass: "text-green",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Propósito</h3>
                        <p>Quitar manchas blancas de cal y minerales. Es un desincrustante ácido que 'derrite' el calcio y magnesio.</p>
                        
                        <h3>2. Escenarios de Uso</h3>
                        <ul>
                            <li><strong>Máquina Lavavajillas:</strong> Uso más importante. Limpia el interior y desatasca los chorros de agua cuando se ponen blancos.</li>
                            <li><strong>Baños y Grifería:</strong> Quita las costras blancas alrededor de grifos y paredes.</li>
                            <li><strong>Mesas de Vapor (Baño María):</strong> Limpia en segundos el fondo donde se acumula cal por el agua caliente.</li>
                        </ul>

                        <h3>3. Cómo se usa</h3>
                        <p>Aplicar sobre la mancha o añadir al agua de la máquina. Si hace burbujas (efervescencia), es que está trabajando. <strong>SIEMPRE aclarar muy bien con agua</strong>.</p>

                        <h3 class="danger-title">SEGURIDAD CRÍTICA</h3>
                        <div class="highlight-box">
                            <p><strong>☠️ PELIGRO DE GAS CLORO</strong></p>
                            <p><strong>NUNCA</strong> mezclar con cloro o lejía (como <strong>Future DC</strong>).</p>
                            <p>Es el aviso más importante de la formación.</p>
                        </div>

                        <h3>4. Protección</h3>
                        <p>Usa guantes 🧤. Al ser ácido, escocerá mucho si tienes cualquier pequeño corte en la piel.</p>
                    </div>
                `
            },
            {
                id: "miraglo",
                image: "images/miraglo.jpg",
                name: "Miraglo",
                tagline: "Limpiacristales y Superficies Brillantes",
                desc: "Limpiador de secado rápido que no deja rastros.",
                steps: [],
                warning: "NO usar en superficies de preparación de alimentos.",
                colorClass: "border-light-blue",
                textClass: "text-light-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Propósito</h3>
                        <p>Cristales, espejos y superficies brillantes. Se seca muy rápido y no deja marcas ni 'niebla'.</p>
                        
                        <h3>2. ¿Dónde se usa?</h3>
                        <ul>
                            <li><strong>Cristales y espejos:</strong> ✨ Ventanas y espejos de baño.</li>
                            <li><strong>Vitrinas:</strong> Exposición de comida.</li>
                            <li><strong>Acero Inoxidable:</strong> Para quitar huellas dactilares en neveras y mostradores.</li>
                            <li><strong>Pantallas y teclados:</strong> (⚠️ aplicando siempre en el trapo, nunca directo).</li>
                        </ul>

                        <h3>3. Truco de Profesional (Modo de uso)</h3>
                        <ul>
                            <li>Pulverizar poco (no empapar).</li>
                            <li>Usar paño de microfibra limpio o papel.</li>
                            <li>Técnica de <strong>arriba a abajo en zigzag</strong>.</li>
                        </ul>

                        <h3 class="danger-title">CRITICAL / Lo que NO debes hacer</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ NO es desinfectante:</strong> Si hay restos de comida o sangre de carne, usa <strong>22 Multi-Quat</strong>.</p>
                            <p><strong>⛔ NO es para grasa pesada:</strong> Para campanas con grasa usa <strong>Greasecutter</strong>.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "medallion",
                image: "images/medallion.jpg",
                name: "Medallion",
                tagline: "Abrillantador de Acero Inoxidable",
                desc: "Abrillantador protector específico para superficies de acero inoxidable. Elimina eficazmente huellas dactilares y marcas de agua, dejando una película protectora duradera que repele la suciedad y el polvo en maquinaria y mobiliario de cocina.",
                steps: [
                    "• No deja residuos grasos si se aplica correctamente.",
                    "• Protege contra la corrosión ligera."
                ],
                warning: "PROHIBIDO usar en el interior de recipientes o tablas que toquen comida.",
                colorClass: "border-white",
                textClass: "text-white",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Propósito</h3>
                        <p>No es un limpiador. Sirve para proteger y dar brillo al acero inoxidable, repeliendo huellas y gotas de agua.</p>
                        
                        <h3>2. ¿Dónde se usa?</h3>
                        <ul>
                            <li>Exteriores de neveras.</li>
                            <li>Máquinas de hielo.</li>
                            <li>Paneles de hornos (por fuera).</li>
                            <li>Superficies de acero a la vista del cliente.</li>
                        </ul>

                        <h3>3. Técnica 'Menos es más' (Modo de uso)</h3>
                        <ul>
                            <li><strong>1. Limpieza previa:</strong> La superficie debe estar limpia y seca antes (el Medallón no quita la grasa).</li>
                            <li><strong>2. Aplicación:</strong> Poner poca cantidad en un trapo seco (nunca directo al metal).</li>
                            <li><strong>3. Frotar:</strong> Seguir la veta del acero (las líneas finitas del metal).</li>
                            <li><strong>4. Sacar brillo:</strong> Usar una parte limpia del trapo para quitar el exceso de aceite.</li>
                        </ul>

                        <h3 class="danger-title">REGLA DE ORO DE SEGURIDAD (Crítico)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ NUNCA usar en superficies que tocan comida</strong></p>
                            <p>(tablas, interior de hornos, mesas de preparación). Es un aceite mineral y contaminaría los alimentos.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "clean-soft",
                image: "images/clean-soft.jpg",
                name: "Clean & Soft AB",
                tagline: "Jabón Antibacterial (AB)",
                desc: "Jabón específico para la desinfección de manos del personal.",
                steps: [
                    "1. Mojar las manos.",
                    "2. Aplicar jabón.",
                    "3. Frotar 20 SEGUNDOS (incluir espacios interdigitales, uñas y muñecas).",
                    "4. Enjuagar y secar con papel."
                ],
                warning: "Seguir estrictamente el tiempo de frotado.",
                colorClass: "border-dark-blue",
                textClass: "text-dark-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Información Principal</h3>
                        <p><strong>Para qué sirve:</strong> Higiene personal obligatoria antes de manipular alimentos.</p>
                        <p><strong>Uso:</strong> Exclusivamente en los lavamanos de la cocina (handwashing sinks).</p>
                        
                        <h3>2. ¿Qué significa 'AB'?</h3>
                        <p class="highlight-box">Significa <strong>Antibacterial</strong>. Reduce drásticamente los microorganismos, a diferencia de un jabón común.</p>
                        <p><strong>Ubicación:</strong> Dispensadores de pared. Jamás se usa para fregar platos.</p>

                        <h3>3. Características Técnicas</h3>
                        <ul>
                            <li><strong>Color:</strong> Etiqueta Azul Oscuro.</li>
                            <li><strong>Propiedades:</strong> Contiene agentes hidratantes. Evita que la piel se agriete aunque te laves las manos 50 veces al día.</li>
                        </ul>

                        <h3>4. El Proceso de Lavado (Estándar de Formación)</h3>
                        <ul>
                            <li><strong>Mojar:</strong> Usar agua caliente (lo máximo que aguantes).</li>
                            <li><strong>Dosis:</strong> Aplicar Clean & Soft AB.</li>
                            <li><strong>Frotar:</strong> Vigorosamente durante <strong>20 segundos</strong> (dedos, uñas y muñecas).</li>
                            <li><strong>Aclarar:</strong> Con abundante agua.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    en: {
        clickHint: "Tap for more info",
        title: "ECOLAB Technical Guide",
        quizBtn: "Exam 🎓",
        quizTitleBase: "Safety Exam",
        quizQuestionLabel: "Question",
        quizOf: "of",
        quizRestart: "Try Again",
        quizFeedbackCorrect: "Correct! ✅",
        quizFeedbackIncorrect: "Incorrect ❌",
        quizResultExcellence: "Congratulations! 🌟 You have passed with excellence. You are an Ecolab expert.",
        quizResultGood: "Good job 👍, but you need to review a bit more to be an expert.",
        quizResultStudy: "Cheer up! 💪 You need to study the technical sheets more before trying again.",
        returnToStart: "Return to Start",
        modalTitlePrefix: "Instructions for",
        quizQuestions: {
            purpose: "What is {name} used for?",
            danger: "What is the main danger of {name}?",
            forbidden: "Where should you NEVER use {name}?"
        },
        productQuizBtn: "🎯 Product Test",
        returnToProduct: "Return to Product",
        products: [
            {
                id: "multi-quat",
                image: "images/multi-quat.png",
                name: "22 Multi-Quat",
                tagline: "4th Generation Disinfectant",
                desc: "Specific disinfectant for cutting boards, utensils, and food contact surfaces. NOT a degreaser.",
                steps: [
                    "1. Clean and rinse surface with soap and water.",
                    "2. Apply disinfectant product."
                ],
                warning: "GOLDEN RULE: DO NOT RINSE after application to avoid re-contamination with tap water.",
                colorClass: "border-red",
                textClass: "text-red",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Main Information</h3>
                        <p><strong>What it's for:</strong> Disinfecting counters, cutting boards, dishes, and cutlery.</p>
                        <p><strong>How to use:</strong> Apply to a clean surface and let it air dry. No rinsing needed.</p>
                        <p><strong>In training:</strong> You will see it used for anything that directly touches food.</p>
                        
                        <h3>2. Its Real Function (Final Disinfection)</h3>
                        <p>It is NOT a degreaser. If there is a sauce stain on the table and you spray <strong>22 Multi-Quat</strong>, you are only 'disinfecting the sauce', but the stain will remain.</p>
                        <ul>
                            <li><strong>Step 1:</strong> Clean the dirt with soap and water.</li>
                            <li><strong>Step 2:</strong> Apply <strong>22 Multi-Quat</strong> to kill microbes.</li>
                        </ul>

                        <h3 class="danger-title">3. The 'No-Rinse' Concept</h3>
                        <p class="highlight-box">This is the most important part of training. When properly diluted, it is safe for health.</p>
                        <p><strong>Use:</strong> Spray the counter or dip cutlery in the liquid, and <strong>DO NOT rinse with water</strong> afterwards. If you rinse with tap water, you could re-contaminate them. Let air dry.</p>

                        <h3>4. Where will you use it?</h3>
                        <ul>
                            <li><strong>Cutting boards:</strong> Every time you switch food types (e.g., meat to veg).</li>
                            <li><strong>Counters:</strong> At the start and end of shift.</li>
                            <li><strong>Utensils:</strong> Tongs, knives, or service containers.</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "future-dc",
                image: "images/future-dc.webp",
                name: "Future DC",
                tagline: "Chlorinated Disinfectant Cleaner",
                desc: "Blue concentrated cleaner for kitchen floors and walls.",
                steps: [
                    "Effectively kills bacteria.",
                    "Whitens tile grout."
                ],
                warning: "Chlorinated product.",
                colorClass: "border-orange",
                textClass: "text-orange",
                details: `
                    <div class="modal-lesson">
                        <h3>1. What it's for</h3>
                        <p>Mopping floors and cleaning walls. It is the <strong>main cleaner</strong> for daily cleaning.</p>
                        
                        <h3>2. Visual Color Note</h3>
                        <p class="highlight-box">Although the label is ORANGE, the concentrated liquid is <strong>BLUE/GREENISH</strong>. When diluted in the bucket, the water turns light blue.</p>

                        <h3>3. What is it?</h3>
                        <p>Chlorinated disinfectant cleaner. It does two jobs:</p>
                        <ul>
                            <li><strong>Cleans:</strong> Breaks down grease and dirt.</li>
                            <li><strong>Disinfects:</strong> Kills bacteria and fungi thanks to its chlorine base.</li>
                        </ul>

                        <h3>4. Where to use?</h3>
                        <ul>
                            <li>Kitchen floor.</li>
                            <li>Tiled walls.</li>
                            <li>Trash cans (to remove odors).</li>
                            <li>Drains.</li>
                        </ul>

                        <h3>5. How to apply</h3>
                        <p>Dilution via dispenser machine. No rinsing needed on most floors; mop and <strong>let air dry</strong>.</p>
                        
                        <h3 class="danger-title">SAFETY</h3>
                        <p class="highlight-box"><strong>CRITICAL WARNING!</strong> If concentrated liquid (dark blue straight from the container) gets in eyes or on skin, wash immediately with <strong>plenty of water</strong>.</p>
                    </div>
                `
            },
            {
                id: "floor-cleaner",
                image: "images/floor-cleaner.jpg",
                name: "Floor Cleaner",
                tagline: "High Power Detergent",
                desc: "Designed to break heavy grease layers on floors before disinfection.",
                steps: [
                    "Use for pre-scrubbing.",
                    "Removes stubborn grease."
                ],
                warning: "",
                colorClass: "border-floor",
                textClass: "text-floor",
                details: `
                    <div class="modal-lesson">
                        <h3>1. What it's for</h3>
                        <p>High-performance floor cleaner designed to remove accumulated grease and restore traction to the floor (so it doesn't slip).</p>
                        
                        <h3>2. Why is it different from Future?</h3>
                        <p class="highlight-box"><strong>Future DC</strong> is for daily disinfection. <strong>Floor Cleaner</strong> is a degreaser that attacks organic grease and oil.</p>
                        
                        <h3>3. Where to use?</h3>
                        <ul>
                            <li>Cooking areas and fryers.</li>
                            <li>Any area where the floor feels slippery.</li>
                            <li>Floors with heavy grease buildup.</li>
                        </ul>

                        <h3>4. Manual Instructions</h3>
                        <ul>
                            <li><strong>Hot Water:</strong> Works much better with hot water to melt the grease.</li>
                            <li><strong>No-Rinse:</strong> Normally doesn't need rinsing, but it's vital to let the floor dry completely.</li>
                        </ul>

                        <h3 class="danger-title">5. Safety</h3>
                        <div class="highlight-box">
                            <p><strong>⚠️ 'Wet Floor' Sign: Mandatory.</strong> While wet, the floor can be very slippery until it dries.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "greasecutter",
                image: "images/greasecutter.webp",
                name: "Greasecutter",
                tagline: "High Performance Degreaser",
                desc: "For exhaust hoods, ovens, and grills. Use on cold or warm surfaces.",
                steps: [
                    "Apply on carbonized grease.",
                    "Let sit according to instructions."
                ],
                warning: "CORROSIVE: ALWAYS RINSE ABUNDANTLY with water.",
                colorClass: "border-brown",
                textClass: "text-brown",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Purpose</h3>
                        <p>Eliminate burnt grease in ovens, griddles, and hoods. It is an aggressive degreaser for carbonized (black and sticky) grease.</p>
                        
                        <h3>2. Where TO use?</h3>
                        <ul>
                            <li>Ovens and grills (interior and racks).</li>
                            <li>Exhaust hood filters (if steel).</li>
                            <li>Cooking griddles after service.</li>
                        </ul>

                        <h3 class="danger-title">3. Where NOT to use? (CRITICAL)</h3>
                        <p class="highlight-box"><strong>DO NOT use on Aluminum</strong> (it turns black irreversibly), marble, granite, wood, or soft plastics.</p>

                        <h3>4. Safety Golden Rules</h3>
                        <ul>
                            <li><strong>⚠️ Mandatory Protection:</strong> Wear rubber gloves and goggles 🧤👓. It is <strong>CORROSIVE</strong> and burns skin and eyes.</li>
                            <li><strong>🚿 Rinsing:</strong> Unlike the red product, this <strong>ALWAYS</strong> requires rinsing with plenty of water. No residue must remain.</li>
                            <li><strong>🌬️ Ventilation:</strong> Do not breathe the vapor if applied on hot surfaces.</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "lime-a-way",
                image: "images/lime-a-way.webp",
                name: "Lime-A-Way",
                tagline: "Acid Descaler",
                desc: "Removes lime scale in dishwashers and bain-maries.",
                steps: [],
                warning: "FATAL DANGER: NEVER MIX WITH CHLORINE PRODUCTS (like Future DC). Releases toxic chlorine gas.",
                colorClass: "border-green",
                textClass: "text-green",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Purpose</h3>
                        <p>Remove white lime scale and mineral stains. It is an acid descaler that 'melts' calcium and magnesium.</p>
                        
                        <h3>2. Usage Scenarios</h3>
                        <ul>
                            <li><strong>Dishmachine:</strong> Most important use. Cleans the interior and unclogs water jets when they turn white.</li>
                            <li><strong>Bathrooms & Faucets:</strong> Removes white crusts around taps and walls.</li>
                            <li><strong>Steam Tables (Bain-Marie):</strong> Cleans the bottom where lime accumulates from hot water in seconds.</li>
                        </ul>

                        <h3>3. How to use</h3>
                        <p>Apply to the stain or add to the machine water. If it bubbles (effervescence), it is working. <strong>ALWAYS rinse very well with water</strong>.</p>

                        <h3 class="danger-title">CRITICAL SAFETY</h3>
                        <div class="highlight-box">
                            <p><strong>☠️ CHLORINE GAS DANGER</strong></p>
                            <p><strong>NEVER</strong> mix with chlorine or bleach (like Future DC).</p>
                            <p>This is the most important warning in training.</p>
                        </div>

                        <h3>4. Protection</h3>
                        <p>Wear gloves 🧤. Being acidic, it will sting a lot if you have any small cuts on your skin.</p>
                    </div>
                `
            },
            {
                id: "miraglo",
                image: "images/miraglo.jpg",
                name: "Miraglo",
                tagline: "Glass & Shiny Surface Cleaner",
                desc: "Fast-drying cleaner that leaves no streaks.",
                steps: [],
                warning: "DO NOT use on food preparation surfaces.",
                colorClass: "border-light-blue",
                textClass: "text-light-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Purpose</h3>
                        <p>Glass, mirrors, and shiny surfaces. Dries very fast and leaves no streaks or 'fog'.</p>
                        
                        <h3>2. Where to use?</h3>
                        <ul>
                            <li><strong>Glass and mirrors:</strong> ✨ Windows and bathroom mirrors.</li>
                            <li><strong>Display cases:</strong> Food exposure.</li>
                            <li><strong>Stainless Steel:</strong> To remove fingerprints on fridges and counters.</li>
                            <li><strong>Screens and keyboards:</strong> (⚠️ always apply to cloth, never direct).</li>
                        </ul>

                        <h3>3. Pro Tip (How to use)</h3>
                        <ul>
                            <li>Spray little (don't soak).</li>
                            <li>Use clean microfiber cloth or paper.</li>
                            <li>Technique: <strong>Zag-zag from top to bottom</strong>.</li>
                        </ul>

                        <h3 class="danger-title">CRITICAL / What NOT to do</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ NOT a disinfectant:</strong> If there are food scraps or meat blood, use <strong>22 Multi-Quat</strong>.</p>
                            <p><strong>⛔ NOT for heavy grease:</strong> For hoods with grease use <strong>Greasecutter</strong>.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "medallion",
                image: "images/medallion.jpg",
                name: "Medallion",
                tagline: "Stainless Steel Polish",
                desc: "Specific protective polish for stainless steel surfaces. Effectively removes fingerprints and watermarks, leaving a durable protective film that repels dirt and dust on kitchen machinery and furniture.",
                steps: [
                    "• Does not leave oily residue if applied correctly.",
                    "• Protects against light corrosion."
                ],
                warning: "PROHIBITED inside food containers or on cutting boards.",
                colorClass: "border-white",
                textClass: "text-white",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Purpose</h3>
                        <p>It is NOT a cleaner. It is used to protect and polish stainless steel, repelling fingerprints and water drops.</p>
                        
                        <h3>2. Where to use?</h3>
                        <ul>
                            <li>Fridge exteriors.</li>
                            <li>Ice machines.</li>
                            <li>Oven panels (outside).</li>
                            <li>Stainless steel surfaces in customer view.</li>
                        </ul>

                        <h3>3. 'Less is More' Technique (How to use)</h3>
                        <ul>
                            <li><strong>1. Pre-cleaning:</strong> The surface must be clean and dry first (Medallion does not remove grease).</li>
                            <li><strong>2. Application:</strong> Put a small amount on a dry cloth (never directly on metal).</li>
                            <li><strong>3. Rub:</strong> Follow the steel grain (the tiny lines of the metal).</li>
                            <li><strong>4. Polish:</strong> Use a clean part of the cloth to remove excess oil.</li>
                        </ul>

                        <h3 class="danger-title">SAFETY GOLDEN RULE (Critical)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ NEVER use on food contact surfaces</strong></p>
                            <p>(cutting boards, oven interiors, prep tables). It is a mineral oil and would contaminate food.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "clean-soft",
                image: "images/clean-soft.jpg",
                name: "Clean & Soft AB",
                tagline: "Antibacterial Soap (AB)",
                desc: "Specific soap for staff hand disinfection.",
                steps: [
                    "1. Wet hands.",
                    "2. Apply soap.",
                    "3. Rub for 20 SECONDS (include between fingers, nails, and wrists).",
                    "4. Rinse and dry with paper."
                ],
                warning: "Strictly follow the rubbing time.",
                colorClass: "border-dark-blue",
                textClass: "text-dark-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. Main Information</h3>
                        <p><strong>What it's for:</strong> Mandatory personal hygiene before handling food.</p>
                        <p><strong>Usage:</strong> Exclusively in kitchen handwashing sinks.</p>
                        
                        <h3>2. What does 'AB' mean?</h3>
                        <p class="highlight-box">Stands for <strong>Antibacterial</strong>. Drastically reduces microorganisms, unlike common soap.</p>
                        <p><strong>Location:</strong> Wall dispensers. Never used for washing dishes.</p>

                        <h3>3. Technical Characteristics</h3>
                        <ul>
                            <li><strong>Color:</strong> Dark Blue label.</li>
                            <li><strong>Properties:</strong> Contains moisturizing agents. Prevents skin from cracking even if you wash 50 times a day.</li>
                        </ul>

                        <h3>4. The Washing Process (Training Standard)</h3>
                        <ul>
                            <li><strong>Wet:</strong> Use hot water (as hot as you can stand).</li>
                            <li><strong>Dose:</strong> Apply Clean & Soft AB.</li>
                            <li><strong>Rub:</strong> Vigorously for <strong>20 seconds</strong> (fingers, nails, and wrists).</li>
                            <li><strong>Rinse:</strong> With plenty of water.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    th: {
        clickHint: "แตะเพื่อดูข้อมูลเพิ่มเติม",
        title: "คู่มือเทคนิค ECOLAB",
        quizBtn: "สอบ 🎓",
        quizTitleBase: "แบบทดสอบความปลอดภัย",
        quizQuestionLabel: "คำถามที่",
        quizOf: "จาก",
        quizRestart: "ลองอีกครั้ง",
        quizFeedbackCorrect: "ถูกต้อง! ✅",
        quizFeedbackIncorrect: "ไม่ถูกต้อง ❌",
        quizResultExcellence: "ขอแสดงความยินดี! 🌟 คุณผ่านการทดสอบด้วยคะแนนดีเยี่ยม คุณคือผู้เชี่ยวชาญของ Ecolab",
        quizResultGood: "ทำได้ดีมาก 👍 แต่คุณต้องทบทวนอีกสักนิดเพื่อจะเป็นผู้เชี่ยวชาญ",
        quizResultStudy: "สู้ๆ นะ! 💪 คุณต้องศึกษาเอกสารทางเทคนิคเพิ่มเติมก่อนที่จะลองอีกครั้ง",
        returnToStart: "กลับสู่หน้าหลัก",
        modalTitlePrefix: "คำแนะนำสำหรับ",
        quizQuestions: {
            purpose: "ผลิตภัณฑ์ {name} ใช้สำหรับอะไร?",
            danger: "อันตรายหลักของ {name} คืออะไร?",
            forbidden: "จุดไหนที่ห้ามใช้ {name} โดยเด็ดขาด?"
        },
        productQuizBtn: "🎯 ทดสอบผลิตภัณฑ์",
        returnToProduct: "กลับไปที่สินค้า",
        products: [
            {
                id: "multi-quat",
                image: "images/multi-quat.png",
                name: "22 Multi-Quat",
                tagline: "น้ำยาฆ่าเชื้อรุ่นที่ 4 (4th Gen)",
                desc: "น้ำยาฆ่าเชื้อสำหรับเขียง อุปกรณ์เครื่องครัว และพื้นผิวสัมผัสอาหาร (ไม่ใช่น้ำยาขจัดคราบมัน)",
                steps: [
                    "1. ทำความสะอาดและล้างพื้นผิวด้วยน้ำและสบู่",
                    "2. ใช้น้ำยาฆ่าเชื้อ"
                ],
                warning: "กฎเหล็ก: ห้ามล้างน้ำเปล่าตามหลังฉีด (No-Rinse) เพื่อป้องกันการปนเปื้อนซ้ำจากน้ำประปา",
                colorClass: "border-red",
                textClass: "text-red",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ข้อมูลหลัก</h3>
                        <p><strong>ใช้สำหรับ:</strong> ฆ่าเชื้อบนเคาน์เตอร์ เขียง จาน และช้อนส้อม</p>
                        <p><strong>วิธีใช้:</strong> ฉีดพ่นบนพื้นผิวที่สะอาดแล้วปล่อยให้แห้งเอง ไม่ต้องล้างน้ำออก</p>
                        <p><strong>ในการฝึกอบรม:</strong> คุณจะเห็นว่าใช้กับทุกสิ่งที่สัมผัสอาหารโดยตรง</p>
                        
                        <h3>2. หน้าที่ที่แท้จริง (การฆ่าเชื้อขั้นสุดท้าย)</h3>
                        <p>ไม่ใช่น้ำยาขจัดคราบมัน หากมีคราบซอสบนโต๊ะแล้วคุณฉีดน้ำยาสีแดง คุณแค่ 'ฆ่าเชื้อบนซอส' แต่คราบยังคงอยู่</p>
                        <ul>
                            <li><strong>ขั้นตอนที่ 1:</strong> ล้างสิ่งสกปรกด้วยน้ำและสบู่</li>
                            <li><strong>ขั้นตอนที่ 2:</strong> ใช้ 22 Multi-Quat เพื่อฆ่าเชื้อโรค</li>
                        </ul>

                        <h3 class="danger-title">3. แนวคิด 'No-Rinse' (ไม่ต้องล้างน้ำออก)</h3>
                        <p class="highlight-box">นี่คือส่วนที่สำคัญที่สุด เมื่อเจือจางถูกต้อง จะปลอดภัยต่อสุขภาพ</p>
                        <p><strong>การใช้:</strong> ฉีดพ่นเคาน์เตอร์หรือจุ่มช้อนส้อมในน้ำยา และ <strong>"ห้าม" ล้างด้วยน้ำเปล่าตาม</strong> หากล้างด้วยน้ำประปา อาจทำให้กลับมาปนเปื้อนได้ ปล่อยให้แห้งเอง</p>

                        <h3>4. คุณจะใช้ที่ไหน?</h3>
                        <ul>
                            <li><strong>เขียง:</strong> ทุกครั้งที่เปลี่ยนประเภทอาหาร (เช่น เนื้อสัตว์เป็นผัก)</li>
                            <li><strong>เคาน์เตอร์:</strong> ตอนเริ่มงานและเลิกงาน</li>
                            <li><strong>อุปกรณ์:</strong> ที่คีบ มีด หรือภาชนะใส่อาหาร</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "future-dc",
                image: "images/future-dc.webp",
                name: "Future DC",
                tagline: "น้ำยาทำความสะอาดฆ่าเชื้อผสมคลอรีน",
                desc: "น้ำยาเข้มข้นสีฟ้า สำหรับพื้นและผนังครัว",
                steps: [
                    "ฆ่าเชื้อแบคทีเรียได้อย่างมีประสิทธิภาพ",
                    "ทำให้ร่องยาแนวขาวสะอาด"
                ],
                warning: "ผลิตภัณฑ์มีส่วนผสมของคลอรีน",
                colorClass: "border-orange",
                textClass: "text-orange",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ใช้สำหรับ (What it's for)</h3>
                        <p>ถูพื้นและทำความสะอาดผนัง เป็น <strong>น้ำยาหลัก</strong> สำหรับทำความสะอาดประจำวัน</p>
                        
                        <h3>2. ข้อสังเกตเรื่องสี</h3>
                        <p class="highlight-box">แม้ฉลากจะเป็น <strong>สีส้ม</strong> แต่น้ำยาเข้มข้นเป็น <strong>สีฟ้า/เขียว</strong> เมื่อผสมลงในถังน้ำ น้ำจะเป็นสีฟ้าอ่อน</p>

                        <h3>3. สิ่งนี้คืออะไร?</h3>
                        <p>น้ำยาทำความสะอาดฆ่าเชื้อผสมคลอรีน ทำงาน 2 อย่าง:</p>
                        <ul>
                            <li><strong>ทำความสะอาด:</strong> สลายคราบไขมันและสิ่งสกปรก</li>
                            <li><strong>ฆ่าเชื้อ:</strong> ฆ่าแบคทีเรียและเชื้อราด้วยส่วนผสมของคลอรีน</li>
                        </ul>

                        <h3>4. ใช้ที่ไหน?</h3>
                        <ul>
                            <li>พื้นครัว</li>
                            <li>ผนังกระเบื้อง</li>
                            <li>ถังขยะ (เพื่อขจัดกลิ่น)</li>
                            <li>ท่อระบายน้ำ</li>
                        </ul>

                        <h3>5. วิธีใช้</h3>
                        <p>ผสมผ่านเครื่องจ่าย ไม่จำเป็นต้องล้างน้ำออกสำหรับพื้นส่วนใหญ่; ถูและ <strong>ปล่อยให้แห้งเอง</strong></p>
                        
                        <h3 class="danger-title">ความปลอดภัย</h3>
                        <p class="highlight-box"><strong>คำเตือนสำคัญ!</strong> หากน้ำยาเข้มข้น (สีฟ้าเข้มจากแกลลอน) สัมผัสตาหรือผิวหนัง ให้ล้างออกทันทีด้วย <strong>น้ำปริมาณมาก</strong></p>
                    </div>
                `
            },
            {
                id: "floor-cleaner",
                image: "images/floor-cleaner.jpg",
                name: "Floor Cleaner",
                tagline: "น้ำยาถูพื้นพลังสูง",
                desc: "ออกแบบมาเพื่อสลายชั้นไขมันหนาบนพื้นก่อนการฆ่าเชื้อ",
                steps: [
                    "ใช้สำหรับขัดพื้นเบื้องต้น",
                    "ขจัดคราบไขมันฝังแน่น"
                ],
                warning: "",
                colorClass: "border-floor",
                textClass: "text-floor",
                details: `
                    <div class="modal-lesson">
                        <h3>1. วัตถุประสงค์</h3>
                        <p>เป็นน้ำยาทำความสะอาดพื้นประสิทธิภาพสูง ออกแบบมาเพื่อขจัดคราบไขมันสะสมและช่วยให้พื้นยึดเกาะได้ดีขึ้น (ป้องกันการลื่น)</p>
                        
                        <h3>2. ทำไมถึงต่างจาก Future?</h3>
                        <p class="highlight-box"><strong>Future DC</strong> ใช้สำหรับฆ่าเชื้อประจำวัน ส่วน <strong>Floor Cleaner</strong> เป็นน้ำยาขจัดคราบไขมันที่กำจัดไขมันและน้ำมันเครื่อง</p>
                        
                        <h3>3. ใช้ที่ไหน?</h3>
                        <ul>
                            <li>บริเวณปรุงอาหารและหม้อทอด</li>
                            <li>บริเวณใดก็ตามที่พื้นรู้สึกมันหรือลื่น</li>
                            <li>พื้นที่มีคราบไขมันสะสมหนา</li>
                        </ul>

                        <h3>4. คำแนะนำตามคู่มือ</h3>
                        <ul>
                            <li><strong>น้ำร้อน:</strong> ทำงานได้ดีกว่ามากเมื่อใช้น้ำร้อนเพื่อละลายไขมัน</li>
                            <li><strong>ไม่ต้องล้างออก:</strong> ปกติไม่จำเป็นต้องล้างน้ำออก แต่ต้องรอให้พื้นแห้งสนิท</li>
                        </ul>

                        <h3 class="danger-title">5. ความปลอดภัย</h3>
                        <div class="highlight-box">
                            <p><strong>⚠️ ป้าย 'ระวังพื้นเปียก': บังคับต้องใช้</strong> ในขณะที่พื้นยังเปียกอยู่ อาจลื่นมากจนกว่าจะแห้งสะอาด</p>
                        </div>
                    </div>
                `
            },
            {
                id: "greasecutter",
                image: "images/greasecutter.webp",
                name: "Greasecutter",
                tagline: "น้ำยาขจัดคราบไขมันประสิทธิภาพสูง",
                desc: "สำหรับฮู้ดดูดควัน เตาอบ และตะแกรงย่าง (ใช้บนพื้นผิวเย็นหรืออุ่น)",
                steps: [
                    "ฉีดลงบนคราบไขมันไหม้",
                    "ทิ้งไว้ตามคำแนะนำ"
                ],
                warning: "ฤทธิ์กัดกร่อน: ต้องล้างออกด้วยน้ำปริมาณมากเสมอ",
                colorClass: "border-brown",
                textClass: "text-brown",
                details: `
                    <div class="modal-lesson">
                        <h3>1. วัตถุประสงค์</h3>
                        <p>ขจัดคราบไขมันไหม้ในเตาอบ เตาแม่เหล็ก และฮู้ดดูดควัน เป็นน้ำยาขจัดคราบมันที่รุนแรงสำหรับคราบไหม้ (สีดำและเหนียว)</p>
                        
                        <h3>2. ใช้ที่ไหนได้บ้าง?</h3>
                        <ul>
                            <li>เตาอบและตะแกรงย่าง (ภายในและตะแกรง)</li>
                            <li>ฟิลเตอร์ฮู้ดดูดควัน (ถ้าเป็นสแตนเลส)</li>
                            <li>เตาแม่เหล็กหรือกระทะแบนหลังเลิกงาน</li>
                        </ul>

                        <h3 class="danger-title">3. ห้ามใช้ที่ไหน? (วิกฤต)</h3>
                        <p class="highlight-box"><strong>ห้ามใช้กับ อะลูมิเนียม</strong> (จะทำให้ดำถาวร), หินอ่อน, แกรนิต, ไม้ หรือพลาสติกอ่อน</p>

                        <h3>4. กฎเหล็กความปลอดภัย</h3>
                        <ul>
                            <li><strong>⚠️ การป้องกันบังคับ:</strong> สวมถุงมือยางและแว่นตา 🧤👓 มัน <strong>กัดกร่อน (Corrosive)</strong> และทำให้ผิวหนังและตาไหม้ได้</li>
                            <li><strong>🚿 การล้างออก:</strong> ต่างจากสีแดง ตัวนี้ <strong>ต้องล้างออกด้วยน้ำปริมาณมากเสมอ</strong> ห้ามมีสารตกค้าง</li>
                            <li><strong>🌬️ การระบายอากาศ:</strong> ห้ามสูดดมไอระเหยหากใช้บนพื้นผิวร้อน</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "lime-a-way",
                image: "images/lime-a-way.webp",
                name: "Lime-A-Way",
                tagline: "น้ำยาขจัดคราบตะกรัน (กรด)",
                desc: "ขจัดคราบหินปูนในเครื่องล้างจานและอ่างอุ่นอาหาร",
                steps: [],
                warning: "อันตรายถึงชีวิต: ห้ามผสมกับผลิตภัณฑ์ที่มีคลอรีน (เช่น Future DC) จะเกิดก๊าซคลอรีนพิษ",
                colorClass: "border-green",
                textClass: "text-green",
                details: `
                    <div class="modal-lesson">
                        <h3>1. วัตถุประสงค์</h3>
                        <p>ขจัดคราบขาวของตะกรันและแร่ธาตุ เป็นน้ำยาขจัดคราบตะกรันชนิดกรดที่ช่วย 'ละลาย' แคลเซียมและแมกนีเซียม</p>
                        
                        <h3>2. สถานการณ์การใช้งาน (Usage Scenarios)</h3>
                        <ul>
                            <li><strong>เครื่องล้างจาน:</strong> การใช้งานที่สำคัญที่สุด ทำความสะอาดภายในและแก้ปัญหาหัวฉีดตันเมื่อมีคราบขาว</li>
                            <li><strong>ห้องน้ำและก๊อกน้ำ:</strong> ขจัดคราบแข็งสีขาวรอบก๊อกน้ำและผนัง</li>
                            <li><strong>โต๊ะอุ่นอาหาร (Bain-Marie):</strong> ทำความสะอาดก้นอ่างที่มีตะกรันสะสมจากน้ำร้อนได้ในไม่กี่วินาที</li>
                        </ul>

                        <h3>3. วิธีใช้ (How to use)</h3>
                        <p>ป้ายลงบนคราบหรือเติมลงในน้ำของเครื่อง หากมีฟองฟู่ (Effervescence) แสดงว่าน้ำยากำลังทำงาน <strong>ต้องล้างออกด้วยน้ำสะอาดให้เกลี้ยงเสมอ</strong></p>

                        <h3 class="danger-title">ความปลอดภัยขั้นวิกฤต</h3>
                        <div class="highlight-box">
                            <p><strong>☠️ อันตรายจากก๊าซคลอรีน</strong></p>
                            <p><strong>"ห้าม"</strong> ผสมกับคลอรีนหรือน้ำยาฟอกขาว (เช่น Future DC) เด็ดขาด</p>
                            <p>นี่คือคำเตือนที่สำคัญที่สุดในการฝึกอบรม</p>
                        </div>

                        <h3>4. การป้องกัน (Protection)</h3>
                        <p>สวมถุงมือ 🧤 เนื่องจากเป็นกรด จะทำให้แสบมากหากคุณมีแผลเล็กๆ บนผิวหนัง</p>
                    </div>
                `
            },
            {
                id: "miraglo",
                image: "images/miraglo.jpg",
                name: "Miraglo",
                tagline: "น้ำยาเช็ดกระจกและพื้นผิวเงา",
                desc: "แห้งไว ไม่ทิ้งคราบ",
                steps: [],
                warning: "ห้ามใช้บนพื้นผิวเตรียมอาหาร",
                colorClass: "border-light-blue",
                textClass: "text-light-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. วัตถุประสงค์</h3>
                        <p>กระจก กระจกเงา และพื้นผิวเงางาม แห้งเร็วมากและไม่ทิ้งคราบหรือ 'ฝ้า'</p>
                        
                        <h3>2. ใช้ที่ไหน?</h3>
                        <ul>
                            <li><strong>กระจกและกระจกเงา:</strong> ✨ หน้าต่างและกระจกห้องน้ำ</li>
                            <li><strong>ตู้โชว์อาหาร:</strong> สำหรับจัดแสดงอาหาร</li>
                            <li><strong>สแตนเลส:</strong> ลบรอยนิ้วมือบนตู้เย็นและเคาน์เตอร์</li>
                            <li><strong>หน้าจอและคีย์บอร์ด:</strong> (⚠️ ฉีดใส่ผ้าเสมอ ห้ามฉีดใส่โดยตรง)</li>
                        </ul>

                        <h3>3. เคล็ดลับมือโปร</h3>
                        <ul>
                            <li>ฉีดเพียงเล็กน้อย (อย่าให้ชุ่ม)</li>
                            <li>ใช้ผ้าไมโครไฟเบอร์สะอาดหรือกระดาษ</li>
                            <li>เทคนิค: <strong>เช็ดแบบซิกแซกจากบนลงล่าง</strong></li>
                        </ul>

                        <h3 class="danger-title">ข้อห้าม (CRITICAL)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ ไม่ใช่ยาฆ่าเชื้อ:</strong> หากมีเศษอาหารหรือเลือดสัตว์ ให้ใช้ <strong>22 Multi-Quat</strong></p>
                            <p><strong>⛔ ไม่ใช่สำหรับคราบมันหนัก:</strong> สำหรับฮู้ดที่มีคราบมัน ให้ใช้ <strong>Greasecutter</strong></p>
                        </div>
                    </div>
                `
            },
            {
                id: "medallion",
                image: "images/medallion.jpg",
                name: "Medallion",
                desc: "น้ำยาขัดเงาและเคลือบปกป้องพื้นผิวสแตนเลสโดยเฉพาะ ขจัดรอยนิ้วมือและคราบน้ำได้อย่างมีประสิทธิภาพ พร้อมสร้างชั้นฟิล์มปกป้องที่ทนทาน ช่วยป้องกันฝุ่นและสิ่งสกปรกบนเครื่องจักรและเครื่องครัว",
                steps: [
                    "• ไม่ทิ้งคราบมันเหนอะหนะหากใช้งานอย่างถูกวิธี",
                    "• ช่วยป้องกันการกัดกร่อนหรือสนิมเล็กน้อย"
                ],
                warning: "ห้ามใช้ภายในภาชนะใส่อาหารหรือเขียง",
                colorClass: "border-white",
                textClass: "text-white",
                details: `
                    <div class="modal-lesson">
                        <h3>1. วัตถุประสงค์</h3>
                        <p>ไม่ใช่ผลิตภัณฑ์ทำความสะอาด ใช้เพื่อปกป้องและเพิ่มความเงางามให้กับสแตนเลส ป้องกันรอยนิ้วมือและหยดน้ำ</p>
                        
                        <h3>2. ใช้ที่ไหน?</h3>
                        <ul>
                            <li>ภายนอกตู้เย็น</li>
                            <li>เครื่องทำน้ำแข็ง</li>
                            <li>แผงเตาอบ (ภายนอก)</li>
                            <li>พื้นผิวสแตนเลสที่ลูกค้ามองเห็น</li>
                        </ul>

                        <h3>3. เทคนิค 'น้อยคือมาก'</h3>
                        <ul>
                            <li><strong>1. ทำความสะอาดก่อน:</strong> พื้นผิวต้องสะอาดและแห้งก่อน (Medallion ไม่ช่วยขจัดคราบมัน)</li>
                            <li><strong>2. การลงน้ำยา:</strong> หยดจำนวนเล็กน้อยลงบนผ้าแห้ง (ห้ามฉีดใส่โลหะโดยตรง)</li>
                            <li><strong>3. ขัด:</strong> ขัดตามลายเส้นของสแตนเลส (เส้นเล็กๆ บนผิวโลหะ)</li>
                            <li><strong>4. ขึ้นเงา:</strong> ใช้ผ้าส่วนที่สะอาดเช็ดน้ำมันส่วนเกินออก</li>
                        </ul>

                        <h3 class="danger-title">กฎเหล็กความปลอดภัย (CRITICAL)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ ห้ามใช้บนพื้นผิวที่สัมผัสอาหารเด็ดขาด</strong></p>
                            <p>(เขียง ภายในเตาอบ โต๊ะเตรียมอาหาร) เป็นน้ำมันแร่และจะปนเปื้อนในอาหารได้</p>
                        </div>
                    </div>
                `
            },
            {
                id: "clean-soft",
                image: "images/clean-soft.jpg",
                name: "Clean & Soft AB",
                tagline: "สบู่เหลวแอนตี้แบคทีเรีย (AB)",
                desc: "สบู่สำหรับฆ่าเชื้อที่มือพนักงานโดยเฉพาะ",
                steps: [
                    "1. ล้างมือให้เปียก",
                    "2. กดสบู่",
                    "3. ถู 20 วินาที (ซอกนิ้ว เล็บ และข้อมือ)",
                    "4. ล้างออกและเช็ดให้แห้ง"
                ],
                warning: "ต้องปฏิบัติตามเวลาในการถูมืออย่างเคร่งครัด",
                colorClass: "border-dark-blue",
                textClass: "text-dark-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ข้อมูลหลัก</h3>
                        <p><strong>วัตถุประสงค์:</strong> สุขอนามัยส่วนบุคคลบังคับก่อนสัมผัสอาหาร</p>
                        <p><strong>การใช้งาน:</strong> เฉพาะในอ่างล้างมือในครัวเท่านั้น (handwashing sinks)</p>
                        
                        <h3>2. 'AB' หมายถึงอะไร?</h3>
                        <p class="highlight-box">หมายถึง <strong>Antibacterial</strong> (ยาฆ่าเชื้อ) ช่วยลดจุลินทรีย์ได้อย่างมาก ต่างจากสบู่ทั่วไป</p>
                        <p><strong>ตำแหน่ง:</strong> เครื่องจ่ายสบู่แบบติดผนัง ห้ามใช้ล้างจานเด็ดขาด</p>

                        <h3>3. คุณลักษณะทางเทคนิค</h3>
                        <ul>
                            <li><strong>สี:</strong> ฉลากสีน้ำเงินเข้ม</li>
                            <li><strong>คุณสมบัติ:</strong> มีส่วนผสมของสารเพิ่มความชุ่มชื้น ป้องกันผิวแห้งแม้ล้างมือบ่อย</li>
                        </ul>

                        <h3>4. ขั้นตอนการล้างมือ (มาตรฐานการฝึกอบรม)</h3>
                        <ul>
                            <li><strong>ล้างน้ำ:</strong> ใช้น้ำร้อน (ร้อนที่สุดเท่าที่ทนได้)</li>
                            <li><strong>ปริมาณ:</strong> กดสบู่ Clean & Soft AB</li>
                            <li><strong>ถู:</strong> ถูอย่างแรงเป็นเวลา <strong>20 วินาที</strong> (ระหว่างนิ้ว เล็บ และข้อมือ)</li>
                            <li><strong>ล้างออก:</strong> ด้วยน้ำสะอาดปริมาณมาก</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    my: {
        clickHint: "အချက်အလက်ပိုမိုသိရှိရန် နှိပ်ပါ",
        title: "ECOLAB နည်းပညာလက်စွဲ",
        quizBtn: "စာမေးပွဲ 🎓",
        quizTitleBase: "ဘေးကင်းရေး စစ်ဆေးမှု",
        quizQuestionLabel: "မေးခွန်း",
        quizOf: "၏",
        quizRestart: "ပြန်ကြိုးစားပါ",
        quizFeedbackCorrect: "မှန်ကန်သည်! ✅",
        quizFeedbackIncorrect: "မမှန်ပါ ❌",
        quizResultExcellence: "ဂုဏ်ယူပါသည်! 🌟 သင်သည် ထူးချွန်စွာ အောင်မြင်ခဲ့ပါသည်။ သင်သည် Ecolab ကျွမ်းကျင်သူတစ်ဦး ဖြစ်ပါသည်။",
        quizResultGood: "ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်ခဲ့သည် 👍 သို့သော် ကျွမ်းကျင်သူဖြစ်ရန် အနည်းငယ် ထပ်မံ လေ့လာရန် လိုအပ်ပါသည်။",
        quizResultStudy: "အားတင်းထားပါ! 💪 နောက်တစ်ကြိမ် မကြိုးစားမီ နည်းပညာဆိုင်ရာ အချက်အလက်များကို ပိုမို လေ့လာရန် လိုအပ်ပါသည်။",
        returnToStart: "အစသို့ ပြန်သွားရန်",
        modalTitlePrefix: "လမ်းညွှန်ချက်များ",
        quizQuestions: {
            purpose: "{name} ကို ဘာအတွက် အသုံးပြုသလဲ?",
            danger: "{name} ၏ အဓိက ဘေးအန္တရာယ်မှာ ဘာလဲ?",
            forbidden: "{name} ကို မည်သည့်နေရာတွင် လုံးဝ မသုံးရသလဲ?"
        },
        productQuizBtn: "🎯 ထုတ်ကုန်စမ်းသပ်မှု",
        returnToProduct: "ထုတ်ကုန်သို့ ပြန်သွားရန်",
        products: [
            {
                id: "multi-quat",
                image: "images/multi-quat.png",
                name: "22 Multi-Quat",
                tagline: "စတုတ္ထမျိုးဆက် ပိုးသတ်ဆေး",
                desc: "စဉ့်နှီတုံးများ၊ အသုံးအဆောင်များနှင့် အစားအစာထိတွေ့သော မျက်နှာပြင်များအတွက် အထူးပိုးသတ်ဆေး။ (အဆီချွတ်ဆေး မဟုတ်ပါ)",
                steps: [
                    "၁။ ဆပ်ပြာနှင့်ရေဖြင့် ဆေးကြောသန့်စင်ပါ။",
                    "၂။ ပိုးသတ်ဆေးရည်ကို သုံးပါ။"
                ],
                warning: "ရွှေသတ်မှတ်ချက် - ရေပိုက်ခေါင်းရေဖြင့် ပြန်လည်မဆေးကြောရ (ပိုးပြန်ဝင်နိုင်သည်)။",
                colorClass: "border-red",
                textClass: "text-red",
                details: `
                    <div class="modal-lesson">
                        <h3>1. အဓိက အချက်အလက်</h3>
                        <p><strong>အသုံးပြုပုံ:</strong> ကောင်တာများ၊ စဉ့်နှီတုံးများ၊ ပန်းကန်များနှင့် ဇွန်းခက်ရင်းများကို ပိုးသတ်ရန်။</p>
                        <p><strong>သုံးစွဲနည်း:</strong> သန့်ရှင်းသော မျက်နှာပြင်ပေါ်တွင် ဖြန်းပြီး အလိုအလျောက် ခြောက်သွေ့ပါစေ။ ရေပြန်ဆေးရန် မလိုပါ။</p>
                        <p><strong>သင်တန်းတွင်:</strong> အစားအစာနှင့် တိုက်ရိုက်ထိတွေ့သော အရာအားလုံးအတွက် သုံးသည်ကို တွေ့ရမည်။</p>
                        
                        <h3>2. ၎င်း၏ အမှန်တကယ် လုပ်ဆောင်ချက် (Final Disinfection)</h3>
                        <p>၎င်းသည် အဆီချွတ်ဆေး မဟုတ်ပါ။ စားပွဲပေါ်တွင် ဆော့စ်အစွန်းအထင်းရှိနေချိန် ဤဆေးရည်နီကို ဖြန်းပါက 'ဆော့စ်ကို ပိုးသတ်ခြင်း' သာ ဖြစ်ပြီး အစွန်းအထင်း ကျန်နေပါမည်။</p>
                        <ul>
                            <li><strong>အဆင့် ၁:</strong> ရေနှင့် ဆပ်ပြာဖြင့် အညစ်အကြေးကို ဆေးကြောပါ။</li>
                            <li><strong>အဆင့် ၂:</strong> ပိုးမွှားများသေစေရန် 22 Multi-Quat ကို သုံးပါ။</li>
                        </ul>

                        <h3 class="danger-title">3. 'No-Rinse' သဘောတရား (ရေပြန်မဆေးရ)</h3>
                        <p class="highlight-box">၎င်းသည် အရေးကြီးဆုံး အချက်ဖြစ်သည်။ မှန်ကန်စွာ ရောစပ်ထားပါက ကျန်းမာရေးအတွက် ဘေးကင်းပါသည်။</p>
                        <p><strong>အသုံးပြုပုံ:</strong> ကောင်တာကို ဖြန်းပါ သို့မဟုတ် ဇွန်းခက်ရင်းများကို ဆေးရည်ထဲ စိမ်ထားပါ၊ ပြီးနောက် ရေဖြင့် ပြန် <strong>"မဆေးပါနှင့်"</strong>။ ရေပိုက်ခေါင်းရေဖြင့် ဆေးပါက ပိုးပြန်ဝင်နိုင်သည်။ လေဖြင့် အခြောက်ခံပါ။</p>

                        <h3>4. သင် ဘယ်နေရာမှာ သုံးမလဲ?</h3>
                        <ul>
                            <li><strong>စဉ့်နှီတုံးများ:</strong> အစားအစာ အမျိုးအစား ပြောင်းတိုင်း (ဥပမာ - အသားမှ ဟင်းသီးဟင်းရွက်သို့)။</li>
                            <li><strong>ကောင်တာများ:</strong> အလုပ်ချိန် စုံနှင့် ပြီးဆုံးချိန်။</li>
                            <li><strong>အသုံးအဆောင်များ:</strong> ညှပ်များ၊ ဓားများ သို့မဟုတ် ဝန်ဆောင်မှု ပုံးများ။</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "future-dc",
                image: "images/future-dc.webp",
                name: "Future DC",
                tagline: "ကလိုရင်းပါသော ပိုးသတ်သန့်ရှင်းရေးဆေးရည်",
                desc: "မီးဖိုခန်းကြမ်းပြင်နှင့် နံရံများအတွက် အပြာရောင်ဆေးရည်အပြင်း။",
                steps: [
                    "ဘက်တီးရီးယားများကို ထိရောက်စွာ သတ်ပေးသည်။",
                    "ကြွေပြားကြားများကို ဖြူဖွေးစေသည်။"
                ],
                warning: "ကလိုရင်းပါသော ထုတ်ကုန်။",
                colorClass: "border-orange",
                textClass: "text-orange",
                details: `
                    <div class="modal-lesson">
                        <h3>1. အသုံးပြုပုံ</h3>
                        <p>ကြမ်းပြင်တိုက်ရန်နှင့် နံရံများဆေးကြောရန်။ နေ့စဉ် သန့်ရှင်းရေးအတွက် <strong>အဓိက ဆေးရည်</strong> ဖြစ်သည်။</p>
                        
                        <h3>2. အရောင် မှတ်ချက်</h3>
                        <p class="highlight-box">တံဆိပ်မှာ <strong>လိမ္မော်ရောင်</strong> ဖြစ်သော်လည်း ဆေးရည်အပြင်းမှာ <strong>အပြာ/အစိမ်းရောင်</strong> ဖြစ်သည်။ ရေရောလိုက်ပါက အပြာနုရောင် ဖြစ်သွားပါမည်။</p>

                        <h3>3. ဒါဟာ ဘာလဲ?</h3>
                        <p>ကလိုရင်းပါသော ပိုးသတ်သန့်ရှင်းရေးဆေးရည်။ အလုပ်နှစ်မျိုး လုပ်ဆောင်သည် -</p>
                        <ul>
                            <li><strong>သန့်ရှင်းစေသည်:</strong> အဆီနှင့် အညစ်အကြေးများကို ဖြိုခွင်းသည်။</li>
                            <li><strong>ပိုးသတ်ပေးသည်:</strong> ကလိုရင်းပါသဖြင့် ဘက်တီးရီးယားနှင့် မှိုများကို သေစေသည်။</li>
                        </ul>

                        <h3>4. ဘယ်နေရာမှာသုံးမလဲ?</h3>
                        <ul>
                            <li>မီးဖိုခန်းကြမ်းပြင်။</li>
                            <li>ကြွေပြားကပ်နံရံများ။</li>
                            <li>အမှိုက်ပုံးများ (အနံ့ပျောက်စေရန်)။</li>
                            <li>ရေဆင်းပေါက်များ။</li>
                        </ul>

                        <h3>5. သုံးစွဲနည်း</h3>
                        <p>စက်ဖြင့် အချိုးကျ ရောစပ်ပါ။ ကြမ်းပြင်တိုက်ပြီး <strong>အလိုအလျောက် ခြောက်သွေ့ပါစေ</strong>၊ အများအားဖြင့် ရေပြန်ဆေးရန် မလိုပါ။</p>
                        
                        <h3 class="danger-title">ဘေးကင်းရေး</h3>
                        <p class="highlight-box"><strong>အရေးကြီး သတိပေးချက်!</strong> ဆေးရည်အပြင်း (ဘူးထဲမှ အပြာရင့်ရောင်) မျက်လုံး သို့မဟုတ် အရေပြားနှင့် ထိတွေ့မိပါက ရေများများဖြင့် <strong>ချက်ချင်း ဆေးကြောပါ</strong>။</p>
                    </div>
                `
            },
            {
                id: "floor-cleaner",
                image: "images/floor-cleaner.jpg",
                name: "Floor Cleaner",
                tagline: "စွမ်းအားမြင့် ကြမ်းတိုက်ဆေးရည်",
                desc: "ပိုးမသတ်မီ ကြမ်းပြင်ရှိ အဆီအလွှာထူများကို ဖြိုခွင်းရန် ထုတ်လုပ်ထားသည်။",
                steps: [
                    "ကနဦး ပွတ်တိုက်ရန် သုံးပါ။",
                    "ခက်ခဲသော အဆီများကို ဖယ်ရှားသည်။"
                ],
                warning: "",
                colorClass: "border-floor",
                textClass: "text-floor",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ရည်ရွယ်ချက်</h3>
                        <p>စုပုံနေသော အဆီများကို ဖယ်ရှားရန်နှင့် ကြမ်းပြင် ပြန်လည် မချော်စေရန် ဒီဇိုင်းထုတ်ထားသော စွမ်းဆောင်ရည်မြင့် ကြမ်းပြင်သန့်ရှင်းရေးဆေး ဖြစ်သည်။</p>
                        
                        <h3>2. Future နှင့် ဘာကွာသလဲ?</h3>
                        <p class="highlight-box"><strong>Future DC</strong> သည် နေ့စဉ် ပိုးသတ်ရန် ဖြစ်သည်။ <strong>Floor Cleaner</strong> သည် အဆီများကို တိုက်ဖျက်သော အဆီချွတ်ဆေး ဖြစ်သည်။</p>
                        
                        <h3>3. ဘယ်နေရာမှာ သုံးမလဲ?</h3>
                        <ul>
                            <li>ချက်ပြုတ်သည့် နေရာများနှင့် ဆီကြော်အိုးများ။</li>
                            <li>ကြမ်းပြင် ဆီဝေ့နေသော သို့မဟုတ် ချော်နေသော မည်သည့်နေရာမဆို။</li>
                            <li>အဆီများ ထူထပ်စွာ စုပုံနေသော ကြမ်းပြင်များ။</li>
                        </ul>

                        <h3>4. လက်စွဲစာအုပ်ပါ ညွှန်ကြားချက်များ</h3>
                        <ul>
                            <li><strong>ရေနွေး:</strong> အဆီများ အရည်ပျော်စေရန် ရေနွေးဖြင့် သုံးပါက ပိုထိရောက်သည်။</li>
                            <li><strong>ဆေးကြောရန် မလို:</strong> ပုံမှန်အားဖြင့် ရေပြန်ဆေးရန် မလိုသော်လည်း ကြမ်းပြင် လုံးဝ ခြောက်သွေ့အောင် ထားရန် အလွန်အရေးကြီးသည်။</li>
                        </ul>

                        <h3 class="danger-title">၅။ ဘေးကင်းရေး</h3>
                        <div class="highlight-box">
                            <p><strong>⚠️ 'ကြမ်းပြင်စိုသည်' ဆိုင်းဘုတ်: မဖြစ်မနေ သုံးရမည်။</strong> စိုနေစဉ်အတွင်း ကြမ်းပြင်သည် အလွန်ချော်နိုင်ပါသည်။</p>
                        </div>
                    </div>
                `
            },
            {
                id: "greasecutter",
                image: "images/greasecutter.webp",
                name: "Greasecutter",
                tagline: "စွမ်းဆောင်ရည်မြင့် အဆီချွတ်ဆေး",
                desc: "အညှော်စုပ်စက်များ၊ မီးဖိုများနှင့် အကင်စက်များအတွက်။ (အေးသော သို့မဟုတ် နွေးသော မျက်နှာပြင်တွင်သုံးပါ)",
                steps: [
                    "ဂျိုးကပ်နေသော အဆီများပေါ် ဖြန်းပါ။",
                    "ညွှန်ကြားချက်အတိုင်း ထားပါ။"
                ],
                warning: "လောင်စားတတ်သည် - ရေများများဖြင့် အမြဲဆေးချပါ။",
                colorClass: "border-brown",
                textClass: "text-brown",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ရည်ရွယ်ချက်</h3>
                        <p>မီးဖိုများ၊ မီးကင်ပြားများနှင့် အညှော်စုပ်စက်များရှိ ဂျိုးကပ်နေသော အဆီများကို ဖယ်ရှားရန်။ အဆီဂျိုး (မည်းပြီး စေးကပ်နေသော) များအတွက် ပြင်းထန်သော အဆီချွတ်ဆေးဖြစ်သည်။</p>
                        
                        <h3>2. ဘယ်နေရာမှာ သုံးမလဲ?</h3>
                        <ul>
                            <li>မီးဖိုများနှင့် အကင်စက်များ (အတွင်းပိုင်းနှင့် စင်များ)။</li>
                            <li>အညှော်စုပ်စက် ဖစ်လ်တာများ (စတီးဖြစ်လျှင်)။</li>
                            <li>မီးကင်ပြားများ (အလုပ်သိမ်းပြီးချိန်)။</li>
                        </ul>

                        <h3 class="danger-title">3. ဘယ်နေရာမှာ မသုံးရဘူးလဲ? (အရေးကြီး)</h3>
                        <p class="highlight-box"><strong>လူမီနီယမ် ပေါ် လုံးဝမသုံးရ</strong> (အမည်းရောင်ပြောင်းပြီး ပြင်မရတော့ပါ)၊ စကျင်ကျောက်၊ ဂရိတ်နိုက်၊ သစ်သား သို့မဟုတ် ပလပ်စတစ် အပျော့စားများ။</p>

                        <h3>4. ဘေးကင်းရေး ရွှေစည်းကမ်းများ</h3>
                        <ul>
                            <li><strong>⚠️ မဖြစ်မနေ ကာကွယ်ပါ:</strong> ရာဘာလက်အိတ်နှင့် မျက်မှန် တပ်ပါ 🧤👓။ <strong>လောင်စားတတ်သည် (Corrosive)</strong>၊ အရေပြားနှင့် မျက်လုံးကို လောင်စေနိုင်သည်။</li>
                            <li><strong>🚿 ဆေးကြောခြင်း:</strong> အနီရောင်နှင့်မတူပါ၊ ဤအရာကို ရေများများဖြင့် <strong>အမြဲတမ်း ဆေးကြောရမည်</strong>။ အကြွင်းအကျန် မကျန်ရပါ။</li>
                            <li><strong>🌬️ လေဝင်လေထွက်:</strong> ပူသော မျက်နှာပြင်ပေါ် သုံးပါက အငွေ့ကို မရှူမိပါစေနှင့်။</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "lime-a-way",
                image: "images/lime-a-way.webp",
                name: "Lime-A-Way",
                tagline: "အက်စစ် ထုံးချေးချွတ်ဆေး",
                desc: "ပန်းကန်ဆေးစက်များနှင့် ရေနွေးဗန်းများရှိ ထုံးချေးများကို ဖယ်ရှားသည်။",
                steps: [],
                warning: "အသက်အန္တရာယ်ရှိသည် - ကလိုရင်းပါသောပစ္စည်းများ (ဥပမာ Future DC) နှင့် လုံးဝ ရောမသုံးရ။ အဆိပ်ငွေ့ထွက်နိုင်သည်။",
                colorClass: "border-green",
                textClass: "text-green",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ရည်ရွယ်ချက်</h3>
                        <p>ထုံးချေးနှင့် သတ္တုဓာတ်ကြောင့်ဖြစ်သော အကွက်ဖြူများကို ဖယ်ရှားရန်။ ကယ်လ်စီယမ်နှင့် မဂ္ဂနီဆီယမ်ကို 'အရည်ပျော်' စေသော အက်စစ် ထုံးချေးချွတ်ဆေး ဖြစ်သည်။</p>
                        
                        <h3>2. အသုံးပြုနိုင်သော နေရာများ (Usage Scenarios)</h3>
                        <ul>
                            <li><strong>ပန်းကန်ဆေးစက်:</strong> အရေးကြီးဆုံး အသုံးပြုမှု။ အတွင်းပိုင်းကို သန့်ရှင်းစေပြီး ရေပိုက်ခေါင်းများ ဖြူနေပါက ပိတ်ဆို့မှုကို ဖြေရှင်းပေးသည်။</li>
                            <li><strong>ရေချိုးခန်းနှင့် ရေပိုက်ခေါင်းများ:</strong> ရေပိုက်ခေါင်းနှင့် နံရံများအနီးရှိ အဖြူရောင် အတုံးအခဲများကို ဖယ်ရှားသည်။</li>
                            <li><strong>ရေနွေးငွေ့ စားပွဲများ (Bain-Marie):</strong> ရေနွေးကြောင့် ထုံးချေးတက်နေသော အောက်ခြေကို စက္ကန့်ပိုင်းအတွင်း သန့်ရှင်းစေသည်။</li>
                        </ul>

                        <h3>3. အသုံးပြုပုံ (How to use)</h3>
                        <p>အစွန်းအထင်းပေါ် သုတ်လိမ်းပါ သို့မဟုတ် စက်ရေထဲသို့ ထည့်ပါ။ ပူစီဖောင်းထလာပါက (ဓာတ်ပြုခြင်း) အလုပ်လုပ်နေကြောင်း ပြသသည်။ <strong>ရေဖြင့် အမြဲတမ်း ပြောင်စင်အောင် ဆေးကြောပါ</strong>။</p>

                        <h3 class="danger-title">အန္တရာယ် သတိပေးချက် (CRITICAL SAFETY)</h3>
                        <div class="highlight-box">
                            <p><strong>☠️ ကလိုရင်းအဆိပ်ငွေ့ အန္တရာယ်</strong></p>
                            <p>ကလိုရင်း သို့မဟုတ် အရောင်ချွတ်ဆေးများ (ဥပမာ Future DC) နှင့် <strong>လုံးဝ (လုံးဝ)</strong> ရောမသုံးရ။</p>
                            <p>ဒါဟာ သင်တန်းမှာ အရေးကြီးဆုံး သတိပေးချက် ဖြစ်ပါတယ်။</p>
                        </div>

                        <h3>4. ကာကွယ်မှု (Protection)</h3>
                        <p>လက်အိတ် ဝတ်ပါ 🧤။ အက်စစ်ဖြစ်သောကြောင့် အရေပြားပေါ်တွင် ဒဏ်ရာအနည်းငယ်ရှိပါက အလွန် စပ်ဖျဉ်းပါလိမ့်မည်။</p>
                    </div>
                `
            },
            {
                id: "miraglo",
                image: "images/miraglo.jpg",
                name: "Miraglo",
                tagline: "မှန်နှင့် အရောင်တင်မျက်နှာပြင် သန့်ရှင်းရေး",
                desc: "အမြန်ခြောက်ပြီး အစင်းရာ မထင်ကျန်စေပါ။",
                steps: [],
                warning: "အစားအစာပြင်ဆင်သော မျက်နှာပြင်များတွင် မသုံးရ။",
                colorClass: "border-light-blue",
                textClass: "text-light-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ရည်ရွယ်ချက်</h3>
                        <p>မှန်များ၊ ကြည့်မှန်များနှင့် တောက်ပြောင်သော မျက်နှာပြင်များ။ အလွန်လျင်မြန်စွာ ခြောက်သွေ့ပြီး အစင်းရာ သို့မဟုတ် 'မြူ' မကျန်စေပါ။</p>
                        
                        <h3>2. ဘယ်နေရာမှာ သုံးမလဲ?</h3>
                        <ul>
                            <li><strong>မှန်နှင့် ကြည့်မှန်များ:</strong> ✨ ပြတင်းပေါက်များနှင့် ရေချိုးခန်းကြည့်မှန်များ။</li>
                            <li><strong>မှန်ကောင်တာများ:</strong> အစားအစာ ပြသသည့်နေရာများ။</li>
                            <li><strong>စတီး (Stainless Steel):</strong> ရေခဲသေတ္တာနှင့် ကောင်တာများပေါ်ရှိ လက်ဗွေရာများကို ဖယ်ရှားရန်။</li>
                            <li><strong>ဖုန်းမျက်နှာပြင်နှင့် ကီးဘုတ်များ:</strong> (⚠️ အဝတ်ပေါ်သို့ အမြဲဖြန်းပါ၊ တိုက်ရိုက် မဖြန်းရ)။</li>
                        </ul>

                        <h3>3. ကျွမ်းကျင်သူ နည်းလမ်း (Pro Tip)</h3>
                        <ul>
                            <li>နည်းနည်းသာ ဖြန်းပါ (ရွှဲနေအောင် မဖြန်းရ)။</li>
                            <li>သန့်ရှင်းသော မိုက်ခရိုဖိုက်ဘာ အဝတ် သို့မဟုတ် စက္ကူကို သုံးပါ။</li>
                            <li>နည်းစနစ်: <strong>ဇစ်ဇက်ပုံစံ အပေါ်မှ အောက်သို့ သုတ်ပါ</strong>။</li>
                        </ul>

                        <h3 class="danger-title">မလုပ်သင့်သောအရာ (CRITICAL)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ ပိုးသတ်ဆေး မဟုတ်ပါ:</strong> အစားအစာ အကြွင်းအကျန် သို့မဟုတ် သွေးများရှိပါက <strong>22 Multi-Quat</strong> ကို သုံးပါ။</p>
                            <p><strong>⛔ အဆီအကြီးစားများအတွက် မဟုတ်ပါ:</strong> အဆီများသော အညှော်စုပ်စက်များအတွက် <strong>Greasecutter</strong> ကို သုံးပါ။</p>
                        </div>
                    </div>
                `
            },
            {
                id: "medallion",
                image: "images/medallion.jpg",
                name: "Medallion",
                tagline: "စတီးအရောင်တင်ဆေး",
                desc: "စတီးမျက်နှာပြင်များအတွက် အထူးကာကွယ်ပေးသော အရောင်တင်ဆေး။ လက်ဗွေရာများနှင့် ရေစက်များကို ထိရောက်စွာ ဖယ်ရှားပေးပြီး မီးဖိုချောင်ရှိ စက်ပစ္စည်းများနှင့် ပရိဘောဂများပေါ်တွင် ဖုန်และ အညစ်အကြေးများကို ကာကွယ်ပေးသည့် တာရှည်ခံ အကာအကွယ်အလွှာကို ချန်ထားပေးသည်။",
                steps: [
                    "• စနစ်တကျ အသုံးပြုပါက အဆီကျန်ရစ်ခြင်းမရှိပါ။",
                    "• ပေါ့ပါးသော သံချေးတက်ခြင်းမှ ကာကွယ်ပေးသည်။"
                ],
                warning: "အစားအစာထည့်သော ခွက်များ သို့မဟုတ် စဉ့်နှီတုံးများတွင် သုံးရန် တားမြစ်ထားသည်။",
                colorClass: "border-white",
                textClass: "text-white",
                details: `
                    <div class="modal-lesson">
                        <h3>1. ရည်ရွယ်ချက်</h3>
                        <p>သန့်ရှင်းရေးဆေးရည် မဟုတ်ပါ။ စတီးကို ကာကွယ်ရန်နှင့် အရောင်တင်ရန် အသုံးပြုပြီး လက်ဗွေရာနှင့် ရေစက်များကို ကာကွယ်ပေးသည်။</p>
                        
                        <h3>2. ဘယ်နေရာမှာ သုံးမလဲ?</h3>
                        <ul>
                            <li>ရေခဲသေတ္တာ အပြင်ဘက်များ။</li>
                            <li>ရေခဲစက်များ။</li>
                            <li>မီးဖို အကန့်များ (အပြင်ဘက်)။</li>
                            <li>ဖောက်သည်များ မြင်နိုင်သော စတီးမျက်နှာပြင်များ။</li>
                        </ul>

                        <h3>3. 'နည်းလေ ကောင်းလေ' နည်းစနစ် ('Less is More')</h3>
                        <ul>
                            <li><strong>၁။ ကြိုတင်သန့်ရှင်းရေး:</strong> မျက်နှာပြင်သည် သန့်ရှင်းပြီး ခြောက်သွေ့နေရမည် (Medallion သည် အဆီကို မဖယ်ရှားနိုင်ပါ)။</li>
                            <li><strong>၂။ အသုံးပြုပုံ:</strong> ခြောက်သွေ့သော အဝတ်ပေါ်တွင် အနည်းငယ် ထည့်ပါ (သတ္တုပေါ် တိုက်ရိုက် မထည့်ရ)။</li>
                            <li><strong>၃။ ပွတ်တိုက်ခြင်း:</strong> စတီးအသား လမ်းကြောင်းအတိုင်း လိုက်ပွတ်ပါ (သတ္တုပေါ်ရှိ မျဉ်းကြောင်းငယ်များ)။</li>
                            <li><strong>၄။ အရောင်တင်ခြင်း:</strong> ပိုနေသော ဆီများကို ဖယ်ရှားရန် အဝတ်သန့် တစ်ဖက်ကို သုံးပါ။</li>
                        </ul>

                        <h3 class="danger-title">ဘေးကင်းရေး ရွှေစည်းကမ်း (CRITICAL)</h3>
                        <div class="highlight-box">
                            <p><strong>⛔ အစားအစာ ထိတွေ့သော မျက်နှာပြင်များပေါ် လုံးဝ မသုံးရ</strong></p>
                            <p>(စဉ့်နှီတုံးများ၊ မီးဖိုအတွင်းပိုင်း၊ အစားအစာ ပြင်ဆင်သည့် စားပွဲများ)။ ၎င်းသည် တွင်းထွက်ဆီဖြစ်ပြီး အစားအစာကို ညစ်ညမ်းစေနိုင်သည်။</p>
                        </div>
                    </div>
                `
            },
            {
                id: "clean-soft",
                image: "images/clean-soft.jpg",
                name: "Clean & Soft AB",
                tagline: "ပိုးသတ် ဆပ်ပြာ (AB)",
                desc: "ဝန်ထမ်းများ လက်ဆေးရန် အထူးဆပ်ပြာ။",
                steps: [
                    "၁။ လက်ကို ရေစွတ်ပါ။",
                    "၂။ ဆပ်ပြာယူပါ။",
                    "၃။ စက္ကန့် ၂၀ ကြာ ပွတ်တိုက်ပါ (လက်ချောင်းကြား၊ လက်သည်း၊ လက်ကောက်ဝတ်)။",
                    "၄။ ရေဆေးချပြီး စက္ကူဖြင့် ခြောက်အောင်သုတ်ပါ။"
                ],
                warning: "ပွတ်တိုက်ချိန်ကို တိကျစွာ လိုက်နာပါ။",
                colorClass: "border-dark-blue",
                textClass: "text-dark-blue",
                details: `
                    <div class="modal-lesson">
                        <h3>1. အဓိက အချက်အလက်</h3>
                        <p><strong>ရည်ရွယ်ချက်:</strong> အစားအသောက် မကိုင်တွယ်မီ မဖြစ်မနေ လုပ်ဆောင်ရမည့် တစ်ကိုယ်ရေ သန့်ရှင်းရေး။</p>
                        <p><strong>အသုံးပြုပုံ:</strong> မီးဖိုချောင်ရှိ လက်ဆေးကန်များတွင်သာ သုံးရမည် (handwashing sinks)။</p>
                        
                        <h3>2. 'AB' ဆိုတာ ဘာလဲ?</h3>
                        <p class="highlight-box"><strong>ပိုးသတ်ဆေး (Antibacterial)</strong> ဟု အဓိပ္ပာယ်ရသည်။ သာမန် ဆပ်ပြာနှင့် မတူဘဲ ပိုးမွှားများကို သိသိသာသာ လျှော့ချပေးသည်။</p>
                        <p><strong>တည်နေရာ:</strong> နံရံကပ် ဆပ်ပြာဘူးများ။ ပန်းကန်ဆေးရန် လုံးဝ မသုံးရပါ။</p>

                        <h3>3. နည်းပညာဆိုင်ရာ ဝိသေသလက္ခဏာများ</h3>
                        <ul>
                            <li><strong>အရောင်:</strong> အပြာရင့်ရောင် တံဆိပ်။</li>
                            <li><strong>ဂုဏ်သတ္တိများ:</strong> အစိုဓာတ်ထိန်း ပစ္စည်းများ ပါဝင်သည်။ တစ်နေ့ အကြိမ် ၅၀ လက်ဆေးသော်လည်း အရေပြား ပျက်စီးခြင်းမှ ကာကွယ်ပေးသည်။</li>
                        </ul>

                        <h3>4. လက်ဆေးခြင်း လုပ်ငန်းစဉ် (သင်တန်းစံနှုန်း)</h3>
                        <ul>
                            <li><strong>ရေစိုစေခြင်း:</strong> ရေနွေး သုံးပါ (ခံနိုင်ရည်ရှိသလောက် ပူသောရေ)။</li>
                            <li><strong>ပမာဏ:</strong> Clean & Soft AB ကို အသုံးပြုပါ။</li>
                            <li><strong>တိုက်ချွတ်ခြင်း:</strong> <strong>စက္ကန့် ၂၀</strong> ကြာအောင် ပြင်းပြင်းထန်ထန် တိုက်ပါ (လက်ချောင်းများ၊ လက်သည်းများနှင့် လက်ကောက်ဝတ်အထိ)။</li>
                            <li><strong>ဆေးကြောခြင်း:</strong> ရေများများဖြင့် ဆေးချပါ။</li>
                        </ul>
                    </div>
                `
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.getElementById('app-title');
    const gridEl = document.getElementById('product-grid');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const buttons = document.querySelectorAll('.lang-btn');

    function openModal(product) {
        const currentLang = document.documentElement.lang || 'es';
        const prefix = translations[currentLang].modalTitlePrefix || "";
        modalTitle.textContent = `${prefix} ${product.name}`;
        modal.classList.remove('red-theme', 'blue-theme', 'orange-theme', 'brown-theme', 'green-theme', 'light-blue-theme', 'silver-theme', 'yellow-theme');
        if (product.id === 'multi-quat') modal.classList.add('red-theme');
        else if (product.id === 'clean-soft') modal.classList.add('blue-theme');
        else if (product.id === 'future-dc') modal.classList.add('orange-theme');
        else if (product.id === 'greasecutter') modal.classList.add('brown-theme');
        else if (product.id === 'lime-a-way') modal.classList.add('green-theme');
        else if (product.id === 'miraglo') modal.classList.add('light-blue-theme');
        else if (product.id === 'medallion') modal.classList.add('silver-theme');
        else if (product.id === 'floor-cleaner') modal.classList.add('yellow-theme');

        modalBody.innerHTML = product.details || '<p>No details available.</p>';

        // Mapeo de IDs de producto a archivos de video
        const videoFiles = {
            'multi-quat': 'multi-squat.mp4', // Corregido: guión en lugar de espacio para GitHub Pages
            'clean-soft': 'clean-soft.mp4',
            'future-dc': 'future-dc.mp4',
            'greasecutter': 'greasecutter.mp4',
            'lime-a-way': 'lime-a-way.mp4',
            'miraglo': 'miraglo.mp4',
            'medallion': 'medallion.mp4',
            'floor-cleaner': 'floor-cleaner.mp4'
        };

        // Añadir video si existe para este producto
        const videoFile = videoFiles[product.id];
        if (videoFile) {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'modal-video-container';
            videoContainer.innerHTML = `
                <video id="modal-video" class="modal-video" width="100%" controls preload="metadata">
                    <source src="images/${videoFile}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
            `;
            modalBody.appendChild(videoContainer);
        }

        // Add Training Test Button
        const trainingBtn = document.createElement('button');
        trainingBtn.className = 'training-quiz-btn';
        trainingBtn.textContent = translations[currentLang].productQuizBtn;
        trainingBtn.onclick = () => {
            closeModal();
            startQuiz(product.id);
        };
        modalBody.appendChild(trainingBtn);

        modal.classList.add('active');
    }

    function closeModal() {
        // Pausar video si existe
        const video = document.getElementById('modal-video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
        modal.classList.remove('active', 'red-theme', 'blue-theme', 'orange-theme', 'brown-theme', 'green-theme', 'light-blue-theme', 'silver-theme', 'yellow-theme');
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function render(lang) {
        titleEl.textContent = translations[lang].title;
        gridEl.innerHTML = '';
        const clickHintText = translations[lang].clickHint || "Tap for more info";

        translations[lang].products.forEach(product => {
            const card = document.createElement('div');
            card.className = `product-card ${product.colorClass}`;
            let stepsHtml = '';
            if (product.steps && product.steps.length > 0) {
                stepsHtml = '<ul class="product-steps">';
                product.steps.forEach(step => { stepsHtml += `<li>${step}</li>`; });
                stepsHtml += '</ul>';
            }
            const warningHtml = product.warning ? `<div class="warning-box"><span class="warning-text">${product.warning}</span></div>` : '';

            card.innerHTML = `
                <div class="card-header">
                    <div class="header-icon">🧴</div>
                    <div>
                        <span class="product-name ${product.textClass}">${product.name}</span>
                        <div class="product-tagline">${product.tagline}</div>
                    </div>
                </div>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iMS41Ij48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIyMSAxNSAxNiAxMCA1IDIxIj48L3BvbHlsaW5lPjwvc3ZnPg==';">
                </div>
                <div class="card-body">
                    <p class="product-desc">${product.desc}</p>
                    ${stepsHtml}
                    ${warningHtml}
                    <div class="card-hint">${clickHintText}</div>
                </div>
            `;

            // Un solo clic para abrir modal (mejor usabilidad en móvil)
            card.addEventListener('click', () => openModal(product));

            gridEl.appendChild(card);
        });

        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.documentElement.lang = lang;

        // Update Quiz Button Text
        const btnTextEl = document.getElementById('quiz-btn-text');
        if (btnTextEl) btnTextEl.textContent = translations[lang].quizBtn;

        // Update Study Mode Button Text
        const textosBotones = {
            es: "📚 Modo Estudio (Fichas)",
            en: "📚 Study Mode (Cards)",
            th: "📚 โหมดการศึกษา (แฟลชการ์ด)",
            my: "📚 လေ့လာမှုမုဒ် (ကတ်ပြားများ)"
        };
        const btnEstudioEl = document.querySelector('.btn-estudio');
        if (btnEstudioEl) btnEstudioEl.textContent = textosBotones[lang];

        idiomaSeleccionado = lang;

        // Instant Quiz Update
        if (quizModal && quizModal.classList.contains('active') && !quizQuestionContainer.classList.contains('hidden')) {
            showQuestion();
        } else if (quizModal && quizModal.classList.contains('active') && !quizResultsEl.classList.contains('hidden')) {
            showResults();
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => render(btn.dataset.lang));
    });

    // --- PREMIUM QUIZ LOGIC ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let idiomaSeleccionado = 'es';
    let activeFilterId = null;

    const quizModal = document.getElementById('quiz-modal');
    const quizTitle = document.getElementById('quiz-title');
    const quizStartBtn = document.getElementById('quiz-start-btn');
    const closeQuizBtn = document.getElementById('close-quiz');
    const restartQuizBtn = document.getElementById('restart-quiz');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQEl = document.getElementById('current-q');
    const totalQEl = document.getElementById('total-q');
    const quizResultsEl = document.getElementById('quiz-results');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const resultScoreEl = document.getElementById('result-score');
    const resultTextEl = document.getElementById('result-text');
    const resultIconEl = document.getElementById('result-icon');

    // Total Reset Function
    function limpiarEstado() {
        score = 0;
        currentQuestionIndex = 0;
        currentQuestions = [];
        activeFilterId = null;

        if (resultScoreEl) resultScoreEl.textContent = '';
        if (resultTextEl) resultTextEl.textContent = '';
        if (resultIconEl) resultIconEl.innerHTML = '🎓'; // Default icon
        if (optionsContainer) optionsContainer.innerHTML = '';
        if (questionTextEl) questionTextEl.innerHTML = '';

        const progressBar = document.getElementById('quiz-progress-bar');
        if (progressBar) progressBar.style.width = '0%';

        const aciertosEl = document.getElementById('quiz-aciertos');
        const erroresEl = document.getElementById('quiz-errores');
        if (aciertosEl) aciertosEl.textContent = '0';
        if (erroresEl) erroresEl.textContent = '0';

        quizResultsEl.classList.add('hidden');
        quizQuestionContainer.classList.remove('hidden');

        // Remove old back buttons from results screen
        const oldBackBtns = quizResultsEl.querySelectorAll('.back-to-product-btn');
        oldBackBtns.forEach(b => b.remove());
    }

    // Shuffle Utility (Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function generateQuestions(lang, filterProductId = null) {
        let masterPool = preguntasEcolab.map(q => ({ ...q }));
        let finalSet = [];

        if (filterProductId) {
            // PRODUCT TEST: Target 10 questions
            // Use strict comparison as requested by the user
            const productNamesMap = {
                'multi-quat': '22 MULTI-QUAT',
                'future-dc': 'FUTURE DC',
                'greasecutter': 'GREASECUTTER',
                'clean-soft': 'CLEAN & SOFT AB',
                'lime-a-way': 'LIME-A-WAY',
                'miraglo': 'MIRAGLO',
                'medallion': 'MEDALLION',
                'floor-cleaner': 'FLOOR CLEANER'
            };

            const searchName = productNamesMap[filterProductId] || filterProductId;

            // 1. Forzamos que el filtro sea exacto y limpie espacios en blanco (Lógica del usuario)
            let specificPool = masterPool.filter(p =>
                p.producto.trim().toUpperCase() === searchName.trim().toUpperCase()
            );

            shuffleArray(specificPool);
            finalSet = specificPool.slice(0, 10);

            // Padding if < 10 (use other products to reach 10) - Existing logic kept for safety
            if (finalSet.length < 10 && finalSet.length > 0) {
                let otherPool = masterPool.filter(q => !finalSet.find(fq => fq.id === q.id));
                shuffleArray(otherPool);
                const needed = 10 - finalSet.length;
                finalSet = [...finalSet, ...otherPool.slice(0, needed)];
            }
        } else {
            // GENERAL EXAM: Target 20 questions
            shuffleArray(masterPool);
            finalSet = masterPool.slice(0, 20);
        }

        return finalSet;
    }

    // Compatibility function for user-provided code
    window.empezarTestProducto = function (prodSeleccionado) {
        startQuiz(prodSeleccionado);
    };

    function startQuiz(filterProductId = null) {
        limpiarEstado();

        // Prevent event objects from being treated as strings
        activeFilterId = (typeof filterProductId === 'string') ? filterProductId : null;

        currentQuestions = generateQuestions(idiomaSeleccionado, activeFilterId);

        if (totalQEl) totalQEl.textContent = currentQuestions.length;
        quizTitle.textContent = translations[idiomaSeleccionado].quizTitleBase || "Examen Técnico";

        quizModal.classList.add('active');
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) return;
        const q = currentQuestions[currentQuestionIndex];
        const lang = idiomaSeleccionado;

        currentQEl.textContent = currentQuestionIndex + 1;

        // --- LOCALIZED LOGIC ---
        let rawQuestion = q.pregunta[lang] || q.pregunta['en'] || "Technical Question (Translation missing)";
        questionTextEl.innerHTML = rawQuestion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        optionsContainer.innerHTML = '';

        // Get localized options and correct answer text
        const opts = q.opciones[lang] || q.opciones['en'] || ["Option A", "Option B", "Option C", "Option D"];
        const correctText = q.respuestaCorrecta[lang] || q.respuestaCorrecta['en'];

        // Create options with text-based verification
        const shuffledOpts = opts.map(text => ({
            text,
            isCorrect: text === correctText
        }));
        shuffleArray(shuffledOpts);

        shuffledOpts.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            if (opt.text.length > 50) btn.classList.add('compact-text');
            btn.textContent = `${index + 1}. ${opt.text}`;
            btn.onclick = () => handleAnswer(opt.isCorrect, btn, correctText);
            optionsContainer.appendChild(btn);
        });

        // Update progress bar
        const progressBar = document.getElementById('quiz-progress-bar');
        if (progressBar) {
            const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    function handleAnswer(isCorrect, btn, correctText) {
        const btns = optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(b => b.disabled = true);

        if (isCorrect) {
            score++;
            btn.classList.add('correct');
            playBeep('correct');
        } else {
            btn.classList.add('incorrect');
            playBeep('incorrect');
            btns.forEach(b => {
                const cleanedText = b.textContent.replace(/^\d+\.\s/, '');
                if (cleanedText === correctText) b.classList.add('correct');
            });
        }

        // --- ACTUALIZAR CONTADORES PERSISTENTES ---
        const aciertosEl = document.getElementById('quiz-aciertos');
        const erroresEl = document.getElementById('quiz-errores');
        if (aciertosEl) aciertosEl.textContent = score;
        if (erroresEl) erroresEl.textContent = currentQuestionIndex + 1 - score;

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) showQuestion();
            else showResults();
        }, 1500);
    }

    function showResults() {
        quizQuestionContainer.classList.add('hidden');
        quizResultsEl.classList.remove('hidden');
        resultScoreEl.textContent = `${score} / ${currentQuestions.length}`;
        const langData = translations[idiomaSeleccionado];

        // Botón Volver al Inicio (especificado por el usuario)
        restartQuizBtn.textContent = langData.returnToStart || "Volver al Inicio";
        restartQuizBtn.onclick = () => {
            quizModal.classList.remove('active');
            limpiarEstado();
        };

        // Remove old back button
        const oldBackBtn = quizResultsEl.querySelector('.back-to-product-btn');
        if (oldBackBtn) oldBackBtn.remove();

        if (activeFilterId) {
            const backBtn = document.createElement('button');
            backBtn.className = 'restart-btn back-to-product-btn';
            backBtn.style.backgroundColor = '#4caf50';
            backBtn.textContent = langData.returnToProduct;
            backBtn.onclick = () => {
                quizModal.classList.remove('active');
                const product = translations[idiomaSeleccionado].products.find(p => p.id === activeFilterId);
                openModal(product);
            };
            quizResultsEl.appendChild(backBtn);
        }

        // Lógica de mensajes según puntuación (Specs finales)
        if (score >= 17) {
            resultTextEl.textContent = langData.quizResultExcellence;
            resultIconEl.textContent = '🌟';
        } else if (score >= 14) {
            resultTextEl.textContent = langData.quizResultGood;
            resultIconEl.textContent = '👍';
        } else {
            resultTextEl.textContent = langData.quizResultStudy;
            resultIconEl.textContent = '💪';
        }
    }

    function playBeep(type) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            if (type === 'correct') {
                osc.frequency.setValueAtTime(880, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.1);
            } else {
                osc.frequency.setValueAtTime(220, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.2);
            }
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } catch (e) { console.log('Audio not supported', e); }
    }

    // Event Listeners
    if (quizStartBtn) quizStartBtn.onclick = () => startQuiz();
    if (closeQuizBtn) closeQuizBtn.onclick = () => quizModal.classList.remove('active');
    if (restartQuizBtn) restartQuizBtn.onclick = () => startQuiz(activeFilterId);

    render('es');
});


// --- MODO ESTUDIO (FLASHCARDS) ---
let poolEstudio = [];
let indiceEstudio = 0;
let aciertosEstudio = 0;
let erroresEstudio = 0;
let respondidoActual = false;

function empezarModoEstudio() {
    // 1. Crear copia aleatoria de las 162 preguntas (aleatorio y sin repeticiones)
    poolEstudio = [...preguntasEcolab];

    // Función shuffle interna si no está accesible globalmente
    for (let i = poolEstudio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [poolEstudio[i], poolEstudio[j]] = [poolEstudio[j], poolEstudio[i]];
    }

    // 2. Reiniciar contadores
    indiceEstudio = 0;
    aciertosEstudio = 0;
    erroresEstudio = 0;
    respondidoActual = false;

    // 3. Preparar Interfaz
    const estudioModal = document.getElementById('estudio-modal');
    estudioModal.classList.add('active');

    // Asegurar que los controles de navegación estén visibles
    document.querySelector('.estudio-controls').style.display = 'flex';
    document.getElementById('flashcard').style.display = 'block';

    mostrarFicha();
}

function mostrarFicha() {
    const container = document.getElementById('seccion-pregunta');
    const optionsEl = document.getElementById('estudio-opciones');
    const counterEl = document.getElementById('estudio-counter');
    const currentLang = document.documentElement.lang || 'es';

    // Limpiar estado visual previo
    container.classList.remove('hidden');
    document.getElementById('seccion-respuesta').style.display = 'none';
    document.getElementById('seccion-pregunta').style.display = 'flex';
    respondidoActual = false;

    // Verificar si hemos terminado
    if (indiceEstudio >= poolEstudio.length) {
        mostrarEstudioFinalizado();
        return;
    }

    const q = poolEstudio[indiceEstudio];

    // 1. Actualizar Contador Principal y Estadísticas (Aciertos/Errores)
    const labelFicha = { es: 'Ficha', en: 'Flashcard', th: 'แผ่นที่', my: 'ကတ်အမှတ်' }[currentLang] || 'Flashcard';
    const labelDe = { es: 'de', en: 'of', th: 'จาก', my: '၏' }[currentLang] || 'of';

    counterEl.innerHTML = `
        <div>${labelFicha} ${indiceEstudio + 1} ${labelDe} ${poolEstudio.length}</div>
        <div class="estudio-stats">
            <span class="stat-item stat-check">✅ ${aciertosEstudio}</span>
            <span class="stat-item stat-cross">❌ ${erroresEstudio}</span>
        </div>
    `;

    // 2. Cargar Pregunta
    document.getElementById('estudio-pregunta').textContent = q.pregunta[currentLang] || q.pregunta['en'];
    document.getElementById('estudio-respuesta').textContent = q.respuestaCorrecta[currentLang] || q.respuestaCorrecta['en'];

    // 3. Cargar Opciones Interactivas
    optionsEl.innerHTML = '';
    const opts = q.opciones[currentLang] || q.opciones['en'];
    const corr = q.respuestaCorrecta[currentLang] || q.respuestaCorrecta['en'];

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'estudio-option-btn';
        btn.textContent = opt;
        btn.onclick = (e) => {
            e.stopPropagation();
            if (!respondidoActual) verificarRespuestaEstudio(opt === corr, btn);
        };
        optionsEl.appendChild(btn);
    });

    // 4. Color según producto
    const flashcard = document.getElementById('flashcard');
    flashcard.className = 'flashcard';
    const prod = q.producto.toUpperCase();
    if (prod.includes('22')) flashcard.classList.add('producto-red');
    else if (prod.includes('FUTURE') || prod.includes('FLOOR')) flashcard.classList.add('producto-orange');
    else if (prod.includes('LIME')) flashcard.classList.add('producto-green');
    else if (prod.includes('GREASE')) flashcard.classList.add('producto-brown');
    else if (prod.includes('MIRAGLO')) flashcard.classList.add('producto-blue');
    else if (prod.includes('CLEAN') || prod.includes('SOFT')) flashcard.classList.add('producto-dark-blue');
    else flashcard.classList.add('producto-blue');
}

function verificarRespuestaEstudio(esCorrecto, btn) {
    if (respondidoActual) return;
    respondidoActual = true;

    if (esCorrecto) {
        aciertosEstudio++;
        btn.classList.add('selected-correct');
    } else {
        erroresEstudio++;
        btn.classList.add('selected-incorrect');
    }

    // Actualizar los contadores visualmente sin refrescar toda la ficha
    const statsContainer = document.querySelector('.estudio-stats');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <span class="stat-item stat-check">✅ ${aciertosEstudio}</span>
            <span class="stat-item stat-cross">❌ ${erroresEstudio}</span>
        `;
    }

    // Deshabilitar otros botones
    const buttons = document.querySelectorAll('.estudio-option-btn');
    buttons.forEach(b => b.disabled = true);

    // Girar la tarjeta tras un pequeño delay para ver el feedback
    setTimeout(() => {
        girarTarjeta();
    }, 600);
}

function girarTarjeta() {
    const seccionPregunta = document.getElementById('seccion-pregunta');
    const seccionRespuesta = document.getElementById('seccion-respuesta');

    if (seccionRespuesta.style.display === 'none') {
        seccionPregunta.style.display = 'none';
        seccionRespuesta.style.display = 'flex';
    } else {
        seccionPregunta.style.display = 'flex';
        seccionRespuesta.style.display = 'none';
    }
}

function siguienteFicha() {
    if (indiceEstudio < poolEstudio.length - 1) {
        indiceEstudio++;
        mostrarFicha();
    } else {
        indiceEstudio++; // Forzar estado de finalización
        mostrarFicha();
    }
}

function anteriorFicha() {
    if (indiceEstudio > 0) {
        indiceEstudio--;
        mostrarFicha();
    }
}

function mostrarEstudioFinalizado() {
    const counterEl = document.getElementById('estudio-counter');
    const flashcard = document.getElementById('flashcard');
    const controls = document.querySelector('.estudio-controls');
    const lang = document.documentElement.lang || 'es';

    const msgs = {
        es: { title: '¡Estudio Terminado!', restart: 'Reiniciar Sesión', stats: 'Resultado Final' },
        en: { title: 'Study Finished!', restart: 'Restart Session', stats: 'Final Result' },
        th: { title: 'จบการศึกษาแล้ว!', restart: 'เริ่มเซสชันใหม่', stats: 'ผลลัพธ์สุดท้าย' },
        my: { title: 'လေ့လာမှု ပြီးဆုံးပါပြီ!', restart: 'ပြန်စပါ', stats: 'နောက်ဆုံးရလဒ်' }
    }[lang] || msgs.en;

    counterEl.innerHTML = `<h2>${msgs.title}</h2>`;
    controls.style.display = 'none';

    flashcard.innerHTML = `
        <div class="estudio-finished">
            <div class="finished-icon">🎓</div>
            <div class="finished-stats">${msgs.stats}:</div>
            <div class="estudio-stats">
                <span class="stat-item stat-check">✅ ${aciertosEstudio}</span>
                <span class="stat-item stat-cross">❌ ${erroresEstudio}</span>
            </div>
            <button onclick="empezarModoEstudio()" class="training-quiz-btn" style="margin-top:2rem">
                ${msgs.restart}
            </button>
        </div>
    `;
}

// Event Listeners
document.getElementById('close-estudio').addEventListener('click', () => {
    document.getElementById('estudio-modal').classList.remove('active');
    // Restaurar contenido original por si se reinicia sin llamar a empezarModoEstudio
    location.reload(); // Forma más segura de limpiar el DOM inyectado del flashcard
});
