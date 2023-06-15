function newFildValue(fildValue) {
    const fildAddress = document.getElementById(fildValue);
    const fildValueString = fildAddress.value;
    const fildValueFloat = parseFloat(fildValueString);
    fildAddress.value = '';
    return fildValueFloat;
}

function previousResurvValue(elementId) {
    const totalResurvAddress = document.getElementById(elementId);
    const totalResurvValueString = totalResurvAddress.innerText;
    const totalResurvValueFloat = parseFloat(totalResurvValueString);
    return totalResurvValueFloat;
}

function setTextElementValueById (element, newValue){
    const setTotalValue = document.getElementById(element);
    setTotalValue.innerText = newValue;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositFildValue = newFildValue('deposit-field');
    const depositPreservValue = previousResurvValue('deposit-total');

    const updatedTotalValue = depositPreservValue + depositFildValue;
    setTextElementValueById('deposit-total', updatedTotalValue);

    const preveousBalanceTotal = previousResurvValue('balance-total');

    const newBalanceTotal =  depositFildValue + preveousBalanceTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})