import { Navigate } from "react-router";
import { Layout } from "@/pages/layout/Layout";
import { StudyPage } from "@/pages/study/study_page";
import { LibraryPage } from "@/pages/library/library_page";
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
        path: 'stats',
        element: <StatsPage />,
      },
    ]
  },
]