(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxudmFyIGk7XHJcbmZvcihpPTA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspe1xyXG4gICAgYnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3BVcCh0aGlzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBnZXRzIHRyaWdnZXIgdHlwZVxyXG5mdW5jdGlvbiBnZXRUeXBlKHRhcmdldCl7XHJcbiAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XHJcbn1cclxuXHJcbi8vIGdldHMgcG9wVXAgdG8gYmUgaW5pdGlhbGl6ZWRcclxuZnVuY3Rpb24gZ2V0UG9wVXAodGFyZ2V0KXtcclxuICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwJyk7XHJcbn1cclxuXHJcbi8vIGluaXRzIHBvcFVwXHJcbmZ1bmN0aW9uIHNob3cocCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG4vLyBjbG9zZXMgcG9wVXBcclxuZnVuY3Rpb24gY2xvc2UoY2xvc2VCdG4pe1xyXG4gICAgXHJcbiAgICB2YXIgcG9wVXAgPSBjbG9zZUJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuLy8gZW1haWwgdmFsaWRhdGlvblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG4vLyBwdXBVcCBoYW5kbGVyXHJcbmZ1bmN0aW9uIHBvcFVwKGVsKXtcclxuICAgIFxyXG4gICAgc3dpdGNoKGdldFR5cGUoZWwpKXtcclxuICAgICAgICBjYXNlICd0cmlnZ2VyJzpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNob3coZ2V0UG9wVXAoZWwpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Nsb3NlJzpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNsb3NlKGVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N1Ym1pdCc6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0aW9uJykgPT09ICd2YWxpZGF0ZSc7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dFZhbCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodmFsaWRhdGUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2YWxpZGF0ZUVtYWlsKGlucHV0VmFsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBlbWFpbCBhZGRyZXNzIGlzICcgKyBpbnB1dFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChpbnB1dFZhbCArICcgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGUgbmFtZSBpcyAnICsgaW5wdXRWYWwpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG59Il19
