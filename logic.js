//커피 메뉴
function createMenuElement1(menu) {
    for (let i = 0 ; i < menu.length; i = i + 1) {
        let onlycoffee = document.querySelector('.onlycoffee');

        let button = document.createElement('button');
        button.classList.add('menu1');

        let menudiv= document.createElement('div');
        menudiv.classList.add('bold');
        menudiv.textContent = menu[i]['name'];
        button.appendChild(menudiv);
    
        let pricediv = document.createElement('div');
        pricediv.textContent = menu[i]['price'];
        button.appendChild(pricediv);
        
        onlycoffee.appendChild(button)

//onclick
        button.onclick = function (){
            let menuName = menu[i]['name'];
            let menuPrice = menu[i]['price'];
            let checking = false;
            for(let n=0; n<cart.length; n++){
                if (cart[n]['name'] === menuName){
                    cart[n]['quantity'] += 1;
                    cart[n]['price'] = (menuPrice * cart[n]['quantity'])
                    checking = true;
                }
         }
        if (checking === false) {
            cart.push({name:menuName, quantity:1, price:menuPrice});
        }
        createCartItemElement(cart);
        renderSubtotalHTML(cart); 
        }
    }
}
createMenuElement1(menu1);

//커피 외 메뉴
function createMenuElement2(menu) {
    for (let i = 0 ; i < menu.length; i = i + 1) {
        let noncoffee = document.querySelector('.noncoffee');

        let button = document.createElement('button');
        button.classList.add('menu2');

        let menudiv= document.createElement('div');
        menudiv.classList.add('bold');
        menudiv.textContent = menu[i]['name'];
        button.appendChild(menudiv);
    
        let pricediv = document.createElement('div');
        pricediv.textContent = menu[i]['price'];
        button.appendChild(pricediv);

        noncoffee.appendChild(button)
    

        //onclick
        button.onclick = function (){
            let menuName = menu[i]['name'];
            let menuPrice = menu[i]['price'];
            let checking = false;
            for(let n=0; n < cart.length; n++){
                if (cart[n]['name'] === menuName){
                    cart[n]['quantity'] += 1;
                    cart[n]['price'] =  (menuPrice * cart[n]['quantity'])
                    checking = true;
                }
            }
            if (checking === false) {
                cart.push({name:menuName, quantity:1, price:menuPrice});
            }
            createCartItemElement(cart);
            renderSubtotalHTML(cart);
        }
    }
}
createMenuElement2(menu2);

//빵류 메뉴
function createMenuElement3(menu) {
    for (let i = 0 ; i < menu.length; i = i + 1) {
        let bakery = document.querySelector('.bakery');

        let button = document.createElement('button');
        button.classList.add('bakery');

        let menudiv= document.createElement('div');
        menudiv.classList.add('bold');
        menudiv.textContent = menu[i]['name'];
        button.appendChild(menudiv);
    
        let pricediv = document.createElement('div');
        pricediv.textContent = menu[i]['price'];
        button.appendChild(pricediv);
        
        bakery.appendChild(button)

//onclick
        button.onclick = function (){
            let menuName = menu[i]['name'];
            let menuPrice = menu[i]['price'];
            let checking = false;
            for(let n=0; n<cart.length; n++){
                if (cart[n]['name'] === menuName){
                    cart[n]['quantity'] += 1;
                    cart[n]['price'] = (menuPrice * cart[n]['quantity'])
                    checking = true;
                }
         }
        if (checking === false) {
            cart.push({name:menuName, quantity:1, price:menuPrice});
        }
        createCartItemElement(cart);
        renderSubtotalHTML(cart); 
        }
    }
}
createMenuElement3(menu3);

function refresh(){
    let refresh = document.querySelector('#refresh');
    let tbody = document.querySelector('tbody');
    let paid = document.querySelector('#paid');
    refresh.onclick = function () {
     cart = [];
     tbody.innerHTML = '';
     paidmoney = '';
    }
    
}
refresh();


function createCartItemElement(item) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < item.length; i++){
        //creat tr
        let tr = document.createElement('tr');
        
        for (let prop in item[i]) {
            let td = document.createElement('td');
            td.id = prop;
            td.textContent = item[i][prop];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function renderSubtotalHTML(arr) {
    let bill = document.querySelector('#bill');
    let total = 0;

    for (let i = 0; i < arr.length; i++){
        total = total + arr[i]['price'];   
    }

    bill.textContent = total; 
    renderCalcHTML();
    enterbtn();
}

function enterbtn () {
    let enter = document.querySelector('.enter');
    let bill = +document.querySelector('#bill').textContent;
    let change = document.querySelector('#change');

    enter.onclick = function() {
        let finalchange = +paidmoney - bill;
        change.textContent =  finalchange;
        let last = confirm("결제하시겠습니까?")
    }
}

function renderCalcHTML () {
    let paid = document.querySelector('#paid');
    let button = document.querySelectorAll('.button');
    for(let i = 0; i < button.length; i++){
        button[i].onclick = function(){
           paidmoney = paidmoney + button[i].value;
           paid.textContent = paidmoney;
        }
    }
}
renderCalcHTML();