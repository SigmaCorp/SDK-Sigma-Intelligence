const sdk = new sdk_api.SigmaSDK("TU_TOKEN_DE_SIGMA_INTELLIGENCE")

async function main() {
    const patente_dni = await sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional");
    return patente_dni;
}

console.log(main());