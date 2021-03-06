//Customization cost display
function customizationCost(customizeFeature, customizationCostDisplay, customizationCost) {
    document.getElementById(customizeFeature).addEventListener('click', function () {
        document.getElementById(customizationCostDisplay).innerText = customizationCost;
        calculateTotalCost();
    });
}

//calculate total cost for different configuration
function calculateTotalCost() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const extraSsdCost = parseInt(document.getElementById('extra-ssd-cost').innerText);
    const extraDeliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraSsdCost + extraDeliveryCost;

    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('total-cost-with-pomo').innerText = totalPrice;
}

customizationCost('8-gb-memory', 'extra-memory-cost', 0);
customizationCost('16-gb-memory', 'extra-memory-cost', 180);
customizationCost('256-gb-ssd', 'extra-ssd-cost', 0);
customizationCost('512-gb-ssd', 'extra-ssd-cost', 100);
customizationCost('1-tb-ssd', 'extra-ssd-cost', 180);
customizationCost('free-delivery', 'delivery-cost', 0);
customizationCost('fast-delivery', 'delivery-cost', 20);

//useing promo code
document.getElementById('pomo-btn').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code').value.toLowerCase();
    if (pomoCode == 'stevekaku') {
        const totalPriceWithoutPomo = parseInt(document.getElementById('total-cost-with-pomo').innerText);
        const totalPriceWithPomo = totalPriceWithoutPomo - (totalPriceWithoutPomo / 5);
        document.getElementById('total-cost-with-pomo').innerText = totalPriceWithPomo;
        document.getElementById('pomo-code').value = '';
        document.getElementById('pomo-btn').setAttribute('disabled', true);
    }
});

