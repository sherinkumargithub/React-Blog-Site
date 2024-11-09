import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SideBar from './SideBar'

const BlogPage = () => {
    // here declaring variable to store the api data use useState
    const [blogs, setBlogs] = useState([])

    // variable for categories sections
    const[currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //blogs per page, 86/12= 7 
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    // useEffects are common when comes to the tems like fetch ,api,..
    useEffect(() => {
        async function fetchBlogs() {
            // now mod the url for the currecnt page and its size
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
            
            // categories modified url based on the categories
            // filter by category  
            if(selectedCategory){
                url += `&category=${selectedCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            setBlogs(data)
        }
        // calling the function
        fetchBlogs()
    }, [currentPage, pageSize, selectedCategory])

    // to handle page changes --- page changing btn
    // const handlePageChange = (pageNumber) =>{
    //     selectedCategory(pageNumber)
    // }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Update the current page here
    };
    

    // to hancle categories based changes
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }

  return (
    <div>
        {/* categories section*/}
        <div className="">
            {/* Page Category */}
            <CategorySelection
                onSelectCategory = {handleCategoryChange}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory}
            />
        </div>
        
        {/* blogCards section */}
        <div className="flex flex-col lg:flex-row gap-12 ">
            {/* here we go for the seperate componets to make our code clean */}
            {/* pass our fetch data blogs to the componetns */}
            <BlogCards 
                blogs = {blogs}
                // passing the elements
                currentPage={currentPage}
                selectedCategory={selectedCategory}
                pageSize={pageSize}

            />

            {/* sidebar component */}
            <div>
                <SideBar/>
            </div>
        </div> 

        {/* pagination section */}
        <div className="">
            <Pagination 
                onPageChange={handlePageChange} 
                currentPage={currentPage} 
                blogs={blogs} 
                pageSize={pageSize}
            />
        </div>
    </div>
  )
}

export default BlogPage