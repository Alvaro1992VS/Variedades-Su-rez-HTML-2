// ╔══════════════════════════════════════════════════════════════════╗
// ║          VARIEDADES SUÁREZ — LISTA DE PRODUCTOS                  ║
// ║                                                                  ║
// ║  CÓMO AÑADIR UN PRODUCTO NUEVO:                                  ║
// ║  1. Copia cualquier línea de producto existente                  ║
// ║  2. Pégala antes del ];  (última línea)                          ║
// ║  3. Cambia los valores y guarda                                  ║
// ║                                                                  ║
// ║  foto: ""  → muestra el emoji si no hay imagen todavía           ║
// ║  stock: 0  → aparece AGOTADO automáticamente                     ║
// ║                                                                  ║
// ║  CATEGORÍAS: "Granos" "Lácteos" "Carnes" "Embutidos"            ║
// ║              "Bebidas" "Condimentos" "Conservas"                 ║
// ║              "Pan y Dulces" "Limpieza" "Aseo Personal" "Otros"  ║
// ╚══════════════════════════════════════════════════════════════════╝

const PRODUCTOS = [

  // ── GRANOS ──────────────────────────────────────────────────────
  { id: "arroz",              nombre: "Arroz",             desc: "Arroz blanco de grano largo, calidad premium",            precio: 120,  foto: "Arroz.jpg",            categoria: "Granos",        emoji: "🌾", unidad: "Lb",      stock: 10 },
  { id: "frijoles_negros",    nombre: "Frijoles Negros",   desc: "Frijoles negros frescos y bien seleccionados",            precio: 400,  foto: "Frijoles.jpg",         categoria: "Granos",        emoji: "🫘", unidad: "Lb",      stock: 8  },
  { id: "frijoles_colorados", nombre: "Frijoles Colorados",desc: "Frijoles colorados secos, ideales para potaje",           precio: 420,  foto: "FrijolesColorados.jpg",categoria: "Granos",        emoji: "🫘", unidad: "Lb",      stock: 10  },
  { id: "chicharo",           nombre: "Chícharo",          desc: "Chícharo seco amarillo para sopas y potajes",             precio: 380,  foto: "Chicharo.jpg",         categoria: "Granos",        emoji: "🟡", unidad: "Lb",      stock: 6  },

  // ── LÁCTEOS ─────────────────────────────────────────────────────
  { id: "leche_polvo",        nombre: "Leche en Polvo",    desc: "Leche entera en polvo, bolsa sellada",                    precio: 600,  foto: "LechePolvo.jpg",       categoria: "Lácteos",       emoji: "🥛", unidad: "400g",    stock: 5  },
  { id: "yogur",              nombre: "Yogur Natural",     desc: "Yogur natural cremoso, sin azúcar añadida",               precio: 180,  foto: "Yogur.jpg",            categoria: "Lácteos",       emoji: "🥛", unidad: "Unidad",  stock: 10 },

  // ── CARNES ──────────────────────────────────────────────────────
  { id: "pollo",              nombre: "Pollo",             desc: "Pollo fresco entero o partido, según disponibilidad",     precio: 900,  foto: "Pollo.jpg",            categoria: "Carnes",        emoji: "🍗", unidad: "Lb",      stock: 7  },
  { id: "cerdo",              nombre: "Carne de Cerdo",    desc: "Carne de cerdo fresca, magra y tierna",                   precio: 750,  foto: "Cerdo.jpg",            categoria: "Carnes",        emoji: "🥩", unidad: "Lb",      stock: 4  },

  // ── EMBUTIDOS ───────────────────────────────────────────────────
  { id: "jamon",              nombre: "Jamón",             desc: "Jamón cocido en lonchas, ideal para bocadillos",          precio: 500,  foto: "Jamon.jpg",            categoria: "Embutidos",     emoji: "🌭", unidad: "250g",    stock: 6  },
  { id: "mortadela",          nombre: "Mortadela",         desc: "Mortadela clásica en bloque o en rodajas",                precio: 450,  foto: "Mortadela.jpg",        categoria: "Embutidos",     emoji: "🌭", unidad: "250g",    stock: 5  },

  // ── BEBIDAS ─────────────────────────────────────────────────────
  { id: "refresco",           nombre: "Refresco",          desc: "Refresco de cola, naranja o tropical (según existencia)", precio: 200,  foto: "Refresco.jpg",         categoria: "Bebidas",       emoji: "🥤", unidad: "355ml",   stock: 15 },
  { id: "agua",               nombre: "Agua Mineral",      desc: "Agua mineral natural, botella sellada",                   precio: 120,  foto: "Agua.jpg",             categoria: "Bebidas",       emoji: "💧", unidad: "500ml",   stock: 20 },
  { id: "jugo",               nombre: "Jugo de Frutas",    desc: "Jugo de frutas tropicales, variedad según existencia",    precio: 150,  foto: "Jugo.jpg",             categoria: "Bebidas",       emoji: "🧃", unidad: "250ml",   stock: 12 },

  // ── CONDIMENTOS ─────────────────────────────────────────────────
  { id: "sal",                nombre: "Sal",               desc: "Sal fina yodada para cocina",                             precio: 80,   foto: "Sal.jpg",              categoria: "Condimentos",   emoji: "🧂", unidad: "Lb",      stock: 20 },
  { id: "aceite",             nombre: "Aceite de Cocina",  desc: "Aceite vegetal refinado, botella de 1 litro",             precio: 850,  foto: "Aceite.jpg",           categoria: "Condimentos",   emoji: "🫙", unidad: "1L",      stock: 5  },
  { id: "azucar",             nombre: "Azúcar",            desc: "Azúcar refino blanca de caña",                            precio: 350,  foto: "Azucar.jpg",           categoria: "Condimentos",   emoji: "🍬", unidad: "Lb",      stock: 15 },
  { id: "vinagre",            nombre: "Vinagre",           desc: "Vinagre de mesa blanco para aderezos y conservas",        precio: 110,  foto: "Vinagre.jpg",          categoria: "Condimentos",   emoji: "🧂", unidad: "500ml",   stock: 8  },

  // ── CONSERVAS ───────────────────────────────────────────────────
  { id: "pasta_tomate",       nombre: "Pasta de Tomate",   desc: "Pasta de tomate concentrada, lata o sachet",              precio: 200,  foto: "PastaTomate.jpg",      categoria: "Conservas",     emoji: "🥫", unidad: "Unidad",  stock: 10 },
  { id: "atun",               nombre: "Atún en Lata",      desc: "Atún en aceite o al natural, lata sellada",               precio: 350,  foto: "Atun.jpg",             categoria: "Conservas",     emoji: "🐟", unidad: "Unidad",  stock: 8  },

  // ── PAN Y DULCES ────────────────────────────────────────────────
  { id: "pan",                nombre: "Pan",               desc: "Pan de flauta recién horneado",                           precio: 50,   foto: "Pan.jpg",              categoria: "Pan y Dulces",  emoji: "🍞", unidad: "Unidad",  stock: 20 },
  { id: "galletas",           nombre: "Galletas",          desc: "Galletas surtidas, paquete sellado",                      precio: 180,  foto: "Galletas.jpg",         categoria: "Pan y Dulces",  emoji: "🍪", unidad: "Paquete", stock: 12 },

  // ── LIMPIEZA ────────────────────────────────────────────────────
  { id: "jabon_lavar",        nombre: "Jabón de Lavar",    desc: "Jabón en barra para ropa, gran durabilidad",              precio: 120,  foto: "JabonLavar.jpg",       categoria: "Limpieza",      emoji: "🧹", unidad: "Unidad",  stock: 15 },
  { id: "detergente",         nombre: "Detergente",        desc: "Detergente en polvo para lavadora o a mano",              precio: 280,  foto: "Detergente.jpg",       categoria: "Limpieza",      emoji: "🧺", unidad: "500g",    stock: 8  },
  { id: "cloro",              nombre: "Cloro / Lejía",     desc: "Cloro líquido para desinfección del hogar",               precio: 150,  foto: "Cloro.jpg",            categoria: "Limpieza",      emoji: "🧴", unidad: "1L",      stock: 10 },

  // ── ASEO PERSONAL ───────────────────────────────────────────────
  { id: "jabon_bano",         nombre: "Jabón de Baño",     desc: "Jabón de tocador, suave para la piel",                    precio: 100,  foto: "JabonBano.jpg",                     categoria: "Aseo Personal", emoji: "🧼", unidad: "Unidad",  stock: 20 },
  { id: "pasta_dental",       nombre: "Pasta Dental",      desc: "Pasta dental con flúor, protección completa",             precio: 220,  foto: "PastaDental.jpg",      categoria: "Aseo Personal", emoji: "🪥", unidad: "Unidad",  stock: 10 },
  { id: "shampoo",            nombre: "Shampoo",           desc: "Shampoo para cabello normal, botella 400ml",              precio: 380,  foto: "Shampoo.jpg",          categoria: "Aseo Personal", emoji: "🧴", unidad: "400ml",   stock: 6  },

  // ════════════════════════════════════════════════════════════════
  // AÑADE TUS PRODUCTOS NUEVOS AQUÍ ARRIBA, ANTES DEL ];
  // Copia una línea y cambia los valores.
  //
  // Si todavía no tienes foto para un producto, pon:  foto: ""
  // El emoji se mostrará automáticamente hasta que tengas la foto.
  //
  // EJEMPLO:
  // { id: "leche_fresca", nombre: "Leche Fresca", desc: "Leche fresca del día", precio: 250, foto: "LecheFresca.jpg", categoria: "Lácteos", emoji: "🥛", unidad: "1L", stock: 8 },
  // ════════════════════════════════════════════════════════════════

];
