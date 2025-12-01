import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, Download, ExternalLink } from "lucide-react";

export default function PortfolioDaniel() {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const projects = [
    {
      id: 1,
      title: "Butaca Mid-Century",
      category: "Muebles flatpack",
      image: "/assets/flatpack_butaca_01.jpg",
      imageAlt2: "/assets/flatpack_butaca_02.jpg",
      imageTech: "/assets/flatpack_butaca_planos_01.jpg",
      imageTech2: "/assets/flatpack_butaca_planos_02.jpg",
      desc: "Butaca de roble macizo diseñada para envíos internacionales. Sistema flatpack con ensamblaje rápido y resistente.",
    },
    {
      id: 2,
      title: "Consola TV Zaragoza",
      category: "Mobiliario a medida",
      image: "/assets/consola_zaragoza_01.jpg",
      imageTech: "/assets/consola_zaragoza_plano.jpg",
      desc: "Proyecto a medida fabricado en chapa de roble y aluminio negro.",
    },
    {
      id: 3,
      title: "Mueble TV en Esquina",
      category: "Mobiliario a medida",
      image: "/assets/tv_esquina_01.jpg",
      imageAlt2: "/assets/tv_esquina_02.jpg",
      imageTech: "/assets/tv_esquina_plano.jpg",
      desc: "Mueble a medida en chapa de roble y acero pavonado.",
    },
    {
      id: 4,
      title: "Conjunto Salón Industrial",
      category: "Mobiliario a medida",
      image: "/assets/salon_industrial_01.jpg",
      imageAlt2: "/assets/salon_industrial_02.jpg",
      imageTech: "/assets/salon_industrial_plano_01.jpg",
      imageTech2: "/assets/salon_industrial_plano_02.jpg",
      desc: "Proyecto completo en abeto quemado y estructura de acero efecto forja.",
    },
    {
      id: 5,
      title: "Estructura Artea",
      category: "Estructuras de cocina",
      image: "/assets/artea_estructura_01.jpg",
      imageAlt2: "/assets/artea_estructura_02.jpg",
      imageAlt3: "/assets/artea_estructura_03.jpg",
      imageAlt4: "/assets/artea_estructura_04.jpg",
      imageTech: "/assets/artea_planos_01.jpg",
      imageTech2: "/assets/artea_planos_02.jpg",
      imageTech3: "/assets/artea_planos_03.jpg",
      extrusionPlan: "/assets/artea_extrusion_plan.jpg",
      image3d: "/assets/artea_union_3d.gif",
      desc: "Sistema modular basado en extrusión e inyección de aluminio.",
    },
    {
      id: 6,
      title: "Colección de 9 perfiles de extrusión",
      category: "Diseño industrial",
      image: "/assets/extrusion_lote_01.jpg",
      imageTech: "/assets/extrusion_lote_planos.jpg",
      desc: "Serie de 9 perfiles industriales con planos técnicos.",
    },
    {
      id: 7,
      title: "Exploraciones conceptuales — Serie 01",
      category: "Diseños conceptuales",
      image: "/assets/conceptual_01.jpg",
      conceptGallery: [
        "/assets/conceptual_01.jpg",
        "/assets/conceptual_02.jpg",
        "/assets/conceptual_03.jpg",
        "/assets/conceptual_04.jpg",
        "/assets/conceptual_05.jpg",
        "/assets/conceptual_06.jpg",
        "/assets/conceptual_07.jpg",
        "/assets/conceptual_08.jpg",
        "/assets/conceptual_09.jpg",
      ],
      desc: "Colección conceptual creada con CAD e IA.",
    },
  ];

  const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="fixed w-full bg-white/70 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-sky-500 flex items-center justify-center text-white font-semibold">DG</div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Daniel Gutiérrez</div>
              <div className="text-xs text-gray-600">Diseño de Producto · Mobiliario · Fabricación Digital</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Proyectos</a>
            <a href="#tech" className="hover:underline">Técnica</a>
            <a href="#about" className="hover:underline">Sobre mí</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white">Contactar</a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden px-6 pb-6">
            <div className="flex flex-col gap-3">
              <a href="#projects" onClick={() => setOpen(false)} className="py-2">Proyectos</a>
              <a href="#tech" onClick={() => setOpen(false)} className="py-2">Técnica</a>
              <a href="#about" onClick={() => setOpen(false)} className="py-2">Sobre mí</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2 font-medium text-emerald-600">Contactar</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-28">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 py-16">
          <motion.div className="flex-1" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Diseño de producto y mobiliario · CAD/CAM · Visualización IA</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Combino diseño industrial y fabricación digital con visualizaciones fotorealistas generadas mediante IA para transformar ideas en productos fabricables. Trabajo a nivel empresarial y por encargo con Acontraveta.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-medium">Ver proyectos</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">Descargar CV <Download className="w-4 h-4"/></a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2">
              <img src="/assets/thumb1.jpg" alt="thumb" className="w-full h-24 object-cover rounded-md shadow-sm" />
              <img src="/assets/thumb2.jpg" alt="thumb" className="w-full h-24 object-cover rounded-md shadow-sm" />
              <img src="/assets/thumb3.jpg" alt="thumb" className="w-full h-24 object-cover rounded-md shadow-sm" />
            </div>
          </motion.div>

          <motion.div className="flex-1 w-full" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/assets/hero_scene.jpg" alt="hero" className="w-full h-[420px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT FILTERS */}
      <section id="projects" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">Proyectos</motion.h2>
          <p className="text-gray-600 mt-1">Una selección representativa organizada por áreas: industrial, mobiliario, cocina, flatpack y conceptos.</p>

          <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`whitespace-nowrap px-4 py-2 rounded-full ${filter===cat? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{cat}</button>
            ))}
          </div>

          <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.article key={p.id} className="group rounded-xl bg-gray-50 overflow-hidden shadow relative" whileHover={{ y: -6 }} onClick={() => setLightbox(p)}>

                <div className="relative w-full h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />

                  {(p.image3d || p.imageTech) && (
                    <img src={p.image3d || p.imageTech} alt={p.title + ' alt'} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  <div className="absolute left-4 bottom-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium">{p.category}</div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>Ver detalles</span>
                    <span className="flex items-center gap-2">Ver proyecto <ExternalLink className="w-4 h-4"/></span>
                  </div>
                </div>

              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h4 className="font-semibold">{lightbox.title}</h4>
                <p className="text-sm text-gray-600">{lightbox.category}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="text-gray-500">Cerrar</button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-64 object-cover rounded-md" />
              <div>
                <p className="text-gray-700">{lightbox.desc}</p>
                <div className="mt-4 text-sm text-gray-600">Detalle técnico: este espacio sirve para incluir información sobre CAD, tolerancias, materiales y proceso de fabricación. Añade aquí planos, enlaces a PDF y renders adicionales.</div>
                <div className="mt-6 flex gap-3">
                  <a className="px-4 py-2 rounded-md border inline-flex items-center gap-2" href="#">Ver PDF</a>
                  <a className="px-4 py-2 rounded-md bg-emerald-600 text-white inline-flex items-center gap-2" href="#">Solicitar presupuesto</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* TECHNIQUE */}
      <section id="tech" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold">Técnica y flujo de trabajo</h3>
            <p className="mt-3 text-gray-600">Mi flujo combina control total de diseño con iteración visual rápida mediante IA generativa. Esto permite explorar acabados y contextos antes de fabricar.</p>

            <ol className="mt-6 space-y-3 text-sm text-gray-700">
              <li><strong>1. Modelado 3D:</strong> Diseño paramétrico y definición técnica en CAD.</li>
              <li><strong>2. Render base:</strong> Renders neutros para validar volúmenes y encajes.</li>
              <li><strong>3. Interpretación con IA:</strong> Generación de escenas fotorealistas y variaciones de materiales.</li>
              <li><strong>4. Ajustes técnicos:</strong> Correcciones manuales para asegurar fidelidad a la pieza fabricable.</li>
              <li><strong>5. Fabricación:</strong> Preparación de G-code/CAM, pruebas de prototipo y producción.</li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-sky-600 text-white inline-flex items-center gap-2">Ver catálogos</a>
              <a href="#contact" className="px-4 py-2 rounded-md border inline-flex items-center gap-2">Contactar</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/tech_flow.jpg" alt="tech flow" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold">Sobre mí</h3>
            <p className="mt-3 text-gray-700">Soy diseñador de producto con experiencia en dirección de diseño, fabricación digital y desarrollo técnico. Fundé Acontraveta para diseñar y producir mobiliario y objetos, combinando procesos industriales y artesanales.</p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li><strong>Herramientas:</strong> CAD paramétrico, SolidWorks, Fusion360, CAM, corte láser, CNC.</li>
              <li><strong>Visualización:</strong> Renders, KeyShot, IA generativa para escenas fotorealistas.</li>
              <li><strong>Ámbitos:</strong> Industrial, mobiliario a medida, cocinas, muebles flatpack, conceptuales.</li>
              <li><strong>Contacto:</strong> acontravetaes@gmail.com</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg p-6 bg-gray-50">
            <h4 className="font-semibold">Datos rápidos</h4>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <div><strong>Nombre:</strong> Daniel Gutiérrez Victoriano</div>
              <div><strong>Localidad:</strong> Logroño, La Rioja</div>
              <div><strong>Disponibilidad:</strong> Proyectos y colaboraciones</div>
              <div><strong>Tel:</strong> 608 06 32 11</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold">Contacta</h3>
            <p className="mt-3 text-gray-600">Si quieres ver proyectos completos, solicitar un presupuesto o hablar sobre colaboraciones, escríbeme.</p>

            <form className="mt-6 grid grid-cols-1 gap-3 max-w-md">
              <input className="px-4 py-3 border rounded-md" placeholder="Nombre" />
              <input className="px-4 py-3 border rounded-md" placeholder="Email" />
              <textarea className="px-4 py-3 border rounded-md" rows={4} placeholder="Mensaje / proyecto de interés" />
              <button type="button" className="px-4 py-3 rounded-md bg-emerald-600 text-white">Enviar mensaje</button>
            </form>

            <div className="mt-6 text-sm text-gray-600 flex items-center gap-4">
              <Mail /> <span>acontravetaes@gmail.com</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/contact_studio.jpg" alt="studio" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Daniel Gutiérrez — Acontraveta</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
