const { Page, expect } = require('@playwright/test');

class UserActionsPage {
    constructor(page) {
      this.page = page;
      this.settingsButton = 'a.sidebar_btn[href="/panel/settings"]';
      this.removeAccountButton = 'button.btn.btn-danger-bg';
      this.modalTitle = 'h4.modal-title';
      this.confirmRemoveButton = 'button.btn.btn-danger';
    }
  
    async openSettings() {
      await this.page.locator(this.settingsButton).click();
    }
  
    async clickRemoveAccount() {
      await this.page.locator(this.removeAccountButton).scrollIntoViewIfNeeded();
      await this.page.locator(this.removeAccountButton).click();
    }
    
    async confirmRemoveAccount() {
        await this.page.locator(this.modalTitle).waitFor({ state: 'visible' });
        await expect(this.page.locator(this.modalTitle)).toHaveText('Remove account');
        await this.page.locator(this.confirmRemoveButton).click();
      
        console.log('Account removed!');
      }
  }
  

  module.exports = { UserActionsPage };