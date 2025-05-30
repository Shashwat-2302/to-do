const confirmBtn = document.querySelectorAll(".cnfrm");
const inptBox = document.querySelectorAll(".taskInput");

confirmBtn.forEach((tick, index) => {
    tick.addEventListener("click", function () {
        alert("You Sure you want to confirm?");

        const textInput = inptBox[index].value.trim();

        if (textInput !== "") {
            alert("Saved! " + textInput);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.width = "20px";
            checkbox.style.height = "20px";

            const para = document.createElement("p");
            para.textContent = textInput;
            para.style.fontSize = "20px";
            para.style.fontWeight = "bold";
            para.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            para.style.marginLeft = "10px";
            para.style.overflow = "hidden";
            para.style.textOverflow = "ellipsis";
            para.style.whiteSpace = "nowrap";
            para.style.flex = "1";

            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.alignItems = "center";
            container.style.flexWrap = "nowrap";
            container.style.gap = "10px";
            container.style.width = "100%";

            // ✅ Append checkbox and para to container
            container.appendChild(checkbox);
            container.appendChild(para);

            // ✅ Replace the input with the container
            inptBox[index].replaceWith(container);

            // ✅ Remove the tick icon
            tick.remove();

        } else {
            alert("Please fill the input box");
        }
    });
});
