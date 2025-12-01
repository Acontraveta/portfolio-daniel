// src/components/PortfolioDaniel.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PortfolioDaniel() {
  // UI state
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // proyecto seleccionado
  const [filter, setFilter] = useState("Todos");
  const [currentIndex, setCurrentIndex] = useState(0);

  // -----------------------
  // PROYECTOS 
  // -----------------------
 const projects = useMemo(
  () => [
    {
      id: 1,
      title: "Butaca Mid-Century",
      category: "Muebles flatpack",
      images: [
        "/assets/flatpack_butaca_01.jpg",
        "/assets/flatpack_butaca_02.jpg",
        "/assets/flatpack_butaca_planos_01.jpg",
        "/assets/flatpack_butaca_planos_02.jpg",
      ],
      desc: "Butaca de roble macizo diseñada para envíos internacionales. Sistema flatpack con ensamblaje rápido y resistente.",
      details: `
• Madera: roble macizo europeo.
• Unión: sistema de cajas mecanizadas CNC sin herrajes.
• Acabado: aceite vegetal natural.
• Pensada para envío internacional con volumen optimizado.
• Diseño para fabricación CNC 3 ejes.
      `,
    },
    {
      id: 2,
      title: "Consola TV Zaragoza",
      category: "Mobiliario a medida",
      images: [
        "/assets/consola_zaragoza_01.jpg",
        "/assets/consola_zaragoza_plano.jpg",
      ],
      desc: "Proyecto a medida fabricado en chapa de roble y aluminio negro.",
      details: `
• Paneles en tablero MDF chapado en roble europeo.
• Estructura de aluminio lacado negro satinado.
• Diseño a medida segun requerimientos de cliente.
• Planos de despiece para carpintería.
      `,
    },
    {
      id: 3,
      title: "Mueble TV en Esquina",
      category: "Mobiliario a medida",
      images: [
        "/assets/tv_esquina_01.jpg",
        "/assets/tv_esquina_02.jpg",
        "/assets/tv_esquina_plano.jpg",
      ],
      desc: "Mueble a medida en chapa de roble y acero pavonado.",
      details: `
• Optimizado para pared de pladur.
• Estructura de madera chapada en roble + bastidor de acero pavonado.
• Sistema de ventilación interna para equipos electrónicos.
• Planos técnicos para mecanizado CNC .
      `,
    },
    {
      id: 4,
      title: "Conjunto Salón Industrial",
      category: "Mobiliario a medida",
      images: [
        "/assets/salon_industrial_01.jpg",
        "/assets/salon_industrial_02.jpg",
        "/assets/salon_industrial_plano_01.jpg",
        "/assets/salon_industrial_plano_02.jpg",
        "/assets/salon_industrial_plano_03.jpg",
      ],
      desc: "Proyecto completo en abeto quemado y estructura de acero efecto forja.",
      details: `
• Material principal: abeto cepillado y quemado (técnica shou-sugi-ban).
• Estructura metálica con tratamiento efecto forja.
• Planos para corte y soldadura.
• Diseño para montaje rápido en obra.

      `,
    },
    {
      id: 5,
      title: "Estructura Artea",
      category: "Estructuras de cocina",
      images: [
        "/assets/artea_estructura_01.jpg",
        "/assets/artea_estructura_02.jpg",
        "/assets/artea_estructura_03.jpg",
        "/assets/artea_planos_01.jpg",
        "/assets/artea_planos_02.jpg",
        "/assets/artea_planos_03.jpg",
        "/assets/artea_planos_04.jpg",
        "/assets/artea_planos_05.jpg",
        "/assets/artea_planos_06.jpg",
        "/assets/artea_union_3d.gif",
      ],
      desc: "Sistema modular basado en extrusión e inyección de aluminio para estructuras y estanterías de cocina",
      details: `
• Perfil estructural de aluminio diseñado a medida para piezas de union y tornillería.
• Uniones mediante piezas diseñadas para inyección zamak.
• Sistema 100% modular para cocinas y equipamiento profesional.
• Incluye estudio de tolerancias, espesores y esfuerzos.
• Generación de diseños de muebles y estructuras a partir del sistema modular
      `,
    },
    {
      id: 6,
      title: "Colección de 9 perfiles de extrusión para mueble de cocina",
      category: "Diseño industrial",
  images: [
        "/assets/PIEZA-1-GOLA DOBLE.dwg(1).png",
    "/assets/PIEZA-1-GOLA DOBLE.dwg.png",
    "/assets/PIEZA-6-CISNE-.dwg(1).png",
    "/assets/PIEZA-6-CISNE-.dwg.png",
    "/assets/PIEZA-5-GOLA SIMPLE.dwg(1).png",
    "/assets/PIEZA-5-GOLA SIMPLE.dwg.png",
    "/assets/PIEZA-4-ZOCALO 95-CORRECCION 1,2 GROSOR.dwg(1).png",
    "/assets/PIEZA-4-ZOCALO 95-CORRECCION 1,2 GROSOR.dwg.png",
    "/assets/PIEZA-3-MODIFICADA.dwg(1).png",
    "/assets/PIEZA-3-MODIFICADA.dwg.png",
    "/assets/PIEZA-2-ZOCALO 60-CORRECCION 1,2 GROSOR.dwg(1).png",
    "/assets/PIEZA-2-ZOCALO 60-CORRECCION 1,2 GROSOR.dwg.png"

  ],
      desc: "Serie de 9 perfiles para extrusión de aluminio ",
      details: `
• Set de perfiles de aluminio para cocina diseñado a medida.
• Diseño optimizado para fabricación de matrices de extrusion.
• Incluye estudio de tolerancias, espesores y esfuerzos.
• Generación de planos acotados y archivos STEP para proveedor
      `,
    },
    {
      id: 7,
      title: "Exploraciones conceptuales — Serie 01",
      category: "Diseños conceptuales",
      images: [
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
      desc: "Colección de diseños conceptuales, realizados en CAD y renderizados con IA.",
      details: `
• Diseños conceptuales con consideración de fabricación.
• Proceso híbrido entre CAD + IA generativa.
• Estudio de materiales, volumetrías y contrastes visuales.
• Ideales para branding, moodboards y dirección artística.
      `,
    },
    {
      id: 8,
      title: "Mueble TV suspendido con panel lateral",
      category: "Muebles flatpack",
      images: [
        "/assets/flatpack_tv_01.jpg",
        "/assets/flatpack_tv_02.jpg",
        "/assets/flatpack_tv_03.jpg",
        "/assets/flatpack_tv_planos_01.jpg",
        "/assets/flatpack_tv_planos_02.jpg",
        "/assets/flatpack_tv_planos_03.jpg",
        "/assets/flatpack_tv_planos_04.jpg",
      ],
      desc: "Mueble de TV suspendido con panel lateral. Sistema flatpack con ensamblaje rápido y instrucciones de motaje.",
      details: `
• Madera: Pino teñido en diferentes tonoss
• Unión: sistema de montaje sencillo con planos detallados.
• Acabado: barniz mate.
• Pensada para envío internacional con volumen optimizado.
• Apto para paredes de pladur.
      `,
    },


  ],
  []
);


  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  // -----------------------
  // HERO: todas las imágenes para el hero-carousel
  // -----------------------
  const allHeroImages = useMemo(() => projects.flatMap((p) => p.images), [projects]);
  const [heroIndex, setHeroIndex] = useState(() =>
    allHeroImages.length ? Math.floor(Math.random() * allHeroImages.length) : 0
  );

  useEffect(() => {
    if (!allHeroImages.length) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % allHeroImages.length);
    }, 5000); // 5s por defecto
    return () => clearInterval(id);
  }, [allHeroImages.length]);

  // -----------------------
  // LIGHTBOX / CARRUSEL INTERNO
  // -----------------------
  const openLightbox = (project, startIndex = 0) => {
    setLightbox(project);
    setCurrentIndex(startIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    setCurrentIndex(0);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    if (!lightbox) return;
    setCurrentIndex((i) => (i - 1 + lightbox.images.length) % lightbox.images.length);
  };

  const nextImage = () => {
    if (!lightbox) return;
    setCurrentIndex((i) => (i + 1) % lightbox.images.length);
  };

  // Swipe/drag threshold
  const dragThreshold = 80;
  const handleDragEnd = (event, info) => {
    const offset = info.offset?.x || 0;
    if (offset > dragThreshold) prevImage();
    if (offset < -dragThreshold) nextImage();
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  // -----------------------
  // Helper: safe image fallback
  // -----------------------
  const safeImage = (url) => (url ? url : "/assets/placeholder.jpg");

  // -----------------------
  // RENDER
  // -----------------------
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="fixed w-full bg-white/70 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-sky-500 flex items-center justify-center text-white font-semibold">
              DG
            </div>
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

        {/* Mobile menu */}
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
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Texto hero */}
          <motion.div
            className="flex-1"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Diseño de producto y mobiliario · CAD/CAM  </h1>
            <p className="mt-4 text-gray-600 max-w-xl">Diseño industrial y de producto aplicado a la fabricación industrial y artesanal.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-medium">Ver proyectos</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">Solicitar CV <Download className="w-4 h-4" /></a>
            </div>
          </motion.div>

          {/* Hero carousel (hero mantiene object-cover para estética) */}
          <div className="relative w-full h-[420px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              {allHeroImages.length > 0 && (
                <motion.div
                  key={allHeroImages[heroIndex]}
                  className="absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  {/* hero: object-cover para mantener estética de portada */}
                  <img src={safeImage(allHeroImages[heroIndex])} alt="hero slide" className="w-full h-full object-cover" draggable={false} />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold">Proyectos</motion.h2>
          <p className="text-gray-600 mt-1">Una muestra de mis trabajos más representativos ordenados por secciones.</p>

          <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`whitespace-nowrap px-4 py-2 rounded-full ${filter === cat ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"}`}>{cat}</button>
            ))}
          </div>

          <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, idx) => (
              <motion.article
                key={p.id}
                className="group rounded-xl bg-gray-50 overflow-hidden shadow relative"
                whileHover={{ y: -6 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.06 } } }}
              >
                <div className="relative w-full h-56 overflow-hidden cursor-pointer" onClick={() => openLightbox(p, 0)}>
                  {/* Tarjeta: object-cover para estética de card (Opción C) */}
                  <img src={safeImage(p.images[0])} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" draggable={false} />

                  {/* Hover second view (plano / 3D) - also object-cover for cards */}
                  {p.images[1] && (
                    <img src={safeImage(p.images[1])} alt={p.title + " alt"} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" draggable={false} />
                  )}

                  <div className="absolute left-4 bottom-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium">{p.category}</div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>Ver detalles</span>
                    <span className="flex items-center gap-2">Ver proyecto <ExternalLink className="w-4 h-4" /></span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h4 className="font-semibold">{lightbox.title}</h4>
                  <p className="text-sm text-gray-600">{lightbox.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={closeLightbox} className="text-gray-500 p-2 rounded-md hover:bg-gray-100"><X /></button>
                </div>
              </div>

              <div className="p-6 flex flex-col md:flex-row gap-6 max-h-[85vh] overflow-hidden">
                {/* Carousel area */}
                <div className="flex-1 relative flex flex-col items-center overflow-hidden">
                  <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden h-[60vh] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={lightbox.images[currentIndex]}
                        src={safeImage(lightbox.images[currentIndex])}
                        alt={`${lightbox.title} - ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35 }}
                        className="max-h-full max-w-full object-contain select-none"
                        draggable={false}
                      />
                    </AnimatePresence>

                    <button onClick={prevImage} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow">
                      <ChevronLeft />
                    </button>
                    <button onClick={nextImage} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow">
                      <ChevronRight />
                    </button>
                  </div>

                  {/* Thumbnails: marco fijo + object-contain (Opción 2 + C) */}
                  <div className="mt-3 flex gap-2 overflow-x-auto w-full pb-2">
                    {lightbox.images.map((src, idx) => (
                      <button key={src + idx} onClick={() => setCurrentIndex(idx)} className={`rounded-md overflow-hidden border ${idx === currentIndex ? "ring-2 ring-emerald-500" : "border-transparent"}`} style={{ minWidth: 88 }}>
                        <div className="w-20 h-14 bg-white flex items-center justify-center">
                          <img src={safeImage(src)} alt={`Thumb ${idx + 1}`} className="max-h-full max-w-full object-contain" draggable={false} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description area */}
                <div className="w-full md:w-1/3 overflow-y-auto pr-2">
                  <p className="text-gray-700 text-sm leading-relaxed">{lightbox.desc}</p>
                  <div className="mt-4 text-gray-700 text-sm whitespace-pre-line">{lightbox.details}</div>


                  <div className="mt-6 flex gap-3">
                    <a href={lightbox.images[currentIndex]} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border inline-flex items-center gap-2">Ver original</a>
                    <a href="#" className="px-4 py-2 rounded-md bg-emerald-600 text-white inline-flex items-center gap-2">Solicitar más info</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TECHNIQUE */}
      <section id="tech" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold">Técnica y flujo de trabajo</h3>
            <p className="mt-3 text-gray-600">Mi flujo combina control total de diseño con iteración visual rápida mediante IA generativa.</p>
            <ol className="mt-6 space-y-3 text-sm text-gray-700">
              <li><strong>1. Modelado 3D:</strong> Diseño paramétrico y definición técnica en CAD.</li>
              <li><strong>2. Render base:</strong> Renders neutros para validar volúmenes y encajes.</li>
              <li><strong>3. Interpretación con IA:</strong> Generación de escenas fotorealistas y variaciones de materiales.</li>
              <li><strong>4. Ajustes técnicos:</strong> Correcciones manuales para asegurar fidelidad a la pieza fabricable.</li>
              <li><strong>5. Fabricación:</strong> Preparación de G-code/CAM, pruebas de prototipo y producción.</li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-sky-600 text-white inline-flex items-center gap-2">Ver trabajos</a>
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
            <p className="mt-3 text-gray-700">Soy diseñador de producto e industrial con experiencia en dirección de diseño, fabricación digital y desarrollo técnico. Después de años como diseñador para la industria del mueble, fundé Acontraveta para diseñar y producir mobiliario y decoración, combinando procesos industriales y artesanales.</p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li><strong>Herramientas:</strong> CAD paramétrico, SolidWorks, Fusion360, CAM, corte láser, CNC.</li>
              <li><strong>Visualización:</strong> Renders, KeyShot, IA generativa para escenas fotorealistas.</li>
              <li><strong>Ámbitos:</strong> Industrial, mobiliario a medida, cocinas, muebles flatpack, artesanía y decoración.</li>
              <li><strong>Contacto:</strong> acontravetaes@gmail.com</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg p-6 bg-gray-50">
            <h4 className="font-semibold">Datos rápidos</h4>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <div><strong>Nombre:</strong> Daniel Gutiérrez Victoriano</div>
              <div><strong>Localidad:</strong> Logroño, La Rioja</div>
              <div><strong>Disponibilidad:</strong> Proyectos,colaboraciones y empleo</div>
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
      <p className="mt-3 text-gray-600">
        Si quieres ver más proyectos o realizar una propuesta laboral, escríbeme.
      </p>

      <form
        action="https://formsubmit.co/acontravetaes@gmail.com"
        method="POST"
        className="mt-6 grid grid-cols-1 gap-3 max-w-md"
      >

        {/* Opciones ocultas */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />

        {/* Si quieres redireccionar a una página de gracias, activa esta línea */}
        {/* <input type="hidden" name="_next" value="https://tudominio.com/gracias" /> */}

        <input
          className="px-4 py-3 border rounded-md"
          placeholder="Nombre"
          name="name"
          required
        />

        <input
          className="px-4 py-3 border rounded-md"
          placeholder="Email"
          type="email"
          name="email"
          required
        />

        <textarea
          className="px-4 py-3 border rounded-md"
          rows={4}
          placeholder="Mensaje"
          name="message"
          required
        />

        <button
          type="submit"
          className="px-4 py-3 rounded-md bg-emerald-600 text-white"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-600 flex items-center gap-4">
        <Mail /> <span>acontravetaes@gmail.com</span>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end">
      <img
        src="/assets/favicon.png"
        alt="contact icon"
        className="w-32 h-32 object-contain opacity-90"
      />
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Daniel Gutiérrez Victoriano— </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Web</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
