class Sorter {
    constructor() {
        this.wrapper = [];
    }

    add(element) {
        return this.wrapper.push(element);
    }

    at(index) {
        return this.wrapper[index];
    }

    get length() {
        return this.wrapper.length;

    }

    toArray() {
        return this.wrapper;
    }

    sort(indices) {
        let sortedArray = [];
        for (let i = 0; i < indices.length; i++) {
            sortedArray.push(this.wrapper[indices[i]]);
        }
        sortedArray.sort(
            function (A, B) {
                return A - B;
            }
        );
        return sortedArray;
    }

    setComparator(compareFunction) {
        return  this.wrapper.sort(compareFunction);
    }
}

module.exports = Sorter;

// it('3', () => {
//     sorter.add(7);
//     sorter.add(6);
//     sorter.add(5);
//     sorter.sort([0, 1]);
//
//     assert.deepEqual(sorter.toArray(), [6, 7, 5]);
//     assert.deepEqual(sorter.length, 3);
//     assert.deepEqual(sorter.at(0), 6);
//     assert.deepEqual(sorter.at(1), 7);
//     assert.deepEqual(sorter.at(2), 5);
// });