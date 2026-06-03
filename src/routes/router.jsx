import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CreateItem from '../pages/CreateItem';
import { EditItem } from '../pages/EditItem';

export const router = createBrowserRouter([
  {
    path: '/notes',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/notes/new',
        element: <CreateItem />,
      },
      {
        path: '/notes/:noteId/edit',
        element: <EditItem />,
      },
    ],
  },
]);
