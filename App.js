// // import React, { useEffect, useState } from 'react'
// // import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import NaviBar from './movie/NaviBar'
// // import MovieList from './movie/MovieList'
// // import "./App.css"

 

// // function App() {
// //   const [movies,SetMovies] = useState([]);
// //   const [totalPage,setTotalPage] = useState(0);
// //   const [currentPage,setCurrentPage] = useState(1 )

// //   const fetchMovies=async(page)=>{
// //     try {
// //       const response =await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
// //       const result = await response.json()
// //       console.log(result)
// //       SetMovies(result.results);
// //       setTotalPage(result.total_pages)
// //     } catch (error) {
      
// //     }

// //   }
// // useEffect(()=>{
// //   fetchMovies(currentPage)
// // },[currentPage])


// //   return (
// //     <div>
// //       <BrowserRouter>
// //       < NaviBar/>
// //       <Routes>
// //         <Route path='/' element={<div>
// //         <MovieList  movie ={movies}/>
        
// //         </div>}/>
// //       </Routes>
      
// //       </BrowserRouter>
      
// //     </div>
// //   )
// // }

// // export default App




// ///////////////////////////////////////////////////////////// 
// // sir code
// import React, { useEffect, useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './movie/Navbar'
// import "./App.css"
// // import MovieList from './movie/MovieList'
// import Home from './movie/Home'
// import TvList from './movie/TvList'
// import Favmov from './movie/Favmov'
// import FavTv from './movie/FavTv'
// import Pagination from './movie/Pagination'
// import MovieList1 from './movie/MovieList1'
// // import MovieList from './movie/movieList'
// // import MovieList from './movie/MovieList'
// export default function App() {
//   const [movies,setMovies] = useState([]);
//   const [series,setSeries] = useState([]);
//   const [totalPages,setTotalPages] = useState(0);
//   const [totalTvPages,setTotalTvPages] = useState(0);
//   const [currentPage,setCurrentPage] = useState(1)
//   const [currentTvPage,setCurrentTvPage] = useState(1)
//   const fetchMovies = async(page)=>{
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`)
//       const result = await response.json()
//       console.log(result)
//       setMovies(result.results);
//       setTotalPages(result.total_pages)
//     } catch (error) {
      
//     }
//   }
//   const fetchSeries = async(page)=>{
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`)
//       const result = await response.json()
//       console.log(result)
//       setSeries(result.results);
//       setTotalTvPages(result.total_pages)
//     } catch (error) {
      
//     }
//   }
//   const handleSearch=async(query)=>{
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`)
//       const result = await response.json();
//       setMovies(result.results)
//     } catch (error) {
      
//     }
//   }
//   useEffect(()=>{
//     fetchMovies(currentPage)
//     fetchSeries(currentTvPage)
//   },[currentPage,currentTvPage])
//   const handlePageChange = (page)=>{
//     setCurrentPage(page) 
//   }
//   const handlePageTvChange = (page)=>{
//     setCurrentTvPage(page) 
//   }
//   return (
//     <div>   
//       <BrowserRouter>
//         <Navbar onSearch={handleSearch}/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/movies' element={<div>
//             <MovieList1 movies={movies}/>
//             <Pagination currentPage={currentPage} totalPages={totalPages} 
//             onPageChange = {handlePageChange}/>
//           </div>}/>
//           <Route path='/tv' element={
//           <div>
//             <TvList series={series}/>
//             <Pagination currentPage={currentTvPage} totalPages={totalTvPages}
//             onPageChange = {handlePageTvChange}/>
//           </div>}/>
//           <Route path='/favMov' element={<Favmov movies={movies}/>}/>
//           <Route path='/favTv' element={<FavTv/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import "./App.css"
import MovieList from '../MovieList'
import Home from '../Home'
import TvList from '../TvList'
import Favmov from '../Favmov'
import FavTv from '../FavTv'
import Pagination from '../Pagination'
export default function App() {
  const [movies,setMovies] = useState([]);
  const [series,setSeries] = useState([]);
  const [totalPages,setTotalPages] = useState(0);
  const [totalTvPages,setTotalTvPages] = useState(0);
  const [currentPage,setCurrentPage] = useState(1)
  const [currentTvPage,setCurrentTvPage] = useState(1)
  const fetchMovies = async(page)=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`)
      const result = await response.json()
      console.log(result)
      setMovies(result.results);
      setTotalPages(result.total_pages)
    } catch (error) {
      
    }
  }
  const fetchSeries = async(page)=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`)
      const result = await response.json()
      console.log(result)
      setSeries(result.results);
      setTotalTvPages(result.total_pages)
    } catch (error) {
      
    }
  }
  const handleSearch=async(query)=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`)
      const result = await response.json();
      setMovies(result.results)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchMovies(currentPage)
    fetchSeries(currentTvPage)
  },[currentPage,currentTvPage])
  const handlePageChange = (page)=>{
    setCurrentPage(page) 
  }
  const handlePageTvChange = (page)=>{
    setCurrentTvPage(page) 
  }
  return (
    <div>   
      <BrowserRouter>
        <Navbar onSearch={handleSearch}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<div>
            <MovieList movies={movies}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} 
            onPageChange = {handlePageChange}/>
          </div>}/>
          <Route path='/tv' element={
          <div>
            <TvList series={series}/>
            <Pagination currentPage={currentTvPage} totalPages={totalTvPages}
            onPageChange = {handlePageTvChange}/>
          </div>}/>
          <Route path='/favMov' element={<Favmov movies={movies}/>}/>
          <Route path='/favTv' element={<FavTv/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

