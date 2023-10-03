Feature: search data

I am a user
I want to find data in search

Scenario: search with valid data
    Given Pengguna membuka halaman utama website Zero Bank
    When Pengguna memasukkan kata kunci online kedalam kolom pencarian kemudian menekan enter
    Then  Pengguna mendapat hasil yang sesuai

Scenario: search with invalid data
    Given Pengguna membuka halaman utama website Zero Bank
    When Pengguna memasukan kata kunci yang tidak valid dalam kolom pencarian kemudian menekan enter
    Then Pengguna mendapat hasil yang tidak sesuai