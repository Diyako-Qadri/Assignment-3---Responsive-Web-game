$(() => {
  const gameChoice = ['rock', 'paper', 'scissors'];
  let computerChoice;
  let playerChoice;
  let score = 0;

  function updateComputerChoice(choice) {
    const imagePath = `./img/${choice}1.jpg`;

    const newImage = $(
      `<img class="comp-choice" src="${imagePath}" alt="${choice}" data-value="${choice}">`
    );
    $('.computer')
      .find('.comp-choice')
      .fadeOut(200, function () {
        $(this).replaceWith(newImage).fadeIn(2000);
      });
  }

  function compareChoices(player, computer) {
    if (player === computer) {
      $('.message').text('You tied');
    } else if (player === 'rock' && computer === 'scissors') {
      $('.message').text('You won');
      score++;
    } else if (player === 'rock' && computer === 'paper') {
      $('.message').text('You lose');
      score--;
    } else if (player === 'paper' && computer === 'rock') {
      $('.message').text('You won');
      score++;
    } else if (player === 'paper' && computer === 'scissors') {
      $('.message').text('You lose');
      score--;
    } else if (player === 'scissors' && computer === 'rock') {
      $('.message').text('You lose');
      score--;
    } else if (player === 'scissors' && computer === 'paper') {
      $('.message').text('You won');
      score++;
    }
    $('.player-score').text(score);
  }
  function fadeOutAndIn(element) {
    element.fadeOut(200, function () {
      element.fadeIn(1200);
    });
  }

  $('.items.pla')
    .find('li')
    .on({
      click: function () {
        const clickedValue = $(this).find('img').data('value');
        playerChoice = clickedValue;

        computerChoice =
          gameChoice[Math.floor(Math.random() * gameChoice.length)];

        const playerChoiceImgPath = `./img/${clickedValue}1.jpg`;
        const playerChoiceImg = $(
          `<img class="player choice" src="${playerChoiceImgPath}" alt="${clickedValue}" data-value="${clickedValue}">`
        );
        $('.player')
          .find('.player.choice')
          .fadeOut(200, function () {
            $(this).replaceWith(playerChoiceImg).fadeIn(200);
          });

         
          fadeOutAndIn($('.items.pla li'));
          fadeOutAndIn($('.comp.items li'));
        updateComputerChoice(computerChoice);

        compareChoices(playerChoice, computerChoice);
      },
    });

  $('.btn.again').on('click', function () {
    score = 0;
    $('.player-score').text(score);
    $('.message').text('Start checking...');

    $('.computer').find('.comp-choice').fadeOut('img');
    $('.player').find('.player.choice').fadeOut('img');
  });
});
