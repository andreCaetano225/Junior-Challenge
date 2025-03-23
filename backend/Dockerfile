FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do projeto para dentro do container
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para rodar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]
