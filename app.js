const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll' , kaydirma);

kaydirma();

function kaydirma(){
    console.log(window.innerHeight);
    // const triggerBottom = (window.innerHeight /6)*5;
    const triggerBottom = window.innerHeight /1.5;

    boxes.forEach(box => {
        // console.log(box.getBoundingClientRect().top)
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}