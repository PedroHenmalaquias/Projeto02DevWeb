import axios from 'axios'
import { useCidadeStore } from '@/stores/cidades';

export default class CidadesApi {
  async getCidades() {
    const store = useCidadeStore()
    const uf = store.UF[store.UF.length - 1];

    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    return response.data;
  }
}