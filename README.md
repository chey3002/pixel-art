# 🎨 Pixel Art Editor

Un editor de pixel art interactivo y fácil de usar, construido con React y TypeScript. Crea arte pixelado de manera intuitiva y exporta tus creaciones como imágenes PNG.

![Pixel Art Editor Demo](demo.gif)

## ✨ Características

- 🖌️ Editor de píxeles intuitivo
- 🎨 Selector de colores integrado
- 📏 Tamaño de lienzo personalizable (hasta 64x64 píxeles)
- 💾 Exportación a PNG
- 🖱️ Pintura continua con clic sostenido
- ⚪ Borrado con clic derecho
- 🎯 Vista previa del color al pasar el mouse
- 📱 Diseño responsivo

## 🚀 Demo

Puedes probar la aplicación en vivo aquí: [Pixel Art Editor](https://tu-usuario.github.io/pixel-art)

## 🛠️ Tecnologías Utilizadas

- React 
- TypeScript
- Vite
- React Color
- HTML to Image
- GitHub Actions para despliegue automático

## 🏗️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pixel-art.git
```

2. Navega al directorio del proyecto:
```bash
cd pixel-art
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🎮 Uso

1. **Configuración del Lienzo**
   - Ingresa el ancho y alto deseados (máximo 64x64)
   - Haz clic en "Start Drawing" para comenzar

2. **Herramientas de Dibujo**
   - Clic izquierdo: Pintar con el color seleccionado
   - Mantener clic izquierdo: Pintar continuamente
   - Clic derecho: Borrar (pintar de blanco)
   - Mantener clic derecho: Borrar continuamente

3. **Exportación**
   - Haz clic en "Export as PNG" para descargar tu creación

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la versión de producción
npm run preview
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
