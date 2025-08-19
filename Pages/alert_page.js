import { expect } from "chai"; 

class AlertPage {

    // Locator2nya

    get appMenu() {
        return $(`//android.widget.TextView[@content-desc='App']`);
    }

    get alertDialogs() {
        return $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`);
    }

    get textEntryDialog() {
        return $(`//android.widget.Button[@content-desc="Text Entry dialog"]`);
    }

    get nameField() {
        return $(`//android.widget.EditText[@resource-id='io.appium.android.apis:id/username_edit']`);
    }

    get passwordField() {
        return $(`//android.widget.EditText[@resource-id='io.appium.android.apis:id/password_edit']`);
    }

    get popupAlert_title() {
        return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
    }

    // --- Actions ---
    async openTextEntryDialog() {
        await this.appMenu.click();
        await this.alertDialogs.click();
        await this.textEntryDialog.click();
    }

    async inputNameAndPassword(name, password) {
        await this.nameField.clearValue(); //clear value dulu, siapa tau ada default value pas mau isi
        await this.nameField.setValue(name);

        await (await this.passwordField).waitForExist({ timeout: 5000 });

        expect(await this.passwordField.isDisplayed()).to.be.true;
        expect(await this.passwordField.isEnabled()).to.be.true;

        await this.passwordField.setValue(password);

        await driver.pause(2000); // pause 2 detik
    }
}

export default new AlertPage();
