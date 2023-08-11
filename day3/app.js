function getRandomColor(){
    const text = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += text[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor(){
    let getColor = getRandomColor();
    document.body.style.backgroundColor = getColor;
}

function setCount(){
    let countSpan = document.getElementById("count");
    let count = parseInt(countSpan.innerHTML);
    count+=1;
    countSpan.innerHTML = count;
}