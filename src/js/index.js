var button = document.querySelectorAll('button');

var i;
for(i=0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        popUp(this);
    });
}

// gets trigger type
function getType(target){
    return target.getAttribute('data-type');
}

// gets popUp to be initialized
function getPopUp(target){
    return target.getAttribute('data-popup');
}

// inits popUp
function show(p){
    document.querySelector('#' + p).classList.remove('hidden');
}

// closes popUp
function close(closeBtn){
    
    var popUp = closeBtn.parentElement.parentElement;
    popUp.classList.add('hidden');
}

// email validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// pupUp handler
function popUp(el){
    
    switch(getType(el)){
        case 'trigger':
            
            show(getPopUp(el));
            
            break;
        case 'close':
            
            close(el);
            
            break;
        case 'submit':
            
            var input = el.parentElement.querySelector('input');
            var validate = input.getAttribute('data-validation') === 'validate';
            var inputVal = input.value;
            
            if(validate){
                
                if(validateEmail(inputVal)){
                    alert('The email address is ' + inputVal);
                    close(el);
                } else {
                    alert(inputVal + ' is not valid');
                }
                
            } else {
                alert('The name is ' + inputVal);
                close(el);
            }
            
            break;
    }
    
}