import React, { useEffect } from 'react'
import About from '../Sections/About/About';

function OpenClose() {

    useEffect(() => {

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

        //Resize Small
        document.querySelectorAll('.resizeSmall').forEach(el => {
            el.addEventListener("click", (e) => {
                let attribute = el.closest(".draggable");
                attribute.style.height = 300 + 'px'
                attribute.style.width = 300 + 'px'
            });
        })

        //Resize Big
        document.querySelectorAll('.resizeBig').forEach(el => {
            el.addEventListener("click", (e) => {
                let attribute = el.closest(".draggable");
                attribute.style.height = window.innerHeight * 0.7 + 'px'
                attribute.style.width = window.innerWidth * 0.6 + 'px'
            });
        })

    })
}        

export default OpenClose