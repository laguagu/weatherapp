# Kuva
FROM node:latest

# Työskentelyhakemisto
WORKDIR /app

COPY package*.json ./

RUN npm install

# Kopioi projekti tiedostot konttiin
COPY . .

EXPOSE 8000
# Asnetaa riippuvuudet

# Käynnistää Reactin
CMD [ "npm", "run", "dev" ]