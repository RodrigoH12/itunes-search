import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SearchView from '@/views/SearchView.vue'

describe('SearchView.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchView);
  });

  it("The quantity of albums shown is correct according to the JSON file", () => {
    let expectedlength = 13;
    let currentAlbums = wrapper.vm.$data.albums;

    //console.log("Current: " + currentAlbums.length);
    //console.log("Expected: " + expectedlength);
    assert.exists(currentAlbums);
    assert.equal(currentAlbums.length, expectedlength);
  });

  it("The quantity of Queen albums shown is equal to four", () => {
    const wrapper = shallowMount(SearchView, {
      
    });
    let expectedlength = 4;
    wrapper.vm.$data.request = "Queen"
    let albumsShown = wrapper.vm.sortedArray.length;

    //console.log("Current: " + albumsShown);
    //console.log("Expected: " + expectedlength);
    assert.exists(albumsShown);
    assert.equal(albumsShown, expectedlength);
  });

  it("The albums are being correctly sorted alphabetically", () => {
    const wrapper = shallowMount(SearchView, {
      
    });
    const newAlbums = [ 
      {			
          album_img_url: "https://img.discogs.com/-tStOMMJZ1Sz_kN40mTVSfXiH0Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5480381-1590849427-4840.jpeg.jpg", 
          album_name: "Un sol", 
          album_price: "9,99",
          artist_name: "Luis Miguel"
      }, { 
          album_img_url: "https://upload.wikimedia.org/wikipedia/en/4/40/Luis_Miguel_CDs....jpg", 
          album_name: "Palabra de honor", 
          album_price: "5,99",
          artist_name: "Luis Miguel"
      }, { 
          album_img_url: "https://upload.wikimedia.org/wikipedia/en/7/78/On_and_On_%28Jack_Johnson_album_-_cover_art%29.jpg", 
          album_name: "On and On", 
          album_price: "5,99",
          artist_name: "Jack Johnson" 
      }, {
          album_img_url: "https://www.humonegro.com/wp-content/QUEEN-A-NIGHT-AT-THE-OPERA.png", 
          album_name: "A Night at the Opera", 
          album_price: "12,99", 
          artist_name: "Queen"
      }
    ]

    wrapper.vm.$data.albums = newAlbums
    wrapper.vm.$data.sortFilter = "asc"
    let albumsShown = wrapper.vm.sortedArray;

    //console.log(albumsShown[0].album_name);
    assert.exists(albumsShown);
    assert.equal(albumsShown[0].album_name, newAlbums[3].album_name);
    assert.equal(albumsShown[1].album_name, newAlbums[2].album_name);
    assert.equal(albumsShown[2].album_name, newAlbums[1].album_name);
    assert.equal(albumsShown[3].album_name, newAlbums[0].album_name);
  });
})
