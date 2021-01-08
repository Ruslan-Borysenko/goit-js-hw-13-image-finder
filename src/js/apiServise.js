const baseUrl = 'https://pixabay.com/api/';
const key = '?key=19762047-00a71ca172d97ff67da5d4766';
const queryString = '&q=';

export default {
  page: 1,
  searchQuery: '',
  fetchImg() {
    const url = `https://pixabay.com/api/?key=19762047-00a71ca172d97ff67da5d4766&q=${this.searchQuery}&page=${this.page}&per_page=12`;

    return fetch(url)
      .then(response => {
        this.page += 1;
        return response.json();
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
