import axios from "../axiosInstance";

const fetchCharacters = (
  pageParam: number,
  filterValue: string,
  searchValue: string
) => {
  return axios({
    method: "GET",
    url: `/character/`,
    params: {
      page: pageParam,
      ...(filterValue ? { status: filterValue } : ""),
      ...(searchValue ? { name: searchValue } : ""),
    },
  });
};

export default fetchCharacters;
