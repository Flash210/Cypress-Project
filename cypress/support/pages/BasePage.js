

class BasePage {


    clickOnElement(selector) {
        selector.click();
    }


    fillInput(selector, value) {
        selector.type(value);
    }

    clearInput(selector) {
        selector.clear();
    }




}

export default new BasePage;