function myFirstApp(name, age) {
   /*  alert(`Привет, меня зовут ${name} и это моя первая программа!`); */

     function showSkills() {
         let skills = ['html', 'css', 'js', 'java','c#', 'php'];

            document.writeln('Я владею : ');
         for (let i=0; i < skills.length; i++) {
             document.write(skills[i]+ ' ');
         }
                 
     }

     function checkAge(age) {
        
        if (age > 18) {
            document.write(' У тебя хорошие шансы в Frontend');
        }
        else {
            document.write('Круто, что тебе всего ' + age);
        }
     }

     function calcPow(num){
        return num*num;
     }


     showSkills();
     checkAge(age);
     console.log('Квадрат числа равен : ' + calcPow(4));

}

/* myFirstApp('Eugenia', 20);*/



