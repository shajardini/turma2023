const daysjs= require("dayjs")

function birthday(date){
    const birthday = daysjs(date)
    const today = daysjs()

    const ageYears = today.diff(birthday, 'year')
    console.log(`Idade: ${age}`)
}