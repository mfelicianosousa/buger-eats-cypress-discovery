var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver : function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data =  {
            name: `${firstName} ${lastName}`,
            cpf : cpf.generate(),
            email: faker.internet.email( firstName ),
            whatsapp: '65981413390',
            address: {
                postalCode: '78088120',
                street: 'Rua Duzentos e Um',
                number: '6',
                details: '2o Trav Av. Espigao',
                district: 'Tijucal',
                city_state: 'Cuiabá/MT'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data 
    }
}