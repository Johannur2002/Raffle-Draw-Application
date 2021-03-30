window.onload = function () {
    //Target the variables
    const inputField = document.getElementById('inputField');
    const motherUl = document.getElementById('motherUl');
    const displayNames = document.getElementById('displayNames');
    const giveATry = document.getElementById('giveATry');
    const firstPosition = document.getElementById('firstPosition');
    const secondPosition = document.getElementById('secondPosition');
    const thirdPosition = document.getElementById('thirdPosition');

    const participantNames = []

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            let allNames = event.target.value.split(', ')
            if (allNames[0] !== '') {
                allNames.forEach(value => {
                    participantNames.push(value)
                    let item = createListItem(value)
                    motherUl.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    });

    giveATry.addEventListener('click', function () {
        if (participantNames.length === 0) {
            inputField.classList.add('error')
            alert('There is no entry')
        } else {
            let shuffle = shuffleArray(participantNames)
            for (let i = 0; i < shuffle.length; i++) {
                (function (i, count) {
                    setTimeout(() => {
                        let randomNumber = Math.floor(Math.random() * shuffle.length);
                        displayNames.innerHTML = shuffle[randomNumber];
                        if (count === shuffle.length - 1) {
                            if (firstPosition.innerHTML && secondPosition.innerHTML && thirdPosition.innerHTML) {
                                alert('Refile draw is already complete 😃😃😃')
                            } else {
                                //Sort Hand
                                function isPresent(value) {
                                    if (!value.innerHTML) {
                                        value.innerHTML = shuffle[randomNumber]
                                        let re = participantNames.indexOf(shuffle[randomNumber])
                                        participantNames.splice(re, 1)
                                    }
                                }
                                if (!firstPosition.innerHTML) {
                                    isPresent(firstPosition)
                                } else if (!secondPosition.innerHTML) {
                                    isPresent(secondPosition)
                                } else if (!thirdPosition.innerHTML) {
                                    isPresent(thirdPosition)
                                }


                                                            // if (!firstPosition.innerHTML) {
                            //     firstPosition.innerHTML = shuffle[randomNumber];
                            //     let rem = participantNames.indexOf(shuffle[randomNumber])
                            //     participantNames.splice(rem, 1)
                            // } else if (!secondPosition.innerHTML) {
                            //     secondPosition.innerHTML = shuffle[randomNumber];
                            //     let rem = participantNames.indexOf(shuffle[randomNumber])
                            //     participantNames.splice(rem, 1)
                            // } else if (!thirdPosition.innerHTML) {
                            //     thirdPosition.innerHTML = shuffle[randomNumber];
                            //     let rem = participantNames.indexOf(shuffle[randomNumber])
                            //     participantNames.splice(rem, 1)
                            // }
                            // }
                            }                          
                        }  
                    }, i)
                })(i*100, i)
            }
        }
    })


    // Extract name form name form textarea and store it into an array
    // Render the extract name from the text area
    // Shuffle the name for getting the better result
    // Pick the random winner and put out him / her from the array
    // Display winner name

    function createListItem(name) {
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML = name
        return li
    }

    function shuffleArray(arr) {
        let array_two = [...arr]
        for (let i = array_two.length - 1; i >= 0; i--) {
            let random = Math.floor(Math.random() * (i + 1))
            let temp = array_two[i]
            array_two[i] = array_two[random]
            array_two[random] = temp
        }
        return array_two
    }


}