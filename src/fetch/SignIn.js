import React from 'react'

const SignIn = () => {
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default SignIn
