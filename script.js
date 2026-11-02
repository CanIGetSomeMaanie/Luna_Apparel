const products = [
    { name: "Red Petal Ruffle Dress", category: "Dresses", price: 499.99, stock: 12, image: "My images/images/red petal dollette ruffle trimmed dress.jpeg" },
    { name: "White Slip Maxi Dress", category: "Dresses", price: 549.99, stock: 8, image: "My images/images/white slip maxi dress.jpeg" },
    { name: "Pink Halter Mini Dress", category: "Dresses", price: 449.99, stock: 3, image: "My images/images/pink halter-neck mini dress.jpeg" },
    { name: "Pink Floral Maxi Dress", category: "Dresses", price: 599.99, stock: 10, image: "My images/images/pink floral maxi dress.jpeg" },
    { name: "Leopard Print Dress", category: "Dresses", price: 479.99, stock: 0, image: "My images/images/leopard print spaghetti strap dress.jpeg" },
    { name: "Purple Floral Maxi Dress", category: "Dresses", price: 579.99, stock: 6, image: "My images/images/purple floral print maxi dress.jpeg" },

    { name: "Summer Top", category: "Tops", price: 299.99, stock: 20, image: "My images/images/Summer tops.jpeg" },
    { name: "Pink Mesh Cami Top", category: "Tops", price: 279.99, stock: 14, image: "My images/images/pink mesh cami top.jpeg" },
    { name: "Floral V-Neck Top", category: "Tops", price: 319.99, stock: 9, image: "My images/images/Floral print V neck top.jpeg" },
    { name: "Blue Floral Top", category: "Tops", price: 299.99, stock: 11, image: "My images/images/floral blue top.jpeg" },
    { name: "Light Blue Tiered Blouse", category: "Tops", price: 349.99, stock: 4, image: "My images/images/light blue tiered blouse.jpeg" },
    { name: "Pink Classic Shirt", category: "Tops", price: 329.99, stock: 15, image: "My images/images/pink shirt.jpeg" },
    { name: "Tie Front Chiffon Blouse", category: "Tops", price: 369.99, stock: 7, image: "My images/images/tie front chiffon blouse.jpeg" },
    { name: "Yellow Summer Shirt", category: "Tops", price: 319.99, stock: 13, image: "My images/images/Yellow shirt.jpeg" },

    { name: "Brown Flat Sandals", category: "Shoes", price: 399.99, stock: 18, image: "My images/images/Brown flat sandels.jpeg" },
    { name: "Chocolate Round Heels", category: "Shoes", price: 499.99, stock: 5, image: "My images/images/chocolate open round heel.jpeg" },
    { name: "Chocolate Square Toe Sandals", category: "Shoes", price: 429.99, stock: 9, image: "My images/images/Chocolate square toe sandels.jpeg" },
    { name: "Yellow Flower Sandals", category: "Shoes", price: 379.99, stock: 2, image: "My images/images/Light yellow Flower Flat Sandal.jpeg" },

    { name: "Black Shoulder Bag", category: "Handbags", price: 449.99, stock: 10, image: "My images/images/black shoulder bag.jpeg" },
    { name: "Dark Brown Shoulder Bag", category: "Handbags", price: 469.99, stock: 6, image: "My images/images/Dark brown shoulder bag.jpeg" },
    { name: "Green Shoulder Bag", category: "Handbags", price: 459.99, stock: 8, image: "My images/images/Green Shoulder bag.jpeg" },
    { name: "Red Shoulder Bag", category: "Handbags", price: 479.99, stock: 3, image: "My images/images/Red Shoulder bag.jpeg" },

    { name: "Pink Abstract Mini Skirt", category: "Skirts", price: 399.99, stock: 7, image: "My images/images/pink and red abstract print side-slit mini dress.jpeg" },
    { name: "Brown Patterned Midi Skirt", category: "Skirts", price: 429.99, stock: 5, image: "My images/images/brown patterned tiered midi dress.jpeg" },
    { name: "Dragonfruit Pink Midi Skirt", category: "Skirts", price: 449.99, stock: 9, image: "My images/images/Dragonfruit pink Midi Skirt.jpeg" },
    { name: "Classic Brown Skirt", category: "Skirts", price: 399.99, stock: 12, image: "My images/images/BrownSKIRT.png" }
];

document.addEventListener("DOMContentLoaded", function () {

    // ===== EMAILJS SETTINGS =====
    const SERVICE_ID = "luna_apparel_gmail";
    const BUSINESS_TEMPLATE_ID = "template_naqshqt";
    const CUSTOMER_TEMPLATE_ID = "template_hcc0aqs";
    const PUBLIC_KEY = "OLj_2BI_Yj8VaZJkP";
    const BUSINESS_EMAIL = "hello@lunaapparel.co.za";

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ===== HELPERS =====
    function setError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + "-error");
        if (error) error.textContent = message;
        if (field) field.classList.toggle("invalid", message !== "");
        return message === "";
    }

    function clearErrorsOnInput(ids) {
        ids.forEach(id => {
            const field = document.getElementById(id);
            if (!field) return;
            field.addEventListener("input", () => setError(id, ""));
            field.addEventListener("change", () => setError(id, ""));
        });
    }

    function formatPrice(n) {
        return "R" + n.toFixed(2);
    }

    function stockInfo(stock) {
        if (stock === 0) return { text: "Out of stock", css: "out" };
        if (stock <= 5) return { text: "Low stock (" + stock + " left)", css: "low" };
        return { text: "In stock", css: "in" };
    }

    // ===== 1. DYNAMIC PRODUCTS, SEARCH, FILTER, SORT =====
    const productList = document.getElementById("productList");

    if (productList) {

        const controls = document.createElement("div");
        controls.className = "product-controls";
        controls.innerHTML = `
            <input type="text" id="productSearch" placeholder="Search for a product..." aria-label="Search products">
            <select id="categoryFilter" aria-label="Filter by category">
                <option value="all">All Categories</option>
                <option value="dresses">Dresses</option>
                <option value="tops">Tops</option>
                <option value="shoes">Shoes</option>
                <option value="handbags">Handbags</option>
                <option value="skirts">Skirts</option>
            </select>
            <select id="priceSort" aria-label="Sort by price">
                <option value="default">Sort by price</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
        `;

        const intro = document.querySelector(".products-intro");
        if (intro) intro.after(controls); else productList.before(controls);

        const searchInput = document.getElementById("productSearch");
        const categoryFilter = document.getElementById("categoryFilter");
        const priceSort = document.getElementById("priceSort");

        function renderProducts() {
            const search = searchInput.value.trim().toLowerCase();
            const category = categoryFilter.value;
            const sort = priceSort.value;

            const matches = products.filter(p =>
                p.name.toLowerCase().includes(search) &&
                (category === "all" || p.category.toLowerCase() === category)
            );

            productList.innerHTML = "";

            if (matches.length === 0) {
                const none = document.createElement("p");
                none.className = "no-results";
                none.textContent = "No products found. Try a different search or category.";
                productList.appendChild(none);
                return;
            }

            const categories = [...new Set(products.map(p => p.category))];

            categories.forEach(cat => {
                const items = matches.filter(p => p.category === cat);
                if (items.length === 0) return;

                if (sort === "low") items.sort((a, b) => a.price - b.price);
                if (sort === "high") items.sort((a, b) => b.price - a.price);

                const section = document.createElement("section");
                section.className = "product-category";

                const heading = document.createElement("h2");
                heading.textContent = cat;
                section.appendChild(heading);

                const grid = document.createElement("div");
                grid.className = "product-grid";

                items.forEach(p => {
                    const info = stockInfo(p.stock);
                    const card = document.createElement("article");
                    card.className = "product-card fade-in";
                    card.innerHTML = `
                        <img src="${encodeURI(p.image)}" alt="${p.name} - Luna Apparel women's ${cat.toLowerCase()}" loading="lazy">
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="stock-status ${info.css}">${info.text}</p>
                            <p class="price">${formatPrice(p.price)}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });

                section.appendChild(grid);
                productList.appendChild(section);
            });
        }

        searchInput.addEventListener("input", renderProducts);
        categoryFilter.addEventListener("change", renderProducts);
        priceSort.addEventListener("change", renderProducts);
        renderProducts();

        // ===== 2. LIGHTBOX =====
        productList.addEventListener("click", function (event) {
            const img = event.target.closest(".product-card img");
            if (!img) return;

            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";
            lightbox.innerHTML = `
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            `;
            document.body.appendChild(lightbox);

            function closeLightbox() {
                lightbox.remove();
                document.removeEventListener("keydown", closeWithEscape);
            }
            function closeWithEscape(e) {
                if (e.key === "Escape") closeLightbox();
            }

            lightbox.addEventListener("click", closeLightbox);
            document.addEventListener("keydown", closeWithEscape);
        });
    }

    // ===== 3. ACCORDION (FAQ) =====
    document.querySelectorAll(".accordion-button").forEach(button => {
        button.addEventListener("click", function () {
            const panel = document.getElementById(button.getAttribute("aria-controls"));
            const isOpen = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isOpen));
            panel.hidden = isOpen;
        });
    });

    // ===== 4. SEND EMAILS (EMAILJS / AJAX) =====
    async function sendEmails(formData) {

        if (typeof emailjs === "undefined") {
            throw new Error("EmailJS has not loaded. Please refresh the page.");
        }

        await emailjs.send(SERVICE_ID, BUSINESS_TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY });

        // EmailJS allows one request per second
        await new Promise(resolve => setTimeout(resolve, 1100));

        try {
            await emailjs.send(SERVICE_ID, CUSTOMER_TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY });
            return true;
        } catch (error) {
            console.error("Customer confirmation email error:", error);
            return false;
        }
    }

    // ===== 5. ENQUIRY FORM =====
    const enquiryForm = document.getElementById("enquiryForm");
    const enquiryPopup = document.getElementById("enquiryPopup");

    if (enquiryForm && enquiryPopup) {

        const popupMessage = document.getElementById("popupMessage");
        const closePopup = document.getElementById("closePopup");
        const productSelect = document.getElementById("product");

        [...new Set(products.map(p => p.category))].forEach(cat => {
            const group = document.createElement("optgroup");
            group.label = cat;
            products.filter(p => p.category === cat).forEach(p => {
                const option = document.createElement("option");
                option.value = p.name;
                option.textContent = p.name;
                group.appendChild(option);
            });
            productSelect.appendChild(group);
        });

        function validateEnquiry() {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const product = document.getElementById("product").value;
            const message = document.getElementById("message").value.trim();

            return [
                setError("name",
                    name.length < 2 ? "Please enter your full name (at least 2 characters)." :
                    !/^[A-Za-z\s'-]+$/.test(name) ? "Your name may only contain letters, spaces, hyphens and apostrophes." : ""),
                setError("email",
                    email === "" ? "Please enter your email address." :
                    !EMAIL_REGEX.test(email) ? "Please enter a valid email address, e.g. name@example.com." : ""),
                setError("product", product === "" ? "Please select a product." : ""),
                setError("message", message.length < 10 ? "Your enquiry must be at least 10 characters long." : "")
            ].every(Boolean);
        }

        clearErrorsOnInput(["name", "email", "product", "message"]);

        function getProductResponse(productName) {
            const item = products.find(p => p.name === productName);
            if (!item) return { price: "", availability: "", text: "" };

            const price = formatPrice(item.price);
            let availability = "in stock";
            if (item.stock === 0) availability = "currently out of stock";
            else if (item.stock <= 5) availability = "low in stock (only " + item.stock + " left)";

            let text = "The " + item.name + " costs " + price + " and is " + availability + ".";
            if (item.stock === 0) text += " We will let you know as soon as it is available again.";

            return { price, availability, text };
        }

        enquiryForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            if (!validateEnquiry()) return;

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const product = document.getElementById("product").value;
            const message = document.getElementById("message").value.trim();
            const response = getProductResponse(product);

            const submitButton = enquiryForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            try {
                const confirmationSent = await sendEmails({
                    name, email, product,
                    price: response.price,
                    availability: response.availability,
                    message_type: "Product enquiry",
                    subject: "New Luna Apparel Product Enquiry",
                    message
                });

                popupMessage.textContent =
                    "Thank you, " + name + "! " + response.text +
                    " Our team will follow up on the rest of your enquiry shortly." +
                    (confirmationSent
                        ? " A confirmation email has also been sent to you."
                        : " Your enquiry was received, but we could not send your confirmation email.");

                enquiryPopup.classList.add("show");
                enquiryForm.reset();

            } catch (error) {
                console.error("Enquiry form error:", error);
                alert("Your enquiry could not be sent. Please try again.");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = "Submit Enquiry";
            }
        });

        if (closePopup) closePopup.addEventListener("click", () => enquiryPopup.classList.remove("show"));
        enquiryPopup.addEventListener("click", e => {
            if (e.target === enquiryPopup) enquiryPopup.classList.remove("show");
        });
    }

    // ===== 6. CONTACT FORM =====
    const contactForm = document.getElementById("contactForm");
    const contactPopup = document.getElementById("contactPopup");

    if (contactForm && contactPopup) {

        const emailPreview = document.getElementById("emailPreview");
        const copyEmail = document.getElementById("copyEmail");
        const openEmail = document.getElementById("openEmail");
        const closeContactPopup = document.getElementById("closeContactPopup");

        function validateContact() {
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const type = document.getElementById("message-type").value;
            const message = document.getElementById("contact-message").value.trim();

            return [
                setError("contact-name",
                    name.length < 2 ? "Please enter your full name (at least 2 characters)." :
                    !/^[A-Za-z\s'-]+$/.test(name) ? "Your name may only contain letters, spaces, hyphens and apostrophes." : ""),
                setError("contact-email",
                    email === "" ? "Please enter your email address." :
                    !EMAIL_REGEX.test(email) ? "Please enter a valid email address, e.g. name@example.com." : ""),
                setError("message-type", type === "" ? "Please select a message type." : ""),
                setError("contact-message", message.length < 10 ? "Your message must be at least 10 characters long." : "")
            ].every(Boolean);
        }

        clearErrorsOnInput(["contact-name", "contact-email", "message-type", "contact-message"]);

        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            if (!validateContact()) return;

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const messageType = document.getElementById("message-type").value;
            const message = document.getElementById("contact-message").value.trim();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            const emailSubject = "Luna Apparel - " + messageType;
            const emailBody =
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message Type: " + messageType + "\n\n" +
                "Message:\n" + message;

            try {
                const confirmationSent = await sendEmails({
                    name, email,
                    product: "",
                    message_type: messageType,
                    subject: emailSubject,
                    message
                });

                if (emailPreview) {
                    emailPreview.value = "To: " + BUSINESS_EMAIL + "\n\nSubject: " + emailSubject + "\n\n" + emailBody;
                }
                if (openEmail) {
                    openEmail.href = "mailto:" + BUSINESS_EMAIL +
                        "?subject=" + encodeURIComponent(emailSubject) +
                        "&body=" + encodeURIComponent(emailBody);
                }

                contactPopup.classList.add("show");
                contactForm.reset();

                if (!confirmationSent) {
                    alert("Your message was sent to Luna Apparel, but the confirmation email could not be sent.");
                }

            } catch (error) {
                console.error("Contact form error:", error);
                alert("Your message could not be sent. Please try again.");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        });

        if (copyEmail && emailPreview) {
            copyEmail.addEventListener("click", async function () {
                try {
                    await navigator.clipboard.writeText(emailPreview.value);
                    alert("Your message has been copied successfully.");
                } catch (error) {
                    emailPreview.select();
                    const copied = document.execCommand("copy");
                    alert(copied ? "Your message has been copied successfully." : "Please select and copy your message manually.");
                }
            });
        }

        if (closeContactPopup) closeContactPopup.addEventListener("click", () => contactPopup.classList.remove("show"));
        contactPopup.addEventListener("click", e => {
            if (e.target === contactPopup) contactPopup.classList.remove("show");
        });
    }

});
