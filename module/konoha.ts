
class Person {
    protected name: string
    age?: number

    constructor(name: string) {
        this.name = name
    }

    sleep(hour: number){
        console.log(`${this.name} Sleep for 8 hours`)
    }

}

// 多型
// abstract class 可以沒有 abstract method，但 abstract method 一定要是在 abstract class
abstract class Sage {
    protected name: string
    protected mode?: string

    constructor(name: string) {
        this.name = name
    }

    abstract setMode(type: string): void

    getMode(): string|undefined {
        return this.mode
    }
}

interface LandOfFire{
    mind?: string
    setMind(mind: string): void 
}

interface LandOfWind{

}

class Civilian implements LandOfFire {
    mind?: string
    setMind(mind: string): void {
        this.mind = mind
    }
}

class Ninja extends Sage {
    
    // mind?: string
    // setMind(mind: string): void {
    //     this.mind = mind
    // }

    private chakura: string
    protected skill?: string
    public gender?: string

    constructor(name: string, chakura: string, companion: string) {
        super(name)
        this.chakura = chakura
        this.shout(companion)
    }

    // get set
    get nameGetSet(): string {
        return this.name
    }
    set nameGetSet(val: string) {
        this.name = val
    }

    getSkill(): string | undefined {
        return this.skill
    }

    setSkill(skill: string): void {
        this.skill = skill
    }

    // overwrite
    sleep(hour: number){
        console.log(`${this.name} Sleep for ${hour} hours`)
    }

    // overload
    // attackByCount(target: string, count: number){
    //     for(let i= 0;i<count;i++) {
    //         this.attack(target)
    //     }
    // }

    // attackByCount(target: string){
    //     this.attackByCount(target, 1)
    // }

    private shout(target: string){
        console.log(`${this.name} : ${target}~~~~~~~~~~!!!!!`)
    }

    // 多型 繼承 Sage
    setMode(type: string): void {
        this.mode = type
    }

}

const naruto_sage: Sage = new Ninja('Naruto (sage mode)', 'mouth', 'Sasuke')

export = {
    naruto_sage,
    Ninja,
    Civilian
}
