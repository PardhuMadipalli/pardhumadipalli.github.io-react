import React from 'react'
import './App.css';
import HomePage from './pages/homePage';
import SkeletonPage from './components/skeleton';
import WorkPage from './pages/work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EducationTimeline } from './pages/education';
import PublicationsPage from './pages/publications';
import VolunteeringPage from './pages/volunteering';
import pubs from './pages/individualPub'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <>
  //     <SkeletonPage>
  //       <HomePage/>
  //     </SkeletonPage>
  //     </>
  //   }, {
  //     path: "work",
  //     element: <>
  //     <SkeletonPage>
  //       <WorkPage/>
  //     </SkeletonPage>
  //     </>
  //   }
  // ]);
  
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <BrowserRouter>
      {/* <SkeletonPage> */}
      <Routes>
        <Route path="/" element={<SkeletonPage/>}>
          <Route index element={<HomePage/>} />
          <Route path="work" element={ <WorkPage/>} />
          <Route path='education' element={ <EducationTimeline/>} />
          <Route path="publications"> 
            <Route index element={ <PublicationsPage/> } />
            {pubs().map(([title, pubComponent]) => <Route path={title} element={pubComponent} key={title}/>)}
          </Route>
          <Route path="volunteering" element={ <VolunteeringPage/> } />
        </Route>

      </Routes>

      {/* <Link to={'/work'} component={RouterLink}>Work</Link> */}
      
      {/* <br/><br/>
      <Link to={'/work'} component={RouterLink}>Work</Link>
      <br/><br/> <Link to={'/work'} component={RouterLink}>Work</Link>
      <br/><br/> <Link to={'/work'} component={RouterLink}>Work</Link>
      <br/><br/> */}
      {/* </SkeletonPage> */}

    </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
