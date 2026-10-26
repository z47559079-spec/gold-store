
const products = [
  {
    id: 1,
    name: "گردنبند طلایی آوا",
    category: "necklace",
    categoryName: "گردنبند",
    price: 18500000,
    description: "طراحی ظریف و مینیمال",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "انگشتر کلاسیک",
    category: "ring",
    categoryName: "انگشتر",
    price: 12900000,
    description: "انتخابی برای لحظه‌های خاص",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "دستبند الگانس",
    category: "bracelet",
    categoryName: "دستبند",
    price: 15600000,
    description: "ترکیب ظرافت و درخشش",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "گردنبند مینیمال",
    category: "necklace",
    categoryName: "گردنبند",
    price: 9800000,
    description: "زیبایی در سادگی",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "انگشتر درخشان",
    category: "ring",
    categoryName: "انگشتر",
    price: 21400000,
    description: "جلوه‌ای خاص و ماندگار",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "دستبند طلایی",
    category: "bracelet",
    categoryName: "دستبند",
    price: 16700000,
    description: "مناسب استایل روزمره و رسمی",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80"
  }
];

const grid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const toast = document.getElementById("toast");

let selectedCategory = "all";
let cart = [];

const formatPrice = (price) =>
  price.toLocaleString("fa-IR") + " تومان";

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("fa");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLocaleLowerCase("fa").includes(query) ||
      product.categoryName.toLocaleLowerCase("fa").includes(query);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >
      <div class="product-info">
        <span class="product-category">${product.categoryName}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button
            class="add-button"
            data-add="${product.id}"
            type="button"
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filteredProducts.length !== 0;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const productId = Number(button.dataset.add);
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  cart.push(product);
  cartCount.textContent = cart.length.toLocaleString("fa-IR");
  showToast(`${product.name} به سبد خرید اضافه شد.`);
});

cartButton.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("سبد خرید شما خالی است.");
    return;
  }

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  showToast(
    `${cart.length.toLocaleString("fa-IR")} محصول | مجموع: ${formatPrice(total)}`
  );
});

renderProducts();
