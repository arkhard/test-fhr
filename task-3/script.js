let renderScoreboard;
const stateScoreboard = { left: 0, right: 0 };

function changeScore(side, date) {
  console.log(stateScoreboard)
  stateScoreboard[side] = Math.max(0, stateScoreboard[side] + date);
  renderScoreboard();
}

function initButtons() {
  const leftButtonPlus = document.getElementById('left-plus')
  const leftButtonMinus = document.getElementById('left-minus')
  const rightButtonPlus = document.getElementById('right-plus')
  const rightButtonMinus = document.getElementById('right-minus')
  const resetButton = document.getElementById('reset-button');

  leftButtonPlus.addEventListener('click', () => changeScore('left', 1))
  leftButtonMinus.addEventListener('click', () => changeScore('left', -1))
  rightButtonPlus.addEventListener('click', () => changeScore('right', 1))
  rightButtonMinus.addEventListener('click', () => changeScore('right', -1))
  resetButton.addEventListener('click', () => resetScores())
}

document.addEventListener('DOMContentLoaded', () => {
  initButtons();
  renderScoreboard = initRender();
  renderScoreboard();
})

function resetScores() {
  stateScoreboard.left = 0;
  stateScoreboard.right = 0;
  renderScoreboard();
}

function initRender() {
  const status = document.getElementById('status');
  const leftScore = document.getElementById('left-score');
  const rightScore = document.getElementById('right-score');
  const leftMinus = document.getElementById('left-minus');
  const rightMinus = document.getElementById('right-minus');
  const leftTeam = document.getElementById('leftTeam');
  const rightTeam = document.getElementById('rightTeam');

  return function() {
    leftScore.textContent = stateScoreboard.left;
    rightScore.textContent = stateScoreboard.right;
  
    leftMinus.disabled = stateScoreboard.left === 0;
    rightMinus.disabled = stateScoreboard.right === 0;

    leftTeam.classList.remove('leading', 'tie');
    rightTeam.classList.remove('leading', 'tie');
    status.classList.remove('leading-text');

    if (stateScoreboard.left === stateScoreboard.right) {
      leftTeam.classList.add('tie');
      rightTeam.classList.add('tie');
      status.textContent = 'Ничья';
    } else if (stateScoreboard.left > stateScoreboard.right) {
      leftTeam.classList.add('leading');
      rightTeam.classList.add('tie');
      status.classList.add('leading-text');
      status.textContent = `Ведут: ${status.dataset.leftTeam}`;
    } else {
      leftTeam.classList.add('tie');
      rightTeam.classList.add('leading');
      status.classList.add('leading-text');
      status.textContent = `Ведут: ${status.dataset.rightTeam}`;
    }
  }
}
