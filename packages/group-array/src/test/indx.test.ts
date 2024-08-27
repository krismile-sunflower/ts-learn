import groupBy from '../index'

describe('group-array', () => {
    it('groupBy one condition', () => {
        const input = [
            { tag: "one", content: "A", prop: "1" },
            { tag: "one", content: "A", prop: "2" },
            { tag: "one", content: "C", prop: "3" },
            { tag: "two", content: "D", prop: "4" },
            { tag: "two", content: "E", prop: "5" },
            { tag: "two", content: "F", prop: "6" },
            { tag: "one", content: "G", prop: "7" },
        ];
        const output = {
            one: [
                { tag: 'one', content: 'A', prop: '1' },
                { tag: 'one', content: 'A', prop: '2' },
                { tag: 'one', content: 'C', prop: '3' },
                { tag: 'one', content: 'G', prop: '7' }
            ],
            two: [
                { tag: 'two', content: 'D', prop: '4' },
                { tag: 'two', content: 'E', prop: '5' },
                { tag: 'two', content: 'F', prop: '6' }
            ]
        }
    
        expect(groupBy(input, "tag")).toEqual(output);
    });
    
    
    it('groupBy two condition', () => {
        const input = [
            { tag: "one", content: "A", prop: "1" },
            { tag: "one", content: "A", prop: "2" },
            { tag: "one", content: "C", prop: "3" },
            { tag: "two", content: "D", prop: "4" },
            { tag: "two", content: "E", prop: "5" },
            { tag: "two", content: "F", prop: "6" },
            { tag: "one", content: "G", prop: "7" },
        ];
        const output = {
            "one": {
                "A": [
                    { tag: "one", content: "A", prop: "1" },
                    { tag: "one", content: "A", prop: "2" },
                ],
                "C": [
                    { tag: "one", content: "C", prop: "3" },
                ],
                "G": [
                    { tag: "one", content: "G", prop: "7" },
                ],
            },
            "two": {
                "D": [
                    { tag: "two", content: "D", prop: "4" },
                ],
                "E": [
                    { tag: "two", content: "E", prop: "5" },
                ],
                "F": [
                    { tag: "two", content: "F", prop: "6" },
                ],
            },
        };
    
        expect(groupBy(input, "tag", "content")).toEqual(output);
    });

    it('groupBy three condition', () => {
        const input = [
            { tag: "one", content: "A", prop: "1" },
            { tag: "one", content: "A", prop: "2" },
            { tag: "one", content: "C", prop: "3" },
            { tag: "two", content: "D", prop: "4" },
            { tag: "two", content: "E", prop: "5" },
            { tag: "two", content: "F", prop: "6" },
            { tag: "one", content: "G", prop: "7" },
        ];
        const output = {
            "one": {
                "A": {
                    "1": [
                        { tag: "one", content: "A", prop: "1" },
                    ],
                    "2": [
                        { tag: "one", content: "A", prop: "2" },
                    ],
                },
                "C": {
                    "3": [
                        { tag: "one", content: "C", prop: "3" },
                    ],
                },
                "G": {
                    "7": [
                        { tag: "one", content: "G", prop: "7" },
                    ],
                },
            },
            "two": {
                "D": {
                    "4": [
                        { tag: "two", content: "D", prop: "4" },
                    ],
                },
                "E": {
                    "5": [
                        { tag: "two", content: "E", prop: "5" },
                    ],
                },
                "F": {
                    "6": [
                        { tag: "two", content: "F", prop: "6" },
                    ],
                },
            },
        };
    
        expect(groupBy(input, "tag", "content", "prop")).toEqual(output);
    });
})

