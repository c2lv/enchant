$(function() {
    rendering();
     
    $(".sell-btn").on("click", function() {
        sell();
    });
 
    $(".enchant-btn").on("click", function() {
        enchant();
    });
});
 
var weaponList = [
    { name: "노주희의 돌", price: 0, cost: 100, chance: 100 },
    { name: "노주희의 구리", price: 50, cost: 200, chance: 98 },
    { name: "노주희의 주석", price: 100, cost: 300, chance: 95 },
    { name: "노주희의 청동", price: 300, cost: 400, chance: 90 },
    { name: "노주희의 철", price: 1000, cost: 500, chance: 80 },
    { name: "노주희의 은", price: 2500, cost: 1000, chance: 70 },
    { name: "노주희의 금", price: 5000, cost: 2000, chance: 60 },
    { name: "노주희의 다이아", price: 10000, cost: 10000, chance: 50 },
    { name: "노주희의 백지수표", price: 25000, cost: 15000, chance: 40 },
    { name: "노주희의 우주선", price: 100000, cost: 50000, chance: 45 },
    { name: "노주희의 아름다운 미래", price: 1000000, cost: 0, chance: 40 },
];
 
var user = {
    weapon: 0,
    money: 10000
};
 
function rendering() {
    $(".cost .value").text(comma(weaponList[user.weapon].cost));
    $(".money .value").text(comma(user.money));
    $(".price .value").text(comma(weaponList[user.weapon].price));
    $(".chance .value").text(weaponList[user.weapon].chance);
    $(".weapon .name").text(weaponList[user.weapon].name);
    $(".weapon .level").text(user.weapon + 1);
}
 
function comma(s) {
    return String(s).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
 
function enchant() {
    if (user.money >= weaponList[user.weapon].cost) {
        user.money -= weaponList[user.weapon].cost
        if (chance(weaponList[user.weapon].chance)) {
            user.weapon++;
        } else {
            user.weapon = 0;
        }
 
        rendering();
    } else {
        alert("돈이 부족합니다.");
    }
}
 
function sell() {
    user.money += weaponList[user.weapon].price;
    user.weapon = 0;
    rendering();
}
 
function chance(percent) {
    if (Math.floor(Math.random() * 100) + 1 <= percent)
        return true;
    else
        return false;
}