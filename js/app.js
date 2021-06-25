// let remainDays = 0
// let totalBackers = 0
// let totalBracked = 0

// const statsProgress = document.querySelector(".stats__progress")

// const totalBackedShowed = document.querySelector(".stats__bracked")
// totalBackedShowed.innerHTML = "$" + totalBracked

// const totalBackersShowed = document.querySelector(".stats__brackers")
// totalBackersShowed.innerHTML = totalBackers

// const remainDaysShowed = document.querySelector(".stats__date")
// remainDaysShowed.innerHTML = remainDays




//Manupulation with page by user
//***************************************************
const modal = document.querySelector(".modal")
const modalCall = document.querySelector(".intro__btn")
const closeModal = document.querySelector(".select__close")

const bookmark = document.querySelector(".intro__bookmark")
const bookmarkText = document.querySelector(".intro__bookmark-text")

const selectPledgeRadioDefault = document.querySelectorAll(".modalCards__radio--default")
const selectPledgeRadio = document.querySelectorAll(".modalCards__radio")
const selectPledgeCards = document.querySelectorAll(".modalCards__item")

const selectPledgeButton = document.querySelectorAll(".cards__button")

const modalContainer = document.querySelector(".select")

const modalSuccess = document.querySelector(".modalSuccess")
const successBtn = document.querySelector(".modalSuccess__btn")

const modalBtnSubmit = document.querySelectorAll(".modalCards__btn")
const modalValue = document.querySelectorAll(".modalCards__value")

const burger = document.querySelector(".burger")
const page = document.querySelector(".page")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    page.classList.toggle("active")
})


//Call modal from "Back this project"
modalCall.addEventListener("click", () => {
    modal.classList.add("active")
    modalContainer.classList.add("active")
})

//Close main modal by clicking cross in corner
closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
    modalContainer.classList.remove("active")

    //Remove all active cards after close modal
    selectPledgeCards.forEach(item => {
        item.classList.remove("active")
    })
    //Remove all active radios after close modal
    selectPledgeRadioDefault.forEach(element => {
        element.checked = false
    })
})

//Close main modal by clicking outside of the modal
document.addEventListener("click", (event) => {
    const eventTarget = event.target
    if (eventTarget == modalContainer || eventTarget == modal) {
        modal.classList.remove("active")
        modalContainer.classList.remove("active")
        modalSuccess.classList.remove("active")

        //Remove all active cards after close modal
        selectPledgeCards.forEach(item => {
            item.classList.remove("active")
        })
        //Remove all active radios after close modal
        selectPledgeRadioDefault.forEach(element => {
            element.checked = false
        })
    }
})


//Change bookmark button status
bookmark.addEventListener("click", () => {
    if (bookmark.classList.contains("active")) {
        bookmark.classList.remove("active")
        bookmarkText.innerHTML = "Bookmark"
    } else {
        bookmark.classList.add("active")
        bookmarkText.innerHTML = "Bookmarked"
    }
})

//Make selected card by radio active
selectPledgeRadio.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (!selectPledgeCards[index].classList.contains("active") && !selectPledgeCards[index].classList.contains("empty")) {
            selectPledgeCards.forEach((item) => {
                item.classList.remove("active")
            })
            selectPledgeCards[index].classList.add("active")
        }
    })
})

//Select pledge by button from main page
selectPledgeButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (!selectPledgeButton[index].classList.contains("btn--inactive")) {
            modal.classList.add("active")
            selectPledgeRadioDefault[index + 1].checked = true
            selectPledgeCards[index + 1].classList.add("active")
            modalContainer.classList.add("active")

            //Scroll window to top when modal open
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        }
    })
})

//Disable radio if item is empty
selectPledgeCards.forEach((element, index) => {
    if (element.classList.contains("empty")) {
        selectPledgeRadioDefault[index].setAttribute("disabled", "disabled")
    }
})

//Call succcess modal
modalBtnSubmit.forEach(element => {
    element.addEventListener("click", () => {
        modalContainer.classList.remove("active")
        modalSuccess.classList.add("active")

        //Close success modal by time
        setTimeout(function () {
            if (modalSuccess.classList.contains("active")) {
                modalSuccess.classList.remove("active")
                modal.classList.remove("active")
                selectPledgeCards.forEach(item => {
                    item.classList.remove("active")
                })
                selectPledgeRadioDefault.forEach(element => {
                    element.checked = false
                })
            }
        }, 5000);
    })
})

//Close success modal by button
successBtn.addEventListener("click", () => {
    modalSuccess.classList.remove("active")
    modal.classList.remove("active")
    //Remove all active cards after close modal
    selectPledgeCards.forEach(item => {
        item.classList.remove("active")
    })
    //Remove all active radios after close modal
    selectPledgeRadioDefault.forEach(element => {
        element.checked = false
    })
})
