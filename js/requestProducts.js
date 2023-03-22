const products = document.querySelector('.products');
// console.log(products);

const getProductData = async () => {
  await fetch('../products.json')
    .then((response) => response.json())
    .then((data) => {
      let dataElmt;
      data.map((item) => {
        // console.log(item);
        dataElmt = `
        <div class="product-frame">
          <div class="product-item">
            <img src="./images/${item.pro_img}" alt="">
            <div class="product-text">
              <h4>${item.pro_name}</h4>
              <strong>₩${item.pro_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong>
              <p>${item.pro_desc}</p>
              <a href="#" class="common-btn">자세히 보기</a>
            </div>
          </div>
        </div>
        `;
        products.innerHTML += dataElmt;
      });
      showLimitItems();
    })
    .catch((err) => console.log(err));
};

getProductData();

function showLimitItems() {
  const pr = document.querySelectorAll('.product-frame');
  pr.forEach((item) => {
    item.style.display = 'none';
  });

  for (let i = 0; i < 3; i++) {
    pr[i].style.display = 'block';
  }
}
