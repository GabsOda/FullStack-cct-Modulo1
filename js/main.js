function backgroundColor(type){
    let dv = document.getElementById("body");
    
    if(type == 1){
        dv.style.backgroundColor = "#262626";
        dv.style.color = "white";
    } else if(type == 2){
        dv.style.backgroundColor = "whitesmoke";
        dv.style.color = "black";
    }
}

function textColor(num, color){
    let dv_text = document.getElementById("text");

    if(dv_text != null){
        if(num == 1){    
            dv_text.style.color = color;
        } else if(num == 2){
            dv_text.style.backgroundColor = color;
        }
    }
}


let current = 0;

function changePhoto(x){
    let image = [
        'img/code-in-monitor.jpg',
        'img/gpu.jpg',
        'img/nintendo-switch.jpg',
        'img/autumm.jpg',
        'img/winter.jpg'
    ];

    current += x;
    if (current > 4){
        current = 0;
    }
    if (current < 0){
        current = 4;
    }
    let imgPhoto = document.getElementById('imgPhoto');
    imgPhoto.src = image[current];
}