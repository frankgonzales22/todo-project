

interface AddItemProps {
    onChangeInput : (e:React.ChangeEvent<HTMLInputElement>) => void
    onChangeTextArea : (e:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClickButton : React.MouseEvent<HTMLButtonElement> 
}


export const AddItem = ({ onChangeInput, onChangeTextArea, onClickButton }: AddItemProps) => {
  
    
    return (
        <>
       
            <div className="container d.flex">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Todo Title</label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="My Title" 
                    onChange={onChangeInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea 
                    className="form-control textArea" 
                    id="exampleFormControlTextarea1" 
                    placeholder="Doing laundry..." 
                    onChange={onChangeTextArea}>
                  
                    </textarea>

                </div>
                <button 
                className="btn btn-info"
                
                >Add</button>
            </div>
        </>
    ) 
}
