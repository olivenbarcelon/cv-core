const onClick = () => {
    let element = document.createElement("a");
    element.setAttribute("href", "../assets/myresume.pdf");
    element.setAttribute("download", "olivenbarcelon.pdf");

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById("download").disabled = true;
}

document.getElementById("download").addEventListener("click", onClick);
