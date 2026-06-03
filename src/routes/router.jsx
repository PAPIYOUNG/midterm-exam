import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CreateItem from '../pages/CreateItem';
import { EditItem } from '../pages/EditItem';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/new',
        element: <CreateItem />,
      },
      {
        path: '/:noteId/edit',
        element: <EditItem />,
      },
    ],
  },
]);
