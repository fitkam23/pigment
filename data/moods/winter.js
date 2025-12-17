export const winter = {
    id: "theme_winter",
    title: "Winter Dream",
    description: "Crisp air & Snowy peaks",
    requiredPigments: ["PW6", "PB29", "PV19", "PG7", "PB15"], 
    inspiration: {
        artist: "Fitkam",
        handle: "@fitkamgummy",
        info: "This painting was made with gouache paint on cold press paper.",
        link: "https://www.instagram.com/p/Cng9LP7JbvT/?img_index=1", 
        imageUrl: "https://i.pinimg.com/736x/19/3d/5b/193d5bd08d8b81a39785a62a178e447b.jpg"
    },
    swatches: [
        {
            id: "sw_win_01", 
            name: "Frozen Lavender", 
            hex: "#B57EDC", 
            category: "purple", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Quin Rose + Ultramarine, dilute well.", 
                    mix: [ { id: "WATER", ratio: 8 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] },
                gouache: { note: "White base mixed with purple.", 
                    mix: [ { id: "PW6", ratio: 6 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] }
            }
        },
        {
            id: "sw_win_02", 
            name: "Pine Shadow", 
            hex: "#014d4e", 
            category: "green", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Phthalo Green + touch of Rose.", 
                    mix: [ { id: "WATER", ratio: 2 }, 
                        { id: "PG7", ratio: 3 }, 
                        { id: "PV19", ratio: 1 } ] },
                gouache: { note: "Deep green, minimal white.", 
                    mix: [ { id: "PG7", ratio: 4 }, 
                        { id: "PV19", ratio: 1 } ] }
            }
        },
        {
            id: "sw_win_03", 
            name: "Summit Sky", 
            hex: "#4CB9E7", 
            category: "blue", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Vibrant Phthalo Blue wash.", 
                    mix: [ { id: "WATER", ratio: 12 }, 
                        { id: "PB15", ratio: 1.5 } ] },
                gouache: { note: "White with a good amount of Phthalo.", 
                    mix: [ { id: "PW6", ratio: 8 }, 
                        { id: "PB15", ratio: 1 } ] }
            }
        },
        {
            id: "sw_win_04", 
            name: "pretty blue", 
            hex: "#6985e1", 
            category: "purple", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Quin Rose + Ultramarine, dilute well.", 
                    mix: [ { id: "WATER", ratio: 8 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] },
                gouache: { note: "White base mixed with purple.", 
                    mix: [ { id: "PW6", ratio: 6 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] }
            }
        },
        {
            id: "sw_win_01", 
            name: "Frozen Lavender", 
            hex: "#4a85a8", 
            category: "purple", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Quin Rose + Ultramarine, dilute well.", 
                    mix: [ { id: "WATER", ratio: 8 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] },
                gouache: { note: "White base mixed with purple.", 
                    mix: [ { id: "PW6", ratio: 6 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] }
            }
        },
        {
            id: "sw_win_01", 
            name: "Frozen Lavender", 
            hex: "#b2a7b8", 
            category: "purple", 
            temperature: "cool",
            formulas: {
                watercolor: { note: "Quin Rose + Ultramarine, dilute well.", 
                    mix: [ { id: "WATER", ratio: 8 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] },
                gouache: { note: "White base mixed with purple.", 
                    mix: [ { id: "PW6", ratio: 6 }, 
                        { id: "PV19", ratio: 2 }, 
                        { id: "PB29", ratio: 1 } ] }
            }
        },
    ]
};