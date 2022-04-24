class SignupPage{

    
    go(){
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1')
          .should('have.text','Cadastre-se para  fazer entregas')
    }
    // Preechimendo de dados no formulário
    fillForm( deliver){

        // cep : 04534011 - Rua Joaquim Floriano, 1000, ap 142,
        // Bairro : Itaim Bibi Cidade: São Paulo/SP
        //
        cy.get('input[name="fullName"]').type(deliver.name) 
        cy.get('input[name="cpf"]').type(deliver.cpf) 
        cy.get('input[name="email"]').type(deliver.email) 
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp) 
        //
        cy.get('input[name="postalcode"]').type(deliver.address.postalCode) 
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number) 
        cy.get('input[name="address-details"]').type(deliver.address.details)
        // Validar se os dados do cep ao clicar no botão, foram atualizados corretamente
        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)

        // Pesquisa o item numa lista e click sobre ele
        cy.contains('.delivery-method li',deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/'+deliver.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click();
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text',expectedMessage)
        // faz a combinação de validação com texto
        cy.contains('.alert-error',expectedMessage).should('be.visible')
    }

}

export default new SignupPage ;
