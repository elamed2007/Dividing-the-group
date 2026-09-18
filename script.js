let input_elements = document.getElementById("inp_nbr_elements") // input: number of elements
let input_groups = document.getElementById("inp_nbr_groups")     // input: number of groups
let btn_start = document.querySelector(".btn_start")             // start button
let result = document.getElementById("result")                   // container where groups are displayed

// Global variables
list = []      // will hold the shuffled numbers of all the elements
let count = 0  // counter used for the random list and the distribution
let isFound    // flag to know if a random number already exists
let num = 0    // number of elements
let box = ''   // will hold the current group box element


// Action triggered when clicking the start button
btn_start.onclick = () => {
    // clears the previous result
    result.textContent = ''

    // Read the input values
    // number of elements
    let num = Number.parseInt(input_elements.value)
    // number of groups to generate
    let num_groups = Number.parseInt(input_groups.value)

    // Validation inputs
    if (num < num_groups || num <= 0 || num_groups <= 0 || isNaN(num) || isNaN(num_groups)) {
        alert("this operation is impossible")
        return
    }

    // Create a random list of non-repeated numbers
    // generates a number between 1 and num, checking it never repeats
    do {
        isFound = 0
        // generates a random number between 1 and num
        let random_num = Math.ceil(Math.random() * num)

        // loop through the list to check if the number already exists
        for (i = 0; i < count - 1; i++) {
            // to avoid duplicating a number
            if (list[i] === random_num) {
                isFound = 1
            }

        }

        // if the number is not found in the list, add it
        if (isFound == 0) {
            list[count - 1] = random_num
            count++
        }

    } while (count <= num);


    // Create the group boxes
    // creates one box (div) for each group
    for (i = 0; i < num_groups; i++) {
        result.innerHTML += ` <div class='box${i}'>
            <h1>group ${i + 1}</h1>
            
        </div>`

    }

    // Distribute the numbers equally between the groups
    // integer division to know how many elements each box will contain
    let quotient = Math.trunc(num / num_groups)
    // reset after the equal division
    let reset = num % num_groups
    // reset the counter to reuse it for the distribution
    count = 0

    // Write the random numbers inside the boxes
    // each group receives "quotient" numbers
    for (j = 0; j < num_groups; j++) {
        count += quotient
        box = document.querySelector(`.box${j}`)
        for (i = count - quotient; i < count; i++) {
            box.innerHTML += `<p>${list[i]}</p>`

        }

    }

    // Distribute the remaining numbers
    // now count = last value
    // example: num=28 => count=24
    // the reset is shared one by one on the first groups
    if (reset) {
        num -= reset
        count -= 1
        for (j = 0; j < reset; j++) {

            num += 1
            count += 1

            box = document.querySelector(`.box${j}`)
            for (i = count; i < num; i++) {
                box.innerHTML += `<p>${list[i]}</p>`
            }

        }
    }

}