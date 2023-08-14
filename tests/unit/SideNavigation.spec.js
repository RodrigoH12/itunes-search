import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SideNavigation from '@/components/SideNavigation.vue';

describe('SideNavigation.vue', () => {
    it('The Side Navigation Bar has buttons to Home, JSON search and Itunes search view', () => {
        const firstButton = 'Home';
        const secondButton = 'JSON Search';
        const thirdButton = 'Itunes Search';
        const wrapper = shallowMount(SideNavigation, {});
        expect(wrapper.text()).to.include(firstButton);
        expect(wrapper.text()).to.include(secondButton);
        expect(wrapper.text()).to.include(thirdButton);
    });
});
