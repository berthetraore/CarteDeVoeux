var message;
var $list = $('ul');
var $formItem= $('#formId');
AfficheMessage = () => {
    
    $formItem.on('submit',(e) => {
        e.preventDefault();
        message= 'Your special day';

        $list.append('<li>'+message+ '</li>');
        $('button:submit').remove();
        $formItem.append('<button class="button button2" type="submit" onclick="AfficheMessage1()">Clik Me Again!!!</button> ');



    })



}

AfficheMessage1 = () => {
    $('li').remove();
    $formItem.on('submit',(e) => {
        e.preventDefault();

        message= 'You are a great Friend';

        $list.append('<li>'+message+ '</li>');
        $('button:submit').remove();
        $formItem.append('<button class="button button3" type="submit" onclick="AfficheMessage2()"> clik again again</button> ');



    })



}

AfficheMessage2 = () => {
    $('li').remove();
    $formItem.on('submit',(e) => {
        e.preventDefault();
        
        message= 'HAPPY BIRTHDAY !!!';

        $list.append('<li>'+message+ '</li>');
        $('button:submit').remove();
        $formItem.append('<button class="button button4" type="submit" onclick="AfficheMessage3()"> Another click!!!</button> ');



    })



}
AfficheMessage3 = () => {
    $('li').remove();
    $formItem.on('submit',(e) => {
        e.preventDefault();
        
        message= 'Wishing you the best !!!';

        $list.append('<li>'+message+ '</li>');
        $('button:submit').remove();
        
        $('body').css("background-image","url('images/anniversaire.png')");
        $('#myDIV').css('background', 'none');
      
            $('#myDIV').fadeOut("slow", () => {
                $('#myDIV').fadeIn('slow')
            } 
            )

        


    })



}



        



    