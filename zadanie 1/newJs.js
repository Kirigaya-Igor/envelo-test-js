class Hero {
    #powerCount = 10
    
    constructor(name) {
        this.name = name
    }

    get getCurrentPowerCount() {
        return this.#powerCount
    }

    train() {
        this.#powerCount++
    }
}

let heroCount = 0

const heroes = []

function getHero(newHero) {
    heroCount++
    document.querySelector('.hero > h1').innerHTML = `Hero count: ${heroCount}`
    return new Hero(newHero)
}

const print_hall_of_fame = () => {
    const heroesContainer = document.querySelector('div')

    heroes.forEach((x, i, arr) => {
        const heroElement = document.createElement('div')
        const {name} = x
        
        heroElement.innerHTML = `<p> ${name} ${x.getCurrentPowerCount} </p>`

        heroesContainer.append(heroElement)
    })
}

let hero = getHero('hulk')
let geralt = getHero('geralt')
let spiderMan = getHero('spiderMan')

heroes.push(hero)
heroes.push(geralt)
heroes.push(spiderMan)

print_hall_of_fame()

const powerUpButton = document.querySelector('button')

powerUpButton.addEventListener('click', () => {
    heroes.forEach((x, i, arr) => {
        x.train()
    })

    document.querySelectorAll('div > div').forEach((item) => item.parentNode.removeChild(item))
    
    print_hall_of_fame()
})