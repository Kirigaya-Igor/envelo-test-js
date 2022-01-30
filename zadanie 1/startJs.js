class Hero {
    #powerCount = 10
    
    constructor(name) {
        this.name = name
    }

    getCurrentPowerCount() {
        return this.#powerCount
    }

    train() {
        this.#powerCount + 1
    }
}

let heroCount = 0

const heroes = []

let hero = gethero('hulk')
let geralt = gethero('geralt')

heroes.push(hero)
heroes.push(geralt)

print_hall_of_fame()

function gethero() {
    heroCount++
    let hero = new Hero('hulk')
}

const print_hall_of_fame = () => {
    let spiderman = gethero(spider)
    heroes.push(spiderman)

    const heroesContainer = document.querySelector('#div')

    heroes.map((x, i, arr) => {
        const heroElement = document.createElement('div')
        const [name] = x
        
        heroElement.innerHTML = `<p> ${name} ${x.powerCount} </p>`

        heroesContainer.append(heroElement)
    })
}