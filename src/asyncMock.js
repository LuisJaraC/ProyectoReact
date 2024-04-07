const products = [
    {
        id: '1',
        name: 'Alan Wake 2',
        price: 50000,
        category: 'PC',
        img: './assets/img/pc/alanwake2.jpg',
        stock: 10,
        description: 'alanwake 2 pc',
    },
    {
        id: '2',
        name: 'Cyberpunk 2077',
        price: 25000,
        category: 'PC',
        img: './assets/img/pc/cyberpunk.jpg',
        stock: 10,
        description: 'cyberpunk 2077 pc',
    },
    {
        id: '3',
        name: 'FC 2024',
        price: 50000,
        category: 'PC',
        img: './assets/img/pc/easports.webp',
        stock: 10,
        description: 'fifa pc',
    },
    {
        id: '4',
        name: 'GTA V',
        price: 30000,
        category: 'PC',
        img: './assets/img/pc/gta5.jpg',
        stock: 10,
        description: 'gta 5 pc',
    },
    {
        id: '5',
        name: 'Hogwarts Legacy',
        price: 25000,
        category: 'PC',
        img: './assets/img/pc/hogwartslegacy.jpg',
        stock: 10,
        description: 'hogwarts legacy pc',
    },
    {
        id: '6',
        name: 'Resident Evil 4 Remake',
        price: 45000,
        category: 'PC',
        img: './assets/img/pc/residentevil4.jpg',
        stock: 10,
        description: 'resident evil 4 remake pc',
    },
    {
        id: '7',
        name: 'Alan Wake 2',
        price: 55000,
        category: 'PS5',
        img: './assets/img/ps5/alanwake2ps5.jpg',
        stock: 15,
        description: 'alan wake 2 ps5',
    },
    {
        id: '8',
        name: 'FC 2024',
        price: 60000,
        category: 'PS5',
        img: './assets/img/ps5/easportsps5.jpg',
        stock: 12,
        description: 'fifa 2024 ps5',
    },
    {
        id: '9',
        name: 'Red Dead Redemption 2',
        price: 35000,
        category: 'PS5',
        img: './assets/img/ps5/rdr2ps5.webp',
        stock: 20,
        description: 'red dead redemption 2 ps5',
    },
    {
        id: '10',
        name: 'Resident Evil 4',
        price: 45000,
        category: 'PS5',
        img: './assets/img/ps5/residentevil4ps5.jpg',
        stock: 25,
        description: 'resident evil 4 remake ps5',
    },
    {
        id: '11',
        name: 'Spiderman 2',
        price: 50000,
        category: 'PS5',
        img: './assets/img/ps5/spiderman2.jpg',
        stock: 15,
        description: 'spiderman 2 ps5',
    },
    {
        id: '12',
        name: 'Starwars Jedi Survivor',
        price: 60000,
        category: 'PS5',
        img: './assets/img/ps5/starwarsps5.jpg',
        stock: 15,
        description: 'starwars jedi survivor ps5',
    },
    {
        id: '13',
        name: 'Alan Wake 2',
        price: 50000,
        category: 'XBOX',
        img: './assets/img/xbox/alanwake2xbox.jpg',
        stock: 15,
        description: 'alan wake 2 xbox',
    },
    {
        id: '14',
        name: 'Cyberpunk 2077',
        price: 30000,
        category: 'XBOX',
        img: './assets/img/xbox/cyberpunkxbox.jpg',
        stock: 15,
        description: 'cyberpunk 2077 xbox',
    },
    {
        id: '15',
        name: 'FC 2024',
        price: 55000,
        category: 'XBOX',
        img: './assets/img/xbox/easportsxbox.jpg',
        stock: 20,
        description: 'Fifa 2024 xbox',
    },
    {
        id: '16',
        name: 'GamePass Anual',
        price: 20000,
        category: 'XBOX',
        img: './assets/img/xbox/gamepass.png',
        stock: 30,
        description: 'xbox gamepass',
    },
    {
        id: '17',
        name: 'Hogwarts Legacy',
        price: 25000,
        category: 'XBOX',
        img: './assets/img/xbox/hogwartslegacyxbox.jpg',
        stock: 5,
        description: 'hogwarts legacy xbox',
    },
    {
        id: '18',
        name: 'Resident Evil 4',
        price: 35000,
        category: 'XBOX',
        img: './assets/img/xbox/residentevil4xbox.jpg',
        stock: 10,
        description: 'resident evil 4 xbox',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}