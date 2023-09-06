const { Query } = require("pg")
let database = require("./database")

let games = [
    {
        id: 1,
        nome: 'GRANND TURISMO',
        preco: 399.99
    },
    {
        id: 2,
        nome: "GOD OF WAR",
        preco: 288.99
    },
    {
        id: 3,
        nome: 'GTA SAN ANDREAS',
        preco: 487.99
    },
    {
        id: 4,
        nome: 'FREE FIRE',
        preco: 189.55
    },
    {
        id: 5,
        nome: 'RED DEAD REDEPTION 2',
        preco: 399.99
    },
    {
        id: 6,
        nome: 'ASSASINS CREED 2',
        preco: 345.99
    }
]

let estudios = [
    {
        id: 1,
        nome: 'RockStar Games',
        game_id: 3
    },
    {
        id: 2,
        nome: 'Garenna',
        game_id: 4
    },
    {
        id: 3,
        nome: 'FastColl',
        game_id: 2
    }
]

database.insert(games).into('games').then(data => {
    console.log(data)
}).catch(err =>{
    console.log(err)
}) 

database.select().table('games').then(data => {
    console.log(data)
}).catch(err =>{
    console.log(err)
}) 

database.select().where({id:1}).table('games').then(data => {
    console.log(data)
}) 

database.update({preco: 100}).where({id: 21}).table('games').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}) 

database.del().where({id: 1}).table('games').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}) 
 
database.insert(estudios).into('estudios').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})  

database.select().table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
