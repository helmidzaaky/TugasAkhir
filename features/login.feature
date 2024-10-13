Feature: Halaman Login pada Kasir Demo

  Scenario: Login dengan kredensial yang valid
    Given pengguna berada di halaman login
    When pengguna memasukkan email "user@valid.com"
    And pengguna memasukkan password "password123"
    And pengguna menekan tombol login
    Then pengguna berhasil masuk ke halaman dashboard

  Scenario: Login dengan kredensial yang tidak valid
    Given pengguna berada di halaman login
    When pengguna memasukkan email "user@invalid.com"
    And pengguna memasukkan password "wrongpassword"
    And pengguna menekan tombol login
    Then pesan kesalahan "Invalid email or password" muncul