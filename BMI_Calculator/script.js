const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML='Invalid Height';
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML='Invalid weight';
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<=18.6){
            result.innerHTML='<span>Under Weight</span>';
        }
        else if(bmi>18.6 && bmi<=24.9){
            result.innerHTML='<span>Normal Weight</span>';
        }
        else if(bmi>=25){
            result.innerHTML='<span>Over Weight</span>';
        }

    }
})