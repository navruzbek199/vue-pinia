import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    
    state: () => ({
        products: [
            {
                id: 1,
                title: 'Custom 1',
                price: 300,
                color: 'black' ,
                image: 'https://image.similarpng.com/very-thumbnail/2020/12/Business-men-clothing-suit-on-transparent-PNG.png',
                description: 'Third-party cookie will be blocked. Learn more in the Issues tab.',
                completed: true
            },
            {
                id: 2,
                title: 'Custom 2',
                price: 390,
                color: 'blue' ,
                image: 'https://banner2.cleanpng.com/20180404/wke/kisspng-suit-navy-blue-lining-clothing-tailor-cloth-5ac4ec16329fb4.1864700315228549342074.jpg',
                description: 'Third-party cookie will be blocked. Learn more in the Issues tab.',
                completed: false
            },
            {
                id: 3,
                title: 'Custom 3',
                price: 350,
                color: 'red' ,
                image: 'https://www.pngfind.com/pngs/m/146-1467813_men-s-fashion-hot-selling-an-amazing-men.png',
                description: 'Third-party cookie will be blocked. Learn more in the Issues tab.',
                completed: false
            },
        ],
    })

    
        // state 
        


        // action
    
});


