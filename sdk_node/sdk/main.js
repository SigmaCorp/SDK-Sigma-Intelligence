const axios = require('axios');

__version__ = "0.6.2"

class SigmaSDK {
    constructor(sigma_token) {
        this.sigma_token = sigma_token;
        this.map_endpoints = {
            "endpoints": {
                "profesional": {
                    "movistar": { 
                        "endpoint": "/api/sigma/profesional/movistar-resolver", "data_post": {"num": null } 
                    },
                    "patente_resolver": { 
                        "endpoint": "/api/sigma/profesional/patente-resolver", "data_post": {"patente": null} 
                    },
                    "patente_dni_resolver": { 
                        "endpoint": "/api/sigma/profesional/patente-dni-resolver", "data_post": { "dni": null } 
                    },
                    "dni_resolver": { 
                        "endpoint": "/api/sigma/profesional/dni-resolver", "data_post": { "dni": null } 
                    },
                    "dni_number_resolver": { 
                        "endpoint": "/api/sigma/profesional/dni-number-resolver", "data_post": { "dni": null } 
                    },
                    "dni_resolver_2": { 
                        "endpoint": "/api/sigma/profesional/dni-resolver-2", "data_post": { "dato": null } 
                    },
                    "num_resolver": { 
                        "endpoint": "/api/sigma/profesional/num_resolver", "data_post": { "num": null } 
                    },
                    "buscar_persona": {
                        "endpoint": "/api/sigma/profesional/nombre-resolver",
                        "data_post": {"nombre": null},
                    },
                    "buscar_vecinos": {
                        "endpoint": "/api/sigma/profesional/address-info",
                        "data_post": {"direccion": null},
                    },
                },
                "medium": {
                    "patente-resolver-medium": { 
                        "endpoint": "/api/sigma/medium/patente-resolver-medium", "data_post": { "patente": null } 
                    },
                    "patente-resolver-dni-medium": { 
                        "endpoint": "/api/sigma/medium/patente-resolver-dni-medium", "data_post": { "dni": null } 
                    },
                    "dni-number-resolver-medium": { 
                        "endpoint": "/api/sigma/medium/dni-number-resolver-medium", "data_post": { "number": null } 
                },
                    "dni-resolver-medium": { 
                        "endpoint": "/api/sigma/medium/dni-resolver-medium", "data_post": { "dni": null } 
                    },
                },
                "standard": {
                    "dni-number-resolver-standard": { 
                        "endpoint": "/api/sigma/standard/dni-number-resolver-standard", "data_post": { "dni": null } 
                    },
                    "dni-resolver-standard": { 
                        "endpoint": "/api/sigma/standard/dni-resolver-standard", "data_post": { "dni": null } 
                    }
                },
                "free": {
                    "peru": { 
                        "endpoint": "/api/sigma/free/peru-resolver-telefonos", "data_post": { "dato": null } 
                    }
                }
            }
        }
    }

    async api_controller(method, tipo_dato, dato, plan) {
        try {
            this.map_endpoints["endpoints"][plan][method]["data_post"][tipo_dato] = dato;
            const post_data = this.map_endpoints["endpoints"][plan][method]["data_post"];
            return await axios({
                url: `https://sigma-search.io${this.map_endpoints['endpoints'][plan][method]['endpoint']}`,
                method: 'post',
                headers: { "sigma-key": this.sigma_token , "Content-Type": "application/json"},
                data: post_data
            }).then(async function (req){
                return req.data;
            }).catch(function (err){
                return err;
            });  
        } catch (err) {
            return false;
        }
    }
}

module.exports = { SigmaSDK }