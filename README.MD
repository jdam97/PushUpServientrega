
### EMPLEADOS

_**NOTA: RECUERDA QUE LAS URL USADAS EN LA DOCUMENTACIÓN SON DE EJEMPLO, VARÍAN DEPENDIENDO DE TUS VARIABLES DE ENTORNO**_

Ahora usando este formato json crea un nuevo empleado, es necesario que se envie el formato de esta manera ya que se aplica un DTO que verifica todos los datos.


```json
    {
      "nombre": "Jonathan Alvarez",
      "edad": 20,
      "identificacion": "1005184202",
      "telefono": "3224097916",
      "cargo": "Gerente",
      "fechaInicio": "2023-11-10",
      "sucursal": "65451b06608371ed31504675"
    }
```



POST: `http://127.16.16.16:5000/usuarios` _Este endpoint permite registrar un empleado nuevo, además de generar su TOKEN_

GET: `http://127.16.16.16:5000/usuarios` _Este endpoint permite listar todos los empleados registrados_

GET: `http://127.16.16.16:5000/usuarios/:id` _Este endpoint permite listar un empleado especifico por el id_

DELETE: `http://127.16.16.16:5000/usuarios/:ObjectId` _Este endpoint permite eliminar los empleados buscandolo por el ObjectId_

UPDATE: `http://127.16.16.16:5000/usuarios/:ObjectId` _Este endpoint permite actualizar los empleados buscandolo por el ObjectId que se le pasa por params_


### ENVIOS

El endpoint ENVIOS permite crear nuevos envios,editarlos  obtener todos los envios actuales o uno es específico por su numero de id.

POST: `http://127.16.16.16:5000/envios` _Este endpoint permite registrar un envio de vuelo_

GET: `http://127.16.16.16:5000/envios` _Este endpoint permite listar los envios_

GET: `http://127.16.16.16:5000/envios:id` _Este endpoint permite listar un envio en especifico por id_

DELETE: `http://127.16.16.16:5000/envios:Objectid` _Este endpoint permite eliminar los envios buscandolo por Objectid_

UPDATE: `http://127.16.16.16:5000/envios/:ObjectId` _Este endpoint permite actualizar los envios buscandolo por el ObjectId que se le pasa por params_

### SURCURSALES

POST: `http://127.16.16.16:5000/surcursales` _Este endpoint permite registrar una nueva surcursal_

GET: `http://127.16.16.16:5000/surcursales` _Este endpoint permite listar las surcursales_

GET: `http://127.16.16.16:5000/surcursales:id` _Este endpoint permite listar una surcursal en especifico por id_

DELETE: `http://127.16.16.16:5000/surcursales:Objectid` _Este endpoint permite eliminar una surcursal buscandolo por Objectid_

UPDATE: `http://127.16.16.16:5000/surcursales/:ObjectId` _Este endpoint permite actualizar las surcursales buscandolas por el ObjectId que se le pasa por params_


### AUTOS

Autos permite registrar cada reserva nueva, eliminar, actualizar y mostrar todas los autos disponibles.

**EJEMPLO**

```json
    {
      "id": 6,
      "punto_recogida": "Hotel12",
      "punto_devolucion": "Aeropuerto",
      "fecha_recogida": "2023-09-15",
      "fecha_devolucion": "2023-09-25"
    },
```
POST: `http://127.16.16.16:5000/vehiculos` _Este endpoint permite registrar un nuevo vehiculol_

GET: `http://127.16.16.16:5000/vehiculos` _Este endpoint permite listar los vehiculos_

GET: `http://127.16.16.16:5000/vehiculos:id` _Este endpoint permite listar un vehiculo en especifico por id_

DELETE: `http://127.16.16.16:5000/vehiculos:Objectid` _Este endpoint permite eliminar un vehiculo buscandolo por Objectid_

UPDATE: `http://127.16.16.16:5000/vehiculos/:ObjectId` _Este endpoint permite actualizar los vehiculos buscandolos por el ObjectId que se le pasa por params_
