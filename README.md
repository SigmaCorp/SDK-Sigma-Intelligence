# SDK Sigma Intelligence Tutorial

#### SDK Node JS

1. Importar nuestro SDK de Node JS
```js
const sdk_api = require('./sdk/main')
```
1. Inicializar la clase SigmaSDK con nuestro Token de acceso
```js
const sdk = new sdk_api.SigmaSDK("TU_TOKEN_DE_SIGMA_INTELLIGENCE")
```
1. Llamar al api controller de la clase SigmaSDK, ejemplo del formato:

```js
const controlador = await sdk.api_controller([ENDPOINT], [PARAMETRO], [DATO_POST], [TU_PLAN])
```
1. Ejemplo de consulta:
```js
async function main() {
    const patente_dni = await sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional");
    return patente_dni;
}

console.log(main());
```


#### SDK Python
1. Importar nuestro SDK de Python
```python
from sdk.sdk_python import SigmaSDK, asyncio
```
1. Inicializar la clase SigmaSDK con nuestro Token de acceso
```python
sigma_sdk = SigmaSDK("TU_TOKEN_DE_SIGMA")
```
1. Llamar al api controller de la clase SigmaSDK, ejemplo del formato:

```python
await sigma_sdk.api_controller([ENDPOINT], [PARAMETRO], [DATO_POST], [TU_PLAN])
```
1. Ejemplo de consulta:
```python
async def test():
    patente_dni = await sigma_sdk.api_controller("patente_dni_resolver", "dni", "12345678", "profesional")
    return patente_dni
    
loop = asyncio.get_event_loop()
print(loop.run_until_complete(test()))
```


#### Cheatsheet con todos los metodos del controlador con su respectivo plan:

### Profesional:
| ENDPOINT            | PARAMETRO | DATO_POST          | TU_PLAN     |
| ------------------- | --------- | ------------------ | ----------- |
| movistar_resolver   | num       | 2645559925         | profesional |
| patente_resolver    | patente   | gay001             | profesional |
| patente_dni         | dni       | 12345678           | profesional |
| dni_resolver        | dni       | 12345678           | profesional |
| dni_number_resolver | dni       | 12345678           | profesional |
| dni_resolver_2      | dato      | 12345678:Masculino | profesional |
| num_resolver        | num       | 1125363443         | profesional |
| buscar_persona      | nombre    | Leandro Lopez      | profesional |
| buscar_vecinos      | direccion | libertador         | profesional |

#### Medium:
| ENDPOINT                    | PARAMETRO | DATO_POST | TU_PLAN |
| --------------------------- | --------- | --------- | ------- |
| patente-resolver-medium     | patente   | gay001    | medium  |
| patente-resolver-dni-medium | dni       | 12345678  | medium  |
| dni-number-resolver-medium" | dni       | 12345678  | medium  |
| dni_number_resolver         | dni       | 12345678  | medium  |

#### Standard:
| ENDPOINT                     | PARAMETRO | DATO_POST | TU_PLAN  |
| ---------------------------- | --------- | --------- | -------- |
| dni-number-resolver-standard | dni       | 12345678  | standard |
| dni-resolver-standard        | dni       | 12345678  | standard |

## Gratuitos:
| ENDPOINT | PARAMETRO | DATO_POST | TU_PLAN |
| -------- | --------- | --------- | ------- |
| peru     | dato      | 31948273  | free    |
