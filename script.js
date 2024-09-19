
const elevator = document.getElementById('elevator')
function chooseFloor(floor){
    var postion =  20;

    switch(floor){
        case 1:
            postion = 20;
            break;

        case 2:
            postion = 175;
            break;

        case 3:
            postion = 330;
            break;

        default:
            return;
    }
    elevator.style.bottom = postion + 'px';
}


    document.getElementById('button1').addEventListener('click', function(){
        chooseFloor(1)
    });

    document.getElementById('button2').addEventListener('click', function(){
        chooseFloor(2)
    });

    document.getElementById('button3').addEventListener('click', function(){
        chooseFloor(3)
    });
