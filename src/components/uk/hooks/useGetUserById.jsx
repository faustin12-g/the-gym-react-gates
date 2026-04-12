import { useState, useEffect} from "react"

const useGetUserById = (userId) => {
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>
        {
            async function fetchData()
            {
                try{
                    setLoading(true)

                    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    if(!user.ok) throw new Error(`HTTP ${user.status}`)
                    const userData = await userRes.json()
                    setUser(userData)

                    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
                    if(!posts.ok) throw new Error(`Error ${posts.status}`)
                    const PostsData = await postsRes.json()
                setPosts(PostsData)

                }
                catch(err)
                {
                    setError(err.message)
                    setUser(null)
                    setPosts([])
                }finally{
                    setLoading(false)
                }

            }
            if(userId)
            {
                fetchData()
            }
        },[userId])
  return ({user, posts, error, loading})
}

export default useGetUserById
