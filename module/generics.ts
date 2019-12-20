interface Length {
    length: number
}

interface CreateArray<Length> {
    (length: number, value: Length): Array<Length>
}

export = class Generics<G> {

    // class 定義泛型
    private name: G

    constructor(name: G) {
        this.name = name
    }

    getName(): G {
        return this.name
    }

    // simple
    createArray<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

    // 多泛型
    swap<T, U>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]];
    }

    // 約束泛型
    validateLength<T extends Length>(arg: T): T {
        return arg;
    }

    // interface 定義泛型
    createArrayImpl: CreateArray<Length> = function <Length>(length: number, value: Length): Array<Length> {
        let result: Array<Length> = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

}