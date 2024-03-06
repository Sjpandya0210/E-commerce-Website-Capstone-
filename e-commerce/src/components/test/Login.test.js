// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'; 
// import store from '../../Redux/store'; 
// import { useGetAllUsersQuery, useLoginMutation } from '../../Redux/api';
// import Login from '../Login';

// // Mocking the useGetAllUsersQuery hook
// jest.mock('../../Redux/api', () => ({
//   ...jest.requireActual('../../Redux/api'),
//   useGetAllUsersQuery: jest.fn(),
//   useLoginMutation: jest.fn(),
// }));

// // Mocking the useNavigate hook
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// describe('Login component', () => {
//   it('renders the login form', () => {
//     // Mocking the useGetAllUsersQuery hook
//     useGetAllUsersQuery.mockReturnValue({ data: null, error: null });
    
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Login setToken={() => {}} setUserId={() => {}} />
//         </BrowserRouter>
//       </Provider>
//     );

//     // Ensure that the form and its elements are rendered
//     expect(screen.getByText('Login')).toBeInTheDocument();
//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
//   });

//   it('submits the form and redirects on successful login', async () => {
//     // Mocking the data returned from useGetAllUsersQuery
//     const mockAllUserData = [
//       { id: 1, username: 'johnd', password: 'm38rmF$' },
//       // Add more mock data as needed
//     ];
//     useGetAllUsersQuery.mockReturnValue({ data: mockAllUserData, error: null });

//     // Mocking the data returned from useLoginMutation
//     const mockLoginData = { token: 'mockToken' };
//     useLoginMutation.mockReturnValue({ data: mockLoginData, error: null });

//     // Mock functions for setToken and setUserId
//     const setTokenMock = jest.fn();
//     const setUserIdMock = jest.fn();

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Login setToken={setTokenMock} setUserId={setUserIdMock} />
//         </BrowserRouter>
//       </Provider>
//     );

//     // Mock user input
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'johnd' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'm38rmF$' } });

//     // Submit the form
//     fireEvent.click(screen.getByRole('button', { name: /submit/i }));

//     // Ensure that the login API was called
//     expect(useLoginMutation).toHaveBeenCalledWith({ username: 'johnd', password: 'm38rmF$' });

//     // Ensure that setToken and setUserId were called with the correct values
//     await waitFor(() => {
//       expect(setTokenMock).toHaveBeenCalledWith('mockToken');
//       expect(setUserIdMock).toHaveBeenCalledWith(1); // Assuming the user ID is 1 in the mock data
//     });

//     // Ensure that the user is redirected to the correct route
//     expect(useNavigate).toHaveBeenCalledWith('/account/1'); // Assuming the user ID is 1 in the mock data
//   });
// });