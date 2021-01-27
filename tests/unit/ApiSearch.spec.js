import { assert, expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ApiSearch from '@/views/ApiSearch.vue'

describe('ApiSearch.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ApiSearch);
  });

  it("The quantity of albums shown is equals to 20", async () => {
    let expectedlength = 20;
    wrapper.vm.$data.request = "U2"
    await wrapper.vm.submitSearch();
    let currentAlbums = wrapper.vm.$data.albums;

    assert.exists(currentAlbums);
    expect(currentAlbums.length).to.be.equal(expectedlength);
  });
})
