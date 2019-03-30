(function(){
	'use strict';
	
	window.addEventListener('DOMContentLoaded',init,false);

    function init(){

        /* Sticky Navigation */
        window.onscroll = function() {stickyNav()};
            
        var navbar = document.getElementById('navbar');
        var sticky = navbar.offsetTop;
            
        function stickyNav() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky')
            } else {
                navbar.classList.remove('sticky');
            }
        }

        /* Formular Verarbeitung */

        var submit=document.querySelector('[type="submit"]');
		submit.addEventListener('click',function(e){e.preventDefault(); sendingConfirmation();},false);
		
        
        function sendingConfirmation(){
            if (validateFields() == true && validateRadioButtons() == true){
                var containsConfirmation = document.getElementsByClassName('confirmation');
                if (containsConfirmation.length == 0) {
                    var field = document.getElementById('anmeldung')
                    var p = document.createElement('p');
			        var text = document.createTextNode('Vielen Dank für deine Anmeldung! Wir melden uns bald bei dir zurück.');
                    p.appendChild(text);
                    field.appendChild(p);
                    p.className = 'confirmation';
                } 
            }  
        }


        function validateFields(){
            var vorname = document.getElementById('vorname');
	        var nachname = document.getElementById('nachname');
            var email = document.getElementById('email');

            if (vorname.value == '' || nachname.value == '' || email.value == ''){
                alert('Bitte fülle das Formular vollständig aus.');
                return false;
            }
            else {
                return true;
            }
        }

        function validateRadioButtons() {
            var radio = document.querySelectorAll('input[type=radio]');

            var radioChecked = 0;
            for(var i = 0; i < radio.length; i++){
                if(radio[i].checked) 
                        ++radioChecked;
            }
            
            if(radioChecked > 0) {
                return true;
            }
            else {
                alert('Bitte wähle ein Datum für dein Secret Dinner.');
                return false;
            }
        }
        
        

        /* Newsletter Overlay */
        var newsletter_button = document.getElementById('newsletter_button');
        newsletter_button.addEventListener('click',function(e){on();e.stopPropagation();},false);
        
        
        var close_window = document.getElementById('close_window');
        close_window.addEventListener('click',function(e){off();e.stopPropagation();},false);


        function on() {
            document.getElementById('overlay').style.display = 'flex';
        }
          
        function off() {
            document.getElementById('overlay').style.display = 'none';
        }

        
    }
})();
