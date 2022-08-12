from typing import Type
import aiohttp
import asyncio

class SigmaSDK():
    def __init__(self, sigma_token):
        self.sigma_token = sigma_token
        self.map_endpoints = {
            "endpoints": {
                "profesional" : {
                    "movistar": {"endpoint": "/api/sigma/profesional/movistar-resolver", "data_post": {"num" : None}},
                    "patente_resolver" : {"endpoint": "/api/sigma/profesional/patente-resolver", "data_post": {"patente": None}},
                    "patente_dni_resolver" : {"endpoint": "/api/sigma/profesional/patente-dni-resolver", "data_post": {"dni": None}},
                    "dni_resolver" : {"endpoint": "/api/sigma/profesional/dni-resolver", "data_post": {"dni": None}},
                    "dni_number_resolver" : {"endpoint": "/api/sigma/profesional/dni-number-resolver", "data_post": {"dni": None}},
                    "dni_resolver_2" : {"endpoint": "/api/sigma/profesional/dni-resolver-2", "data_post": {"dni": None}},
                    "num_resolver" : {"endpoint": "/api/sigma/profesional/num_resolver", "data_post": {"num": None}}
                },
                "medium": {
                    "patente-resolver-medium": {"endpoint": "/api/sigma/medium/patente-resolver-medium", "data_post": {"patente" : None}},
                    "patente-resolver-dni-medium": {"endpoint": "/api/sigma/medium/patente-resolver-dni-medium", "data_post": {"dni" : None}},
                    "dni-number-resolver-medium": {"endpoint": "/api/sigma/medium/dni-number-resolver-medium", "data_post": {"number" : None}},
                    "dni-resolver-medium": {"endpoint": "/api/sigma/medium/dni-resolver-medium", "data_post": {"dni" : None}},
                },
                "standard": {
                    "dni-number-resolver-standard": {"endpoint": "/api/sigma/standard/dni-number-resolver-standard", "data_post": {"dni" : None}},
                    "dni-resolver-standard": {"endpoint": "/api/sigma/standard/dni-resolver-standard", "data_post": {"dni" : None}}
                },
                "free" : {
                    "peru": {"endpoint": "/api/sigma/free/peru-resolver-telefonos", "data_post": {"dato" : None}}
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