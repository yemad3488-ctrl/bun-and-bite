const orderButtons = document.querySelectorAll(".order-btn");
const toast = document.getElementById("toast");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const itemName = button.dataset.item;

        toast.textContent =
            itemName + " added! This is a demo — no real order was placed.";

        toast.classList.add("show");

        window.clearTimeout(window.toastTimer);

        window.toastTimer = window.setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);
    });
})