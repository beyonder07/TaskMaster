import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { getProfile } from './store/slices/authSlice';

// Components
import Header from './components/Header';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// Theme
import theme from './theme';

const AppContent = () => {
  const { token, user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !user) {
      dispatch(getProfile(token));
    }
  }, [token, user, dispatch]);

  return (
    <Box minH="100vh">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/taskmanagement/login"
          element={!token ? <Login /> : <Navigate to="/taskmanagement" replace />}
        />
        <Route
          path="/taskmanagement/register"
          element={!token ? <Register /> : <Navigate to="/taskmanagement" replace />}
        />

        {/* Protected Routes */}
        <Route
          path="/taskmanagement"
          element={token ? <Layout /> : <Navigate to="/taskmanagement/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router basename="/taskmanagement">
          <AppContent />
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App; 