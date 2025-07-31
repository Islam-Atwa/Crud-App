

function Products(){
    return (
        <>
            <h1>Products Page</h1>
            <button className="btn btn-success mt-3"> Add New Product </button>

            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Prouducts 1</td>
                        <td>100</td>

                        <td className="d-flex justify-content-around">
                            <button className="btn btn-success">View</button>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
                
                

            </table>
        
        </>
    )
}

export default Products;