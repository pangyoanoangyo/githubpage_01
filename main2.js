let footer = document.getElementById("foot");
let content = document.createElement("p");
content.innerHTML = `
<a class="btn btn-danger" href="index.html">목록</a>
`;
content.classList.add("text-center");



footer.appendChild(content);