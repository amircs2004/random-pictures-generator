 const containerEl = document.querySelector(".container");
 const btnEl = document.querySelector(".btn");
 
 btnEl.addEventListener("click" , () => {
    imagNum = 2git ; 
    addnewomg();
 });
 function addnewomg() {
    for (let index = 0; index < imagNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`;
        containerEl.appendChild(newImgEl);
    }
 
    }