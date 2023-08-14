import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from 'vuetify';
import ApiSearch from '@/views/ApiSearch.vue';

describe('Card.vue', () => {
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

    it('Card component does not render without a search', async () => {
        const card = wrapper.findComponent({ name: 'Card' });
        expect(card.exists()).to.be.false;
    });

    it('Card component renders when a search is made', async () => {
        wrapper.vm.$data.author = 'TOP';
        await wrapper.vm.submitSearch();

        const card = wrapper.findComponent({ name: 'Card' });
        expect(card.exists()).to.be.true;
    });
});
