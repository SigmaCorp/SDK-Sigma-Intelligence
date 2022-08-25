const sdk_api = require('./sdk/main');

const sdk = new sdk_api.SigmaSDK("TU_TOKEN_DE_SIGMA_INTELLIGENCE");

async function main() {
    // Profesional
    const movistar_resolver = await sdk.api_controller("movistar", "num", "2645559925", "profesional");
    const patente_resolver = await sdk.api_controller("patente_resolver", "patente", "gay001", "profesional");
    const patente_dni = await sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional");
    const dni_resolver = await sdk.api_controller("dni_resolver", "dni", "12345678", "profesional");
    const dni_number_resolver = await sdk.api_controller("dni_number_resolver", "dni", "12345678", "profesional");
    const dni_resolver_2 = await sdk.api_controller("dni_resolver_2", "dato", "12345678:Masculino", "profesional");
    const num_resolver = await sdk.api_controller("num_resolver", "num", "1125363443", "profesional");
    const buscar_persona = await sdk.api_controller("buscar_persona", "nombre", "Leandro Lopez", "profesional");
    const buscar_vecinos = await sdk.api_controller("buscar_vecinos", "direccion", "libertador", "profesional");


    // // Medium
    const patente_resolver = await sdk.api_controller("patente-resolver-medium", "patente", "gay001", "medium");
    const patente_dni = await sdk.api_controller("patente-resolver-dni-medium", "dni", "12345678", "medium");
    const dni_number_resolver = await sdk.api_controller("dni-number-resolver-medium", "number", "114857332", "medium");
    const dni_resolver = await sdk.api_controller("dni-resolver-medium", "dni", "12345678", "medium");
    
    // Standard
    const dni_number_resolver = await sdk.api_controller("dni-number-resolver-standard", "dni", "12345678", "standard");
    const dni_resolver = await sdk.api_controller("dni-resolver-standard", "dni", "12345678", "standard");

    // // Free
    const peru = await sdk.api_controller("peru", "dato", "31948273", "free");
}

main()
