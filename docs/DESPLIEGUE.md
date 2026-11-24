# Despliegue: GitHub + Vercel (gratis)

Tiempo estimado: 15 minutos la primera vez.

## 1. Subir el código a GitHub

1. Crea una cuenta en <https://github.com> (gratis).
2. Crea un repositorio nuevo, por ejemplo `yerton-inmobiliaria` (privado está bien).
3. En la carpeta del proyecto ejecuta:

```bash
git init
git add .
git commit -m "Primera versión del sitio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/yerton-inmobiliaria.git
git push -u origin main
```

> El archivo `.gitignore` ya evita subir `node_modules`, `.next` y tus claves (`.env.local`).

## 2. Publicar en Vercel

1. Entra a <https://vercel.com> e inicia sesión **con GitHub**.
2. **Add New → Project** y elige el repositorio.
3. Vercel detecta Next.js automáticamente: no cambies nada.
4. En **Environment Variables** agrega (opcional por ahora):
   - `NEXT_PUBLIC_SITE_URL` → la URL final (ej. `https://yerton-inmobiliaria.vercel.app`)
   - `NEXT_PUBLIC_WEB3FORMS_KEY` → tu clave de Web3Forms (ver abajo)
5. Pulsa **Deploy**. En ~1 minuto tendrás `https://tu-proyecto.vercel.app`.

Desde ahora, **cada `git push` a `main` actualiza el sitio automáticamente**.

## 3. Formularios por correo (Web3Forms, gratis)

1. Entra a <https://web3forms.com> y escribe el correo donde quieres recibir los mensajes.
2. Te llega una **Access Key**.
3. Agrégala como `NEXT_PUBLIC_WEB3FORMS_KEY` en Vercel (Settings → Environment Variables) y vuelve a desplegar (Deployments → ⋯ → Redeploy).

Sin esta clave, los formularios abren **WhatsApp con el mensaje ya escrito**, así que funcionan igual.

## 4. Dominio propio

El subdominio `.vercel.app` sirve para la demo. Para el lanzamiento conviene un dominio propio (`.com` o `.co`, ~10–15 USD/año, el único costo real).

1. Compra el dominio en un registrador (Namecheap, GoDaddy, Cloudflare Registrar, o uno colombiano como Hostinger/Dominios.co).
2. En Vercel: **Project → Settings → Domains → Add** y escribe tu dominio.
3. Vercel te muestra los registros DNS (A/CNAME) que debes crear en tu registrador.
4. Espera unos minutos a que propague. Vercel emite el certificado HTTPS gratis.
5. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio nuevo y redespliega.

## ⚠️ Uso comercial del plan gratuito de Vercel

El plan **Hobby** de Vercel está pensado para uso **personal y no comercial**. Es válido para la demo y para mostrar el proyecto al cliente. Cuando la inmobiliaria lo use como sitio de negocio, tienes tres opciones:

| Opción | Costo | Notas |
|---|---|---|
| Plan **Pro** de Vercel | De pago | Sin cambios técnicos |
| **Cloudflare Pages** | Gratis | Permite uso comercial. Requiere adaptar la configuración de Next.js |
| **Netlify** | Gratis (con límites) | Permite uso comercial; soporta Next.js |

Verifica siempre los términos vigentes en la web de cada proveedor antes de lanzar.

## 5. Probar antes de publicar

```bash
npm run build && npm run start
```

Si compila sin errores localmente, compilará en Vercel.

## Solución de problemas

| Problema | Solución |
|---|---|
| El despliegue falla | Mira el log en Vercel → Deployments. Casi siempre es una coma o comilla faltante en `properties.js` |
| Las fotos no cargan | Revisa que la ruta empiece con `/images/…` y que el archivo exista en `public/` (¡respeta mayúsculas!) |
| Cambié algo y no se ve | Espera 1–2 min y refresca con `Ctrl + F5` |
| El formulario no envía correo | Revisa que `NEXT_PUBLIC_WEB3FORMS_KEY` esté en Vercel y que redesplegaste |
