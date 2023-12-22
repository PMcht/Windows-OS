import React, { useEffect } from 'react'

function Extend() {
   useEffect(() => {
    
    let extendTrigger = document.querySelectorAll(".extend")
    let target = 0
    let startPosition = 0
    let elementHeight = 0

    function mouseMoveWhilstDown(whileMove) {

        //Remove listeners when click ends
        var endMove = function () {
            window.removeEventListener('mousemove', whileMove);
            window.removeEventListener('mouseup', endMove);
        };
        
        //When click is held
        extendTrigger.forEach(el => {
            el.addEventListener('mousedown', function (e) {
                //Get closest object to drag
                let toDrag = el.closest(".draggable")

                startPosition = { x: e.clientX, y: e.clientY };
                target = toDrag
                elementHeight = {y: target.offsetHeight, x: target.offsetWidth}
                
                e.stopPropagation(); // remove if you do want it to propagate ..
                window.addEventListener('mousemove', whileMove);
                window.addEventListener('mouseup', endMove);   
            });
        });
    }

    //Action when drag happens
    mouseMoveWhilstDown(
        function (e) { 

            const height = Math.min(Math.max(parseInt(elementHeight.y - startPosition.y + e.clientY ), 300), window.innerHeight * 0.7)
            const width =  Math.min(Math.max(parseInt(elementHeight.x - startPosition.x + e.clientX), 300), window.innerWidth * 0.6)

            

            target.style.height = height + "px";
            target.style.width = width + "px";
            target.style.zIndex = 2
         }
    );

    //Double Click
    document.querySelectorAll('.open').forEach(el => {
        el.addEventListener("dblclick", (e) => {
            let attribute = document.getElementById(el.getAttribute('data-open'));
            attribute.classList.add('active')
        });
    })

    //Closing
    document.querySelectorAll('.close').forEach(el => {
        el.addEventListener("click", (e) => {
            let attribute = document.getElementById(el.getAttribute('data-close'));
            attribute.classList.remove('active')
        });
    })

})
}

export default Extend