let fnn = window.localStorage.getItem('fname');
let lnn = window.localStorage.getItem('lname');

let story = `Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes.
      The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built 
      his house out of sticks. Then, they sang and danced and played together the rest of the day. The third little pig worked hard all day and built his house with bricks. It was a sturdy house 
      complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw
      the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water.`

let pertwolinecharactercount = 30;
    let initialSequence = 1;
    let currentcharacterlocation =1;
    totcloc =1;
    var prevchar = [];
    var nextchar = "";
    var currentchar = "";
    //console.log("total count",story.length);
        var pertwolinecharacter = Math.floor(story.length/pertwolinecharactercount);



     let saveRagestrationForm = () => {
     console.log('okokokokok')

         let fn = document.getElementById("First_name").value;
         let ln = document.getElementById("Last_name").value;
         let dr = document.getElementById("abhi_select").value
         console.log(fn);
         console.log(ln);

      //   window.localStorage.setItem(key,value);
         window.localStorage.setItem('fname',fn);
         window.localStorage.setItem('lname',ln);
         window.localStorage.setItem('duration',dr);

         // page reload
      window.location.reload();


     }

     let  logOut = () => {
      window.localStorage.clear();

      // page reload
      window.location.reload();
     }

     var start = () => {
     var nextTIME = new Date().getTime();
      nextTIME = new Date(nextTIME + localStorage.getItem('duration')*60*1000);

              // Given date and time string
        const datetime = new Date(nextTIME);

        // Convert the date string to a Unix timestamp
        const unixTimestamp = Math.floor(datetime.getTime() / 1000) * 1000; // Divide by 1000 to convert to seconds

       setInterval(function(){
         // Get today's date and time
        var now = new Date().getTime();

        // get a certain amount of time to the current time
        console.log('NEXT TIME',unixTimestamp);  
       console.log('CURRENT TIME' , now); 

                // Find the distance between now and the count down date
          var distance = unixTimestamp- now;

          // Time calculations for days, hours, minutes and seconds
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          document.querySelector(".abhi_duration").innerHTML =  minutes + "m " + seconds + "s ";

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.querySelector(".abhi_duration").innerHTML = "EXPIRED";
          }
              
       },1000)
      
     }

     let playSound = (status) => {
       // console.log('lalalala');

       let ad = document.querySelector('.a_audio');
      if(status === "correct"){
            ad.src ="../audio/k.mp3";
            ad.play();
      }else{
        ad.src ="../audio/error.mp3";
        ad.play();
      }
     
      
     }



    // // ()(); IIFE
    // onload page
     ( () => {

     

      
        //console.log("page loaded successfully")
 
          //Get a refrence to the model element
          var modal = document.getElementById('ragitrationModel');

        //  create a bootstrap modal instance using the modal element
        var modalInstance = new bootstrap.Modal(modal);

        if(window.localStorage.getItem('fname') === null){
          modalInstance.show();
        }

       // call the show method on the modal instance to launch the modal
      
      // console.log(window.localStorage.getItem('First_name'));

      // check if the local storage is set a key and value 
      if(window.localStorage.getItem('fname') !== null){
        document.querySelector('.a_welcome').innerHTML= 'welcome ' + fnn +" "+ lnn + ' <button class ="btn btn-sm btn-danger ms-3" onclick="logOut()" >Logout</button>';
      }

            // Add an event listener to the whole document
             document.addEventListener('keypress', (e) => {

              var prevchar2 = prevchar.pop();
              console.log(prevchar2);
              if(prevchar2 !== currentchar){
                //play the error sound
                //console.log("incorrect",prevchar );
                //console.log("incorrect",currentchar);
               playSound("correct");

              }else{
                //console.log("correct",prevchar );
               // console.log("correct",currentchar);
                // play the error sound
                playSound("incorrect");

              }

              //console.log("-->",e);
              currentchar = e.key;
              
               if(e.keyCode == 97){
                let s = document.querySelector('.a_a');
                //console.log(s.classList.add('a_active'));
                document.querySelector('.l_pinky').style.display = 'block';
               }
               
               if(e.keyCode == 113){
                let s = document.querySelector('.a_q');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_pinky').style.display = 'block';
               }
               if(e.keyCode == 122){
                let s = document.querySelector('.a_z');
                //console.log(s.classList.add('a_active'));
                document.querySelector('.l_pinky').style.display = 'block';
               }
               if(e.keyCode == 115){
                let s = document.querySelector('.a_s');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_ring').style.display = 'block';
               }
               if(e.keyCode == 119){
                let s = document.querySelector('.a_w');
                //console.log(s.classList.add('a_active'));
                document.querySelector('.l_ring').style.display = 'block';
               }
               if(e.keyCode == 120){
                let s = document.querySelector('.a_x');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_ring').style.display = 'block';
               }
               if(e.keyCode == 101){
                let s = document.querySelector('.a_e');
               //console.log(s.classList.add('a_active'));
                document.querySelector('.l_middle').style.display = 'block';
               }
               if(e.keyCode == 100){
                let s = document.querySelector('.a_d');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_middle').style.display = 'block';
               }
               if(e.keyCode == 99){
                let s = document.querySelector('.a_c');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_middle').style.display = 'block';
               }
               if(e.keyCode == 114){
                let s = document.querySelector('.a_r');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_index').style.display = 'block';
               }
                if(e.keyCode == 102){
                let s = document.querySelector('.a_f');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_index').style.display = 'block';
               }
               if(e.keyCode == 118){
                let s = document.querySelector('.a_v');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.l_index').style.display = 'block';
               }
               if(e.keyCode == 116){
                let s = document.querySelector('.a_t');
              //  console.log(s.classList.add('a_active'));
                document.querySelector('.l_index').style.display = 'block';
               }
               if(e.keyCode == 103){
                let s = document.querySelector('.a_g');
              //  console.log(s.classList.add('a_active'));
                document.querySelector('.l_index').style.display = 'block';
               }
               if(e.keyCode == 98){
                let s = document.querySelector('.a_b');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 121){
                let s = document.querySelector('.a_y');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 104){
                let s = document.querySelector('.a_h');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 110){
                let s = document.querySelector('.a_n');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 117){
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 106){
                let s = document.querySelector('.a_j');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_index').style.display = 'block';
               }
               if(e.keyCode == 109){
                let s = document.querySelector('.a_m');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_middle').style.display = 'block';
               }
               if(e.keyCode == 105){
                let s = document.querySelector('.a_i');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_middle').style.display = 'block';
               }
               if(e.keyCode == 107){
                let s = document.querySelector('.a_k');
               // console.log(s.classList.add('a_active'));
                document.querySelector('.r_middle').style.display = 'block';
               }
               if(e.keyCode == 111){
                let s = document.querySelector('.a_o');
              //  console.log(s.classList.add('a_active'));
                document.querySelector('.r_ring').style.display = 'block';
               }
               if(e.keyCode == 108){
                let s = document.querySelector('.a_l');
                //console.log(s.classList.add('a_active'));
                document.querySelector('.r_ring').style.display = 'block';
               }
               if(e.keyCode == 112){
                let s = document.querySelector('.a_p');
                //console.log(s.classList.add('a_active'));
                document.querySelector('.r_ring').style.display = 'block';
               }

       })

       document.addEventListener('keyup',(e) => {
       // console.log(e);

        var elements = document.getElementsByClassName('a_active');
        
        for(var i =0; i<elements.length; i++){
          elements[i].classList.remove('a_active');
        }
        var elements = document.getElementsByClassName('a_left_pinky');
        
        for(var i =0; i<elements.length; i++){
          elements[i].style.display = 'none';
        }

        // document.querySelector('.a_left_pinky').style.display = 'none';
        
       // console.log('initialSequence-->',initialSequence);
           // console.log('currentcharacterlocation',currentcharacterlocation);
           // console.log('pertwolinecharacter',pertwolinecharactercount);

            if(currentcharacterlocation >= pertwolinecharactercount){
                currentcharacterlocation =0;
                initialSequence++;
               // console.log('new initial sequence -->',initialSequence);


                
               
            }
            else{

            currentcharacterlocation++;

            }
            //If the

            if(initialSequence === 1){
       // console.log('-->',story.substring(initialSequence-1,(initialSequence*pertwolinecharactercount)+pertwolinecharactercount));
        let x = story.substring(initialSequence-1,(initialSequence*pertwolinecharactercount)+pertwolinecharactercount);
       


        // let x = abhi
                // if cl = 1 then, <span style = "color:green">a</span style ="color:red text-decoration:underline">bhi
                   
            var p1 = x.substring(0,currentcharacterlocation);
            var p2 = x.substring(currentcharacterlocation);
            prevchar.push( p2.charAt(0));
          //  p2 = x.replace("a","<span style ='text-decoration:underline'></span>")

          p2 = "<span style='text-decoration: underline ;font-weight:bolder;'>" + p2.charAt(0) + "</span>" + p2.slice(1)

           // console.log('part1-->',p1);
           // console.log('part2-->',p2);
            
            //

            let a = `<span style ="color:red">${p1}</span>` +p2;

            document.querySelector('.a_myparagraph').innerHTML = a;
          //  console.log("nextchar-->",nextchar);
 

    }
    else{
        //console.log('-->',story.substring((initialSequence-1)*pertwolinecharactercount,(initialSequence*pertwolinecharactercount)+pertwolinecharactercount));
       let x= story.substring((initialSequence-1)*pertwolinecharactercount,(initialSequence*pertwolinecharactercount)+pertwolinecharactercount);
        

       var p1 = x.substring(0,currentcharacterlocation);
       var p2 = x.substring(currentcharacterlocation);
       prevchar.push( p2.charAt(0));


           // console.log('part1-->',p1);
          //  console.log('part2-->',p2);
            
            //

            let a = `<span style ="color:red">${p1}</span>` +p2;

       document.querySelector('.a_myparagraph').innerHTML = a;
      // console.log("nextchar-->",nextchar);

    }


            totcloc++ 
        
        
       })

       var m = "";

       for( var i=1; i<=60;i++){
        m = m + `<option value="${i}">${i}</option>`

       }
       document.querySelector('.abhi_select').innerHTML = m;

       document.querySelector('.abhi_duration').innerHTML = localStorage.getItem('duration') == null?"": localStorage.getItem('duration')+ ":00";

     } ) ();


    
