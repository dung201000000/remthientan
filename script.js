// Chuyển màu header khi cuộn trang
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Hiển thị thông báo khi nhấn nút Shopee
  const shopeeButtons = document.querySelectorAll('.btn-shopee');
  shopeeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Ngăn chuyển trang ngay
      alert('Bạn sẽ được chuyển đến Shopee để hoàn tất giao dịch!');
      window.open(button.href, '_blank'); // Mở trang Shopee
    });
  });
  
  // Cuộn mượt đến từng phần
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 60, // Trừ đi chiều cao header
        behavior: 'smooth',
      });
    });
  });
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productLinks = [
            'https://shopee.vn/product1',
            'https://shopee.vn/product2',
        ];
        
        if (isMobile) {
            window.open(productLinks[index], '_blank');
        } else {
            window.location.href = productLinks[index];
        }
    });
});
