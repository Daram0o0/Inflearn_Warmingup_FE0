document.addEventListener('DOMContentLoaded', function () {
  const list = ['가위', '바위', '보']

  const buttons = document.querySelectorAll('.action')

  const playerScore = document.querySelector('#player-score')
  const comScore = document.querySelector('#com-score')
  playerScore.innerText = 0
  comScore.innerText = 0

  const remainNum = document.querySelector('#count-remain-num')
  remainNum.innerText = 10

  const count = document.querySelector('.count')

  const buttonList = document.querySelector('.select')


  // const reset = document.querySelector('#reset')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.innerText;
      console.log(buttonText);

      const com = Math.floor(Math.random() * 3)
      const comText = list[com]

      const result = document.querySelector('.result')

      if (buttonText === comText) {
        result.innerText = "무승부"
      }
      else if (
        (buttonText === "가위" && comText === "보") ||
        (buttonText === "보" && comText === "바위") ||
        (buttonText === "바위" && comText === "가위")
      ) {
        result.innerText = "YOU WIN"
        playerScore.innerText++
      }
      else {
        result.innerText = "YOU LOSE"
        comScore.innerText++
      }
      remainNum.innerText--

      if (remainNum.innerText === "0") {
        buttonList.innerHTML = '<div><button class="action" id="reset" onClick="window.location.reload()"><p>reset</p></button></div>';
        result.innerText = ""

        let message = ""
        if (playerScore.innerText > comScore.innerText) {
          message = `축하합니다.
          최종 우승하셨습니다`
        }
        else if (playerScore.innerText < comScore.innerText) {
          message = `컴퓨터한테 진 당신,
          다시 도전하시겠습니까`
        }
        else {
          message = `비겼네요.
          다시 도전하시겠습니까`
        }
        document.querySelector('.count').innerHTML = `<div class="sub-title">
        <p>${message}</p>
      </div>`
      }
    });

  })


});
