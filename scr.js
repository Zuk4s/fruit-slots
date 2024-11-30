const notif = document.getElementById('notif')

const items = ['assets/ItemSlot_0001.png', 'assets/ItemSlot_0002.png', 'assets/ItemSlot_0003.png']
const item1 = document.getElementById('item-1')
const item2 = document.getElementById('item-2')
const item3 = document.getElementById('item-3')

const balances = document.getElementById('balance')

const spinbtn = document.getElementById('spin')

let time;
let balance = 1000

function setBalance() {
    balances.innerHTML =  `Balance : ${balance}`
}
setBalance()

function spin() {
    time = 20
    balance -= 1
    setBalance()
    spinbtn.style.display = "none"
    const countdown = setInterval(() => {
        time--;
        const rand1 = Math.floor(Math.random() * 3)
        const rand2 = Math.floor(Math.random() * 3)
        const rand3 = Math.floor(Math.random() * 3)

        item1.src = items[rand1]
        item2.src = items[rand2]
        item3.src = items[rand3]

        if (time <= 0) {
            clearInterval(countdown)
            spinbtn.style.display = "block"

            if (rand1 == 0 && rand2 == 0 && rand3 == 0) {
                notifPopup(25)
                balance += 25
                setBalance()
            } else if (rand1 == 1 && rand2 == 1 && rand3 == 1) {
                notifPopup(10)
                balance += 10
                setBalance()
            } else if (rand1 == 2 && rand2 == 2 && rand3 == 2) {
                notifPopup(5)
                balance += 5
                setBalance()
            } else if (rand1 == 0 && rand2 == 1 && rand3 == 2) {
                notifPopup(1)
                balance += 1
                setBalance()
            } else if (rand1 == 2 && rand2 == 1 && rand3 == 0) {
                notifPopup(1)
                balance += 1
                setBalance()
            } else if (rand1 == 0 && rand2 == 0 && rand3 == 1) {
                notifPopup(3)
                balance += 3
                setBalance()
            } else if (rand1 == 0 && rand2 == 0 && rand3 == 2) {
                notifPopup(3)
                balance += 3
                setBalance()
            } else if (rand1 == 1 && rand2 == 1 && rand3 == 2) {
                notifPopup(2)
                balance += 2
                setBalance()
            } else if (rand1 == 2 && rand2 == 2 && rand3 == 0) {
                notifPopup(2)
                balance += 2
                setBalance()
            }
        }
    }, 200)
}

function notifPopup(num) {
    notif.classList.add('active')
    notif.innerHTML = `You win +${num}`
    setTimeout(() => {
        notif.classList.remove('active')
    }, 3000)
}