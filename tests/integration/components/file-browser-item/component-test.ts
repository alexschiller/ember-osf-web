import EmberObject from '@ember/object';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { TestContext } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | file-browser-item', hooks => {
    setupRenderingTest(hooks);

    hooks.beforeEach(function(this: TestContext) {
        const item = EmberObject.create({
            itemName: 'An item',
            size: 1000,
            dateModified: 'Tue Aug 08 2017 13:59:47 GMT-0400 (EDT)',
            path: '/where_this_item_lives',
            currentVersion: 2,
            extra: {
                downloads: 192830,
            },
        });

        this.set('item', item);
    });

    const base = 'div[class*="file-browser-item"]';

    // TEST DISPLAY
    test('it renders with all default columns', async assert => {
        await render(hbs`{{file-browser-item item=item}}`);

        assert.dom('div.flash-message').doesNotExist('Flash message not shown.');
        assert.dom(`${base} > div:nth-child(1)`).includesText('An item', 'Name of the item shown.');
        assert.dom(`${base} > div:nth-child(2)`).includesText('kB', 'Size shown.');
        assert.dom(`${base} > div:nth-child(3) > a[class*="version-link"]`).exists('Version of item shown.');
        assert.dom(`${base} > div:nth-child(4)`).includesText('192830', 'Download count shown.');
        assert.dom(`${base} > time:nth-child(5)`).includesText('2017', 'Modified date shown.');
    });

    // TEST FLASH message (at some point look at testing its dissapearnace)
    test('flash appears, replaces everything else', async function(assert) {
        const item = this.get('item');
        item.flash = {
            message: 'Welp',
            type: 'danger',
        };
        this.set('item', item);
        await render(hbs`{{file-browser-item item=item}}`);

        assert.dom(`${base} > div.alert-danger > div.flash-message`).exists('Danger flash message shown.');
        assert.dom(this.element).doesNotIncludeText('An item', 'Name of the item not shown.');
        assert.dom(this.element).doesNotIncludeText('kB', 'Size not shown.');
        assert.dom('a[class*="version-link"]').doesNotExist('Version of item not shown.');
        assert.dom(this.element).doesNotIncludeText('192830', 'Download count not shown.');
        assert.dom(this.element).doesNotIncludeText('2017', 'Modified date not shown.');
    });
});
