const apiKey = "pU6kv7lIGLCCpo39uv4s21G1B3n8Hss7LUaYmJ4HpIAuRFu7JECd4Wom";
const perPage = 15;
let currentPage = 1;
let searchterm = "";

const imageWrapper = document.querySelector(".images");
const loadMoreBtn = document.querySelector(".load-more");
const searchinput = document.querySelector(".search-box input");

const generateHTML = (images) => {
    imageWrapper.innerHTML += images.map(img => `
    <li class="card">
      <img src="${img.src.large2x}" alt="Image by ${img.photographer}">
      <div class="details">
        <div class="photography">
          <i class="uil uil-camera"></i>
          <span>${img.photographer}</span>
        </div>
        <button><i class="uil uil-import"></i></button>
      </div>
    </li>
  `).join("");
};

const getImage = (url) => {
    loadMoreBtn.innerText = "Loading...";
    fetch(url, {
        headers: { Authorization: apiKey }
    })
        .then(res => res.json())
        .then(data => {
            generateHTML(data.photos);
            loadMoreBtn.innerText = "Load More";
        })
        .catch(err => {
            console.error(err);
            loadMoreBtn.innerText = "Load More";
        });
};

const loadMoreImages = () => {
    currentPage++;
    let apiURL = searchterm
        ? `https://api.pexels.com/v1/search?query=${searchterm}&page=${currentPage}&per_page=${perPage}`
        : `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
    getImage(apiURL);
};

const loadSearchImages = (e) => {
    if (e.key === "Enter") {
        currentPage = 1;
        searchterm = e.target.value;
        imageWrapper.innerHTML = "";
        getImage(`https://api.pexels.com/v1/search?query=${searchterm}&page=${currentPage}&per_page=${perPage}`);
    }
};

// Initial fetch
getImage(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`);

// Event listeners
loadMoreBtn.addEventListener("click", loadMoreImages);
searchinput.addEventListener("keyup", loadSearchImages);