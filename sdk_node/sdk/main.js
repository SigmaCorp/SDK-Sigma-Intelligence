const axios = require('axios');

__version__ = "0.6.9"

class SigmaSDK {
    constructor(sigma_token) {
        this.sigma_token = sigma_token;
        this.map_endpoints = {
            "endpoints": {
                "profesional" : {
                    "movistar": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/movistar", 
                        "data_post": {"num" : null}
                    },
                    "patente" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/patente", 
                        "data_post": {"patente": null}
                    },
                    "patente_dni" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/patente_dni", 
                        "data_post": {"dni": null}
                    },
                    "dni" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni", 
                        "data_post": {"dni": null}
                    },
                    "dni_celular" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni_celular", 
                        "data_post": {"dni": null}
                    },
                    "dni_two" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni_two", 
                        "data_post": {"dni": null}
                    },
                    "celular" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/celular", 
                        "data_post": {"num": null}
                        },
                    "nombre": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/nombre",
                        "data_post": {"nombre": null},
                    },
                    "direccion": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/direccion",
                        "data_post": {"direccion": null},
                    },
                    "magic": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/magic",
                        "data_post": {"dato": null, "tipo": null}
                    }
                    
                },
                "medium": {
                    "patente": {
                        "endpoint": "/api/v2/medium/osint/argentina/patente", 
                        "data_post": {"patente" : null}
                    },
                    "patente_dni": {
                        "endpoint": "/api/v2/medium/osint/argentina/patente_dni", 
                        "data_post": {"dni" : null}
                    },
                    "dni_celular": {
                        "endpoint": "/api/v2/medium/osint/argentina/dni_celular", 
                        "data_post": {"number" : null}
                    },
                    "dni": {
                        "endpoint": "/api/v2/medium/osint/argentina/dni", 
                        "data_post": {"dni" : null}
                    },
                    "data_breach": {
                        "endpoint": "/api/v2/profesional/osint/argentina/search_engine/data_breach",
                        "data_post": {"query": null}
                    }
                },
                "standard": {
                    "dni": {
                        "endpoint": "/api/v2/standard/osint/argentina/dni", 
                        "data_post": {"dni" : null}
                    },
                    "dni_celular": {
                        "endpoint": "/api/v2/standard/osint/argentina/dni_celular", 
                        "data_post": {"dni" : null}
                    }
                },
                "free" : {
                    "peru": {
                        "endpoint": "/api/v2/free/osint/peru/celular_dni", 
                        "data_post": {"dato" : null}
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