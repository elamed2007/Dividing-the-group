let inp_nbr_eles = document.getElementById("inp_nbr_ele")
let input_group = document.getElementById("inp_nbr_gr")
let btn_start = document.querySelector(".btn_start")
let result = document.getElementById("result")
list = []
let count = 0
let isFound
let num = 0
let box = ''

btn_start.onclick = () => {
    result.textContent = ''

    // nomber des elements
    let num = inp_nbr_eles.value
    //number des groupes géneré
    let num_grbs = input_group.value
    
    //validation des inputs
    if(num > num_grbs || num <= 0 || num_grbs <= 0 || isNaN(num) || isNaN(num_grbs)){
        alert("this operation is an impossible")
        return
    }

    // crée un list aléatoire par rapport value de input number ele
    do {
        isFound = 0
        //number aléatoire
        let num_ale = Math.ceil(Math.random() * num)

        for (i = 0; i < count - 1; i++) {
            // pour ivité duplication d'un number
            if (list[i] === num_ale) {
                isFound = 1
            }

        }

        if (isFound == 0) {
            list[count - 1] = num_ale
            count++
        }

    } while (count <= num);
    

    // crée les boxes avec les number des groups dans la page
    for (i = 0; i < num_grbs; i++) {
        result.innerHTML += ` <div class='box${i}'>
            <h1>group ${i + 1}</h1>
            
        </div>`

    }

    // division entier pour savoir combien de cellules chaque cellue contiendra
    let div = Math.trunc(num / num_grbs)
    console.log(div)
    let reste = num % num_grbs
    count = 0

    // inscrivez les nombres dans les boxes
    for (j = 0; j < num_grbs; j++) {
        count += div
        box = document.querySelector(`.box${j}`)
        for (i = count - div; i < count; i++) {
            box.innerHTML += `<p>${list[i]}</p>`

        }

    }

    // now count = last valeur
    // exmple: num=28 => count=24
    num -= reste
    count -= 1
    for (j = 0; j < reste; j++) {

        num += 1
        count += 1

        box = document.querySelector(`.box${j}`)
        for (i = count; i < num; i++) {
            box.innerHTML += `<p>${list[i]}</p>`
        }

    }
    rest = 4



}
