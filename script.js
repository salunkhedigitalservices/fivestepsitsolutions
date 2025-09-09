### ⚙️ `script.js`
```javascript
// Language toggle (English/Marathi)
const toggleBtn = document.getElementById('lang-toggle');
let isMarathi = false;

toggleBtn.addEventListener('click', () => {
  isMarathi = !isMarathi;
  if (isMarathi) {
    document.body.innerHTML = document.body.innerHTML.replace('Your Business, Online in 5 Simple Steps', 'आपला व्यवसाय, फक्त ५ सोप्या पावलांत ऑनलाइन');
    toggleBtn.textContent = 'Switch to English';
  } else {
    window.location.reload(); // quick reset to English
  }
});

