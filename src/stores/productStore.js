import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("products", () => {
  const sneakers = ref([])
  const chosenItems = ref([])
  const favItems = ref([])
  const err = ref();
  const overallPrice = ref(0);

  const getSneakers = () => {
    sneakers.value = [
      {
        id: 1,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/sneakers/sneakers-1.jpg",
      },
      {
        id: 2,
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 15600,
        imageUrl: "/sneakers/sneakers-2.jpg",
      },
      {
        id: 3,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        imageUrl: "/sneakers/sneakers-3.jpg",
      },
      {
        id: 4,
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 7800,
        imageUrl: "/sneakers/sneakers-4.jpg",
      },
      {
        id: 5,
        title: "Кроссовки Future Rider",
        price: 9550,
        imageUrl: "/sneakers/sneakers-5.jpg",
      },
      {
        id: 6,
        title: "Кроссовки Black Edition",
        price: 16999,
        imageUrl: "/sneakers/sneakers-6.jpg",
      },
      {
        id: 7,
        title: "Кроссовки Orange Boomb Edition",
        price: 7499,
        imageUrl: "/sneakers/sneakers-7.jpg",
      },
      {
        id: 8,
        title: "Кроссовки Nike Air Max 270 Boom Boom",
        price: 15600,
        imageUrl: "/sneakers/sneakers-8.jpg",
      },
      {
        id: 9,
        title: "Кроссовки Nike Air Force 1",
        price: 5900,
        imageUrl: "/sneakers/sneakers-9.jpg",
      },
      {
        id: 10,
        title: "Кроссовки Adidas Ultraboost",
        price: 11500,
        imageUrl: "/sneakers/sneakers-10.jpg",
      },
      {
        id: 11,
        title: "Кроссовки Puma Clyde All-Pro",
        price: 7600,
        imageUrl: "/sneakers/sneakers-11.jpg",
      },
      {
        id: 12,
        title: "Кроссовки Converse Chuck Taylor All-Star",
        price: 13000,
        imageUrl: "/sneakers/sneakers-12.jpg",
      }]
    for (let i = 0; i < sneakers.value.length; i++) {
        sneakers.value[i].isAdded = false
        sneakers.value[i].isFavorite = false
    }
  }

  const addItem = (id) => {

    let value = !sneakers.value.find(item => item.id === id).isAdded
    sneakers.value.find(item => item.id === id).isAdded = value


    if (value) {
      chosenItems.value.push(sneakers.value.find(item => item.id === id))
    } else {
      chosenItems.value.splice(chosenItems.value.findIndex(item => item.id === id), 1)
    }
  }

  const addFavorite = (id) => {
    
    let value = !sneakers.value.find(item => item.id === id).isFavorite
    sneakers.value.find(item => item.id === id).isFavorite = value
  
    if (value) {
      favItems.value.push(sneakers.value.find(item => item.id === id))
    } else {
      favItems.value.splice(favItems.value.findIndex(item => item.id === id), 1)
    }
  }

  return { sneakers, err, chosenItems, favItems, overallPrice, getSneakers, addItem, addFavorite }
})
