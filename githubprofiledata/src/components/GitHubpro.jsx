import React ,{useState ,useEffect} from 'react'

function GitHubpro() {
    const [username,setUserName] = useState("")
    const [data,setData] = useState(null)
  
    useEffect(()=>{
      searchHandle()
    },[setUserName])
  
    const searchHandle = () =>{
      const fetchData = async () =>{
        if (username == "") {
          return
        }
        try {
          const response = await fetch(`https://api.github.com/users/${username}`)
          if (response.ok) {
            const data = await response.json()
            setData(data)
            console.log(data);
          }else{
            throw new  Error("User not Found !")
          }
        } catch (error) {
        //   alert("data is not Found!")
        }
      }
      fetchData()
      setUserName("")
      setData("")
  
    }
    return (
      <>
        <div className='px-[20vw] mt-[7vw]'>
        <div className='bg-[#2c2c2c] w-full px-5 py-[3vw]'>
          <input className='border-2  border-zinc-100 px-2 py-1 w-1/2 mr-3 rounded-xl' type="text" placeholder='Name' value={username}  onChange={(e)=> setUserName(e.target.value)} />
          <button className='border-2 px-6 py-1 hover:bg-[#7F7F7F] text-white border-zinc-100 rounded-xl' onClick={searchHandle} >Click</button>
        </div>   
        <div className='bg-[#2c2c2c] text-[#7F7F7F] font-semibold'>
          <h1 className='text-[1.5vw] uppercase underline'>Information</h1>
          {data ? (
            <>
            <div className='bg-[#2c2c2c] px-[10vw] py-5'>
                <img className='w-[20%] h-[30%] rounded-full m-auto p-3' src={data && data.avatar_url} alt='PICTURE'/>
                <h1>Name :{data && data.name}</h1>
                <h1>Bio :{data && data.bio}</h1>
                <h1>Location :{data && data.location}</h1>
                <h1>Public Resps :{data && data.public_repos}</h1>
                <h1>Followes :{data && data.followers}</h1>
                </div>
            </>
          ) : 
          (<div className='text-[2vw] font-bold'>Data Not Found!</div>)}
        </div>
        </div>
      </>
    )
  }

export default GitHubpro