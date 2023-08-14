import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from 'vuetify';
import ApiSearch from '@/views/ApiSearch.vue';
// import SearchBar from '@/components/SearchBar.vue';

describe('SearchBar.vue', () => {
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

    it('SearchBar component renders correctly', () => {
        const searchBar = wrapper.findComponent({ name: 'SearchBar' });
        expect(searchBar.exists()).to.be.true;
    });

    it('Search "Luis Miguel" in the text field', async () => {
        const author = 'Luis Miguel';

        const searchBar = wrapper.findComponent({ name: 'SearchBar' });
        searchBar.setData({ request: author });
        await searchBar.find('.search-button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.author).to.be.equal(author);
    });

    it('Set the search filter to "asc"', async () => {
        const searchBar = wrapper.findComponent({ name: 'SearchBar' });
        searchBar.setData({ sortFilter: 'asc' });
        await searchBar.find('.search-button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.sortFilter).to.be.equal(
            searchBar.vm.$data.sortFilter
        );
    });
});
