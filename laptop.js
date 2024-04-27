var Laptop = /** @class */ (function () {
    function Laptop(name, processor, memory, display, price, discount, imageUrl, buyLink) {
        this.name = name;
        this.processor = processor;
        this.memory = memory;
        this.display = display;
        this.price = price;
        this.discount = discount;
        this.imageUrl = imageUrl;
        this.buyLink = buyLink;
    }
    return Laptop;
}());
function displayProducts() {
    var laptops = [
        new Laptop("Apple 2023 MacBook Pro M2", "4-core GPU, 18-core GPU, 16-core Neural Engine, 150GB/s memory bandwidth,ProMotion technology for adaptive refresh rates up to 120Hz,Up to 18 hours Apple TV app movie playback", "18 GB/1 TB SSD", "Up to two external displays with up to 6K resolution at 60Hz over Thunderbolt, or one external display with up to 6K resolution at 60Hz over,Thunderbolt and one external display with up to 4K resolution, at 144Hz over HDMI", 138990, 14, "mac22.jpg", "form valid.html"),
        new Laptop("Apple 2023 MacBook Pro M3", "8-core CPU, 10-core GPU, 8GB of RAM, 512GBSSD, 150GB/s memory bandwidth,ProMotion technology for adaptive refresh rates up to 120Hz,Up to 18 hours Apple TV app movie playback", "18 GB/1 TB SSD", "Up to two external displays with up to 6K resolution at 60Hz over Thunderbolt, or one external display with up to 6K resolution at 60Hz over,Thunderbolt and one external display with up to 4K resolution, at 144Hz over HDMI", 238990, 14, "l.jpg", "form valid.html"),
        new Laptop("Apple 2023 MacBook Pro M2 Max", "4-core GPU, 18-core GPU, 16-core Neural Engine, 150GB/s memory bandwidth,ProMotion technology for adaptive refresh rates up to 120Hz,Up to 18 hours Apple TV app movie playback", "32 GB/1 TB SSD", "Up to two external displays with up to 6K resolution at 60Hz over Thunderbolt, or one external display with up to 6K resolution at 60Hz over,Thunderbolt and one external display with up to 4K resolution, at 144Hz over HDMI", 248990, 14, "mac13.jpg", "form valid.html"),
    ];
    var productsContainer = document.getElementById("products-container");
    if (productsContainer) {
        laptops.forEach(function (laptop) {
            var productCard = document.createElement("div");
            productCard.classList.add("col-md-4");
            productCard.classList.add("product-container");
            var image = document.createElement("img");
            image.classList.add("product-img");
            image.src = laptop.imageUrl;
            image.alt = laptop.name;
            var productName = document.createElement("h2");
            productName.textContent = laptop.name;
            var productInfo = document.createElement("p");
            productInfo.innerHTML = "Processor: ".concat(laptop.processor, "<br>Memory: ").concat(laptop.memory, "<br>Display: ").concat(laptop.display);
            var price = document.createElement("p");
            price.textContent = "MRP: \u20B9".concat(laptop.price.toFixed(2));
            if (laptop.discount > 0) {
                var discount = document.createElement("span");
                discount.textContent = "  ".concat(laptop.discount, "% off");
                discount.style.color = "green";
                price.appendChild(discount);
            }
            var buyButton = document.createElement("button");
            buyButton.textContent = "Buy now";
            buyButton.classList.add("btn", "btn-primary");
            buyButton.addEventListener("click", function () {
                window.location.href = laptop.buyLink;
            });
            productCard.appendChild(image);
            productCard.appendChild(productName);
            productCard.appendChild(productInfo);
            productCard.appendChild(price);
            productCard.appendChild(buyButton);
            productsContainer.appendChild(productCard);
        });
    }
}
// Call the function to display products
displayProducts();
