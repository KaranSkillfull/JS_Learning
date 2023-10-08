const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

/*Task is to change the above Text color in some Time

Text         delay      color
heading1      1s        Violet  
heading2      2s        purple
heading3      2s        red
heading4      1s        pink
heading5      2s        green
heading6      3s        blue
heading7      1s        brown

This is the Exapmle of Callback hell, such code are
not easy to read and callback within callbacks

*/


setTimeout(()=>{
    heading1.textContent ='I am Heading1';
    heading1.style.color = 'violet';
    setTimeout(()=>{
        heading2.textContent ='I am Heading2';
        heading1.style.color = 'purple';  
        setTimeout(()=>{
            heading3.textContent ='I am Heading3';
            heading3.style.color = 'red';
            setTimeout(()=>{
                heading4.textContent ='I am Heading4';
                heading4.style.color = 'pink';
                setTimeout(()=>{
                    heading5.textContent ='I am Heading5';
                    heading5.style.color = 'green';
                    setTimeout(()=>{
                        heading6.textContent ='I am Heading6';
                        heading6.style.color = 'blue';
                        setTimeout(()=>{
                            heading7.textContent ='I am Heading7';
                            heading7.style.color = 'brown';
                        },1000)
                    },3000)
                },2000)
            },1000)
        },2000)
    },2000)

},1000)