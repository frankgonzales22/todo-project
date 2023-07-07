

export const AddItem = () => {
    return (
        <>
            <div className="container d.flex">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Todo Title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="My Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control textArea" id="exampleFormControlTextarea1" placeholder="Doing laundry..."></textarea>
                    
                </div>
                <button className="btn btn-info">Add</button>
            </div>
        </> 
    )
}
