export class ProductPage {
    constructor() {
        this.addProduct = '[data-cy="add-product"]';
        this.productName = '[data-cy="productName"]';
        this.productPrice = '[data-cy="productPrice"]';
        this.urlProduct = '[data-cy="productCard"]';
        this.idProduct = '[data-cy="productID"]';
        this.clickCreateProduct = '[data-cy="createProduct"]';
        this.clickModal = "#closeModal";
        this.selectSearch = '[data-cy="search-type"]'
        this.searchProduct = '[data-cy="search-bar"]';
        this.deleteOk = "#saveEdit";
    }
    clickAddProduct() {
        cy.get(this.addProduct).click();
    }
    agregarProductName(name) {
        return cy.get(this.productName).type(name);
    }
    agregarProductPrice(price) {
        return cy.get(this.productPrice).type(price);
    }
    agregarUrlProduct(url) {
        return cy.get(this.urlProduct).type(url)
    }
    agregarIdProduct(id) {
        return cy.get(this.idProduct).type(id);
    }
    clickCreateProducto() {
        cy.get(this.clickCreateProduct).click();
    }
    cerrarModal() {
        cy.get(this.clickModal).click();
    }
    buscarProducto(producto) {
        return cy.get(this.searchProduct).type(producto + '{enter}');
    }
    clickForma() {
        cy.get(this.selectSearch).select("Name");
    }

    clickDeleteButton(product) {
        return cy.contains("p", product).siblings("div");
    }
    presionarDelete() {
        cy.get(this.deleteOk).click();
    }
    obtenerNombre(nombre){
        return cy.contains(nombre).should("not.exist")
    }
}