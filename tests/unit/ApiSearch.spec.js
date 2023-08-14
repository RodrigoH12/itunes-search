import { assert, expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from 'vuetify';
import ApiSearch from '@/views/ApiSearch.vue';

describe('ApiSearch.vue', () => {
    let wrapper;
    const localVue = createLocalVue();
    localVue.use(vuetify);

    beforeEach(() => {
        wrapper = mount(ApiSearch, {
            localVue,
            stubs: {
                'v-text-field': true,
                'v-icon': true
            }
        });
    });

    it('ApiSearch view renders correctly', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('Typing "Luis Miguel" in searchBar component returns 20 results', async () => {
        const author = 'Luis Miguel';
        const expectedlength = 20;

        const searchBar = wrapper.findComponent({ name: 'SearchBar' });
        searchBar.setData({ request: author });
        await searchBar.find('.search-button').trigger('click');

        await wrapper.vm.$nextTick();

        await wrapper.vm.submitSearch();
        const currentAlbums = wrapper.vm.$data.albums;

        expect(currentAlbums.length).to.be.equal(expectedlength);
    });

    it('Searching author "Taylor" returns 18 results', async () => {
        const expectedlength = 18;

        wrapper.vm.$data.author = 'Taylor';
        await wrapper.vm.submitSearch();
        const currentAlbums = wrapper.vm.$data.albums;

        assert.exists(currentAlbums);
        expect(currentAlbums.length).to.be.equal(expectedlength);
    });
});
