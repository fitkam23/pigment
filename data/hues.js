export const hueCategories = [
    { id: 'red',    label: 'Reds',    color: '#D71D4A' },
    { id: 'yellow', label: 'Yellows', color: '#F3E03B' },
    { id: 'green',  label: 'Greens',  color: '#007F5C' },
    { id: 'blue',   label: 'Blues',   color: '#000F89' },
    { id: 'brown',  label: 'Browns',  color: '#483C32' }
];

export const hueLibraries = [
    // ================= RED LIBRARY =================
    {
        id: "lib_red",
        title: "Mijello Reds",
        swatches: [
            { 
                id: "mj_rd_01", name: "Rose Madder", hex: "#D71D4A", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PR176.\nREPLICATION: To mimic this deep cool red without PR176, mix Quin Rose (PV19) with a tiny touch of Alizarin or Pyrrol Red.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PV19", ratio:3}, {id:"PR254", ratio:0.5}] 
                    }, 
                    gouache: { note: "Replicate with Rose + tiny Red.", mix: [{id:"PV19", ratio:3}, {id:"PR254", ratio:0.5}] } 
                } 
            },
            { 
                id: "mj_rd_02", name: "Quinacridone Violet", hex: "#7E2065", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PV9.\nREPLICATION: Difficult to match perfectly. Mix Quin Rose (PV19) with Ultramarine Blue to approximate this violet-red hue.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PV19", ratio:2}, {id:"PB29", ratio:1}] 
                    }, 
                    gouache: { note: "Replicate with Rose + Blue.", mix: [{id:"PV19", ratio:3}, {id:"PB29", ratio:1}] } 
                } 
            }
        ]
    },

    // ================= YELLOW LIBRARY =================
    {
        id: "lib_yellow",
        title: "Mijello Yellows",
        swatches: [
            { 
                id: "mj_yl_01", name: "Red Orange", hex: "#FF4500", temperature: "warm", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PO73.\nREPLICATION: To achieve this vivid orange look, mix a Warm Yellow (PY151) with a Bright Red (PR254).", 
                        mix: [{id:"WATER", ratio:5}, {id:"PY151", ratio:1}, {id:"PR254", ratio:1}] 
                    }, 
                    gouache: { note: "Replicate with Yellow + Red.", mix: [{id:"PY151", ratio:1}, {id:"PR254", ratio:1}] } 
                } 
            },
            { 
                id: "mj_yl_02", name: "Quin. Yellow Light", hex: "#F3E03B", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PY38.\nREPLICATION: This is a very clean, staining yellow. Substitute with Azo Yellow (PY151) or Hansa Yellow (PY3).", 
                        mix: [{id:"WATER", ratio:5}, {id:"PY151", ratio:1}] 
                    }, 
                    gouache: { note: "Replicate with Azo Yellow.", mix: [{id:"PW6", ratio:1}, {id:"PY151", ratio:3}] } 
                } 
            },
            { 
                id: "mj_yl_03", name: "Yellow Ochre", hex: "#D4AF37", temperature: "neutral", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PY42 (Synthetic Iron Oxide).\nREPLICATION: If you lack PY42, dull down a standard Yellow with a tiny touch of Purple.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PY43", ratio:1}] 
                    }, 
                    gouache: { note: "Standard Ochre.", mix: [{id:"PY43", ratio:1}] } 
                } 
            }
        ]
    },

    // ================= GREEN LIBRARY =================
    {
        id: "lib_green",
        title: "Mijello Greens",
        swatches: [
            { 
                id: "mj_gr_01", name: "Bamboo Green", hex: "#4B6F44", temperature: "warm", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PG36 (Phthalo Green YS).\nREPLICATION: This is a warm Phthalo. Replicate by adding Lemon Yellow to standard Phthalo Green (PG7).", 
                        mix: [{id:"WATER", ratio:5}, {id:"PG7", ratio:2}, {id:"PY151", ratio:1}] 
                    }, 
                    gouache: { note: "Replicate with Phthalo Green + Yellow.", mix: [{id:"PG7", ratio:2}, {id:"PY151", ratio:1}] } 
                } 
            },
            { 
                id: "mj_gr_02", name: "Viridian", hex: "#007F5C", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PG7.\nREPLICATION: This is the standard cool green found in most sets. No mixing required if you have Phthalo Green.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PG7", ratio:1}] 
                    }, 
                    gouache: { note: "Standard Phthalo Green.", mix: [{id:"PG7", ratio:1}, {id:"PW6", ratio:0.5}] } 
                } 
            }
        ]
    },

    // ================= BLUE LIBRARY =================
    {
        id: "lib_blue",
        title: "Mijello Blues",
        swatches: [
            { 
                id: "mj_bl_01", name: "Phthalo Blue", hex: "#000F89", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PB15:6.\nREPLICATION: PB15:6 is slightly reddish. Standard Phthalo Blue (PB15:3) is a perfect substitute for most uses.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PB15", ratio:1}] 
                    }, 
                    gouache: { note: "Standard Phthalo Blue.", mix: [{id:"PB15", ratio:1}] } 
                } 
            },
            { 
                id: "mj_bl_02", name: "Cerulean Blue", hex: "#2A52BE", temperature: "cool", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PB15:3 (Mijello uses Phthalo for Cerulean hue).\nREPLICATION: Real Cerulean is PB35 (granulating). To match this Mijello hue, mix Phthalo Blue + White.", 
                        mix: [{id:"WATER", ratio:10}, {id:"PB15", ratio:1}, {id:"PW6", ratio:0.2}] 
                    }, 
                    gouache: { note: "Replicate with Phthalo + White.", mix: [{id:"PB15", ratio:1}, {id:"PW6", ratio:2}] } 
                } 
            }
        ]
    },

    // ================= BROWN LIBRARY =================
    {
        id: "lib_brown",
        title: "Mijello Browns",
        swatches: [
            { 
                id: "mj_br_01", name: "Burnt Sienna", hex: "#8A3324", temperature: "warm", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PR102 (Natural Iron Oxide).\nREPLICATION: Most brands use PR101 (Synthetic). They are interchangeable. Or mix Red + Green.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PR101", ratio:1}] 
                    }, 
                    gouache: { note: "Standard Burnt Sienna.", mix: [{id:"PR101", ratio:1}] } 
                } 
            },
            { 
                id: "mj_br_02", name: "Vandyke Brown", hex: "#483C32", temperature: "neutral", 
                formulas: { 
                    watercolor: { 
                        note: "PURE PIGMENT: PBr7.\nREPLICATION: A deep, dark earth tone. Replicate by mixing Burnt Sienna with Carbon Black.", 
                        mix: [{id:"WATER", ratio:5}, {id:"PR101", ratio:2}, {id:"PBk7", ratio:1}] 
                    }, 
                    gouache: { note: "Replicate with Sienna + Black.", mix: [{id:"PR101", ratio:2}, {id:"PBk7", ratio:1}] } 
                } 
            }
        ]
    }
];