
function toggleCategories() {
    const more = document.getElementById('more-categories');
    const btn = document.getElementById('toggle-btn');
    
    if (more.classList.contains('d-none')) {
      more.classList.remove('d-none');
      btn.textContent = "HIDE";
    } else {
      more.classList.add('d-none');
      btn.textContent = "VIEW ALL";
    }
  }