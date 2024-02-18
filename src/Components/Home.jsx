import ProductSummary from './ProductSummary';

function Home() {
    
  return (
    <div className="container border border-secondary border-2 mt-5">
        <div className="row d-flex flex-row justify-content-between mt-3 mb-3 align-items-center">
            <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-8 col-sm-7">
                <h4 className='fw-bold'>Orders</h4>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <a href="/create" className='bg-primary border border-0 text-light px-5 p-2 rounded-3 text-decoration-none'>
                CREATE NEW
                </a>
            </div>
        </div>

        <div className="row filters mb-5 mx-2 py-5 rounded-4">
            <div className="col-md-12 column">
                <div className="nameFilter d-flex flex-column">
                    <label htmlFor="name" className='fw-bold'>What are you looking for?</label>
                    <input type="text" className='border border-secondary border-opacity-25 rounded p-1' name='name' placeholder='Search for category, name, company, etc'/>
                </div>
                <div className="categoryFilter d-flex flex-column">
                    <label htmlFor="category" className='fw-bold'>Category</label>
                    <select className='border border-secondary border-opacity-25 rounded p-2'>
                        <option value="selectAll">All</option>

                    </select>
                </div>
                <div className="statusFilter d-flex flex-column">
                    <label htmlFor="status" className='fw-bold'>Status</label>
                    <select className='border border-secondary border-opacity-25 rounded p-2'>
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>

                    </select>
                </div>
                <div className="btn">
                    <button type='button' className='bg-primary border border-0 text-light px-5 p-2 mt-3 rounded-3'>
                    SEARCH
                    </button>
                </div>
            </div>
        </div>

       
        <div className="row mb-5">
            <div className="col-md-12">
                <ProductSummary/>
            </div>
        </div>
    </div>
  )
}

export default Home
