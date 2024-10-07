# Gunakan Node.js versi 20 sebagai base image
FROM node:20

# Tentukan working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode proyek ke dalam container
COPY . .

# Expose port yang akan digunakan oleh Nuxt (default: 3000)
EXPOSE 3000

# Tentukan command untuk menjalankan aplikasi
CMD ["npm", "run", "dev"]
