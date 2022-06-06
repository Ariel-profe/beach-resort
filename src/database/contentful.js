import {createClient} from 'contentful';

export default createClient({
    space: import.meta.env.VITE_REACT_APP_SPACE_ID,
    accessToken: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN
  });

