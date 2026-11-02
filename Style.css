document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. PRODUCT SEARCH, FILTERING AND SORTING
    // =====================================

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

                const cards = Array.from(
                    section.querySelectorAll(".product-card")
                );

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


        // =====================================
        // 2. PRODUCT IMAGE LIGHTBOX
        // =====================================

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

                function closeWithEscape(event) {

                    if (event.key === "Escape") {
                        lightbox.remove();

                        document.removeEventListener(
                            "keydown",
                            closeWithEscape
                        );
                    }
                }

                document.addEventListener("keydown", closeWithEscape);
            });
        });
    }


    // =====================================
    // 3. FUNCTION TO SEND FORM EMAILS
    // =====================================

    async function sendForm(form, formData) {

        const response = await fetch(form.action, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (
            !response.ok ||
            String(result.success).toLowerCase() !== "true"
        ) {
            throw new Error("The message could not be sent.");
        }

        return result;
    }


    // =====================================
    // 4. ENQUIRY FORM
    // =====================================

    const enquiryForm = document.getElementById("enquiryForm");
    const enquiryPopup = document.getElementById("enquiryPopup");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    if (enquiryForm && enquiryPopup) {

        enquiryForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            if (!enquiryForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const product = document.getElementById("product").value.trim();
            const message = document.getElementById("message").value.trim();

            const submitButton = enquiryForm.querySelector(
                'button[type="submit"]'
            );

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending...";
            }

            try {

                await sendForm(enquiryForm, {
                    name: name,
                    email: email,
                    product: product,
                    message: message,
                    _subject: "New Luna Apparel Product Enquiry"
                });

                popupMessage.textContent =
                    "Thank you, " + name +
                    "! Your enquiry about " + product +
                    " has been sent successfully. Our team will get back to you with information about pricing and availability.";

                enquiryPopup.classList.add("show");

                enquiryForm.reset();

            } catch (error) {

                console.error("Enquiry form error:", error);

                alert(
                    "Your enquiry could not be sent. Please try again."
                );

            } finally {

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit Enquiry";
                }
            }
        });

        if (closePopup) {

            closePopup.addEventListener("click", function () {
                enquiryPopup.classList.remove("show");
            });
        }

        enquiryPopup.addEventListener("click", function (event) {

            if (event.target === enquiryPopup) {
                enquiryPopup.classList.remove("show");
            }
        });
    }


    // =====================================
    // 5. CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contactForm");
    const contactPopup = document.getElementById("contactPopup");

    if (contactForm && contactPopup) {

        const emailPreview = document.getElementById("emailPreview");
        const copyEmail = document.getElementById("copyEmail");
        const openEmail = document.getElementById("openEmail");
        const closeContactPopup = document.getElementById("closeContactPopup");

        contactForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const messageType = document.getElementById("message-type").value;
            const message = document.getElementById("contact-message").value.trim();

            if (name.length < 2) {
                alert("Please enter your full name.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (messageType === "") {
                alert("Please select a message type.");
                return;
            }

            if (message.length < 10) {
                alert("Your message must contain at least 10 characters.");
                return;
            }

            const submitButton = contactForm.querySelector(
                'button[type="submit"]'
            );

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending...";
            }

            const emailSubject = "Luna Apparel - " + messageType;

            const emailBody =
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message Type: " + messageType + "\n\n" +
                "Message:\n" + message;

            try {

                await sendForm(contactForm, {
                    name: name,
                    email: email,
                    message_type: messageType,
                    message: message,
                    _subject: emailSubject
                });

                // Prepare a copy of the submitted message

                if (emailPreview) {

                    emailPreview.value =
                        "To: imaanseegers1@gmail.com\n\n" +
                        "Subject: " + emailSubject + "\n\n" +
                        emailBody;
                }

                if (openEmail) {

                    openEmail.href =
                        "mailto:imaanseegers1@gmail.com" +
                        "?subject=" + encodeURIComponent(emailSubject) +
                        "&body=" + encodeURIComponent(emailBody);
                }

                // Show confirmation only after successful submission

                contactPopup.classList.add("show");

                contactForm.reset();

            } catch (error) {

                console.error("Contact form error:", error);

                alert(
                    "Your message could not be sent. Please try again."
                );

            } finally {

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Send Message";
                }
            }
        });


        // =====================================
        // 6. COPY CONTACT MESSAGE
        // =====================================

        if (copyEmail && emailPreview) {

            copyEmail.addEventListener("click", async function () {

                try {

                    await navigator.clipboard.writeText(emailPreview.value);

                    alert("Your message has been copied successfully.");

                } catch (error) {

                    emailPreview.select();
                    emailPreview.setSelectionRange(0, 99999);

                    const copied = document.execCommand("copy");

                    if (copied) {
                        alert("Your message has been copied successfully.");
                    } else {
                        alert("Please select and copy your message manually.");
                    }
                }
            });
        }


        // =====================================
        // 7. CLOSE CONTACT POP-UP
        // =====================================

        if (closeContactPopup) {

            closeContactPopup.addEventListener("click", function () {
                contactPopup.classList.remove("show");
            });
        }

        contactPopup.addEventListener("click", function (event) {

            if (event.target === contactPopup) {
                contactPopup.classList.remove("show");
            }
        });
    }

});
