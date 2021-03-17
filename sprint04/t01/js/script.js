function addElement() {
    let cur_elem = document.getElementsByTagName("li");
    for (let i = 0; i < cur_elem.length; i++) {
        let arr_elem = cur_elem[i];
        if (arr_elem.hasAttributes() === false || (arr_elem.getAttribute("class") !== "good" && 
            arr_elem.getAttribute("class") !== "evil" && arr_elem.getAttribute("class") !== "unknown")) {
            arr_elem.setAttribute("class", "unknown");
    }
    let attributes = arr_elem.attributes;
    if (!attributes["data-element"]) {
        arr_elem.setAttribute("data-element", "none");
    }

    let data_element = arr_elem.getAttribute("data-element").split(" ");
    let add_br = document.createElement("br");
    arr_elem.appendChild(add_br);
    let circle_class;

    function addCircles() {
        let divCircle = document.createElement("div");
        circle_class = document.createAttribute("class");
        arr_elem.appendChild(divCircle);
        divCircle.setAttributeNode(circle_class);
        circle_class.value = "elem";
        if (data_element.includes("none")) {
            let div_line = document.createElement("div");
            let line_class = document.createAttribute("class");
            div_line.setAttributeNode(line_class);
            divCircle.appendChild(div_line);
            line_class.value = "line";
        }
    }
        for (let j = 0; j < data_element.length; j++) {
            addCircles();
            circle_class.value += " " + data_element[j];
        }
    }
}
addElement();