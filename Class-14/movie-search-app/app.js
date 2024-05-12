const searchBtn = document.querySelector('#search-btn');
const resultSection = document.querySelector('#result-container');
const searchInp = document.querySelector('#search-inp');

function createImage(imageUrl) {
    const image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    image.setAttribute('alt', "show-search-result");
    return image;
}

function displayResult(showList) {
    for (const item of showList) {
        if (item.show.image) {
            const image = createImage(item.show.image.medium);
            resultSection.append(image);
        }
    }
}

function removePrevResult() {
    while (resultSection.firstChild) {
        resultSection.firstChild.remove();
    }
}

async function fetchShows(showName) {
    try {
        const FETCH_SHOW_URL = `https://api.tvmaze.com/search/shows?q=${showName}`;
        const response = await axios.get(FETCH_SHOW_URL);
        removePrevResult();
        displayResult(response.data)
    }
    catch (err) {
        console.log(err);   
    }
}

searchBtn.addEventListener('click', function () {
    fetchShows(searchInp.value);
});