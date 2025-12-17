// Database Pigmen Utama
export const pigments = {
    // --- YELLOWS ---
    "PY151": { name: "Azo Yellow", genericName: "Lemon Yellow", hex: "#F3E03B", family: "yellow", brand: "Daniel Smith" },
    "PY3":   { name: "Hansa Yellow Light", genericName: "Lemon Yellow", hex: "#F4E500", family: "yellow", brand: "Daniel Smith" },
    "PY35":  { name: "Cadmium Yellow", genericName: "Warm Yellow", hex: "#FFD700", family: "yellow", brand: "Winsor & Newton" },
    "PY150": { name: "Nickel Azo", genericName: "Transparent Yellow", hex: "#E8B923", family: "yellow", brand: "M. Graham" },
    "PY110": { name: "Isoindolinone Yellow", genericName: "Deep Yellow", hex: "#F5C71A", family: "yellow", brand: "Daniel Smith" },
    "PY43":  { name: "Yellow Ochre", genericName: "Earth Yellow", hex: "#D4AF37", family: "yellow", brand: "Winsor & Newton" },
    "PY42":  { name: "Raw Sienna", genericName: "Earth Yellow", hex: "#C79632", family: "yellow", brand: "Holbein" },
    "PY129": { name: "Green Gold", genericName: "Greenish Yellow", hex: "#B3C114", family: "yellow", brand: "Daniel Smith" },

    // --- REDS ---
    "PV19":  { name: "Quinacridone Rose", genericName: "Cool Pink", hex: "#E03C6C", family: "red", brand: "Daniel Smith" },
    "PR122": { name: "Quinacridone Magenta", genericName: "Magenta", hex: "#D90077", family: "red", brand: "Holbein" },
    "PR254": { name: "Pyrrol Red", genericName: "Bright Red", hex: "#E32636", family: "red", brand: "Daniel Smith" },
    "PR108": { name: "Cadmium Red", genericName: "Warm Red", hex: "#D9381E", family: "red", brand: "Winsor & Newton" },
    "PR101": { name: "Burnt Sienna", genericName: "Red Earth", hex: "#8A3324", family: "red", brand: "Winsor & Newton" },
    "PR177": { name: "Anthraquinoid Red", genericName: "Cool Dark Red", hex: "#A81C26", family: "red", brand: "Daniel Smith" },
    "PR179": { name: "Perylene Maroon", genericName: "Dark Maroon", hex: "#6E1C1C", family: "red", brand: "Winsor & Newton" },
    "PR209": { name: "Quinacridone Red", genericName: "Coral Red", hex: "#E5565B", family: "red", brand: "Daniel Smith" },

    // --- BLUES ---
    "PB29":  { name: "Ultramarine Blue", genericName: "Warm Blue", hex: "#4166F5", family: "blue", brand: "Daniel Smith" },
    "PB15":  { name: "Phthalo Blue (GS)", genericName: "Cool Blue", hex: "#0085C7", family: "blue", brand: "Winsor & Newton" },
    "PB35":  { name: "Cerulean Blue", genericName: "Sky Blue", hex: "#2A52BE", family: "blue", brand: "M. Graham" },
    "PB60":  { name: "Indanthrone Blue", genericName: "Dark Blue", hex: "#212854", family: "blue", brand: "Daniel Smith" },
    "PB27":  { name: "Prussian Blue", genericName: "Dark Cool Blue", hex: "#003153", family: "blue", brand: "Winsor & Newton" },
    "PB16":  { name: "Phthalo Turquoise", genericName: "Turquoise", hex: "#006A7C", family: "blue", brand: "Holbein" },

    // --- GREENS ---
    "PG7":   { name: "Phthalo Green (BS)", genericName: "Cool Green", hex: "#009E60", family: "green", brand: "Winsor & Newton" },
    "PG36":  { name: "Phthalo Green (YS)", genericName: "Warm Green", hex: "#2E8B57", family: "green", brand: "Daniel Smith" },
    "PG18":  { name: "Viridian", genericName: "Soft Cool Green", hex: "#40826D", family: "green", brand: "Winsor & Newton" },
    "PG50":  { name: "Cobalt Teal", genericName: "Bright Teal", hex: "#00CCCC", family: "green", brand: "Daniel Smith" },
    "PG8":   { name: "Hooker's Green", genericName: "Dark Green", hex: "#3B5338", family: "green", brand: "Holbein" },
    "PG23":  { name: "Green Earth", genericName: "Earth Green", hex: "#6F7C63", family: "green", brand: "Winsor & Newton" },

    // --- NEUTRALS / EARTHS ---
    "PBr7":  { name: "Burnt Umber", genericName: "Dark Brown", hex: "#483C32", family: "neutral", brand: "Winsor & Newton" },
    "PBr7s": { name: "Raw Umber", genericName: "Cool Brown", hex: "#72614B", family: "neutral", brand: "Daniel Smith" },
    "PBk7":  { name: "Carbon Black", genericName: "Black", hex: "#1a1a1a", family: "black", brand: "Winsor & Newton" },
    "PBk11": { name: "Mars Black", genericName: "Opaque Black", hex: "#2C2C2C", family: "black", brand: "Daniel Smith" },
    "PW6":   { name: "Titanium White", genericName: "White", hex: "#FFFFFF", family: "white", brand: "Holbein" },
    "PW6b":  { name: "Buff Titanium", genericName: "Off-White", hex: "#F0EAD6", family: "white", brand: "Daniel Smith" },
    
    // MEDIUM
    "WATER": { name: "Water", genericName: "Water", hex: "#E0F2FE", family: "medium", brand: "-" }
};

// Helper function untuk mengambil data pigmen dengan fallback safe
export const getPigment = (id) => pigments[id] || { name: id, hex: "#000000", brand: "Unknown" };