import aiohttp
import asyncio

__version__ = "0.6.9"

class SigmaSDK():
    def __init__(self, sigma_token):
        self.sigma_token = sigma_token
        self.map_endpoints = {
            "endpoints": {
                "profesional" : {
                    "movistar": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/movistar", 
                        "data_post": {"num" : None}
                    },
                    "patente" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/patente", 
                        "data_post": {"patente": None}
                    },
                    "patente_dni" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/patente_dni", 
                        "data_post": {"dni": None}
                    },
                    "dni" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni", 
                        "data_post": {"dni": None}
                    },
                    "dni_celular" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni_celular", 
                        "data_post": {"dni": None}
                    },
                    "dni_two" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/dni_two", 
                        "data_post": {"dni": None}
                    },
                    "celular" : {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/celular", 
                        "data_post": {"num": None}
                        },
                    "nombre": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/nombre",
                        "data_post": {"nombre": None},
                    },
                    "direccion": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/direccion",
                        "data_post": {"direccion": None},
                    },
                    "magic": {
                        "endpoint": "/api/v2/profesional/osint/argentina/resolver/magic",
                        "data_post": {"dato": None, "tipo": None}
                    }
                    
                },
                "medium": {
                    "patente": {
                        "endpoint": "/api/v2/medium/osint/argentina/patente", 
                        "data_post": {"patente" : None}
                    },
                    "patente_dni": {
                        "endpoint": "/api/v2/medium/osint/argentina/patente_dni", 
                        "data_post": {"dni" : None}
                    },
                    "dni_celular": {
                        "endpoint": "/api/v2/medium/osint/argentina/dni_celular", 
                        "data_post": {"number" : None}
                    },
                    "dni": {
                        "endpoint": "/api/v2/medium/osint/argentina/dni", 
                        "data_post": {"dni" : None}
                    },
                    "data_breach": {
                        "endpoint": "/api/v2/profesional/osint/argentina/search_engine/data_breach",
                        "data_post": {"query": None}
                    }
                },
                "standard": {
                    "dni": {
                        "endpoint": "/api/v2/standard/osint/argentina/dni", 
                        "data_post": {"dni" : None}
                    },
                    "dni_celular": {
                        "endpoint": "/api/v2/standard/osint/argentina/dni_celular", 
                        "data_post": {"dni" : None}
                    }
                },
                "free" : {
                    "peru": {
                        "endpoint": "/api/v2/free/osint/peru/celular_dni", 
                        "data_post": {"dato" : None}
                    }
                }
            }
        }

    async def api_controller(self, method, tipo_dato, dato, plan):
        async with aiohttp.ClientSession() as session:
            try:
                self.map_endpoints["endpoints"][plan][method]["data_post"][tipo_dato] = dato
                post_data = self.map_endpoints["endpoints"][plan][method]["data_post"]

                header = {"sigma-key": self.sigma_token}
                async with session.post(f"https://sigma-search.io{self.map_endpoints['endpoints'][plan][method]['endpoint']}", json=post_data, headers=header) as response:
                    return await response.json()
            except KeyError or TypeError:
                raise Exception("Alguno de los parametros que ingresaste son incorrectos volve a checkearlos")