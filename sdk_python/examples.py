from sdk.sdk_python import SigmaSDK, asyncio

sigma_sdk = SigmaSDK("7e1ee076-ab67-460b-8b1f-abcadc583f0f")

async def main():
    '''
    Ejemplos de uso del SDK en Python
    '''

    # Profesional
    movistar_resolver = await sigma_sdk.api_controller("movistar", "num", "2645559925", "profesional")
    patente_resolver = await sigma_sdk.api_controller("patente_resolver", "patente", "gay001", "profesional")
    patente_dni = await sigma_sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional")
    dni_resolver = await sigma_sdk.api_controller("dni_resolver", "dni", "12345678", "profesional")
    dni_number_resolver = await sigma_sdk.api_controller("dni_number_resolver", "dni", "12345678", "profesional")
    dni_resolver_2 = await sigma_sdk.api_controller("dni_resolver_2", "dni", "12345678", "profesional")
    num_resolver = await sigma_sdk.api_controller("num_resolver", "num", "1125363443", "profesional")

    # Medium
    patente_resolver = await sigma_sdk.api_controller("patente-resolver-medium", "patente", "gay001", "medium")
    patente_dni = await sigma_sdk.api_controller("patente-resolver-dni-medium", "dni", "12345678", "medium")
    dni_number_resolver = await sigma_sdk.api_controller("dni-number-resolver-medium", "number", "114857332", "medium")
    dni_resolver = await sigma_sdk.api_controller("dni-resolver-medium", "dni", "12345678", "medium")
    
    # Standard
    dni_number_resolver = await sigma_sdk.api_controller("dni-number-resolver-standard", "dni", "12345678", "standard")
    dni_resolver = await sigma_sdk.api_controller("dni-resolver-standard", "dni", "12345678", "standard")

    # Free
    peru = await sigma_sdk.api_controller("peru", "dato", "31948273", "free")

    
loop = asyncio.get_event_loop()
loop.run_until_complete(main())