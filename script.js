
(function(){
    autoRefresh(5000);
})();

/** this function refresh the page automaticaly every 5 sec */
function autoRefresh(timeMs) {
    setTimeout("location.reload(true)", timeMs);
}