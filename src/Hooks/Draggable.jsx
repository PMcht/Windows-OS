import React, { useEffect } from 'react'
import About from '../Sections/About/About';

function Tracking() {

    useEffect(() => {

        var offset = [0,0]; //So that icon does not jump to top right

        let dragTrigger = document.querySelectorAll(".dragTrigger")
        let draggableItems = document.querySelectorAll(".draggable")
        let target = 0

        function mouseMoveWhilstDown(whileMove) {

            //Remove listeners when click ends
            var endMove = function () {
                window.removeEventListener('mousemove', whileMove);
                window.removeEventListener('mouseup', endMove);
            };
            
            //When click is held
            dragTrigger.forEach(el => {
                el.addEventListener('mousedown', function (e) {
                    //Get closest object to drag
                    let toDrag = el.closest(".draggable")
                    offset = [
                        toDrag.offsetLeft - e.clientX,
                        toDrag.offsetTop - e.clientY
                    ];
                    target = toDrag
                    e.stopPropagation(); // remove if you do want it to propagate ..
                    window.addEventListener('mousemove', whileMove);
                    window.addEventListener('mouseup', endMove);   
                });
            });
        }

        //Action when drag happens
        mouseMoveWhilstDown(
            function (e) { 

                draggableItems.forEach(el => el.style.zIndex = 1)

                const height = Math.min(Math.max(parseInt(e.clientY +offset[1]), 0), window.innerHeight - target.clientHeight)
                const width =  Math.min(Math.max(parseInt(e.clientX + offset[0]), 0), window.innerWidth - target.clientWidth)

                target.style.top = height + "px";
                target.style.left = width + "px";
                target.style.zIndex = 2
             }
        );

    })
}        

export default Tracking