const itemlist = {
  "전체 메뉴": [],
  "분식류": [
    {
      src: "image/떡볶이.jpg",
      name: "떡볶이",
      price: 5000,
      description: "쌀/밀 떡볶이"
    },
    {
      src: "image/순대.png",
      name: "순대",
      price: 6000,
      description: "내장은 없어요ㅠㅠ"
    },
    {
      src: "image/어묵.png",
      name: "어묵",
      price: 3000,
      description: "4개에 3000원"
    },
  ],
  "김밥류": [
    {
      src: "image/기본김밥.jpg",
      name: "기본김밥",
      price: 4000,
      description: "기본에 충실한 김밥"
    },
    {
      src: "image/참치김밥.png",
      name: "참치김밥",
      price: 4500,
      description: "이달의 인기메뉴"
    },
    {
      src: "image/땡초김밥.png",
      name: "땡초김밥",
      price: 4500,
      description: "꽤나 매워요"
    },
  ],
  "면류": [
    {
      src: "image/어묵우동.jpg",
      name: "어묵우동",
      price: 6000,
      description: "참치김밥이랑 베스트 조합"
    },
    {
      src: "image/땡초라면.png",
      name: "땡초라면",
      price: 5000,
      description: "땡초 원하는 만큼 넣어드려요"
    }
  ],
  "음료": [
    {
      src: "image/콜라.jpg",
      name: "콜라",
      price: 2000,
      description: "제로는 취급 안 합니다"
    },
    {
      src: "image/물.jpg",
      name: "물",
      price: 1000,
      description: "매장에서 먹으면 공짜"
    }
  ],
};




document.addEventListener('DOMContentLoaded', function () {
  const itemContainer = document.querySelector(".items");
  const itemsTitle = Object.keys(itemlist)
  // console.log(itemContainer)

  const menulistContainer = document.querySelector(".menu-list")

  itemsTitle.forEach(title => {
    const button = document.createElement('button')
    button.className = 'item'
    button.innerHTML = `<p>${title}</p>`
    itemContainer.appendChild(button)

    displayAll()

    button.addEventListener("click", (e) => {
      clearDisplay()

      if (title === "전체 메뉴") displayAll()
      else displayMenu(itemlist[title])

    })
  });

  function setMenu(item) {
    const menu = document.createElement('div')
    const menuImg = document.createElement('img')
    const menuDetails = document.createElement('div')
    const menuInfo = document.createElement('div')
    const menuName = document.createElement('p')
    const menuPrice = document.createElement('p')
    const menuDescription = document.createElement('div')

    menu.className = 'menu'

    menuImg.className = 'menu-img'
    menuImg.src = item.src
    menu.appendChild(menuImg)

    menuDetails.className = 'menu-details'
    menuInfo.className = 'menu-info'
    menuName.className = 'menu-name'
    menuName.textContent = item.name
    menuPrice.className = 'menu-price'
    menuPrice.textContent = `${item.price}원`
    menuInfo.append(menuName)
    menuInfo.append(menuPrice)
    menuDetails.append(menuInfo)

    menuDescription.className = 'menu-description'
    menuDescription.innerHTML = `<p>${item.description}</p>`
    menuDetails.append(menuDescription)

    menu.appendChild(menuDetails)

    return menu
  }

  function displayMenu(menuItems) {
    menuItems.forEach(item => {
      const menuContainer = setMenu(item)
      menulistContainer.appendChild(menuContainer)
    })
  }

  function clearDisplay() {
    while (menulistContainer.firstChild) {
      menulistContainer.removeChild(menulistContainer.firstChild);
    }
  }

  function displayAll() {
    itemsTitle.forEach(itemTitle => {
      itemlist[itemTitle].forEach(item => {
        console.log(item)
        const menuContainer = setMenu(item);
        menulistContainer.appendChild(menuContainer);
      });
    })
  }
});