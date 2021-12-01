

(function(){
    autoRefresh(36000);
})();

/** this function refresh the page automaticaly every 5 sec */
function autoRefresh(timeMs) {
    setTimeout("location.reload(true)", timeMs);
}

document.getElementById("btn_name").addEventListener("click", function(){
    changeName();
});

function changeName() {

  const newName = prompt("new name");
  (document.querySelector("#full_name")).textContent = newName;
    
}
