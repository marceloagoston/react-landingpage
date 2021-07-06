import { useState } from "react";

const Blog = () => {
    
    const [blog, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    return (
        <div className="home">
            <h2>Blog</h2>

            {blog.map((blog) => (
                // Para destacar aca: Map y key
                ///// Aca vemos como se itera listas en react /////
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Autor: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Blog;