import React, { useEffect, useState } from 'react'

const useGetUserById = (userId) => {
    const [user, setUser] = useState(null)
    const[posts, setPosts] = useState([])
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        async function fetchData() {
            try{
                setLoading(true)
                const [userRes, postsRes] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)])
                if(!userRes.ok || !postsRes.ok) throw new Error(`${userRes.status || postsRes.status}`)
                const[userData, postsData] = await Promise.all([userRes.json(), postsRes.json()])
                setUser(userData)
                setPosts(postsData)
                
            }
            catch(err){
                setError(null)
                setError(err.message)
                setPosts([])
            }
            finally{
                setLoading(false)
            }
            
        }
        if(userId)
        {
            fetchData()
        }
    },[userId])

  return ({user, posts, loading, error})
}

export default useGetUserById
