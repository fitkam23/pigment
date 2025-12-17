export const summer = {
    id: "theme_summer",
    title: "Mediterranean Summer",
    description: "Vibrant coastlines & warm stone",
    requiredPigments: ["PB35", "PY151", "PR101", "PG50"], 
    inspiration: {
        artist: "fitkam",
        handle: "@fitkamgummy",
        link: "https://www.instagram.com/fitkamgummy", 
        info: "this is the placeholder, something something cool about the painting",
        imageUrl: "https://i.pinimg.com/736x/21/df/b9/21dfb97d315185954992524a877964b9.jpg"
    },
    swatches: [
        {
            id: "sw_sum_01", name: "Sea Breeze", hex: "#2A9D8F", 
            formulas: {
                watercolor: { note: "Mix Cerulean with a touch of Teal.", mix: [ { id: "WATER", ratio: 5 }, { id: "PB35", ratio: 2 }, { id: "PG50", ratio: 1 } ] },
                gouache: { note: "White base + Teal + Cerulean.", mix: [ { id: "PW6", ratio: 5 }, { id: "PG50", ratio: 2 }, { id: "PB35", ratio: 1 } ] }
            }
        },
        {
            id: "sw_sum_02", name: "Warm Stone", hex: "#e8dcb5",
            formulas: {
                watercolor: { note: "Add note here...", mix: [ { id: "WATER", ratio: 10 }, { id: "PY43", ratio: 1 } ] },
                gouache: { note: "Add note here...", mix: [ { id: "PW6", ratio: 10 }, { id: "PY43", ratio: 1 } ] }
            }
        }
    ]
};