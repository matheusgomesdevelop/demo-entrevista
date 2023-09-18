import axios from 'axios';
import config from '../../config';


const cliente = {
  getAll: () => axios.get(`${config.configuracoes.urls.base}/cliente`)
}

export default cliente;