
let organization = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {
                Steve: {},
                Kyle: {},
                Andra: {}
            },
            Zhao: {
                Richie: {},
                Sofia: {},
                Jen: {}
            },
            Badros: {
                John: {},
                Mike: {},
                Pat: {}
            },
            Parikh: {
                Zach: {},
                Ryan: {},
                Tes: {}
            }
        },
        Schrage: {
            VanDyck: {
                Sabrina: {},
                Michelle: {},
                Josh: {}
            },
            Swain: {
                Blanch: {},
                Tom: {},
                Joe: {}
            },
            Frankovsky: {
                Jasee: {},
                Brian: {},
                Margaret: {}
            }
        },
        Sandberg: {
            Goler: {
                Eddie: {},
                Julie: {},
                Annie: {}
            },
            Hernandez: {
                Rowi: {},
                Inga: {},
                Morgan: {}
            },
            Moissinac: {
                Amy: {},
                Chuck: {},
                Vinni: {}
            },
            Kelley: {
                Eric: {},
                Ana: {},
                Wes: {}
            }
        }
    }
};
function traverse(node, indent = 0) {
    // Base case
    for (let key in node) {
        console.log(' '.repeat(indent), key);
        // General Case
        traverse(node[key], indent + 4);
    }
}

// Test Case
console.log(traverse(organization));