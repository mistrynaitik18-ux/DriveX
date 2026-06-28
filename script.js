/* ===================================================================
   DriveX — Luxury Car Dealership — script.js
   All interactivity: data rendering, filters, search, wishlist,
   inquiry cart, modal, booking, theme toggle, animations, etc.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* =================== DATA: CARS =================== */
  const CARS = [
    { id:1, name:"BMW 5 Series", category:"luxury", year:2024, engine:"3.0L Turbo I6", mileage:"5 mi", price:64900, rating:4.8, img:"https://www.topgear.com/car-reviews/bmw/5-series", badge:"New Arrival" },
    { id:2, name:"Mercedes-Benz C-Class", category:"luxury", year:2024, engine:"2.0L Turbo", mileage:"12 mi", price:58900, rating:4.7, img:"https://www.thecarexpert.co.uk/mercedes-benz-c-class-2014/", badge:"Featured" },
    { id:3, name:"Audi A6", category:"luxury", year:2023, engine:"2.0L TFSI", mileage:"1,200 mi", price:55200, rating:4.6, img:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:4, name:"Porsche 911 Carrera", category:"sports", year:2024, engine:"3.0L Twin-Turbo", mileage:"3 mi", price:118900, rating:5.0, img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", badge:"Track Ready" },
    { id:5, name:"Range Rover Autobiography", category:"suv", year:2024, engine:"4.4L V8", mileage:"8 mi", price:121500, rating:4.9, img:"https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80", badge:"Luxury SUV" },
    { id:6, name:"Tesla Model S Plaid", category:"electric", year:2024, engine:"Tri-Motor Electric", mileage:"15 mi", price:89900, rating:4.8, img:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80", badge:"Zero Emission" },
    { id:7, name:"Toyota Fortuner Legender", category:"suv", year:2023, engine:"2.8L Turbo Diesel", mileage:"4,500 mi", price:42300, rating:4.4, img:"https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:8, name:"Mercedes-Benz G-Wagon", category:"suv", year:2024, engine:"4.0L Biturbo V8", mileage:"6 mi", price:165900, rating:4.9, img:"https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=800&q=80", badge:"Icon" },
    { id:9, name:"BMW X5 M Competition", category:"suv", year:2024, engine:"4.4L V8 TwinPower", mileage:"10 mi", price:108700, rating:4.8, img:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:10, name:"Audi Q7 Quattro", category:"suv", year:2023, engine:"3.0L TFSI V6", mileage:"3,100 mi", price:69400, rating:4.5, img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:11, name:"Lamborghini Huracán", category:"sports", year:2024, engine:"5.2L V10", mileage:"2 mi", price:248900, rating:5.0, img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", badge:"Supercar" },
    { id:12, name:"Ferrari Roma", category:"sports", year:2024, engine:"3.9L Twin-Turbo V8", mileage:"5 mi", price:262500, rating:5.0, img:"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", badge:"Limited" },
    { id:13, name:"Tesla Model 3 Performance", category:"electric", year:2024, engine:"Dual Motor Electric", mileage:"20 mi", price:53900, rating:4.6, img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:14, name:"Mercedes-Benz EQS", category:"electric", year:2024, engine:"Single Motor Electric", mileage:"9 mi", price:104900, rating:4.7, img:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80", badge:"Electric Luxury" },
    { id:15, name:"BMW 3 Series Sedan", category:"sedan", year:2023, engine:"2.0L Turbo I4", mileage:"6,800 mi", price:44800, rating:4.4, img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:16, name:"Audi A4 Premium Plus", category:"sedan", year:2023, engine:"2.0L TFSI", mileage:"5,400 mi", price:41200, rating:4.3, img:"https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:17, name:"Mercedes-Benz E-Class", category:"sedan", year:2024, engine:"3.0L Turbo I6", mileage:"1,800 mi", price:67300, rating:4.7, img:"https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&w=800&q=80", badge:"" },
    { id:18, name:"Certified Pre-Owned BMW 7 Series", category:"used", year:2021, engine:"3.0L Turbo I6", mileage:"28,400 mi", price:48900, rating:4.3, img:"https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=800&q=80", badge:"Certified Used" },
    { id:19, name:"Certified Pre-Owned Audi A8", category:"used", year:2020, engine:"3.0L TFSI V6", mileage:"31,200 mi", price:39900, rating:4.1, img:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80", badge:"Premium Used" },
    { id:20, name:"Certified Pre-Owned Range Rover Sport", category:"used", year:2021, engine:"3.0L Supercharged V6", mileage:"24,600 mi", price:52400, rating:4.2, img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80", badge:"Premium Used" },
  ];

  /* =================== DATA: DEALS (subset) =================== */
  const DEALS = [
    { car: CARS[0], discount:"-12%", oldPrice:73700, finance:"From $899/mo · 60 months" },
    { car: CARS[5], discount:"-8%",  oldPrice:97700, finance:"From $1,299/mo · 48 months" },
    { car: CARS[17], discount:"-15%", oldPrice:57500, finance:"From $649/mo · 60 months" },
  ];

  /* =================== DATA: GALLERY =================== */
  const GALLERY = [
    { img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80", caption:"Track-bred performance" },
    { img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80", caption:"DriveX showroom floor" },
    { img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80", caption:"Mercedes-Benz lineup" },
    { img:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80", caption:"Audi precision design" },
    { img:"https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80", caption:"Premium cockpit detailing" },
    { img:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=80", caption:"BMW signature styling" },
    { img:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80", caption:"The open road experience" },
    { img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80", caption:"Supercar arrivals" },
    { img:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=80", caption:"Hand-stitched leather detail" },
    { img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80", caption:"Executive SUV lineup" },
    { img:"https://images.unsplash.com/photo-1567343483496-d04b73a86fa9?auto=format&fit=crop&w=900&q=80", caption:"Precision engineering" },
    { img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=900&q=80", caption:"Sedan elegance" },
  ];

  /* =================== DATA: REVIEWS =================== */
  const REVIEWS = [
    { name:"James Whitfield", role:"Verified Buyer · BMW X5", rating:5, photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", text:"The DriveX team made buying my X5 feel like a private viewing at a gallery. Transparent pricing, zero pressure, and the car was flawless." },
    { name:"Sophia Bennett", role:"Verified Buyer · Tesla Model S", rating:5, photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", text:"From the test drive to delivery, everything was seamless. Their concierge even handled my trade-in paperwork remotely. Five stars easily." },
    { name:"Daniel Okafor", role:"Verified Buyer · Porsche 911", rating:5, photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80", text:"I've bought from three luxury dealers before — none came close to DriveX's attention to detail and honest negotiation." },
    { name:"Olivia Martinez", role:"Verified Buyer · Range Rover", rating:4, photo:"https://images.unsplash.com/photo-1500648767791-00d5a4ee9bb3?auto=format&fit=crop&w=200&q=80", text:"Smooth financing process and the car was detailed to perfection. Only wish the showroom had more parking, otherwise flawless." },
    { name:"Marcus Lee", role:"Verified Buyer · Mercedes G-Wagon", rating:5, photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80", text:"Booked a test drive online in two minutes and was driving my dream G-Wagon the same week. Incredible service from start to finish." },
    { name:"Isabella Chen", role:"Verified Buyer · Audi Q7", rating:5, photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", text:"Their consultants actually listen. I told them my budget and lifestyle, and they matched me with the perfect SUV — no upselling games." },
  ];

  /* =================== DATA: TEAM =================== */
  const TEAM = [
    { name:"Richard Hale", role:"CEO & Founder", photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80", desc:"Founded DriveX with a vision to merge luxury hospitality with automotive retail." },
    { name:"Victoria Adams", role:"Sales Manager", photo:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80", desc:"Leads our sales floor with 12 years of premium automotive negotiation experience." },
    { name:"Ethan Brooks", role:"Senior Car Consultant", photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80", desc:"Helps clients find the perfect match between lifestyle, budget and dream vehicle." },
    { name:"Natalie Reyes", role:"Service Manager", photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80", desc:"Oversees our certified service center ensuring every vehicle meets showroom standards." },
  ];

  /* =================== DATA: SERVICES =================== */
  const SERVICES = [
    { icon:"fa-hand-holding-dollar", title:"Car Financing", desc:"Flexible financing plans tailored to your budget with competitive interest rates." },
    { icon:"fa-shield-halved", title:"Insurance Assistance", desc:"We partner with top insurers to get you covered before you drive off the lot." },
    { icon:"fa-screwdriver-wrench", title:"Car Servicing", desc:"Certified technicians keep your vehicle performing like the day you bought it." },
    { icon:"fa-arrow-right-arrow-left", title:"Trade-In Program", desc:"Get a fair, transparent valuation for your current vehicle in under 30 minutes." },
    { icon:"fa-file-shield", title:"Warranty Support", desc:"Extended warranty packages that protect your investment for years to come." },
    { icon:"fa-magnifying-glass", title:"Vehicle Inspection", desc:"150-point certified inspection on every vehicle before it reaches our showroom." },
  ];

  /* =================== DATA: FAQ =================== */
  const FAQS = [
    { q:"Do you provide financing options?", a:"Yes, DriveX partners with multiple banks and lenders to offer flexible financing plans starting from competitive rates, tailored to your credit profile and budget." },
    { q:"Can I book a test drive online?", a:"Absolutely. Use our Book Test Drive form to choose your preferred vehicle, date, time and showroom location — our team will confirm within 2 hours." },
    { q:"Do you sell certified used cars?", a:"Yes, every pre-owned vehicle passes our 150-point certified inspection and comes with a detailed history report and limited warranty." },
    { q:"What warranty options are available?", a:"We offer manufacturer warranties on new vehicles and extended protection plans up to 5 years on both new and certified pre-owned cars." },
    { q:"Do you provide vehicle servicing?", a:"Our in-house service center handles everything from routine maintenance to major repairs, using certified parts and factory-trained technicians." },
    { q:"Can I trade in my current vehicle?", a:"Yes, bring your vehicle in for a free appraisal or get an instant estimate online — trade-in value can be applied directly to your new purchase." },
    { q:"Do you ship vehicles outside the state?", a:"Yes, we offer nationwide and select international delivery with full insurance coverage during transit." },
    { q:"What documents do I need to purchase a car?", a:"You'll need a valid government ID, proof of income or financing pre-approval, and proof of insurance for new registrations." },
  ];

  const fmtPrice = (n) => '$' + n.toLocaleString('en-US');
  const catLabel = { luxury:"Luxury", sports:"Sports", suv:"SUV", electric:"Electric", sedan:"Sedan", used:"Premium Used" };

  /* =================== STATE =================== */
  let wishlist = [];
  let inquiryCart = [];

  /* =================== LOADER =================== */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 900);
  });
  // Fallback in case load event already fired
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 2500);

  /* =================== CUSTOM CURSOR =================== */
  const cursorDot = document.getElementById('cursorDot');
  const cursorOutline = document.getElementById('cursorOutline');
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .car-card, .filter-btn, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('grow'));
  });

  /* =================== SCROLL PROGRESS + NAVBAR + SCROLL TOP =================== */
  const progressBar = document.getElementById('scrollProgress');
  const navbar = document.getElementById('mainNavbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* =================== ACTIVE NAV LINK ON SCROLL =================== */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  /* =================== THEME TOGGLE =================== */
  const themeToggle = document.getElementById('themeToggle');
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  };
  setTheme('dark');
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  /* =================== TYPING ANIMATION =================== */
  const typingPhrases = ["Experience Luxury.", "Define Performance.", "Own The Extraordinary."];
  const typingEl = document.getElementById('typingText');
  let tpIndex = 0, tpChar = 0, tpDeleting = false;
  function typeLoop(){
    const phrase = typingPhrases[tpIndex];
    if (!tpDeleting){
      tpChar++;
      typingEl.textContent = phrase.slice(0, tpChar);
      if (tpChar === phrase.length){ tpDeleting = true; setTimeout(typeLoop, 1800); return; }
    } else {
      tpChar--;
      typingEl.textContent = phrase.slice(0, tpChar);
      if (tpChar === 0){ tpDeleting = false; tpIndex = (tpIndex + 1) % typingPhrases.length; }
    }
    setTimeout(typeLoop, tpDeleting ? 40 : 80);
  }
  typeLoop();

  /* =================== HERO PARTICLES =================== */
  const particleWrap = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++){
    const p = document.createElement('span');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-10px';
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    particleWrap.appendChild(p);
  }

  /* =================== COUNTER ANIMATION =================== */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = +el.getAttribute('data-count');
    let cur = 0;
    const step = Math.max(target / 60, 1);
    const tick = () => {
      cur += step;
      if (cur >= target){ el.textContent = target.toLocaleString(); return; }
      el.textContent = Math.floor(cur).toLocaleString();
      requestAnimationFrame(tick);
    };
    tick();
  };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){ animateCounter(entry.target); counterObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* =================== RIPPLE BUTTONS =================== */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ripple');
    if (!btn) return;
    const circle = document.createElement('span');
    circle.className = 'ripple-circle';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size/2) + 'px';
    circle.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  });

  /* =================== TOAST NOTIFICATION =================== */
  function showToast(message, icon = 'fa-circle-check'){
    const container = document.getElementById('toastContainer');
    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center border-0 show';
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body"><i class="fa-solid ${icon} accent me-2"></i>${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
    container.appendChild(toastEl);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3000 });
    bsToast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
  }

  /* =================== RENDER: CAR CARD HTML =================== */
  function starHTML(rating){
    let html = '';
    for (let i = 1; i <= 5; i++){
      html += `<i class="fa-${i <= Math.round(rating) ? 'solid' : 'regular'} fa-star"></i>`;
    }
    return html;
  }

  function carCardHTML(car){
    const isWished = wishlist.includes(car.id);
    return `
    <div class="col-lg-4 col-md-6 car-item" data-category="${car.category}" data-name="${car.name.toLowerCase()}" data-aos="fade-up">
      <div class="car-card">
        <div class="car-img-wrap">
          <img src="${car.img}" alt="${car.name}" loading="lazy">
          ${car.badge ? `<span class="car-badge">${car.badge}</span>` : ''}
          <div class="wishlist-icon ${isWished ? 'active' : ''}" data-wish="${car.id}"><i class="fa-${isWished ? 'solid' : 'regular'} fa-heart"></i></div>
        </div>
        <div class="car-body">
          <span class="car-cat">${catLabel[car.category]} · ${car.year}</span>
          <h4 class="car-title">${car.name}</h4>
          <div class="car-meta">
            <span><i class="fa-solid fa-gauge"></i>${car.mileage}</span>
            <span><i class="fa-solid fa-gas-pump"></i>${car.engine}</span>
          </div>
          <div class="car-rating">${starHTML(car.rating)} <span class="text-muted">(${car.rating})</span></div>
          <div class="car-price-row">
            <div class="car-price">${fmtPrice(car.price)}<br><small>Starting Price</small></div>
          </div>
          <div class="car-actions">
            <button class="btn btn-dark-gold ripple" data-view="${car.id}">View Details</button>
            <button class="btn btn-gold ripple" data-inquire="${car.id}">Book Test Drive</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  const carsGrid = document.getElementById('carsGrid');
  function renderCars(filter = 'all', search = ''){
    const filtered = CARS.filter(car => {
      const matchCat = filter === 'all' || car.category === filter;
      const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
    carsGrid.innerHTML = filtered.map(carCardHTML).join('');
    document.getElementById('noResults').style.display = filtered.length ? 'none' : 'block';
    if (window.AOS) AOS.refreshHard();
    bindCarCardEvents();
  }
  renderCars();

  /* =================== FILTER BAR =================== */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCars(btn.getAttribute('data-filter'));
    });
  });

  /* Footer category quick links */
  document.querySelectorAll('[data-cat-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-cat-link');
      document.querySelector(`.filter-btn[data-filter="${cat}"]`)?.click();
      document.getElementById('cars').scrollIntoView({ behavior:'smooth' });
    });
  });

  /* =================== CAR CARD EVENTS (view / wishlist / inquire) =================== */
  function bindCarCardEvents(){
    document.querySelectorAll('[data-wish]').forEach(el => {
      el.addEventListener('click', () => toggleWishlist(+el.getAttribute('data-wish')));
    });
    document.querySelectorAll('[data-view]').forEach(el => {
      el.addEventListener('click', () => openCarModal(+el.getAttribute('data-view')));
    });
    document.querySelectorAll('[data-inquire]').forEach(el => {
      el.addEventListener('click', () => addToInquiry(+el.getAttribute('data-inquire')));
    });
  }

  /* =================== WISHLIST =================== */
  function toggleWishlist(id){
    const car = CARS.find(c => c.id === id);
    const idx = wishlist.indexOf(id);
    if (idx > -1){ wishlist.splice(idx, 1); showToast(`${car.name} removed from wishlist`, 'fa-heart-crack'); }
    else { wishlist.push(id); showToast(`${car.name} added to wishlist`, 'fa-heart'); }
    document.getElementById('wishlistCount').textContent = wishlist.length;
    renderCars(document.querySelector('.filter-btn.active').getAttribute('data-filter'), document.getElementById('searchInput').value);
    renderWishlistDrawer();
  }

  function renderWishlistDrawer(){
    const wrap = document.getElementById('wishlistItems');
    if (!wishlist.length){ wrap.innerHTML = '<p class="text-muted">No vehicles saved yet.</p>'; return; }
    wrap.innerHTML = wishlist.map(id => {
      const car = CARS.find(c => c.id === id);
      return `<div class="drawer-item">
        <img src="${car.img}" alt="${car.name}">
        <div><h6>${car.name}</h6><p>${fmtPrice(car.price)}</p></div>
        <button class="remove-item" data-remove-wish="${car.id}"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    }).join('');
    wrap.querySelectorAll('[data-remove-wish]').forEach(btn => {
      btn.addEventListener('click', () => toggleWishlist(+btn.getAttribute('data-remove-wish')));
    });
  }

  /* =================== INQUIRY CART =================== */
  function addToInquiry(id){
    const car = CARS.find(c => c.id === id);
    if (!inquiryCart.includes(id)){
      inquiryCart.push(id);
      showToast(`${car.name} added to inquiry list`, 'fa-bag-shopping');
    } else {
      showToast(`${car.name} is already in your inquiry list`, 'fa-circle-info');
    }
    document.getElementById('cartCount').textContent = inquiryCart.length;
    renderCartDrawer();
    // pre-select in booking form
    const sel = document.getElementById('bCar');
    if (sel) sel.value = car.name;
  }

  function renderCartDrawer(){
    const wrap = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    if (!inquiryCart.length){ wrap.innerHTML = '<p class="text-muted">No vehicles added for inquiry.</p>'; footer.style.display = 'none'; return; }
    footer.style.display = 'block';
    wrap.innerHTML = inquiryCart.map(id => {
      const car = CARS.find(c => c.id === id);
      return `<div class="drawer-item">
        <img src="${car.img}" alt="${car.name}">
        <div><h6>${car.name}</h6><p>${fmtPrice(car.price)}</p></div>
        <button class="remove-item" data-remove-cart="${car.id}"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    }).join('');
    wrap.querySelectorAll('[data-remove-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        inquiryCart = inquiryCart.filter(id => id !== +btn.getAttribute('data-remove-cart'));
        document.getElementById('cartCount').textContent = inquiryCart.length;
        renderCartDrawer();
      });
    });
  }

  /* =================== CAR MODAL =================== */
  function openCarModal(id){
    const car = CARS.find(c => c.id === id);
    const isWished = wishlist.includes(car.id);
    document.getElementById('carModalContent').innerHTML = `
      <img src="${car.img}" class="modal-car-img" alt="${car.name}">
      <div class="modal-body-pad">
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
          <div>
            <span class="car-cat">${catLabel[car.category]} · ${car.year}</span>
            <h3 class="mb-1">${car.name}</h3>
            <div class="car-rating">${starHTML(car.rating)} <span class="text-muted">(${car.rating} / 5)</span></div>
          </div>
          <h3 class="accent mb-0">${fmtPrice(car.price)}</h3>
        </div>
        <hr>
        <div class="row g-3 mb-3">
          <div class="col-6"><i class="fa-solid fa-gas-pump accent me-2"></i>${car.engine}</div>
          <div class="col-6"><i class="fa-solid fa-gauge accent me-2"></i>${car.mileage}</div>
          <div class="col-6"><i class="fa-solid fa-calendar accent me-2"></i>Model Year ${car.year}</div>
          <div class="col-6"><i class="fa-solid fa-certificate accent me-2"></i>DriveX Certified</div>
        </div>
        <p class="section-text">This ${car.name} has passed our 150-point inspection and comes with full service history, DriveX certification, and a complimentary 30-day exchange guarantee.</p>
        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-outline-dark-gold btn-dark-gold ripple flex-fill" data-modal-wish="${car.id}"><i class="fa-${isWished?'solid':'regular'} fa-heart me-2"></i>${isWished ? 'Saved' : 'Save to Wishlist'}</button>
          <button class="btn btn-gold ripple flex-fill" data-modal-inquire="${car.id}" data-bs-dismiss="modal">Book Test Drive</button>
        </div>
      </div>`;
    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    modal.show();
    document.querySelector('[data-modal-wish]').addEventListener('click', () => { toggleWishlist(car.id); openCarModal(car.id); });
    document.querySelector('[data-modal-inquire]').addEventListener('click', () => {
      addToInquiry(car.id);
      document.getElementById('booking').scrollIntoView({ behavior:'smooth' });
    });
  }

  /* =================== SEARCH OVERLAY =================== */
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  document.getElementById('searchToggle').addEventListener('click', () => {
    searchOverlay.classList.add('show');
    setTimeout(() => searchInput.focus(), 200);
  });
  document.getElementById('searchClose').addEventListener('click', () => searchOverlay.classList.remove('show'));
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    const resultsWrap = document.getElementById('searchResults');
    if (!q){ resultsWrap.innerHTML = ''; return; }
    const matches = CARS.filter(c => c.name.toLowerCase().includes(q));
    resultsWrap.innerHTML = matches.length ? matches.map(c => `
      <div class="search-result-item" data-goto="${c.id}">
        <img src="${c.img}" alt="${c.name}">
        <div class="sr-info"><strong>${c.name}</strong><small>${fmtPrice(c.price)} · ${catLabel[c.category]}</small></div>
      </div>`).join('') : '<p class="text-muted">No vehicles found.</p>';
    resultsWrap.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', () => {
        searchOverlay.classList.remove('show');
        document.getElementById('cars').scrollIntoView({ behavior:'smooth' });
        setTimeout(() => openCarModal(+el.getAttribute('data-goto')), 500);
      });
    });
  });

  /* Also filter main grid live while overlay closed via nav search icon used as quick filter */
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter'){
      renderCars('all', searchInput.value);
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
      searchOverlay.classList.remove('show');
      document.getElementById('cars').scrollIntoView({ behavior:'smooth' });
    }
  });

  /* =================== DRAWERS (wishlist / cart) =================== */
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  function openDrawer(drawer){
    drawer.classList.add('open');
    drawerBackdrop.classList.add('show');
  }
  function closeDrawers(){
    wishlistDrawer.classList.remove('open');
    cartDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('show');
  }
  document.getElementById('wishlistToggle').addEventListener('click', () => { renderWishlistDrawer(); openDrawer(wishlistDrawer); });
  document.getElementById('cartToggle').addEventListener('click', () => { renderCartDrawer(); openDrawer(cartDrawer); });
  drawerBackdrop.addEventListener('click', closeDrawers);
  document.querySelectorAll('[data-close-drawer]').forEach(btn => btn.addEventListener('click', closeDrawers));

  /* =================== RENDER: DEALS =================== */
  const dealsGrid = document.getElementById('dealsGrid');
  dealsGrid.innerHTML = DEALS.map(d => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up">
      <div class="deal-card">
        <span class="deal-discount">${d.discount}</span>
        <div class="deal-img"><img src="${d.car.img}" alt="${d.car.name}" loading="lazy"></div>
        <div class="deal-body">
          <span class="car-cat">${catLabel[d.car.category]} · ${d.car.year}</span>
          <h4 class="car-title">${d.car.name}</h4>
          <div class="deal-finance"><i class="fa-solid fa-credit-card"></i>${d.finance}</div>
          <div class="d-flex align-items-baseline mb-3">
            <span class="price-old">${fmtPrice(d.oldPrice)}</span>
            <span class="price-new">${fmtPrice(d.car.price)}</span>
          </div>
          <button class="btn btn-gold ripple w-100" data-view="${d.car.id}">View Deal</button>
        </div>
      </div>
    </div>`).join('');
  dealsGrid.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => openCarModal(+el.getAttribute('data-view'))));

  /* =================== RENDER: GALLERY =================== */
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = GALLERY.map((g, i) => `
    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="${(i % 4) * 80}" data-img="${g.img}">
      <img src="${g.img}" alt="${g.caption}" loading="lazy">
      <div class="gallery-overlay"><span>${g.caption}</span></div>
    </div>`).join('');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.getAttribute('data-img');
      lightbox.classList.add('show');
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('show'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('show'); });

  /* =================== RENDER: REVIEWS =================== */
  const reviewsGrid = document.getElementById('reviewsGrid');
  reviewsGrid.innerHTML = REVIEWS.map(r => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up">
      <div class="review-card">
        <i class="fa-solid fa-quote-right"></i>
        <div class="review-head">
          <img src="${r.photo}" alt="${r.name}">
          <div>
            <h5>${r.name}</h5>
            <div class="stars">${starHTML(r.rating)}</div>
          </div>
        </div>
        <p class="review-text">${r.text}</p>
        <small class="text-muted">${r.role}</small>
      </div>
    </div>`).join('');

  /* =================== RENDER: TEAM =================== */
  const teamGrid = document.getElementById('teamGrid');
  teamGrid.innerHTML = TEAM.map(t => `
    <div class="col-lg-3 col-md-6" data-aos="fade-up">
      <div class="team-card">
        <div class="team-img">
          <img src="${t.photo}" alt="${t.name}" loading="lazy">
          <div class="team-social">
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div class="team-info">
          <h4>${t.name}</h4>
          <span class="role">${t.role}</span>
          <p>${t.desc}</p>
        </div>
      </div>
    </div>`).join('');

  /* =================== RENDER: SERVICES =================== */
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = SERVICES.map(s => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up">
      <div class="service-card">
        <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    </div>`).join('');

  /* =================== RENDER: FAQ =================== */
  const faqAccordion = document.getElementById('faqAccordion');
  faqAccordion.innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item" data-aos="fade-up">
      <h2 class="accordion-header">
        <button class="accordion-button ${i !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">
          ${f.q}
        </button>
      </h2>
      <div id="faq${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
        <div class="accordion-body">${f.a}</div>
      </div>
    </div>`).join('');

  /* =================== BOOKING FORM: populate car select =================== */
  const bCarSelect = document.getElementById('bCar');
  bCarSelect.innerHTML += CARS.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Test drive request received! Our concierge will confirm shortly.', 'fa-key');
    e.target.reset();
    inquiryCart = [];
    document.getElementById('cartCount').textContent = 0;
    renderCartDrawer();
  });

  /* =================== NEWSLETTER FORM =================== */
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Subscribed! Watch your inbox for exclusive DriveX offers.', 'fa-envelope-circle-check');
    e.target.reset();
  });

  /* =================== FOOTER YEAR =================== */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* =================== AOS INIT =================== */
  AOS.init({ duration: 800, once: true, offset: 80 });

  /* Set default date min for booking */
  const dateInput = document.getElementById('bDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

});
