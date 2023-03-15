function demo() {
    let input = document.getElementById("fullname");
    let Giatri = input.value;

    let result = "Hi, " + Giatri + "!";

    let Ketqua = document.getElementById("result-content");
    Ketqua.innerHTML = result;
}