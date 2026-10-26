
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
  
const translations = {
  fa: {
    pageTitle: "GOLDEN | فروشگاه طلا و جواهر",
    navHome: "صفحه اصلی",
    navProducts: "محصولات",
    navAbout: "درباره ما",
    cart: "سبد خرید",
    language: "English",
    eyebrow: "LUXURY GOLD COLLECTION",
    heroTitle: "درخشش تو،",
    heroTitle2: "امضای زیبایی توست.",
    heroDescription:
      "مجموعه‌ای از زیباترین جواهرات با طراحی خاص برای لحظه‌هایی که می‌خواهند ماندگار شوند.",
    shopNow: "مشاهده محصولات",
    collection: "OUR COLLECTION",
    productsTitle: "منتخب جواهرات",
    productsDescription: "زیبایی در جزئیات معنا پیدا می‌کند.",
    search: "جست‌وجوی محصول...",
    all: "همه",
    necklace: "گردنبند",
    ring: "انگشتر",
    bracelet: "دستبند",
    add: "افزودن به سبد",
    empty: "محصولی پیدا نشد.",
    aboutEyebrow: "THE ART OF GOLD",
    aboutTitle: "زیبایی، فراتر از زمان",
    aboutDescription:
      "در GOLDEN، هر قطعه داستانی از ظرافت، اصالت و سلیقه را روایت می‌کند. این فروشگاه یک پروژه نمونه برای نمایش طراحی وب است.",
    footerText: "طراحی شده با عشق به زیبایی ✦",
    copyright: "© 2026 GOLDEN — پروژه نمونه طراحی وب",
    emptyCart: "سبد خرید شما خالی است.",
    added: "به سبد خرید اضافه شد."
  },

  en: {
    pageTitle: "GOLDEN | Luxury Jewelry Store",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About Us",
    cart: "Cart",
    language: "فارسی",
    eyebrow: "LUXURY GOLD COLLECTION",
    heroTitle: "Your radiance,",
    heroTitle2: "your signature.",
    heroDescription:
      "Discover beautifully crafted jewelry designed to make every moment unforgettable.",
    shopNow: "Explore Collection",
    collection: "OUR COLLECTION",
    productsTitle: "Featured Jewelry",
    productsDescription: "Beauty lives in the details.",
    search: "Search products...",
    all: "All",
    necklace: "Necklaces",
    ring: "Rings",
    bracelet: "Bracelets",
    add: "Add to Cart",
    empty: "No products found.",
    aboutEyebrow: "THE ART OF GOLD",
    aboutTitle: "Beauty Beyond Time",
    aboutDescription:
      "At GOLDEN, every piece tells a story of elegance, authenticity, and style. This is a sample jewelry store website.",
    footerText: "Designed with a love for beauty ✦",
    copyright: "© 2026 GOLDEN — Web Design Portfolio Project",
    emptyCart: "Your cart is empty.",
    added: "added to your cart."
  }
};

const productTranslations = {
  1: { en: { name: "Ava Gold Necklace", description: "Delicate minimalist design" } },
  2: { en: { name: "Classic Ring", description: "A choice for special moments" } },
  3: { en: { name: "Elegance Bracelet", description: "A blend of elegance and shine" } },
  4: { en: { name: "Minimal Necklace", description: "Beauty in simplicity" } },
  5: { en: { name: "Radiant Ring", description: "A distinctive, timeless look" } },
  6: { en: { name: "Golden Bracelet", description: "For everyday and formal styles" } }
};

let currentLanguage = localStorage.getItem("golden-language") || "fa";

function t(key) {
  return translations[currentLanguage][key];
}

function translatedProduct(product) {
  if (currentLanguage === "fa") return product;

  return {
    ...product,
    ...productTranslations[product.id].en,
    categoryName: t(product.category)
  };
}

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
 const languageButton = document.getElementById("languageToggle");

if (languageButton) {
  languageButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "fa" ? "en" : "fa";

    localStorage.setItem("golden-language", currentLanguage);

    applyLanguage();
  });
}
renderProducts();
