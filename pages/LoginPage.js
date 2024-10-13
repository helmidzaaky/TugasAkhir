class LoginPage {
    // Elemen-elemen halaman login
    get usernameField() {
        return $('#email'); // Locator untuk email input field
    }

    get passwordField() {
        return $('#password'); // Locator untuk password input field
    }

    get loginButton() {
        return $('button[type="submit"]'); // Locator untuk tombol login
    }

    get errorMessage() {
        return $('.error-message'); // Contoh locator untuk pesan kesalahan
    }

    // Metode untuk membuka halaman login
    openLoginPage() {
        browser.url('https://kasirdemo.vercel.app/login');
    }

    // Metode untuk memasukkan email
    enterEmail(email) {
        this.usernameField.setValue(email);
    }

    // Metode untuk memasukkan password
    enterPassword(password) {
        this.passwordField.setValue(password);
    }

    // Metode untuk menekan tombol login
    clickLogin() {
        this.loginButton.click();
    }

    // Metode untuk mengambil teks pesan kesalahan
    getErrorMessage() {
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();