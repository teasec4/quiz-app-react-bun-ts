import { Navigate } from "react-router";
import { Layout } from "@/pages/layout/Layout";
import { StudyPage } from "@/pages/study/study_page";
import { LibraryPage } from "@/pages/library/library_page";
import { FolderPage } from "@/pages/library/folder_page/folder_page";
import { DeckPage } from "@/pages/library/deck_page/deck_page";
import { StatsPage } from "@/pages/stats/stats_page";

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/study" replace />,
      },
      {
        path: 'study',
        element: <StudyPage />,
      },
      {
        path: 'library',
        element: <LibraryPage />,
      },
      {
        path: 'library/:folderId',
        element: <FolderPage />,
      },
      {
        path: 'library/:folderId/:deckId',
        element: <DeckPage />,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
    ]
  },
]