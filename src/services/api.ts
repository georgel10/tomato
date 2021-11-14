import Axios from 'axios';
import { IEntryResponse } from '../interface/entries';

//const url = 'https://gitlab.com/-/snippets/2041384/raw/master/data.json';
const url = 'https://api.jsonbin.io/b/61902ea60ddbee6f8b0ad821';

export const getEntries = async (): Promise<IEntryResponse> => {
  const { data } = await Axios.get<IEntryResponse>(url);
  return data;
};
