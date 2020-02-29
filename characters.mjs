export function test () {
    alert("test")
}
//👾☠️🤖
class Character {

    constructor (icon, hp, atk){
        this.icon = icon;
        this.hp = hp;
        this.atk = atk;
    }

    getHP() {
        const div = document.createElement("div")
        for (let i = 0; i < this.hp; i++)
            div.appendChild(document.createTextNode('❤️'))
        return div;
    }

    getATK() {
        const div = document.createElement("div")
        for (let i = 0; i < this.atk; i++)
            div.appendChild(document.createTextNode('🗡'))
        return div;
    }
    getStats() {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(this.icon))
        div.appendChild(this.getHP())
        div.appendChild(this.getATK())
        div.appendChild(document.createElement("hr"))
        div.addEventListener("click", this.attack)
        return div;
    }

    attack() {
        //
    }

}
//🤖
export class Robot extends Character {

    constructor () {
        super('🤖', 6, 3)
    }

    attack() {
        alert("ROBOT: I WILL DESTORY HUMANITY.")
    }
}
//☠️
export class Pirate extends Character {

    constructor () {
        super('☠️', 2, 7)
    }
    
    attack() {
        alert("Unleash the power of the sea!")
    }
}
//👾
export class Alien extends Character {

    constructor () {
        super('👾', 8, 2)
    }

    attack() {
        alert("eheal9ijf6829hc70ab0")
    }
}
