const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.simpleFormDemoLink = page.locator('a[href*="simple-form-demo"]');
        this.dragDropSliderLink = page.locator('a[href*="drag-drop-range-sliders-demo"]');
    }

    async openSimpleFormDemo() {
        await this.click(this.simpleFormDemoLink);
    }

    async openDragDropSliderDemo() {
        await this.click(this.dragDropSliderLink);
    }

}

module.exports = { HomePage };