import { Router } from 'components/index';
import GlobalStyle from './styles/GlobalStyle';
import { useEffect, useState } from 'react';
import splash from 'assets/logo/splash.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const queryClient = new QueryClient({
    defaultOptions: {
      // react-query 전역 설정
      queries: {
        refetchOnWindowFocus: false,
        retryOnMount: true,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="root">
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {showSplash ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <img src={splash} alt="splash" />
          </div>
        ) : (
          <Router />
        )}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
