# GeoBusca CEP 📍

Aplicação React para busca de endereços por CEP, integração com mapas interativos e gerenciamento de endereços favoritos.

Atividade Guiada: Integração com APIs  
Curso: Frameworks Web I - Unilavras  
Professor: João Marcelo de Almeida Garcia

## 🚀 Tecnologias Utilizadas

- **React 18** (Vite)
- **Material-UI (MUI)** (Componentes e Temas)
- **Styled-Components** (Estilização de escopo e wrappers)
- **Axios** (Consumo de APIs REST)
- **ViaCEP API** (Busca de dados de endereço por CEP)
- **OpenCage Geocoding API** / **OpenStreetMap Nominatim** (Geocodificação de coordenadas)
- **React Leaflet** (Exibição de mapas interativos)
- **LocalStorage** (Persistência da lista de favoritos)

## 📦 Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/atividade-guiada-aula-05-frameworks-1.git
   cd atividade-guiada-aula-05-frameworks-1
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto contendo:
   ```env
   VITE_OPENCAGE_API_KEY=sua_chave_aqui
   ```

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 📄 Funcionalidades

- 🔎 **Busca de CEP**: Digite um CEP com 8 dígitos para consultar endereço via API ViaCEP.
- 🗺️ **Visualização no Mapa**: Exibe a localização exata do endereço pesquisado em um mapa interativo com marcador Leaflet.
- ⭐ **Gerenciamento de Favoritos**:
  - Salve endereços buscados na lista de favoritos.
  - Edite apelidos personalizados para cada endereço salvo.
  - Remova itens salvos.
  - Clique em um endereço favorito para visualizá-lo novamente no mapa.
  - Persistência automática no `localStorage` do navegador.
