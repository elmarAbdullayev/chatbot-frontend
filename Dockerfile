# Benutze ein Node.js-Image als Basis
FROM node:16

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes ins Container-Verzeichnis
COPY . .

# Erstelle die Build-Version der React-App
RUN npm run build

# Installiere einen einfachen Webserver (z.B. serve)
RUN npm install -g serve

# Port freigeben
EXPOSE 3000

# Starte den Webserver
CMD ["serve", "-s", "build", "-l", "3000"]

