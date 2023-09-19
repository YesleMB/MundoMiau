import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Cards } from "..";

const SearchInput = styled.input`
  padding: 5px;
  margin: 10px;
  width: 300px;
`;

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

const Imagem = styled.img`
position :relative ;
top: 15px;
 height: 18rem;
  width: 30rem;
  object-fit: cover;
  border-radius: 1rem;
  margin: 0;
  padding: 0;
`;

export const BtnImage = styled.button`
  position: relative;
  top: 15px;
  width: 5rem;
  height: 2rem;
  padding: 0;
  margin: 0;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffffff;
  transition: 0.5s;
`;

export const UnsplashImage = ({ query }) => {
  const [image, setImage] = useState(null);
  const API_KEY = "D77wV2OkFCif1ffpdi9B_eGF069LMLtF8_SKVQdTxs0";
  const UNSPLASH_URL = "https://api.unsplash.com/photos/random";
  const QUERY_MAP = {
    "gato preto": "black cat",
    "gato marrom": "brown cat",
    "gato filhote": "kitten",
    "gato branco" : "white cat "
  };

   const GenerateRandomImage = (query) => {
    const mappedQuery = QUERY_MAP[query];
    if (!mappedQuery) return;

    axios
      .get(UNSPLASH_URL, {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
        params: {
          query: mappedQuery,
          w: 400,
          h: 250,
        },
      })
      .then((response) => {
        setImage(response.data.urls.regular);
      })
      .catch((error) => {
        console.error("Erro ao buscar imagem:", error);
      });
  };

  return (
    <Conteiner>
      <BtnImage onClick={() => GenerateRandomImage(query)}>Ver Imagem</BtnImage>
      {image && <Imagem src={image} alt="Gato" className="image-item" />}
    </Conteiner>
  );
};


export const BuscaImagens = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);

  const API_KEY = "D77wV2OkFCif1ffpdi9B_eGF069LMLtF8_SKVQdTxs0";

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=6`,
        {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        }
      );
  
      setImages(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    }
  };
  
  return (
    <Conteiner className="App">
      <h1>Buscador de Imagens do Unsplash</h1>
      <SearchInput
        type="text"
        placeholder="Digite sua busca"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <BtnImage onClick={handleSearch}>Buscar</BtnImage>
        {images.map((image) => (
          <Cards key={image.id}>
            <Imagem
              src={image.urls.small}
              alt={image.alt_description || "Imagem"}
            />
          </Cards>
        ))}
     
    </Conteiner>
  );
};

