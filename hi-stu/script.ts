function DEMO(): void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("fullname");
    let Giatri: string = input.value;

    let result: string = "ByeBye, " + Giatri + "!";

    let Ketqua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result-content");
    Ketqua.innerHTML = result;
}

export {};