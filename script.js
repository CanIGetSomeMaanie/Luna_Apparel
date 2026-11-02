document.addEventListener("DOMContentLoaded", function () {

    // PRODUCT SEARCH, FILTERING AND SORTING

    const intro = document.querySelector(".products-intro");

    if (intro) {

        const searchContainer = document.createElement("div");
        searchContainer.className = "product-controls";

        searchContainer.innerHTML = `
            <input type="text" id="productSearch"
            placeholder="Search for a product...">

            <select id="categoryFilter">
                <option value="all">All Categories</option>
                <option value="dresses">Dresses</option>
                <option value="tops">Tops</option>
                <option value="shoes">Shoes</option>
                <option value="handbags">Handbags</option>
                <option value="skirts">Skirts</option>
            </select>

            <select id="priceSort">
                <option value="default">Sort by price</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
        `;

        intro.after(searchContainer);

        const searchInput = document.getElementById("productSearch");
        const categoryFilter = document.getElementById("categoryFilter");
        const priceSort = document.getElementById("priceSort");

        function filterProducts() {

            const searchValue = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            document.querySelectorAll(".product-category").forEach(section => {

                const heading = section.querySelector("h2").textContent.toLowerCase();
                const cards = Array.from(section.querySelectorAll(".product-card"));

                cards.forEach(card => {

                    const name = card.querySelector("h3").textContent.toLowerCase();

                    const matchesSearch = name.includes(searchValue);

                    const matchesCategory =
                        selectedCategory === "all" ||
                        heading === selectedCategory;

                    card.style.display =
                        matchesSearch && matchesCategory ? "" : "none";
                });

                section.style.display =
                    cards.some(card => card.style.display !== "none")
                    ? "" : "none";

                // Sort products by price

                if (priceSort.value !== "default") {

                    cards.sort((a, b) => {

                        const priceA = parseFloat(
                            a.querySelector(".price").textContent.replace("R", "")
                        );

                        const priceB = parseFloat(
                            b.querySelector(".price").textContent.replace("R", "")
                        );

                        return priceSort.value === "low"
                            ? priceA - priceB
                            : priceB - priceA;
                    });

                    const grid = section.querySelector(".product-grid");

                    cards.forEach(card => grid.appendChild(card));
                }

            });
        }

        searchInput.addEventListener("input", filterProducts);
        categoryFilter.addEventListener("change", filterProducts);
        priceSort.addEventListener("change", filterProducts);

        // IMAGE LIGHTBOX

        document.querySelectorAll(".product-card img").forEach(img => {

            img.style.cursor = "pointer";

            img.addEventListener("click", function () {

                const lightbox = document.createElement("div");
                lightbox.className = "lightbox";

                lightbox.innerHTML = `
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                `;

                document.body.appendChild(lightbox);

                lightbox.addEventListener("click", function () {
                    lightbox.remove();
                });

            });
        });
    }


    // ENQUIRY FORM VALIDATION

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const product = document.getElementById("product").value.trim();

            const response = document.getElementById("enquiryResponse");

            response.textContent =
                "Thank you, " + name +
                "! Your enquiry about " + product +
                " has been received. Our team will get back to you.";

            response.style.color = "#5a4038";

            enquiryForm.reset();
        });
    }

});