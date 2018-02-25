class Sorter {
    constructor() {
        this.wrapper = [];
        this.comparator;
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
        indices.sort();

        for (let j = 0; j < indices.length; j++) {
            if(indices[j] === indices[j+1]){
                indices.splice(j, 1);
            }
        }

        if (indices.length > 1 && this.wrapper.length > 1 && this.wrapper.every(el => typeof el === 'number') && !this.comparator) {
            let sortedArray = [];
            for (let i = 0; i < indices.length; i++) {
                sortedArray.push(this.wrapper[indices[i]]);
            }
            sortedArray.sort((a,b) => {return a - b});
            for (let j = 0; j < indices.length; j++) {
                this.wrapper[indices[j]] = sortedArray[j];
            }
        } else if (indices.length > 1 && this.wrapper.length > 1) {
            let sortedArray = [];
            for (let i = 0; i < indices.length; i++) {
                sortedArray.push(this.wrapper[indices[i]]);
            }
            sortedArray.sort(this.comparator);
            for (let j = 0; j < indices.length; j++) {
                this.wrapper[indices[j]] = sortedArray[j];
            }
        }
        return this.wrapper;
    }

    setComparator(compareFunction) {
        return this.comparator = compareFunction;
    }
}

module.exports = Sorter;
