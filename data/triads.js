export const triads = [
    // 1. THE PRINTER'S TRIAD (CMY)
    {
        id: "triad_modern",
        title: "The Modern CMY",
        description: "Bright, clean mixes. The closest to a printer's ink set.",
        requiredPigments: ["PB15", "PV19", "PY151"],
        inspiration: {
            artist: "Modern Art",
            handle: "@studio_pop",
            link: "#", 
            info: "Based on the Cyan-Magenta-Yellow subtractive color model. Creates the cleanest greens and purples.",
            imageUrl: "https://placehold.co/600x400/2A52BE/ffffff?text=CMY+Vibrant"
        },
        swatches: [
            {
                id: "tr_mod_01", name: "Electric Purple", hex: "#6B2CF5", 
                formulas: {
                    watercolor: { note: "Phthalo Blue + Rose.", mix: [{id:"WATER", ratio:5}, {id:"PB15", ratio:1}, {id:"PV19", ratio:2}] },
                    gouache: { note: "Blue + Rose.", mix: [{id:"PB15", ratio:1}, {id:"PV19", ratio:2}] }
                }
            },
            {
                id: "tr_mod_02", name: "Spring Green", hex: "#4CBB17", 
                formulas: {
                    watercolor: { note: "Azo Yellow + Phthalo Blue.", mix: [{id:"WATER", ratio:5}, {id:"PY151", ratio:4}, {id:"PB15", ratio:0.5}] },
                    gouache: { note: "Yellow + tiny Blue.", mix: [{id:"PY151", ratio:4}, {id:"PB15", ratio:0.5}] }
                }
            },
            {
                id: "tr_mod_03", name: "Fire Orange", hex: "#FF4F00", 
                formulas: {
                    watercolor: { note: "Azo Yellow + Rose.", mix: [{id:"WATER", ratio:5}, {id:"PY151", ratio:3}, {id:"PV19", ratio:1}] },
                    gouache: { note: "Yellow + Rose.", mix: [{id:"PY151", ratio:3}, {id:"PV19", ratio:1}] }
                }
            }
        ]
    },

    // 2. THE EARTH TRIAD
    {
        id: "triad_earth",
        title: "The Earth Triad",
        description: "Muted & moody. Perfect for landscapes and portraits.",
        requiredPigments: ["PB29", "PY43", "PR101"],
        inspiration: {
            artist: "Classic Masters",
            handle: "@old_masters",
            link: "#", 
            info: "A variation of the Zorn palette but with Ultramarine for deeper darks.",
            imageUrl: "https://placehold.co/600x400/483C32/ffffff?text=Earth+Tones"
        },
        swatches: [
            {
                id: "tr_ear_01", name: "Olive Drab", hex: "#4B5320", 
                formulas: {
                    watercolor: { note: "Ultramarine + Ochre.", mix: [{id:"WATER", ratio:4}, {id:"PB29", ratio:1}, {id:"PY43", ratio:3}] },
                    gouache: { note: "Ochre + Blue.", mix: [{id:"PY43", ratio:3}, {id:"PB29", ratio:1}] }
                }
            },
            {
                id: "tr_ear_02", name: "Warm Grey", hex: "#808080", 
                formulas: {
                    watercolor: { note: "Ultramarine + Burnt Sienna (Neutralizer).", mix: [{id:"WATER", ratio:5}, {id:"PB29", ratio:1}, {id:"PR101", ratio:1}] },
                    gouache: { note: "White + Blue + Sienna.", mix: [{id:"PW6", ratio:4}, {id:"PB29", ratio:1}, {id:"PR101", ratio:1}] }
                }
            },
            {
                id: "tr_ear_03", name: "Rust", hex: "#B7410E", 
                formulas: {
                    watercolor: { note: "Burnt Sienna + Ochre.", mix: [{id:"WATER", ratio:4}, {id:"PR101", ratio:2}, {id:"PY43", ratio:1}] },
                    gouache: { note: "Sienna + Ochre.", mix: [{id:"PR101", ratio:2}, {id:"PY43", ratio:1}] }
                }
            }
        ]
    },

    // 3. THE TROPICAL TRIAD
    {
        id: "triad_tropical",
        title: "Tropical Punch",
        description: "Teal, coral, and gold. Vacation vibes.",
        requiredPigments: ["PG50", "PV19", "PY150"],
        inspiration: {
            artist: "Botanical Study",
            handle: "@jungle_vibe",
            link: "#", 
            info: "Uses secondary pigments as primaries for unique, granulating mixes.",
            imageUrl: "https://placehold.co/600x400/00CCCC/000000?text=Tropical"
        },
        swatches: [
            {
                id: "tr_trop_01", name: "Reef Turquoise", hex: "#40E0D0", 
                formulas: {
                    watercolor: { note: "Pure Cobalt Teal.", mix: [{id:"WATER", ratio:5}, {id:"PG50", ratio:1}] },
                    gouache: { note: "Teal + White.", mix: [{id:"PG50", ratio:1}, {id:"PW6", ratio:1}] }
                }
            },
            {
                id: "tr_trop_02", name: "Sunset Gold", hex: "#FFC107", 
                formulas: {
                    watercolor: { note: "Nickel Azo + tiny Rose.", mix: [{id:"WATER", ratio:5}, {id:"PY150", ratio:4}, {id:"PV19", ratio:0.1}] },
                    gouache: { note: "Yellow + tiny Rose.", mix: [{id:"PY150", ratio:4}, {id:"PV19", ratio:0.1}] }
                }
            },
            {
                id: "tr_trop_03", name: "Deep Violet", hex: "#4B0082", 
                formulas: {
                    watercolor: { note: "Teal + Rose (Granulating Purple).", mix: [{id:"WATER", ratio:5}, {id:"PG50", ratio:1}, {id:"PV19", ratio:2}] },
                    gouache: { note: "Teal + Rose.", mix: [{id:"PG50", ratio:1}, {id:"PV19", ratio:2}] }
                }
            }
        ]
    },

    // 4. THE SHADOW TRIAD
    {
        id: "triad_shadow",
        title: "Night & Shadow",
        description: "For deep shadows and moody atmospheres.",
        requiredPigments: ["PB27", "PR179", "PY129"],
        inspiration: {
            artist: "Noir Study",
            handle: "@dark_arts",
            link: "#", 
            info: "Low key triad. Impossible to make bright colors, perfect for darks.",
            imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Moody+Dark"
        },
        swatches: [
            {
                id: "tr_shad_01", name: "Blackened Green", hex: "#1B4D3E", 
                formulas: {
                    watercolor: { note: "Prussian + Green Gold.", mix: [{id:"WATER", ratio:2}, {id:"PB27", ratio:2}, {id:"PY129", ratio:1}] },
                    gouache: { note: "Prussian + Green Gold.", mix: [{id:"PB27", ratio:2}, {id:"PY129", ratio:1}] }
                }
            },
            {
                id: "tr_shad_02", name: "Dried Blood", hex: "#4A0404", 
                formulas: {
                    watercolor: { note: "Pure Perylene Maroon.", mix: [{id:"WATER", ratio:2}, {id:"PR179", ratio:1}] },
                    gouache: { note: "Maroon + Black.", mix: [{id:"PR179", ratio:3}, {id:"PBk7", ratio:0.1}] }
                }
            },
            {
                id: "tr_shad_03", name: "Midnight Blue", hex: "#191970", 
                formulas: {
                    watercolor: { note: "Prussian + Maroon (Deepest Dark).", mix: [{id:"WATER", ratio:2}, {id:"PB27", ratio:2}, {id:"PR179", ratio:1}] },
                    gouache: { note: "Prussian + Maroon.", mix: [{id:"PB27", ratio:2}, {id:"PR179", ratio:1}] }
                }
            }
        ]
    }
];