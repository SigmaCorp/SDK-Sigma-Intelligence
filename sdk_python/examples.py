from sdk.sdk_python import SigmaSDK, asyncio

sigma_sdk = SigmaSDK("000000000-0000-0000-0000-000000000000") # Tu token de Sigma Intelligence

async def main():
    '''
    Ejemplos de uso del SDK en Python
    '''

    # Profesional
    movistar = await sigma_sdk.api_controller("movistar", "num", "2645559925", "profesional")
    patente = await sigma_sdk.api_controller("patente", "patente", "gay001", "profesional")
    patente_dni = await sigma_sdk.api_controller("patente_dni", "dni", "12345678", "profesional")
    dni = await sigma_sdk.api_controller("dni", "dni", "12345678", "profesional")
    dni_celular = await sigma_sdk.api_controller("dni_celular", "dni", "12345678", "profesional")
    dni_two = await sigma_sdk.api_controller("dni_two", "dni", "12345678", "profesional")
    celular = await sigma_sdk.api_controller("celular", "num", "1125363443", "profesional")
    nombre = await sigma_sdk.api_controller("nombre", "nombre", "Leandro Lopez", "profesional")
    direccion = await sigma_sdk.api_controller("direccion", "direccion", "libertador", "profesional")

    # Medium
    patente_resolver = await sigma_sdk.api_controller("patente", "patente", "gay001", "medium")
    patente_dni = await sigma_sdk.api_controller("patente_dni", "dni", "12345678", "medium")
    dni_number_resolver = await sigma_sdk.api_controller("dni_celular", "number", "114857332", "medium")
    dni_resolver = await sigma_sdk.api_controller("dni", "dni", "12345678", "medium")
    
    # # Standard
    dni_number_resolver = await sigma_sdk.api_controller("dni-number-resolver-standard", "dni", "12345678", "standard")
    dni_resolver = await sigma_sdk.api_controller("dni-resolver-standard", "dni", "12345678", "standard")

    # # Free
    peru = await sigma_sdk.api_controller("peru", "dato", "31948273", "free")

    
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
