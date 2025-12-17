export const romantic = {
    id: "theme_romanticFlorals",
    title: "Romantic florals",
    description: "Soft petals & vintage garden vibes",
    requiredPigments: ["PY43", "PR254", "PB29", "PBk7"], 
    inspiration: {
        artist: "Fitkam",
        handle: "@fitkamgummy",
        link: "https://instagram.com/fitkamgummy", 
        info: "this is the placeholder, something something cool about the painting",
        imageUrl: "https://i.pinimg.com/736x/d8/d2/d1/d8d2d141e57199042296726889753907.jpg"
    },
    swatches: [
        {
            id: "sw_rom_01", name: "Dusty Rose", hex: "#D8A1A6", 
            formulas: {
                watercolor: { note: "Quin Rose neutralized with a touch of Green.", 
                    mix: [ { id: "WATER", ratio: 10 }, { id: "PV19", ratio: 2 }, 
                        { id: "PG7", ratio: 0.1 } ] },
                gouache: { note: "White + Rose + tiny Green.", 
                    mix: [ { id: "PW6", ratio: 10 },
                        { id: "PV19", ratio: 2 }, 
                        { id: "PG7", ratio: 0.1 } ] }
            }
        },
        {
            id: "sw_rom_02", name: "Vintage Leaf", hex: "#8F9779",
            formulas: {
                watercolor: { note: "Sap Green (Green+Yellow) muted with Red.", 
                    mix: [ { id: "WATER", ratio: 5 }, 
                        { id: "PG7", ratio: 1 }, 
                        { id: "PY43", ratio: 2 }, 
                        { id: "PV19", ratio: 0.5 } ] },
                gouache: { note: "White + Green + Ochre + touch of Red.", 
                    mix: [ { id: "PW6", ratio: 5 }, 
                        { id: "PG7", ratio: 1 }, 
                        { id: "PY43", ratio: 2 }, 
                        { id: "PV19", ratio: 0.5 } ] }
            }
        },
        {
            id: "sw_rom_03", name: "Dusty Rose", hex: "#D8A1A6", 
            formulas: {
                watercolor: { note: "Quin Rose neutralized with a touch of Green.", 
                    mix: [ { id: "WATER", ratio: 10 }, { id: "PV19", ratio: 2 }, 
                        { id: "PG7", ratio: 0.1 } ] },
                gouache: { note: "White + Rose + tiny Green.", 
                    mix: [ { id: "PW6", ratio: 10 },
                        { id: "PV19", ratio: 2 }, 
                        { id: "PG7", ratio: 0.1 } ] }
            }
        },
    ]
};