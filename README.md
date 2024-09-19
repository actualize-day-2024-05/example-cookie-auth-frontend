# Readme

Differences between cookie auth and localStorage auth:

- [src/App.jsx](/src/App.jsx): Configure `axios` to send credentials by default

- [src/LoginPage.jsx](/src/LoginPage.jsx): Remove `axios` and `localStorage` configuration

- [src/LogoutLink.jsx](/src/LogoutLink.jsx): Send `delete` request instead of `localStorage`
