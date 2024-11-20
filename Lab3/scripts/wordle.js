window.onload = () => {
    let board = document.getElementById('board');
    let input = document.getElementById('guess');
    let button = document.getElementById('submit');
    
    let word = "media";
    word = word.toUpperCase();
    let tries = 0;

    for (let i = 0; i < 6; i++)
    {
        let row = document.createElement('div');
        row.classList = 'row';
        board.appendChild(row);

        for (let j = 0; j < 5; j++)
        {
            let cell = document.createElement('div');
            cell.classList = 'cell';
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-column', j);
            row.appendChild(cell);
        }
    }

    button.addEventListener('click', () => {
        let guess = input.value.toUpperCase();

        //TODO: validate input.value

        if (tries > 5)
        {
            alert("You already lost");
            return;
        }

        for (let i = 0; i < 5; i++)
        {
            let currentLetter = guess[i];
            let currentCell = document.querySelector(
                `[data-row="${tries}"][data-column="${i}"]`
            );
            let textNode = document.createTextNode(currentLetter);
            currentCell.appendChild(textNode);

            if (currentLetter === word[i])
            {
                currentCell.classList.add('green');
            }
            else
            {
                if (word.indexOf(currentLetter) < 0)
                {
                    currentCell.classList.add('red');
                }
                else
                {
                    currentCell.classList.add('yellow');
                }
            }
        }

        if (word === guess)
        {
            alert("You won");
            return;
        }

        if(tries == 5)
        {
            alert('You lost');
        }

        tries++;
    })
}

