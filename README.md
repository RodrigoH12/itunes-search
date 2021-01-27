# itunes-search

This is a VueJS project that can search for music albums from the itunes store or a JSON data file by typing the name of an artist. <br />
The application has a side menu, which contains the buttons Home, Itunes Search and JSON Search. to go home, make a search through itunes and make a search through a local JSON file. <br />
The first button takes you to the Home view that contains a brief description of the web page, the second button takes you to a interface that contains a search bar and two buttons to search and apply sort filters respectively, and the third button takes you to an interface similar to the Itunes Search option, but with the difference that it does not have the search button, since it is done in real time. In both cases, when the name of an artist is written and the search is made, a set of cards will be displayed with information on their corresponding albums. <br />
The filter button mentioned above allows users to sort the results by default, alphabetically ascending or alphabetically descending. <br />
If you want to add new albums to the JSON file, the structure must be the same as the following example, where you add new items to the "albums" section: <br />
{	<br />
&ensp; "albums": [ <br />
&ensp;&ensp;      { <br />
&ensp;&ensp;&ensp;&ensp;           "album_img_url": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/LMComplices.png/220px-LMComplices.png", <br />
&ensp;&ensp;&ensp;&ensp;            "album_name": "Cómplices", <br />
&ensp;&ensp;&ensp;&ensp;            "album_price": "6,99", <br />
&ensp;&ensp;&ensp;&ensp;            "artist_name": "Luis Miguel" <br />
&ensp;&ensp;        }, { <br />
&ensp;&ensp;&ensp;&ensp;            "album_img_url": "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/6/b/5/8292.jpg", <br />
&ensp;&ensp;&ensp;&ensp;            "album_name": "To the Sea", <br />
&ensp;&ensp;&ensp;&ensp;            "album_price": "4,99", <br />
&ensp;&ensp;&ensp;&ensp;            "artist_name": "Jack Johnson" <br />
&ensp;&ensp;        }, { <br />
&ensp;&ensp;&ensp;&ensp;            "album_name": "The Miracle", <br />
&ensp;&ensp;&ensp;&ensp;            "album_price": "5,99", <br />
&ensp;&ensp;&ensp;&ensp;            "artist_name": "Queen" <br />
&ensp;&ensp;        } <br />
&ensp;    ] <br />
} <br />

# Tasks

Task 0: Create new Search View. <br />
Task 1: Create a Sidebar menu. <br />
Task 2: Make connection with JSON file/Itunes API. <br />
Task 3: Implement search function. <br />
Task 4: Improve interface. <br />
Task 5: Create unit tests. <br />
Task 6: Clean code. <br />

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
