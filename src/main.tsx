import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  fonts: {
    body: ` 'Martel', serif;`,
    heading: `'Martel', serif;`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#0f0c29",
        color: "#fff"
      },
    },
  },
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ChakraProvider>

)
