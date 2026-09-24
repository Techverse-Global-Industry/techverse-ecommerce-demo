"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  sku: string;
  price: string;
  unit: string;
  stock: string;
  badge: string;
  tone: string;
  mark: string;
};

const categories = [
  "All products",
  "Electronics",
  "Home & kitchen",
  "Office",
  "Power & solar",
  "Personal care",
];
const products: Product[] = [
  {
    name: 'Nova 43" Smart TV',
    category: "Electronics",
    sku: "TV-NV43-24",
    price: "₦285,000",
    unit: "per unit",
    stock: "In stock",
    badge: "Fast mover",
    tone: "product-cobalt",
    mark: "NOVA",
  },
  {
    name: "Breeze 1.5HP Inverter AC",
    category: "Home & kitchen",
    sku: "AC-BR15-IV",
    price: "₦410,000",
    unit: "per unit",
    stock: "In stock",
    badge: "-12% this week",
    tone: "product-mint",
    mark: "B",
  },
  {
    name: "VoltPro 3.5kVA Generator",
    category: "Power & solar",
    sku: "GP-VP35-02",
    price: "₦620,000",
    unit: "per unit",
    stock: "Low stock",
    badge: "Wholesale ready",
    tone: "product-orange",
    mark: "VP",
  },
  {
    name: "ClickType Wireless Keyboard",
    category: "Office",
    sku: "KB-CTWK-11",
    price: "₦18,500",
    unit: "per unit",
    stock: "In stock",
    badge: "Top rated",
    tone: "product-lilac",
    mark: "CT",
  },
  {
    name: "CleanWave Air Fryer 6L",
    category: "Home & kitchen",
    sku: "AF-CW06-91",
    price: "₦72,000",
    unit: "per unit",
    stock: "In stock",
    badge: "New arrival",
    tone: "product-sand",
    mark: "CW",
  },
  {
    name: "PureGlow Rechargeable Fan",
    category: "Personal care",
    sku: "FN-PG18-31",
    price: "₦39,900",
    unit: "per unit",
    stock: "In stock",
    badge: "Bundle deal",
    tone: "product-rose",
    mark: "PG",
  },
];
const workflow = [
  "Quote requested",
  "Quote prepared",
  "Customer approved",
  "Order confirmed",
  "Processing",
  "Ready",
  "Delivered",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [businessMode, setBusinessMode] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [notice, setNotice] = useState("");
  const visibleProducts = useMemo(
    () =>
      products.filter((product) => {
        const categoryMatch =
          activeCategory === "All products" ||
          product.category === activeCategory;
        const queryMatch =
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.sku.toLowerCase().includes(query.toLowerCase());
        return categoryMatch && queryMatch;
      }),
    [activeCategory, query],
  );
  const addToCart = (productName: string) => {
    setCartCount((count) => count + 1);
    setNotice(
      `${productName} added to ${businessMode ? "quote request" : "cart"}`,
    );
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <main>
      <section className="market-hero">
        <div className="section-shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> TechVerse Commerce
            </div>
            <h1>
              Source smarter.
              <br />
              <span>Move more.</span>
            </h1>
            <p>
              One trusted marketplace for the products your shelves, stores and
              customers need next.
            </p>
            <div className="hero-actions">
              <a href="#catalogue" className="btn btn-dark">
                Shop the catalogue <span>↘</span>
              </a>
              <button
                className="btn btn-ghost-dark"
                onClick={() => setBusinessMode(true)}
              >
                Open B2B desk
              </button>
            </div>
            <div className="hero-proof">
              <span>●</span> Serving 2,400+ businesses across Nigeria
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="TechVerse product collection preview"
          >
            <div className="art-tag">
              TRENDING NOW <span>↗</span>
            </div>
            <div className="art-sun" />
            <div className="art-product art-tv">
              <div className="art-screen">NOVA</div>
              <div className="art-stand" />
            </div>
            <div className="art-product art-fan">
              <div className="fan-ring">
                <span>✦</span>
              </div>
              <div className="fan-neck" />
              <div className="fan-base" />
            </div>
            <div className="art-product art-box">
              <strong>V</strong>
              <small>
                VOLT
                <br />
                PRO
              </small>
            </div>
            <div className="art-note">
              <strong>43&quot; Smart TV</strong>
              <span>From ₦285,000</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell trust-strip">
        <div>
          <strong>Fast fulfilment</strong>
          <span>Reliable delivery windows</span>
        </div>
        <div>
          <strong>Verified suppliers</strong>
          <span>Quality you can count on</span>
        </div>
        <div>
          <strong>Flexible buying</strong>
          <span>Retail, bulk or quote</span>
        </div>
        <div>
          <strong>Human support</strong>
          <span>Real people, real answers</span>
        </div>
      </section>
      <section id="catalogue" className="section-shell catalogue-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow orange">Curated for commerce</div>
            <h2>Find your next best seller</h2>
          </div>
          <a href="#catalogue" className="text-link">
            View all products <span>→</span>
          </a>
        </div>
        <div className="catalogue-tools">
          <div className="search-box">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, SKU or category"
              aria-label="Search catalogue"
            />
          </div>
          <div
            className="category-list"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "category active" : "category"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.sku}>
              <div className={`product-visual ${product.tone}`}>
                <span className="product-badge">{product.badge}</span>
                <strong>{product.mark}</strong>
                <span className="product-shine" />
              </div>
              <div className="product-info">
                <div className="product-category">
                  {product.category} <span>·</span> {product.sku}
                </div>
                <h3>{product.name}</h3>
                <div className="product-bottom">
                  <div>
                    <strong>{product.price}</strong>
                    <small>{product.unit}</small>
                  </div>
                  <button
                    className="icon-button"
                    onClick={() => addToCart(product.name)}
                    aria-label={`Add ${product.name} to ${businessMode ? "quote request" : "cart"}`}
                  >
                    ＋
                  </button>
                </div>
                <div
                  className={
                    product.stock === "Low stock" ? "stock low" : "stock"
                  }
                >
                  <span /> {product.stock}
                </div>
              </div>
            </article>
          ))}
        </div>
        {visibleProducts.length === 0 && (
          <div className="empty-state">
            No products match that search yet. Try another SKU or category.
          </div>
        )}
      </section>
      <section id="b2b" className="section-shell b2b-section">
        <div className="b2b-copy">
          <div className="eyebrow light">For serious buying</div>
          <h2>
            More volume.
            <br />
            <span>Better terms.</span>
          </h2>
          <p>
            Switch to B2B mode when you are buying for a store, project or
            distribution network.
          </p>
          <button
            className="btn btn-orange"
            onClick={() => setBusinessMode((mode) => !mode)}
          >
            {businessMode ? "B2B mode active" : "Switch to B2B mode"}{" "}
            <span>↗</span>
          </button>
        </div>
        <div className="b2b-features">
          <div>
            <span className="feature-number">01</span>
            <strong>Request a quote</strong>
            <p>Set quantities and get supplier pricing before you commit.</p>
          </div>
          <div>
            <span className="feature-number">02</span>
            <strong>Upload documents</strong>
            <p>Keep purchase orders and delivery notes together.</p>
          </div>
          <div>
            <span className="feature-number">03</span>
            <strong>Track every order</strong>
            <p>Know exactly what is being prepared, packed and delivered.</p>
          </div>
        </div>
      </section>
      <section className="section-shell operations-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow orange">Operations pulse</div>
            <h2>Your business, at a glance</h2>
          </div>
          <a href="/operations" className="text-link">
            Open operations <span>→</span>
          </a>
        </div>
        <div className="operations-grid">
          <div className="ops-main">
            <div className="ops-top">
              <span>Order workflow</span>
              <span className="live-dot">Live demo</span>
            </div>
            <div className="workflow">
              {workflow.map((stage, index) => (
                <div
                  className={
                    index < 4 ? "workflow-step complete" : "workflow-step"
                  }
                  key={stage}
                >
                  <span>{index < 4 ? "✓" : index + 1}</span>
                  <small>{stage}</small>
                </div>
              ))}
            </div>
            <div className="ops-order">
              <div>
                <span className="order-label">Latest order</span>
                <strong>#TV-28491 · BrightMart Superstore</strong>
              </div>
              <span className="status-pill">Processing</span>
            </div>
          </div>
          <div className="ops-kpis">
            <div>
              <span>Orders today</span>
              <strong>48</strong>
              <small>↑ 18% vs yesterday</small>
            </div>
            <div>
              <span>Pending quotes</span>
              <strong>12</strong>
              <small>4 need attention</small>
            </div>
            <div>
              <span>Ready for delivery</span>
              <strong>23</strong>
              <small>Across 3 hubs</small>
            </div>
            <div>
              <span>Revenue demo</span>
              <strong>₦8.4m</strong>
              <small>March to date</small>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell inventory-section">
        <div className="inventory-heading">
          <div>
            <div className="eyebrow orange">Stock control</div>
            <h2>Inventory that keeps up</h2>
          </div>
          <span className="inventory-updated">
            Updated just now · Demo data
          </span>
        </div>
        <div className="inventory-table">
          <div className="table-row table-header">
            <span>Product / SKU</span>
            <span>Category</span>
            <span>Stock</span>
            <span>Reorder level</span>
            <span>Status</span>
          </div>
          {products.slice(0, 4).map((product, index) => (
            <div className="table-row" key={product.sku}>
              <span>
                <strong>{product.name}</strong>
                <small>{product.sku}</small>
              </span>
              <span>{product.category}</span>
              <span>{[184, 62, 18, 240][index]} units</span>
              <span>{[50, 30, 25, 70][index]} units</span>
              <span
                className={
                  index === 2 ? "table-status warning" : "table-status"
                }
              >
                {index === 2 ? "Reorder soon" : "Healthy"}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="section-shell contact-band">
        <div>
          <div className="eyebrow">Need a hand?</div>
          <h2>Let&apos;s move your next order.</h2>
          <p>
            Talk to a TechVerse commerce specialist about sourcing, delivery or
            a custom supply plan.
          </p>
        </div>
        <a className="btn btn-dark" href="mailto:hello@techverse.demo">
          Contact the team <span>↗</span>
        </a>
      </section>
      {notice && (
        <div className="toast" role="status">
          ✓ {notice}
        </div>
      )}
      <button
        className="floating-cart"
        onClick={() =>
          setNotice(
            `${cartCount} items in your ${businessMode ? "quote request" : "cart"}`,
          )
        }
        aria-label="Open cart"
      >
        {businessMode ? "Quote" : "Cart"}
        <span>{cartCount}</span>
      </button>
    </main>
  );
}
