import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup',()=>{

    // beforeEach(function(){
                    
    //     // Definição da Massa de dados para testes 
    //     cy.fixture('deliver').then((deliver)=>{
    //          this.deliver = deliver 
    //      })

    // })


     it('User should be deliver',function(){ 
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        var deliver = signupFactory.deliver() ;
        signupPage.go() 
        // signupPage.fillForm( this.deliver.signup )
        signupPage.fillForm( deliver )
        signupPage.submit() 
        signupPage.modalContentShouldBe(expectedMessage) 
       
    })

    it('Incorrect document',function(){
        var deliver = signupFactory.deliver()
        deliver.cpf =  'X77560748AA' // cpf incorreto
        signupPage.go() 
        // signupPage.fillForm( this.deliver.cpf_inv )
        signupPage.fillForm( deliver )
        signupPage.submit() 
        signupPage.alertMessageShouldBe('Oops! CPF inválido')       
    })

    it('Incorrect email',function(){
        var deliver = signupFactory.deliver() 
        deliver.email = 'marcelino.gmail.com' // email inválido
        signupPage.go() 

       // signupPage.fillForm( this.deliver.email_inv )
        signupPage.fillForm( deliver )
        signupPage.submit() 
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')       
   })

   context('Required fields',function(){

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalCode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'foto-cnh', output: 'Adicione uma foto da sua CNH'}
        ]
        before( function() {
            signupPage.go() 
            signupPage.submit()  
        })

        messages.forEach( function(msg) {
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe( msg.output )
            })
        })

   })
//    it('Required fields',function(){
      
//     signupPage.go() 
//     signupPage.submit() 
//     signupPage.alertMessageShouldBe('É necessário informar o nome')
//     signupPage.alertMessageShouldBe('É necessário informar o CPF')
//     signupPage.alertMessageShouldBe('É necessário informar o email')
//     signupPage.alertMessageShouldBe('É necessário informar o CEP')
//     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
//     signupPage.alertMessageShouldBe('Selecione o método de entrega')
//     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
      
//    })
})