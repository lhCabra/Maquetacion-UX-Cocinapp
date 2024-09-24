## Cómo correr la versión móvil de Cocinapp

### Paso 1: Clonar el repositorio

Clona el repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/lhCabra/Maquetacion-UX-Cocinapp.git
```

### Paso 2: Cambiar a la rama móvil

Dirígete a la rama **móvil** del proyecto:

```bash
git checkout móvil
```

### Paso 3: Abrir el proyecto en Android Studio

1. Abre **Android Studio**.
2. En la pantalla principal, selecciona **"Open an existing Android Studio project"**.
3. Navega hasta el directorio del proyecto que acabas de clonar y selecciona la carpeta `app`.

### Paso 4: Elegir el dispositivo emulado

Se recomienda utilizar el dispositivo emulado **Pixel 7 API TiramisuPrivacySandbox**, que fue el dispositivo de prueba. Si no tienes configurado este dispositivo:

1. Abre **AVD Manager** en Android Studio.
2. Crea un nuevo dispositivo virtual con las siguientes especificaciones:
   - Dispositivo: **Pixel 7**
   - API: **Tiramisu (API Level 33)** con **Privacy Sandbox**.
3. Selecciona el dispositivo emulado en el menú de dispositivos.

### Paso 5: Ejecutar la aplicación

1. Selecciona el dispositivo emulado o conecta un dispositivo físico.
2. Haz clic en el botón **Run** para compilar y ejecutar la aplicación en el dispositivo seleccionado.

