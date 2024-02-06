// create new array of sorted items by price
const plainSortedItems = (b) => {
    return b.sort((a, b) => {
        return a.price - b.price
    })
}

// reverse sorted items
const reverseSortedItems = (b) => {
    return b.sort((a, b) => {
        return b.price - a.price
    })
}

// items sorted by name
const sortedByName = (b) => {
    return b.sort((a, b) => {
        if(a.title < b.title) return -1
        if(a.title > b.title) return 1
        return 0
    })
}

const fsort = (a, b) => {
    switch(a) {
        case 'name':
            return sortedByName(b)
        case 'priceasc':
            return plainSortedItems(b)
        case 'pricedesc':
            return reverseSortedItems(b)
        default:
            return b
    }
}

export { fsort }