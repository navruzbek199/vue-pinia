import { defineStore } from "pinia";

interface subCategory {
    id: string,
    name: string,
    image: string,
    description: string,
    isFav: boolean,
    price: number
}
export const useProductStore = defineStore('products', {
    state: () => ({
        product: [
            {
                id: 1, 
                name: "Maxi BOX", 
                sub_category: [
                    {
                        id: "11",
                        name: "Maxi BOX Taniqli",
                        isFav: false,
                        price: 40000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75"
                    },
                    {
                        id: "12",
                        name: "Maxi BOX An'anaviy",
                        isFav: false,
                        price: 35000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75"
                    },
                    {
                        id: "13",
                        name: "Maxi BOX Retro",
                        isFav: false,
                        price: 32000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75"
                    },
                    {
                        id: "14",
                        name: "Maxi BOX Panini",
                        isFav: false,
                        price: 38000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75"
                    },
                    {
                        id: "15",
                        name: "Maxi BOX Trend",
                        isFav: false,
                        price: 35000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75"
                    }
                ]
            },
            {
                id:"2",
                name:"Aksiya 3+",
                sub_category: [
                    {
                        id: "21",
                        name: "Maxi BOX Trend",
                        isFav: false,
                        price: 30000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5657118e-9780-4e71-aa3c-ac497b83b68a&w=3840&q=75"
                    },
                    {
                        id: "22",
                        name: "Max BOX Panini",
                        isFav: false,
                        price: 32000,
                        description: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4e5b7657-631b-48b8-8e20-82fc5ee155f4&w=3840&q=75"
                    }
                ]
            },
            {
                id:"3",
                name:"Klab-Sendvich",
                sub_category: [
                    {
                        id: "31",
                        name: "Klab sendvich",
                        isFav: false,
                        price: 34000,
                        description: "Original sendvich, kartoshka fri, tanlash uchun sous",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F033adb7c-0289-4f80-a0a9-05fda8e23bc5&w=3840&q=75"
                    },
                    {
                        id: "32",
                        name: "Sendvich Original",
                        isFav: false,
                        price: 28000,
                        description: "Toster non, tovuq shnitseli, yangi bodring, poidr, klab sousi, Xoxland pishloq",
                        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6e75db0d-01c9-47e3-b178-0a2e61cd46fb&w=3840&q=75"
                    }
                ]
            }
        ]
    }),

    actions: {
        // toggleFav(id: number) {
        //     const _task = this.product?.find((t : subCategory[]) => t.category.id === id);
        //     if (_task) {
        //       _task.isFav = !_task.isFav;
        //     }
        // },
    }
})
