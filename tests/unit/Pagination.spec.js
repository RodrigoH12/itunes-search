import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from 'vuetify';
import ApiSearch from '@/views/ApiSearch.vue';

describe('Pagination.vue', () => {
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

    it('Pagination component does not render without a search', async () => {
        const pagination = wrapper.findComponent({ name: 'Pagination' });
        expect(pagination.exists()).to.be.false;
    });

    it('Pagination component renders when a search is made', async () => {
        wrapper.vm.$data.author = 'TOP';
        await wrapper.vm.submitSearch();

        const pagination = wrapper.findComponent({ name: 'Pagination' });
        expect(pagination.exists()).to.be.true;
    });

    it('Left arrow should be disabled on page 0', async () => {
        wrapper.vm.$data.author = 'TOP';
        await wrapper.vm.submitSearch();

        const pagination = wrapper.findComponent({ name: 'Pagination' });
        const leftArrow = pagination.find('.left-arrow');
        expect(leftArrow.element.disabled).to.be.true;
    });

    it('Press right arrow changes to page 1', async () => {
        wrapper.vm.$data.author = 'TOP';
        await wrapper.vm.submitSearch();

        const pagination = wrapper.findComponent({ name: 'Pagination' });
        await pagination.find('.right-arrow').trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.page).to.be.equal(1);
        expect(pagination.props('page')).to.be.equal(1);
    });
});
