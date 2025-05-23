function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase()
    }
    else {
        return input.toLowerCase()
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = items.filter((item: { title: string; rating: number }) => item.rating >= 4)
    return result
}


function concatenateArrays<T>(...arrays: T[][]): T[] {

    return arrays.flat()
}


class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}
class Car extends Vehicle {
    private model: string
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        console.log(`Model: ${this.model}`)
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    products.sort((firstItem, secondItem) => secondItem.price - firstItem.price)
    return products[0]
}
 
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend';
    }
    else {
        return 'Weekday'
    }
}


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error('Error: Negative number not allowed'))
            }
            else {
                resolve(n * n)
            }
        }, 1000)
    })
}

