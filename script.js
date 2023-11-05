var isstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var flag = 0;
var likeCount = 999;

btn.addEventListener("click", () => {
    if (flag == 0) {

        isstatus.innerHTML = "Friends"
        isstatus.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.color = "black"
        btn.style.backgroundColor = "rgb(184, 184, 184)"

    flag = 1;
}
    else {
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "gray"
        flag = 0;
        btn.innerHTML = "Add Friend"
        btn.style.color = "white";
        btn.style.backgroundColor = "lightseagreen"
    }
})

var con = document.querySelector("img");
var icon = document.querySelector("i");

con.addEventListener("dblclick",()=>{
    icon.style.transform =  "translate(-50%, -50%) scale(1)"
    likeCount++;
    document.querySelector("h2").innerHTML = `${likeCount} likes`
    setTimeout(()=>{
        icon.style.transform = "translate(-50%, -50%) scale(0)"
    },500)
})

