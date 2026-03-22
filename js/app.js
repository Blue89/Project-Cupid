/* =============================================================
   Lunch Cupid — app.js
   ============================================================= */

'use strict';

// ---------------------------------------------------------------------------
// 1.  MENU OPTIONS  (expanded to 160+ items)
// ---------------------------------------------------------------------------
const lunchOptions = [
  // — Pizza & Italian —
  { display: "🍕 Pizza Slice", search: "Pizza" },
  { display: "🍕 Pepperoni Pizza", search: "Pepperoni Pizza" },
  { display: "🍕 Margherita Pizza", search: "Margherita Pizza" },
  { display: "🍝 Linguine Alfredo", search: "Linguine Alfredo" },
  { display: "🍝 Vodka Sauce Rigatoni", search: "Vodka Sauce Rigatoni" },
  { display: "🍝 Tagliatelle Bolognese", search: "Tagliatelle Bolognese" },
  { display: "🍝 Spaghetti & Meatballs", search: "Spaghetti Meatballs" },
  { display: "🧀 Chicken Parm", search: "Chicken Parm" },
  { display: "🥖 Chicken Parm Sandwich", search: "Chicken Parm Sandwich" },
  { display: "🥖 Meatball Sub", search: "Meatball Sub" },
  { display: "🥖 Italian Sub", search: "Italian Sub" },

  // — Burgers & American Fast Food —
  { display: "🍔 Cheeseburger", search: "Cheeseburger" },
  { display: "🍔 Double Smash Burger", search: "Smash Burger" },
  { display: "🍔 McDonald's", search: "McDonald's" },
  { display: "🍔 Chick-fil-A", search: "Chick-fil-A" },
  { display: "🍔 Wendy's", search: "Wendy's" },
  { display: "🍔 Burger King", search: "Burger King" },
  { display: "🍔 Shake Shack", search: "Shake Shack" },
  { display: "🍔 Five Guys", search: "Five Guys" },
  { display: "🍔 In-N-Out Burger", search: "In-N-Out Burger" },
  { display: "🍔 Whataburger", search: "Whataburger" },
  { display: "🍔 Smashburger", search: "Smashburger" },
  { display: "🌮 Taco Bell", search: "Taco Bell" },

  // — Chicken —
  { display: "🍗 Fried Chicken Sandwich", search: "Fried Chicken Sandwich" },
  { display: "🍗 Nashville Hot Chicken", search: "Nashville Hot Chicken" },
  { display: "🍗 Chicken Wings", search: "Chicken Wings" },
  { display: "🍗 Chicken Tenders & Fries", search: "Chicken Tenders" },
  { display: "🍗 Popeyes Fried Chicken", search: "Popeyes" },
  { display: "🍗 Buffalo Chicken Sandwich", search: "Buffalo Chicken Sandwich" },
  { display: "🍗 Rotisserie Chicken", search: "Rotisserie Chicken" },
  { display: "🍗 Chicken Pot Pie", search: "Chicken Pot Pie" },

  // — Dogs, Subs & Sandwiches —
  { display: "🌭 Hot Dogs", search: "Hot Dogs" },
  { display: "🥖 Philly Cheesesteak", search: "Philly Cheesesteak" },
  { display: "🥖 BBQ Pulled Pork Sandwich", search: "Pulled Pork Sandwich" },
  { display: "🥖 Sloppy Joe", search: "Sloppy Joe" },
  { display: "🥖 Turkey Club", search: "Turkey Club" },
  { display: "🥖 BLT Sandwich", search: "BLT Sandwich" },
  { display: "🥖 Tuna Salad Sandwich", search: "Tuna Salad Sandwich" },
  { display: "🥖 Roast Beef & Swiss", search: "Roast Beef Swiss Sandwich" },
  { display: "🥖 Ham & Cheese Sandwich", search: "Ham and Cheese Sandwich" },
  { display: "🥖 Egg Salad Sandwich", search: "Egg Salad Sandwich" },
  { display: "🧀 Grilled Cheese Sandwich", search: "Grilled Cheese" },
  { display: "🥖 Reuben Sandwich", search: "Reuben" },
  { display: "🥖 French Dip Sandwich", search: "French Dip" },
  { display: "🥖 Caprese Panini", search: "Caprese Panini" },
  { display: "🥖 Smoked Salmon Bagel", search: "Smoked Salmon Bagel" },
  { display: "🥖 Cuban Sandwich", search: "Cuban Sandwich" },
  { display: "🥖 Prosciutto & Fig Panini", search: "Prosciutto Fig Panini" },
  { display: "🥖 Chicken Caesar Wrap", search: "Chicken Caesar Wrap" },
  { display: "🌯 Buffalo Chicken Wrap", search: "Buffalo Chicken Wrap" },
  { display: "🥖 Banh Mi", search: "Banh Mi" },
  { display: "🥖 California Club Sandwich", search: "California Club Sandwich" },
  { display: "🥖 Spicy Tuna Melt", search: "Tuna Melt" },
  { display: "🥖 Subway", search: "Subway" },

  // — Bowls & Healthy —
  { display: "🥑 Avocado Toast with Fried Egg", search: "Avocado Toast" },
  { display: "🍱 Burrito Bowl", search: "Burrito Bowl" },
  { display: "🍱 Poke Bowl", search: "Poke Bowl" },
  { display: "🍱 Teriyaki Chicken Bowl", search: "Teriyaki Chicken Bowl" },
  { display: "🍱 Korean Beef Bowl", search: "Korean Beef Bowl" },
  { display: "🍱 Grain Bowl", search: "Grain Bowl" },
  { display: "🍱 Mediterranean Bowl", search: "Mediterranean Bowl" },
  { display: "🍱 Protein Bowl", search: "Protein Bowl" },
  { display: "🥗 Açaí Bowl", search: "Acai Bowl" },
  { display: "🥗 Smoothie Bowl", search: "Smoothie Bowl" },
  { display: "🥗 Kale Salad", search: "Kale Salad" },
  { display: "🥗 Sweetgreen", search: "Sweetgreen" },
  { display: "🍱 Chipotle", search: "Chipotle" },
  { display: "🍱 Cava", search: "Cava" },

  // — Salads —
  { display: "🥗 Caesar Salad with Grilled Chicken", search: "Caesar Salad" },
  { display: "🥗 Cobb Salad", search: "Cobb Salad" },
  { display: "🥗 Greek Salad", search: "Greek Salad" },
  { display: "🥗 Caprese Salad", search: "Caprese Salad" },
  { display: "🥗 Asian Chicken Salad", search: "Asian Chicken Salad" },
  { display: "🥗 Tuna Niçoise Salad", search: "Tuna Nicoise Salad" },
  { display: "🥗 Quinoa Salad", search: "Quinoa Salad" },
  { display: "🥗 Spinach & Goat Cheese Salad", search: "Spinach Salad" },
  { display: "🥗 Beet & Goat Cheese Salad", search: "Beet Goat Cheese Salad" },

  // — American Comfort Food —
  { display: "🧀 Macaroni & Cheese", search: "Macaroni and Cheese" },
  { display: "🍲 Chili", search: "Chili con Carne" },
  { display: "🍲 Clam Chowder", search: "Clam Chowder" },
  { display: "🍲 New England Clam Chowder", search: "New England Clam Chowder" },
  { display: "🥩 Meatloaf & Mashed Potatoes", search: "Meatloaf" },
  { display: "🥩 Pot Roast", search: "Pot Roast" },
  { display: "🐟 Fish & Chips", search: "Fish and Chips" },
  { display: "🥚 Chicken & Waffles", search: "Chicken and Waffles" },
  { display: "🍖 BBQ Baby Back Ribs", search: "BBQ Ribs" },
  { display: "🥩 Texas BBQ Brisket", search: "BBQ Brisket" },
  { display: "🌽 Corn Dog", search: "Corn Dog" },
  { display: "🥘 Chicken & Rice Casserole", search: "Chicken Rice Casserole" },
  { display: "🍟 Loaded Cheese Fries", search: "Cheese Fries" },
  { display: "🍲 Beef Stew", search: "Beef Stew" },
  { display: "🥘 Chicken Noodle Soup", search: "Chicken Noodle Soup" },
  { display: "🥧 Pot Roast Sandwich", search: "Pot Roast Sandwich" },
  { display: "🦞 Lobster Roll", search: "Lobster Roll" },
  { display: "🦐 Shrimp Po' Boy", search: "Shrimp Po Boy" },

  // — Breakfast for Lunch —
  { display: "🍳 Eggs Benedict", search: "Eggs Benedict" },
  { display: "🥞 Pancakes", search: "Pancakes" },
  { display: "🌯 Breakfast Burrito", search: "Breakfast Burrito" },
  { display: "🥓 Bacon Egg & Cheese Bagel", search: "Bacon Egg Cheese Bagel" },
  { display: "🥚 Avocado Eggs", search: "Baked Eggs Avocado" },

  // — Chain Restaurants —
  { display: "🍜 Panda Express", search: "Panda Express" },
  { display: "🍝 Olive Garden", search: "Olive Garden" },
  { display: "🍽️ Applebee's", search: "Applebee's" },
  { display: "🥗 Panera Bread", search: "Panera Bread" },
  { display: "🍔 The Cheesecake Factory", search: "Cheesecake Factory" },
  { display: "🍖 Outback Steakhouse", search: "Outback Steakhouse" },
  { display: "🍗 Wingstop", search: "Wingstop" },
  { display: "🐟 Red Lobster", search: "Red Lobster" },
  { display: "🍜 Noodles & Company", search: "Noodles and Company" },

  // — Mexican & Tex-Mex —
  { display: "🌮 Tacos", search: "Tacos" },
  { display: "🌮 Carne Asada Tacos", search: "Carne Asada Tacos" },
  { display: "🌮 Fish Tacos", search: "Fish Tacos" },
  { display: "🌯 Burrito", search: "Burrito" },
  { display: "🌯 Quesadilla", search: "Quesadilla" },
  { display: "🧀 Loaded Nachos", search: "Loaded Nachos" },
  { display: "🫔 Empanadas", search: "Empanadas" },

  // — Japanese —
  { display: "🍣 Sushi (Nigiri)", search: "Sushi" },
  { display: "🍣 California Roll", search: "California Roll" },
  { display: "🍣 Spicy Tuna Roll", search: "Spicy Tuna Roll" },
  { display: "🍣 Volcano Roll", search: "Volcano Roll" },
  { display: "🍜 Tonkotsu Ramen", search: "Tonkotsu Ramen" },
  { display: "🍜 Miso Ramen", search: "Miso Ramen" },
  { display: "🍜 Shoyu Ramen", search: "Shoyu Ramen" },
  { display: "🍜 Udon Noodles", search: "Udon Noodles" },
  { display: "🍜 Soba Noodles", search: "Soba Noodles" },
  { display: "🍱 Chicken Katsu", search: "Chicken Katsu" },
  { display: "🍱 Donkatsu", search: "Donkatsu" },
  { display: "🍱 Teriyaki Bento", search: "Teriyaki Bento" },

  // — Korean —
  { display: "🍲 Korean Hangover Soup", search: "Korean Hangover Soup" },
  { display: "🍳 Bibimbap", search: "Bibimbap" },
  { display: "🥩 Bulgogi", search: "Bulgogi" },
  { display: "🥩 Korean BBQ", search: "Korean BBQ" },
  { display: "🥘 Sundubu Jjigae (Soft Tofu Stew)", search: "Sundubu Jjigae" },

  // — Chinese —
  { display: "🥡 Chinese Takeout", search: "Chinese Food" },
  { display: "🍚 Beef Fried Rice", search: "Beef Fried Rice" },
  { display: "🍚 Shrimp Fried Rice", search: "Shrimp Fried Rice" },
  { display: "🍜 Lo Mein Noodles", search: "Lo Mein" },
  { display: "🥡 General Tso's Chicken", search: "General Tso's Chicken" },
  { display: "🥡 Dim Sum", search: "Dim Sum" },
  { display: "🥢 Kung Pao Chicken", search: "Kung Pao Chicken" },
  { display: "🥢 Mongolian Beef", search: "Mongolian Beef" },
  { display: "🥡 Orange Chicken", search: "Orange Chicken" },

  // — Thai & SE Asian —
  { display: "🍜 Pad Thai", search: "Pad Thai" },
  { display: "🍜 Pad See Ew", search: "Pad See Ew" },
  { display: "🥥 Thai Green Curry", search: "Thai Green Curry" },
  { display: "🥥 Thai Red Curry", search: "Thai Red Curry" },
  { display: "🍲 Tom Yum Soup", search: "Tom Yum Soup" },
  { display: "🍲 Pho", search: "Pho" },

  // — Indian —
  { display: "🍛 Chicken Tikka Masala", search: "Chicken Tikka Masala" },
  { display: "🍛 Murgh Makhani (Butter Chicken)", search: "Butter Chicken" },
  { display: "🍛 Chana Masala", search: "Chana Masala" },
  { display: "🍛 Saag Paneer", search: "Saag Paneer" },
  { display: "🍛 Biryani", search: "Biryani" },
  { display: "🫓 Naan & Curry", search: "Naan Curry" },

  // — Mediterranean & Middle Eastern —
  { display: "🥙 Gyro", search: "Gyro" },
  { display: "🥙 Chicken Shawarma", search: "Chicken Shawarma" },
  { display: "🧆 Falafel Platter", search: "Falafel" },
  { display: "🫓 Hummus with Pita", search: "Hummus" },
  { display: "🥙 Kofta Kebab", search: "Kofta Kebab" },
  { display: "🥙 Falafel Wrap", search: "Falafel Wrap" },

  // — Latin / South American —
  { display: "🫔 Arepas", search: "Arepas" },
  { display: "🍋 Ceviche", search: "Ceviche" },
  { display: "🍗 Pollo a la Brasa", search: "Peruvian Chicken" },
  { display: "🌯 Colombian Bowl", search: "Colombian Food" },

  // — Soup & Combo —
  { display: "🥣 Sandwich & Soup Combo", search: "Sandwich Soup Combo" },
  { display: "🥣 French Onion Soup", search: "French Onion Soup" },
  { display: "🥣 Tomato Bisque", search: "Tomato Bisque" },
];

// ---------------------------------------------------------------------------
// 2.  DOM REFS
// ---------------------------------------------------------------------------
const reelStrip    = document.getElementById('reel-strip');
const reelsEl      = document.getElementById('reels');
const spinButton   = document.getElementById('spinButton');
const findButton   = document.getElementById('findButton');
const shareButton  = document.getElementById('shareButton');
const amazonButton = document.getElementById('amazonButton');
const emailForm    = document.getElementById('email-form');
const formContent  = document.getElementById('form-content');
const successMsg   = document.getElementById('success-message');
const historyList  = document.getElementById('historyList');
const surpriseToggle = document.getElementById('surpriseToggle');

// ---------------------------------------------------------------------------
// 3.  STATE
// ---------------------------------------------------------------------------
let currentChoice    = null;
let spinHistory      = [];
let surpriseInterval = null;
let isSpinning       = false;

// ---------------------------------------------------------------------------
// 4.  HELPERS
// ---------------------------------------------------------------------------
function getRandomLunchOption() {
  return lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
}

function updateHistory(item) {
  // Keep last 5
  spinHistory.unshift(item.display);
  if (spinHistory.length > 5) spinHistory.pop();

  historyList.innerHTML = spinHistory
    .map((name, i) => `<li${i === 0 ? ' aria-current="true"' : ''}>${name}</li>`)
    .join('');
}

// Safe gtag wrapper (won't throw if GA not loaded)
function track(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// ---------------------------------------------------------------------------
// 5.  SPINNER
// ---------------------------------------------------------------------------
function startSpinning() {
  if (isSpinning) return;
  isSpinning = true;

  track('spin_button_click', { event_category: 'Spinner' });

  spinButton.disabled = true;
  spinButton.textContent = 'Spinning…';
  findButton.classList.remove('visible');
  reelStrip.innerHTML = '';
  reelsEl.classList.add('is-spinning');

  const ITEM_H    = 40;
  const SPIN_COUNT = 60;
  const WINNER_IDX = SPIN_COUNT - 5;

  currentChoice = getRandomLunchOption();

  let html = '';
  for (let i = 0; i < SPIN_COUNT; i++) {
    const item  = (i === WINNER_IDX) ? currentChoice : getRandomLunchOption();
    const color = (i === WINNER_IDX) ? '#111827' : '#374151';
    html += `<div class="reel-cell" style="color:${color}">${item.display}</div>`;
  }
  reelStrip.innerHTML = html;

  // Reset position (no transition)
  reelStrip.style.transition = 'none';
  reelStrip.style.transform  = 'translateY(0)';
  void reelStrip.offsetWidth; // force reflow

  // Animate to winner
  reelStrip.style.transition = 'transform 3.5s cubic-bezier(0.23, 1, 0.32, 1)';
  const finalY = WINNER_IDX * ITEM_H - 3 * ITEM_H;
  reelStrip.style.transform  = `translateY(-${finalY}px)`;

  setTimeout(stopSpinning, 3500);
}

function stopSpinning() {
  isSpinning = false;
  reelsEl.classList.remove('is-spinning');

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentChoice.search + ' near me')}`;
  findButton.textContent = `Find ${currentChoice.search} Near Me`;
  findButton.href        = mapsUrl;
  findButton.classList.add('visible');

  spinButton.disabled    = false;
  spinButton.textContent = 'Spin Again!';

  updateHistory(currentChoice);
}

// ---------------------------------------------------------------------------
// 6.  EVENT LISTENERS
// ---------------------------------------------------------------------------

// Spin button
spinButton.addEventListener('click', startSpinning);

// Spacebar shortcut
document.addEventListener('keydown', (e) => {
  // Don't fire when typing in a form field
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
  if (e.code === 'Space') {
    e.preventDefault();
    startSpinning();
  }
});

// Find Near Me
findButton.addEventListener('click', () => {
  if (currentChoice) {
    track('find_near_me_click', {
      event_category: 'Engagement',
      event_label: currentChoice.search,
    });
  }
});

// Amazon button
if (amazonButton) {
  amazonButton.addEventListener('click', () => {
    track('amazon_affiliate_click', { event_category: 'Affiliate', event_label: 'Amazon' });
  });
}

// Surprise Me toggle (auto-spin every 10s)
if (surpriseToggle) {
  surpriseToggle.addEventListener('change', () => {
    if (surpriseToggle.checked) {
      // Spin immediately, then every 10s
      startSpinning();
      surpriseInterval = setInterval(() => {
        if (!isSpinning) startSpinning();
      }, 10000);
      track('surprise_me_enabled', { event_category: 'Engagement' });
    } else {
      clearInterval(surpriseInterval);
      surpriseInterval = null;
    }
  });
}

// Share button
if (shareButton) {
  shareButton.addEventListener('click', async () => {
    const result = currentChoice ? ` I just got: ${currentChoice.display}!` : '';
    const shareData = {
      title: 'Lunch Cupid',
      text: `Can't decide what to eat? Let Lunch Cupid pick for you!${result}`,
      url: 'https://lunchcupid.com',
    };

    track('share_website_click', { event_category: 'Engagement' });

    if (navigator.share) {
      try { await navigator.share(shareData); }
      catch (err) { /* user cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
      } catch {
        // legacy fallback
        const tmp = document.createElement('input');
        tmp.value = shareData.url;
        tmp.style.cssText = 'position:absolute;left:-9999px';
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }
      const orig = shareButton.innerHTML;
      shareButton.textContent = '✅ Link Copied!';
      setTimeout(() => { shareButton.innerHTML = orig; }, 2000);
    }
  });
}

// Email form
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    track('email_subscribe_attempt', { event_category: 'Conversion' });

    const formData = new FormData(emailForm);
    fetch(emailForm.action, { method: 'POST', body: formData, mode: 'no-cors' })
      .catch(err => console.error('Email submit error:', err));

    formContent.classList.add('hidden');
    successMsg.style.display = 'block';
  });
}

// ---------------------------------------------------------------------------
// 7.  INIT
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  findButton.classList.remove('visible');
  spinButton.disabled    = false;
  spinButton.textContent = 'Spin!';
});
