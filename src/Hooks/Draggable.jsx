import React, { useEffect } from 'react'

function Tracking(id) {

    useEffect(() => {

        var offset = [0,0];

        let test = 0

        function mouseMoveWhilstDown(whileMove) {
            var endMove = function () {
                window.removeEventListener('mousemove', whileMove);
                window.removeEventListener('mouseup', endMove);
            };
            
            document.querySelectorAll(".draggable").forEach(el => {
                el.addEventListener('mousedown', function (e) {
                    offset = [
                        el.offsetLeft - e.clientX,
                        el.offsetTop - e.clientY
                    ];
                    test = el
                    e.stopPropagation(); // remove if you do want it to propagate ..
                    window.addEventListener('mousemove', whileMove);
                    window.addEventListener('mouseup', endMove);   
                });
            });
        }


        mouseMoveWhilstDown(
            function (e) { 

                console.log('test')
                const height = Math.min(Math.max(parseInt(e.clientY +offset[1]), 0), window.innerHeight -90)
                const width =  Math.min(Math.max(parseInt(e.clientX + offset[0]), 0), window.innerWidth -80)

                test.style.top = height + "px";
                test.style.left = width + "px";
             }
        );

        document.querySelectorAll('.open').forEach(el => {
            el.addEventListener("dblclick", (e) => {
                console.log('dbclicked')
            });
        })

    })
}        

export default Tracking