import { expect } from "chai";
import AlertPage from "../Pages/alert_page.js";

describe("ApiDemos App - Alert Dialogs", () => {
    it("Isi Name dan Password di Text Entry Dialog", async () => {
        // 1. Buka Text Entry Dialog
        await AlertPage.openTextEntryDialog();

        // 2. Pastikan dialog pop up muncul
        expect(await AlertPage.popupAlert_title.isDisplayed()).to.be.true;

        // 3. Input Name dan Password
        await AlertPage.inputNameAndPassword("Admin", "12345");

        // 4. Validasi input terisi
        const textName = await AlertPage.nameField.getText();
        expect(textName).to.equal("Admin");

        const textPass = await AlertPage.passwordField.getAttribute("text");
        expect(textPass.length).to.be.greaterThan(0);
    });
});