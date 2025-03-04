document.getElementId("header").innerHTML = 
`<div>
<a href="">
Maria    
</a>
<a href="">
ФОТОСЕССИИ
</a>
<a href="">
КОНТАКТ
</a>
</div>`
document.getElementById("content").innerHTML = `
`;   
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".image-container");
    const overlay = container.querySelector(".overlay");

    container.addEventListener("mouseenter", function () {
        overlay.style.opacity = "1";
    });

    container.addEventListener("mouseleave", function () {
        overlay.style.opacity = "0";
    });
});