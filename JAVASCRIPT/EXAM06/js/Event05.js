window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");
    let dragging = false;
    let boxXY = {x:0,y:0};

    container.onmousedown = function(e){
        // 선택된 것이 box일때만 drag 가능하도록
        if(e.target == box){
            dragging = true;
        }
    };

    box.onmpusedown = function(e){
        boxXY.x = e.offsetX;
        boxXY.y = e.offsetY;
    };

    container.onmousemove=function(e){
        if(dragging){
            box.style.left = e.x - boxXY.x + "px";
            console.log(box.style.left);
            box.style.top = e.y - boxXY.y + "px";
        }
    };

    container.onmouseup = function(){
        dragging = false;
    };

    
}
);