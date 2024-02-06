import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("products", () => {
  const sneakers = ref([])
  const chosenItems = ref([])
  const favItems = ref([])
  const err = ref();
  const overallPrice = ref(0);

  const getSneakers = async () => {
    fetch('http://localhost:3000/sneakers')
    .then(res => res.json())
    .then(data => sneakers.value = data.map(item => ({...item, id: Number(item.id)})))
    .then(() => {
      for(let i = 0; i < sneakers.value.length; i++) {
        sneakers.value[i].isAdded = false
        sneakers.value[i].isFavorite = false
    }
    })
    .catch(err => console.log(err.message), err.value = err.message)
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