from sdk.sdk_python import SigmaSDK, asyncio
sigma_sdk = SigmaSDK("TU_TOKEN_DE_SIGMA")

async def test():
    patente_dni = await sigma_sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional")
    return patente_dni
    
loop = asyncio.get_event_loop()
print(loop.run_until_complete(test()))