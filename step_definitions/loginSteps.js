const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('chai');

Given('pengguna berada di halaman login', () => {
    LoginPage.openLoginPage();
});

When('pengguna memasukkan email {string}', (email) => {
    LoginPage.enterEmail(email);
});

When('pengguna memasukkan password {string}', (password) => {
    LoginPage.enterPassword(password);
});

When('pengguna menekan tombol login', () => {
    LoginPage.clickLogin();
});

Then('pengguna berhasil masuk ke halaman dashboard', () => {
    const url = browser.getUrl();
    expect(url).to.include('/dashboard'); // Verifikasi URL halaman dashboard
});

Then('pesan kesalahan {string} muncul', (errorMessage) => {
    const actualMessage = LoginPage.getErrorMessage();
    expect(actualMessage).to.equal(errorMessage);
});