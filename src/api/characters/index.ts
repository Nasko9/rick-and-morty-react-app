import axios from "../axiosInstance";

const fetchCharacters = (
  pageParam: number,
  filterValue: string,
  searchValue: string
) => {
  return axios.get(
    `/character/?page=${pageParam}&status=${filterValue}&name=${searchValue}`
  );
};

export default fetchCharacters;
