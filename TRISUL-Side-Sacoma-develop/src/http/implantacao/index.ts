import axios from "axios";

const implantacao_http = {
  get: (id: number) => axios.get(`http://localhost:3000/api/implantacao/${id}`),
};

export default implantacao_http;
