



document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawFildValue = newFildValue('withdraw-field');
    const resurvWithdrowValue = previousResurvValue('withdrow-value');

    const preservWithdraw = resurvWithdrowValue + withdrawFildValue;

    setTextElementValueById('withdrow-value', preservWithdraw);

    const totalBalanceWithWithdraw = previousResurvValue('balance-total');
    const totalBalance = totalBalanceWithWithdraw - withdrawFildValue

    setTextElementValueById('balance-total', totalBalance);


})