const initialData = {
  articles: {
    'article-1': {
      "source": {
        "id": null,
        "name": "Theguardian.com"
      },
      "author": "Bryan Armen Graham, Martin Pengelly, Victoria Bekiempis, Richard Luscombe",
      "title": "US coronavirus live: Trump floats three-state quarantine as New York deaths rise to 728 - The Guardian",
      "description": "Trump mulls measures for New York, New Jersey and Connecticut while Cuomo says daily hospitalizations and ICU admissions down – follow the latest live",
      "url": "https://www.theguardian.com/world/live/2020/mar/28/coronavirus-news-trump-us-latest-live-updates",
      "urlToImage": "https://i.guim.co.uk/img/media/567ca9602bafb4bc9157ec0b48aaf2ed232ef71e/0_153_4597_2759/master/4597.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ab669421b4ca22a427424f4ead400111",
      "publishedAt": "2020-03-28T18:46:51Z",
      "content": null
    },
    'article-2': {
      "source": {
        "id": null,
        "name": "Nytimes.com"
      },
      "author": "Stephanie Saul",
      "title": "Cuomo Postpones New York’s Primary Election to June 23 Because of Coronavirus - The New York Times",
      "description": "New York became the 11th state to move its primary in an attempt to limit the risk of spreading the virus.",
      "url": "https://www.nytimes.com/2020/03/28/us/politics/ny-primary-voting-coronavirus.html",
      "urlToImage": "https://static01.nyt.com/images/2020/03/25/us/politics/00virus-primaries-postponed-hfo/00virus-primaries-postponed-hfo-facebookJumbo.jpg",
      "publishedAt": "2020-03-28T18:27:53Z",
      "content": "Elections board around the state are risking personnel safety and health to prepare for impending elections on April 28, the Elections Commissions Association of the State of New York said in a news release last Tuesday.\r\nSome influential Democrats in New Yor… [+1182 chars]"
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Home',
      articleIds: ['article-1', 'article-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'Top headlines from BBC News',
      articleIds: ['article-1', 'article-2']
    },
    'column-3': {
      id: 'column-3',
      title: 'Top business headlines from Germany',
      articleIds: ['article-1', 'article-2']
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
}
export default initialData
