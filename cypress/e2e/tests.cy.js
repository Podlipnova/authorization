describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
         cy.get('#mail').type ('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажали на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу тест 
         cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
 })
 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
    cy.get('#mail').type ('german@dolnikov.ru'); //ввели верный логин
    cy.get('#pass').type ('iLoveqastudio2'); //ввели неверный пароль
    cy.get('#loginButton').click(); //нажали на кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу тест 
    cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
    cy.get('#mail').type ('german@dolllnikov.ru'); //ввели верный логин
    cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали на кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу тест 
    cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
})
it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
    cy.get('#mail').type ('germandolnikov.ru'); //ввели верный логин
    cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали на кнопку войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу тест 
    cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
})
it('логика восстановления пароля', function () {
    cy.visit('https://login.qa.studio'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
    cy.get('#forgotEmailButton').click(); //нажать кнопку забыли пароль
    cy.get('#mailForgot').type ('ghghg@ghg.ru'); //ввести почту в поле восстановления пароля
    cy.get('#restoreEmailButton').click(); //отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //проверяю, что после клика на отправить код верный текст
    cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
})
it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет кнопки
    cy.get('#mail').type ('GerMan@Dolnikov.ru'); //ввели верный логин, но  с заглавными буквами
    cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали на кнопку войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу тест 
    cy.get('#messageHeader').should('be.visible'); //тест есть и виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и виден пользователю
})
})