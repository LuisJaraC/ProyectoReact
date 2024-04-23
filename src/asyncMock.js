const products = [
    {
        id: '1',
        name: 'Alan Wake 2',
        price: 50000,
        category: 'PC',
        img: "https://i.3djuegos.com/juegos/8894/alan_wake_2__2012_/fotos/ficha/alan_wake_2__2012_-5830942.webp",
        stock: 10,
        description: 'alanwake 2 pc',
    },
    {
        id: '2',
        name: 'Cyberpunk 2077',
        price: 25000,
        category: 'PC',
        img: 'https://img.asmedia.epimg.net/resizer/v2/6VUNXA3WDZP2PB2OTDZVP5VZUQ.jpg?auth=3e3ed86f2c960176ac3f6cb81eada24b65221bd0d11dcbe92518fe2c35287cc4&width=1288',
        stock: 10,
        description: 'cyberpunk 2077 pc',
    },
    {
        id: '3',
        name: 'FC 2024',
        price: 50000,
        category: 'PC',
        img: 'https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fmeristation%2Fimagenes%2F2023%2F7%2F14%2Fgame_cover%2F719758674.jpg?auth=33a091a451ec54b2cec9f81b89452d0f2fc4dd5dcc3c2392f4984ac66743a52b&width=280&height=420&smart=true',
        stock: 10,
        description: 'fifa pc',
    },
    {
        id: '4',
        name: 'GTA V',
        price: 30000,
        category: 'PC',
        img: 'https://im.ziffdavisinternational.com/ign_es/screenshot/r/rockstar-hace-publica-la-caratula-de-gta-5/rockstar-hace-publica-la-caratula-de-gta-5_e852.jpg',
        stock: 10,
        description: 'gta 5 pc',
    },
    {
        id: '5',
        name: 'Hogwarts Legacy',
        price: 25000,
        category: 'PC',
        img: 'https://uvejuegos.com/img/caratulas/65092/Hogwarts-Legacy-Key-Art.jpg',
        stock: 10,
        description: 'hogwarts legacy pc',
    },
    {
        id: '6',
        name: 'Resident Evil 4 Remake',
        price: 45000,
        category: 'PC',
        img: 'https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.webp',
        stock: 10,
        description: 'resident evil 4 remake pc',
    },
    {
        id: '7',
        name: 'Alan Wake 2',
        price: 55000,
        category: 'PS5',
        img: 'https://cdn.awsli.com.br/600x700/1095/1095205/produto/221634295/alan-wake-ii-704-g01xsgfnmh.jpg',
        stock: 15,
        description: 'alan wake 2 ps5',
    },
    {
        id: '8',
        name: 'FC 2024',
        price: 60000,
        category: 'PS5',
        img: 'https://ds-images.bolavip.com/news/image?src=https://images.redgol.cl/webp/full/RDG_20230710_RDG_53243_EA-FC-24-1-822x1024.webp&width=822&height=1024',
        stock: 12,
        description: 'fifa 2024 ps5',
    },
    {
        id: '9',
        name: 'Red Dead Redemption 2',
        price: 35000,
        category: 'PS5',
        img: 'https://gamesdigi.cl/cdn/shop/products/RedDeadRedemption2.jpg?v=1661940701',
        stock: 20,
        description: 'red dead redemption 2 ps5',
    },
    {
        id: '10',
        name: 'Resident Evil 4',
        price: 45000,
        category: 'PS5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhfbYqse3P0AIpyV8oE2okfK0Ncfdu6orLVFRaOQ3hw&s',
        stock: 25,
        description: 'resident evil 4 remake ps5',
    },
    {
        id: '11',
        name: 'Spiderman 2',
        price: 50000,
        category: 'PS5',
        img: 'https://i.3djuegos.com/juegos/18168/marvel__039_s_spiderman_2/fotos/ficha/marvel__039_s_spiderman_2-5824801.jpg',
        stock: 15,
        description: 'spiderman 2 ps5',
    },
    {
        id: '12',
        name: 'Starwars Jedi Survivor',
        price: 60000,
        category: 'PS5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5hN5dZhKfy8wsLYi5pzGpIUJrQDkFKCIQxoxeGkWjA&s',
        stock: 15,
        description: 'starwars jedi survivor ps5',
    },
    {
        id: '13',
        name: 'Alan Wake 2',
        price: 50000,
        category: 'XBOX',
        img: 'https://preview.redd.it/alan-wake-2-xbox-cover-v0-y7do3t40e93b1.jpg?width=640&crop=smart&auto=webp&s=fa50ff959d08dfa51ecf41df1b048bef986d0d9d',
        stock: 15,
        description: 'alan wake 2 xbox',
    },
    {
        id: '14',
        name: 'Cyberpunk 2077',
        price: 30000,
        category: 'XBOX',
        img: 'https://store-images.s-microsoft.com/image/apps.3328.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.e6585aad-836b-4bcf-8791-62183af21f04',
        stock: 15,
        description: 'cyberpunk 2077 xbox',
    },
    {
        id: '15',
        name: 'FC 2024',
        price: 55000,
        category: 'XBOX',
        img: 'https://i.ebayimg.com/images/g/NvAAAOSwk41lrI7a/s-l960.jpg',
        stock: 20,
        description: 'Fifa 2024 xbox',
    },
    {
        id: '16',
        name: 'GamePass Anual',
        price: 20000,
        category: 'XBOX',
        img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKojC?q=90&o=f&w=177&h=265',
        stock: 30,
        description: 'xbox gamepass',
    },
    {
        id: '17',
        name: 'Hogwarts Legacy',
        price: 25000,
        category: 'XBOX',
        img: 'https://store-images.s-microsoft.com/image/apps.46108.13814785456466922.4e78e496-4e8c-4f2c-93df-55ea1fa48e05.fac5e0e9-bf85-4825-a73a-22b87e90da8c',
        stock: 5,
        description: 'hogwarts legacy xbox',
    },
    {
        id: '18',
        name: 'Resident Evil 4',
        price: 35000,
        category: 'XBOX',
        img: 'https://aikastorec.com/wp-content/uploads/2023/03/XBOX-REMAKE.jpg',
        stock: 10,
        description: 'resident evil 4 xbox',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 300)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 300)
    })
}