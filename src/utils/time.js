export function getStatusShop() {
    const date = new Date()

    const currentHour = date.getHours()


    if (currentHour >= 7 && currentHour < 16){
        return true
    } else {
        return false
    }
}



export function getCurrentTime() {
    const date = new Date()

    const currentHour = date.getHours()
    const currentMinutes = date.getMinutes()

    return `${String(currentHour).padStart(2, '0')}:${String(currentMinutes).padStart(2, '0')}`
}