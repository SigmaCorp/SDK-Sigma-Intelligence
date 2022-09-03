const sdk_api = require('./sdk/main');

const sdk = new sdk_api.SigmaSDK("TU_TOKEN_DE_SIGMA_INTELLIGENCE");

async function main() {
    ```
    Ejemplos de uso del SDK en Node JS
    ```
    // Profesional
    const movistar = await sdk.api_controller("movistar", "num", "2645559925", "profesional");
    const patente = await sdk.api_controller("patente", "patente", "gay001", "profesional");
    const patente_dni = await sdk.api_controller("patente_dni", "dni", "12345678", "profesional");
    const dni = await sdk.api_controller("dni", "dni", "12345678", "profesional");
    const dni_celular = await sdk.api_controller("dni_celular", "dni", "12345678", "profesional");
    const dni_two = await sdk.api_controller("dni_two", "dato", "12345678:Masculino", "profesional");
    const celular = await sdk.api_controller("celular", "num", "1125363443", "profesional");
    const nombre = await sdk.api_controller("nombre", "nombre", "Leandro Lopez", "profesional");
    const direccion = await sdk.api_controller("direccion", "direccion", "libertador", "profesional");


    // // Medium
    const patente = await sdk.api_controller("patente", "patente", "gay001", "medium");
    const patente_dni = await sdk.api_controller("patente_dni", "dni", "12345678", "medium");
    const dni_celular = await sdk.api_controller("dni_celular", "number", "114857332", "medium");
    const dni = await sdk.api_controller("dni", "dni", "12345678", "medium");
    const data_breach = sdk.api_controller("data_breach", "query", "gov.ar", "medium");

    // Standard
    const dni = await sdk.api_controller("dni", "dni", "12345678", "standard");
    const dni_celular = await sdk.api_controller("dni_celular", "dni", "12345678", "standard");

    // // Free
    const peru = await sdk.api_controller("peru", "dato", "31948273", "free");
}

main()
