import { useEffect, useState } from "react";

// Api
import axios from "../../api/axiosInstance";

// Type
interface ICharacter {
  id: number;
  name: string;
  status: string;
  image: string;
}

export default function useCharacters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data: characters } = await axios.get("/character");
        setCharacters(characters.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { characters };
}
