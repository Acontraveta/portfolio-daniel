@echo off
echo ============================================
echo   REPARANDO PROYECTO PARA DEPLOY EN VERCEL
echo ============================================

REM 1. Asegurar que git funciona
where git >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Git no está en PATH. Reinstala Git y marca "Add Git to PATH".
    pause
    exit /b
)

REM 2. Borrar node_modules local
echo 🔥 Eliminando node_modules local...
rmdir /s /q node_modules

REM 3. Borrar package-lock
echo 🗑️ Eliminando package-lock.json...
del /f package-lock.json

REM 4. Reinstalar dependencias desde cero
echo 📦 Reinstalando npm install...
npm install

REM 5. Asegurar .gitignore correcto
echo ⚙️ Reescribiendo .gitignore...
(
echo node_modules/
echo dist/
echo .vercel/
echo .DS_Store
echo Thumbs.db
) > .gitignore

REM 6. Eliminar node_modules del repo si existe
echo 🧹 Limpiando node_modules del repositorio...
git rm -r --cached node_modules 2>nul

REM 7. Hacer commit limpio
echo 💾 Haciendo commit limpio...
git add .
git commit -m "Fix: rebuild clean for Vercel"

REM 8. Hacer push
echo 🚀 Subiendo a GitHub...
git push -u origin main

echo ============================================
echo   ✔️ PROYECTO REPARADO
echo   Ahora haz REDEPLOY en Vercel
echo ============================================
pause

