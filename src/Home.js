import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs ] = useState([
        { title: "My new website", body: 'loremipsum...', author: 'mario', id: 1 },
        { title: "Welcome party!", body: 'loremipsum...', author: 'yoshi', id: 2 },
        { title: "Web dev top tips", body: 'loremipsum...', author: 'mario', id: 3 },
    ])
    
    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    )
}

export default Home;