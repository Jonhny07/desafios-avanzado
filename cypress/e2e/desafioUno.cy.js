///<reference types="Cypress" />
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductPage } from "../support/pages/productPage";
describe('template spec', () => {
  let dataProduct = {};
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();

  before(() => {
    cy.fixture("datosProductos").then((datosFixture) => {
      dataProduct = datosFixture;
    });
  });
  beforeEach(() => {
    cy.visit("");
    loginPage.iniciarSesion();
    loginPage.escribirUsuario(Cypress.env().usuario)
    loginPage.escribirContraseña(Cypress.env().password)
    loginPage.clickLogin();
    homePage.clickOnlineShopLink();

  });
  it('Validar Requisitos Desafio Nro. 1', () => {
    //Agregamos el Producto
    productPage.clickAddProduct();
    productPage.agregarProductName(dataProduct.productos.producto1.name);
    productPage.agregarProductPrice(dataProduct.productos.producto1.price);
    productPage.agregarUrlProduct(dataProduct.productos.producto1.url);
    productPage.agregarIdProduct(dataProduct.productos.producto1.id);
    productPage.clickCreateProducto();
    productPage.cerrarModal();
    productPage.clickForma();
    productPage.buscarProducto(dataProduct.productos.producto1.name).clear();

    productPage
      .clickDeleteButton(dataProduct.productos.producto1.name)
      .find(`[data-cy="delete-${dataProduct.productos.producto1.id}"]`)
      //.should("have.attr",'aria-label',"Delete")
      .click();
    productPage.presionarDelete();
    productPage.cerrarModal();
    productPage.buscarProducto(dataProduct.productos.producto1.name);
    productPage.obtenerNombre(dataProduct.productos.producto1.name);
  })
})