const getQuote = async () => {
    let p = document.getElementById('quote')

    try {
        const res = await fetch('https://api.kanye.rest/')
        const quote = await res.json()

        p.innerHTML = quote.quote
    } catch (err) {
        console.error(err)
        p.innerHTML = "Oops.. Kanye went to bed with Kim"
    }
}

setInterval(async () => {
    await getQuote()
}, 8000)

const footer = document.getElementById('copy')
const year = new Date().getFullYear()
footer.innerHTML = `Made with 🍟🍔 &copy ${year}`