import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
  IconButton,
  useColorModeValue,
  ButtonGroup,
} from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamic color values based on color mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const headingColor = useColorModeValue('brand.600', 'brand.400');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const buttonHoverBg = useColorModeValue('gray.100', 'gray.700');
  const logoutHoverBg = useColorModeValue('red.50', 'red.900');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Box 
      py={4} 
      bg={bgColor} 
      borderBottom="1px" 
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex="sticky"
      transition="all 0.2s"
      _dark={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      _light={{
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading 
            size="lg" 
            color={headingColor}
            cursor="pointer"
            onClick={() => navigate('/')}
            _hover={{ color: 'brand.500' }}
            transition="color 0.2s"
          >
            Task Manager
          </Heading>

          <Flex align="center" gap={4}>
            {user && (
              <Text 
                fontSize="md" 
                color={textColor}
              >
                Welcome, {user.name}
              </Text>
            )}
            <IconButton
              icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle color mode"
              _hover={{
                bg: buttonHoverBg
              }}
              transition="all 0.2s"
            />
            {user ? (
              <Button 
                onClick={handleLogout} 
                variant="ghost" 
                colorScheme="red"
                _hover={{
                  bg: logoutHoverBg
                }}
                transition="all 0.2s"
              >
                Logout
              </Button>
            ) : (
              <ButtonGroup spacing={2}>
                {location.pathname !== '/login' && (
                  <Button
                    onClick={() => navigate('/login')}
                    colorScheme="brand"
                    variant={isAuthPage ? "ghost" : "solid"}
                    _hover={{
                      transform: 'translateY(-1px)',
                      boxShadow: 'sm'
                    }}
                    transition="all 0.2s"
                  >
                    Login
                  </Button>
                )}
                {location.pathname !== '/register' && (
                  <Button
                    onClick={() => navigate('/register')}
                    colorScheme="brand"
                    variant={isAuthPage ? "solid" : "ghost"}
                    _hover={{
                      transform: 'translateY(-1px)',
                      boxShadow: 'sm'
                    }}
                    transition="all 0.2s"
                  >
                    Register
                  </Button>
                )}
              </ButtonGroup>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header; 