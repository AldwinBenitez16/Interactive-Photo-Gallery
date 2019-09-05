let counter = 0;

let search = $('#search');
search.on('input', function(e) {

    let val = search.val(); //input value
    while (counter < 12) {
        counter++;
        let path;
    
        if(counter < 10) {
            path = $(`a[href='img/0${counter}.jpg']`);
        } else {
            path = $(`a[href='img/${counter}.jpg']`);
        }
    
        let image = path;
        let caption = image.attr('data-title').toLowerCase();
        if((caption.indexOf(val.toLowerCase())) === -1){
            image.attr('class','noDisplay');
        } else {
            image.attr('class','display');
        }
    }
    counter = 0;
});