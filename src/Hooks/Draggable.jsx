import React, { useEffect } from 'react'

function Tracking(id) {

   

    useEffect(() => {

        var offset = [0,0];

        function mouseMoveWhilstDown(whileMove) {
            var endMove = function () {
                this.removeEventListener('mousemove', whileMove);
                this.removeEventListener('mouseup', endMove);
                this.removeEventListener('mouseout', endMove);
            };
        
            document.querySelectorAll(".draggable").forEach(el => {
                el.addEventListener('mousedown', function (e) {
                    offset = [
                        el.offsetLeft - e.clientX,
                        el.offsetTop - e.clientY
                    ];
                    e.stopPropagation(); // remove if you do want it to propagate ..
                    el.addEventListener('mousemove', whileMove);
                    el.addEventListener('mouseup', endMove);   
                    el.addEventListener('mouseout', endMove);  
                });
            });
        }

        mouseMoveWhilstDown(
            function (e) { 

                const height = e.clientY +offset[1]
                const width = e.clientX + offset[0]

                this.style.top = height + "px";
                this.style.left = width + "px";
             }
        );


        
            
    
    })
}        

export default Tracking