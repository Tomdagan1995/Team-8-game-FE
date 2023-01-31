const SHAPES = [
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:1, y:0},
            {x:1, y:1}
        ],
        width: 2,
        height: 2,
        rotate: false,
        className: 'shape1'
    },
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:0, y:3}
        ],
        width: 1,
        height: 4,
        className: "shape2"
    },
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:1, y:2}
        ],
        width: 1,
        height: 3,
        className: "shape3"
    },
    {
        shape: [
            {x:1, y:1},
            {x:2, y:0},
            {x:1, y:0},
            {x:0, y:0}
        ],
        width: 3,
        height: 1
    }
];

export function randomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}