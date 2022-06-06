import {createClient} from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_REACT_APP_SPACE_ID,
    accessToken: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN
  });

export default client;