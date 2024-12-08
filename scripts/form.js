const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;

const products = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" }
];
const selectElement = document.querySelector("#product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
});