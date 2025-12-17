export const forest = {
    id: "theme_forest",
    title: "Forest Floor",
    description: "Moss, ferns & damp earth",
    requiredPigments: ["PG7", "PY150", "PR101", "PBk7", "PW6"], 
    inspiration: {
        artist: "Fitkam",
        handle: "@fitkamgummy",
        info: "Field study of moss textures using watercolor glazing.",
        link: "#", 
        imageUrl: "https://i.pinimg.com/736x/87/42/d2/8742d201c1074558509426244795368a.jpg"
    },
    swatches: [
        {
            id: "sw_for_01", 
            name: "Sap Green", 
            hex: "#556B2F", 
            category: "green", 
            temperature: "warm",
            formulas: {
                watercolor: { note: "Phthalo Green + Nickel Azo (Classic Sap).", 
                    mix: [ { id: "WATER", ratio: 4 }, 
                        { id: "PY150", ratio: 3 }, 
                        { id: "PG7", ratio: 1 } ] },
                gouache: { note: "Yellow dominant green mix.", 
                    mix: [ { id: "PY150", ratio: 4 }, 
                        { id: "PG7", ratio: 1 }, 
                        { id: "PW6", ratio: 1 } ] }
            }
        },
        {
            id: "sw_for_02", 
            name: "Damp Earth", 
            hex: "#3E2723", 
            category: "brown", 
            temperature: "neutral",
            formulas: {
                watercolor: { note: "Burnt Sienna + Phthalo Green (Neutral Dark).", 
                    mix: [ { id: "WATER", ratio: 2 }, 
                        { id: "PR101", ratio: 2 }, 
                        { id: "PG7", ratio: 1 } ] },
                gouache: { note: "Burnt Sienna darkened with Carbon Black.", 
                    mix: [ { id: "PR101", ratio: 3 }, 
                        { id: "PBk7", ratio: 1 } ] }
            }
        },
        {
            id: "sw_for_03", 
            name: "Old leaf", 
            hex: "#214947", 
            category: "green", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Bamboo green mixed with quin rose", 
                    mix: [ { id: "WATER", ratio: 2 }, 
                        { id: "PR101", ratio: 2 }, 
                        { id: "PG7", ratio: 1 } ] },
                gouache: { note: "Bamboo green mixed with quin rose", 
                    mix: [ { id: "PR101", ratio: 3 }, 
                        { id: "PBk7", ratio: 1 } ] }
            }
        },
        {
            id: "sw_for_04", 
            name: "Damp Earth", 
            hex: "#582b39", 
            category: "brown", 
            temperature: "neutral",
            formulas: {
                watercolor: { note: "Burnt Sienna + Phthalo Green (Neutral Dark).", 
                    mix: [ { id: "WATER", ratio: 2 }, 
                        { id: "PR101", ratio: 2 }, 
                        { id: "PG7", ratio: 1 } ] },
                gouache: { note: "Burnt Sienna darkened with Carbon Black.", 
                    mix: [ { id: "PR101", ratio: 3 }, 
                        { id: "PBk7", ratio: 1 } ] }
            }
        },
        {
            id: "sw_for_05", 
            name: "Damp Earth", 
            hex: "#8c5555", 
            category: "brown", 
            temperature: "neutral",
            formulas: {
                watercolor: { note: "Burnt Sienna + Phthalo Green (Neutral Dark).", 
                    mix: [ { id: "WATER", ratio: 2 }, 
                        { id: "PR101", ratio: 2 }, 
                        { id: "PG7", ratio: 1 } ] },
                gouache: { note: "Burnt Sienna darkened with Carbon Black.", 
                    mix: [ { id: "PR101", ratio: 3 }, 
                        { id: "PBk7", ratio: 1 } ] }
            }
        }
    ]
};