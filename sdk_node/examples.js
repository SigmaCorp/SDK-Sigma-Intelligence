const sdk_api = require('./sdk/main')

const sdk = new sdk_api.SigmaSDK("7e1ee076-ab67-460b-8b1f-abcadc583f0f")

async function main() {
    // Profesional
    const movistar_resolver = await lol.api_controller("movistara", "num", "2645559925", "profesional")
    const patente_resolver = await sdk.api_controller("patente_resolver", "patente", "gay001", "profesional")
    const patente_dni = await sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional")
    const dni_resolver = await sdk.api_controller("dni_resolver", "dni", "12345678", "profesional")
    const dni_number_resolver = await sdk.api_controller("dni_number_resolver", "dni", "12345678", "profesional")
    const dni_resolver_2 = await sdk.api_controller("dni_resolver_2", "dni", "12345678", "profesional")
    const num_resolver = await sdk.api_controller("num_resolver", "num", "1125363443", "profesional")

    // Medium
    const patente_resolver = await sdk.api_controller("patente-resolver-medium", "patente", "gay001", "medium")
    const patente_dni = await sdk.api_controller("patente-resolver-dni-medium", "dni", "12345678", "medium")
    const dni_number_resolver = await sdk.api_controller("dni-number-resolver-medium", "number", "114857332", "medium")
    const dni_resolver = await sdk.api_controller("dni-resolver-medium", "dni", "12345678", "medium")
    
    // Standard
    const dni_number_resolver = await sdk.api_controller("dni-number-resolver-standard", "dni", "12345678", "standard")
    const dni_resolver = await sdk.api_controller("dni-resolver-standard", "dni", "12345678", "standard")

    // Free
    const peru = await sdk.api_controller("peru", "dato", "31948273", "free")
}

main()