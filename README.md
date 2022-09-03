## SDK Sigma Intelligence Tutorial Version 0.6.9

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
    const patente_dni = await sdk.api_controller("patente_dni", "dni", "12345678", "profesional");
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
from sdk.sdk_python import SigmaSDK, asyncio
sigma_sdk = SigmaSDK("TU_TOKEN_DE_SIGMA")

async def test():
    patente_dni = await sigma_sdk.api_controller("patente_dni", "dni", "12345678", "profesional")
    return patente_dni
    
loop = asyncio.get_event_loop()
print(loop.run_until_complete(test()))
```


#### Cheatsheet con todos los metodos del controlador con su respectivo plan:

### Profesional:
| ENDPOINT    | PARAMETRO | DATO_POST          | TU_PLAN     |
|-------------|-----------|--------------------|-------------|
| movistar    | num       | 2645559925         | profesional |
| patente     | patente   | gay001             | profesional |
| patente_dni | dni       | 12345678           | profesional |
| dni         | dni       | 12345678           | profesional |
| dni_celular | dni       | 12345678           | profesional |
| dni_two     | dato      | 12345678:Masculino | profesional |
| celular     | num       | 1125363443         | profesional |
| nombre      | nombre    | Leandro Lopez      | profesional |
| direccion   | direccion | libertador         | profesional |
--------------------------------------------------------------

#### Medium:
| ENDPOINT    | PARAMETRO | DATO_POST | TU_PLAN |
|-------------|-----------|-----------|---------|
| patente     | patente   | gay001    | medium  |
| patente_dni | dni       | 12345678  | medium  |
| dni         | dni       | 12345678  | medium  |
| dni_celular | dni       | 12345678  | medium  |
-------------------------------------------------

#### Standard:
| ENDPOINT    | PARAMETRO | DATO_POST | TU_PLAN  |
|-------------|-----------|-----------|----------|
| dni_celular | dni       | 12345678  | standard |
| dni         | dni       | 12345678  | standard |
--------------------------------------------------

## Gratuitos:
| ENDPOINT | PARAMETRO | DATO_POST | TU_PLAN |
| -------- | --------- | --------- | ------- |
| peru     | dato      | 31948273  | free    |
----------------------------------------------