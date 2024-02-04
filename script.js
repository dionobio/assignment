const images = ['b1.jpg', 'avt.png', 'image3.jpg', 'image4.jpg'];
  let currentImageIndex = 0;

  // Lấy element ảnh container
  const imageContainer = document.querySelector('.image-container');
  
  // Hàm chuyển đổi ảnh
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageUrl = images[currentImageIndex];
    imageContainer.querySelector('img').src = newImageUrl;
  }

  // Tự động chuyển đổi ảnh sau mỗi 3 giây (hoặc bạn có thể sử dụng sự kiện click hoặc các sự kiện khác)
  setInterval(changeImage, 3000);