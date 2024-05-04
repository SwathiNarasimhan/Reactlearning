var input=document.getElementById('cal-in'),
    num=document.querySelectorAll('.cal-num ul li'),
    opt=document.querySelectorAll('.cal-opt ul li'),
    equal=document.getElementById('result'),
    clear=document.getElementById('clear'),
    resultdisplay=false;

// adding click handlers to number buttons

for(let i=0;i<num.length;i++){
    num[i].addEventListener("click", function(e){
        let currentval=input.innerHTML;
        let lastval=currentval[currentval.length-1];

        if(resultdisplay===false){
            input.innerHTML+=e.target.innerHTML;
        }else if(resultdisplay===true && lastval==='+' || lastval === '-' || lastval === '*' || lastval === '/'){
            resultdisplay===false;
            input.innerHTML += e.target.innerHTML;
        } else{
            resultdisplay === false;
            input.innerHTML = '';
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// adding click handlers to operator buttons

for(let i=0;i<opt.length;i++){
    opt[i].addEventListener("click", function(e){
        let currentopt=input.innerHTML;
        let lastval= currentopt[currentopt.length - 1];

        if(lastval === '+' || lastval === '-' || lastval === '*' || lastval === '/'){
            let newval = currentopt.substring(0, currentopt.length - 1) + e.target.innerHTML;
            input.innerHTML=newval;
        } else if (currentopt.length == 0){
            alert('Enter a Number');
        } else{
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//clearing the field

clear.addEventListener("click", function(e){
    input.innerHTML='';
});

//Result

equal.addEventListener("click",function(e){

    let inputval= input.innerHTML;
    let number = input.innerHTML.split(/\+|\-|\*|\//g);
    let operator= input.innerHTML.replace(/[0-9]|\./g, "").split("");

    console.log(inputval);
    console.log(number);
    console.log(operator);

    let div = operator.indexOf('/');
    while(div != -1){
        number.splice(div, 2, number[div]/number[div + 1]);
        operator.splice(div, 1);
        div = operator.indexOf("/")
    }
    let mul = operator.indexOf('*');
    while(mul != -1){
        number.splice(mul, 2, number[mul] * number[mul + 1]);
        operator.splice(mul, 1);
        mul = operator.indexOf("*")
    }
    let sub = operator.indexOf('-');
    while(sub != -1){
        number.splice(sub, 2, number[sub] - number[sub + 1]);
        operator.splice(sub, 1);
        sub = operator.indexOf("-")
    }
    let add = operator.indexOf('+');
    while(add != -1){
        number.splice(add, 2, parseInt(number[add]) + parseInt(number[add + 1]));
        operator.splice(add, 1);
        add = operator.indexOf("+")
    }
    
    input.innerHTML = number[0];
});