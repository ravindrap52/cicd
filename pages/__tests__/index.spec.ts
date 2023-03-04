import Index from '~/pages/index.vue';
import {mount} from '@vue/test-utils';

describe('pages/index', () => {
    it('renders the companent', () => {
        const wrapper = mount(Index);
        expect(wrapper.html()).toMatchInlineSnapshot('"<div> Page: hello</div>"');
    });
});