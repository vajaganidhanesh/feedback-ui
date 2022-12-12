import React from 'react'
import { Navigate,Route,Routes,useNavigate } from 'react-router-dom'

// import { useParams } from 'react-router-dom'

function Posts() {
    // const params = useParams()

    const status =200;
    const navigate = useNavigate();

    const onClick = () =>{
      console.log('hello');
      navigate('/about')
    }
    if(status !== 200){
      return <Navigate to='/notfound'/>
    }
  return (
    <div>
    {/* <h1>Posts : {params.id}</h1>
    <h1>Name : {params.name}</h1> */}
    <h1>its about page</h1>
    <button onClick={()=>{onClick()}}>click her</button>
    <Routes>
      <Route path='/show' element={<>hello its show component</>}/>
    </Routes>
    </div>
  )
}

export default Posts
