class CountAnim {
    constructor(element) {
        this.element = element
        this.prev_array = []
        this.element.insertAdjacentHTML("afterbegin",
            `<p class="count-anim-up-fadeout"></p>
            <p class="count-anim-up-fadein"></p>
            <p class="count-anim-down-fadeout"></p>
            <p class="count-anim-down-fadein"></p>`)
    }
    refresh() {
        this.element.classList.add("count-anim")
        this.element.querySelector(".count-anim-up-fadeout").innerHTML = ""
        this.element.querySelector(".count-anim-up-fadein").innerHTML = ""
        this.element.querySelector(".count-anim-down-fadeout").innerHTML = ""
        this.element.querySelector(".count-anim-down-fadein").innerHTML = ""
    }
    up(number) {
        if (Number(this.prev_array.join("")) === Number(number)) {
            return false
        }
        let number_array = number.split("")
        let number_array_reverse = number_array.reverse()
        let prev_array_reverse = this.prev_array.reverse()

        this.refresh()
        this.prev_array.forEach(async (v, i) => {
            if (number_array_reverse[i] === v) {
                this.element.querySelector(".count-anim-up-fadeout").insertAdjacentHTML("afterbegin", `<div class="stop">${v}</div>`)
            } else {
                this.element.querySelector(".count-anim-up-fadeout").insertAdjacentHTML("afterbegin", `<div class="count-anim-up-fadeout">${v}</div>`)
            }
        })
        number_array_reverse.forEach(async (v, i) => {
            if (prev_array_reverse[i] === v) {
                this.element.querySelector(".count-anim-up-fadein").insertAdjacentHTML("afterbegin", `<div class="stop">${v}</div>`)
            } else {
                this.element.querySelector(".count-anim-up-fadein").insertAdjacentHTML("afterbegin", `<div class="count-anim-up-fadein">${v}</div>`)
            }
        })
        this.prev_array = number_array.reverse()
    }
    down(number) {
        if (Number(this.prev_array.join("")) === Number(number)) {
            return false
        }
        let number_array = number.split("")
        let number_array_reverse = number_array.reverse()
        let prev_array_reverse = this.prev_array.reverse()

        this.refresh()
        this.prev_array.forEach((v, i) => {
            if (number_array_reverse[i] === v) {
                this.element.querySelector(".count-anim-down-fadeout").insertAdjacentHTML("afterbegin", `<div class="stop">${v}</div>`)
            } else {
                this.element.querySelector(".count-anim-down-fadeout").insertAdjacentHTML("afterbegin", `<div class="count-anim-down-fadeout">${v}</div>`)
            }
        })

        number_array_reverse.forEach((v, i) => {
            if (prev_array_reverse[i] === v) {
                this.element.querySelector(".count-anim-down-fadein").insertAdjacentHTML("afterbegin", `<div class="stop">${v}</div>`)
            } else {
                this.element.querySelector(".count-anim-down-fadein").insertAdjacentHTML("afterbegin", `<div class="count-anim-down-fadein">${v}</div>`)
            }
        })
        this.prev_array = number_array.reverse()
    }
    change(number) {
        if (Number(this.prev_array.join("")) < Number(number)) {
            this.up(number)
        } else if (Number(this.prev_array.join("")) === Number(number)) {
            //動作させない
        } else {
            this.down(number)
        }
    }
}



let styleTag = document.createElement('style');
styleTag.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

        @keyframes anim-up-fadeout {
            0% {
                transform: translateY(0%) scale(1);
            }

            100% {
                filter: blur(0.1em);
                transform: translateY(-6%) scale(0.8);
                opacity: 0;
            }
        }

        @keyframes anim-up-fadein {
            0% {
                filter: blur(0.1em);
                transform: translateY(20%);
                opacity: 0;
            }

            100% {
                filter: blur(0px);
                transform: translateY(0%);
                opacity: 1;
            }
        }


        @keyframes anim-down-fadeout {
            0% {
                transform: translateY(0%);
            }

            100% {
                filter: blur(0.1em);
                transform: translateY(6%) scale(0.8);
                opacity: 0;
            }
        }

        @keyframes anim-down-fadein {
            0% {
                filter: blur(0.1em);
                transform: translateY(-20%);
                opacity: 0;
            }

            100% {
                filter: blur(0px);
                transform: translateY(0%);
                opacity: 1;
            }
        }

        .count-anim div {
            display: inline-block;
        }

        .count-anim {
            position: relative;
            display: flex;
            justify-content: end;
            width: fit-content;
        }

        .count-anim-up-fadeout span.stop{
            opacity:0 !important;
        }

        .count-anim p {
            position: absolute;
            top: 0;
            display: flex;
            justify-content: end;
            margin:0;
        }

        .count-anim-up-fadeout div{
            animation: anim-up-fadeout cubic-bezier(0.175, 0.885, 0.32, 1) 0.45s forwards;
        }

        p.count-anim-up-fadein,p.count-anim-down-fadein{
            position: relative;
        }

        .count-anim-up-fadein div{
            opacity: 0;
            animation: anim-up-fadein cubic-bezier(0.175, 0.885, 0.32, 1) 0.45s forwards;
        }

        .count-anim-down-fadeout div{
            animation: anim-down-fadeout cubic-bezier(0.175, 0.885, 0.32, 1) 0.45s forwards;
        }

        .count-anim-down-fadein div{
            opacity: 0;
            animation: anim-down-fadein cubic-bezier(0.175, 0.885, 0.32, 1) 0.45s forwards;
        }

        .count-anim div.stop {
            animation: none !important;
            opacity: 1;
        }`;
document.head.appendChild(styleTag);