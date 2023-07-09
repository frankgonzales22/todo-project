

interface DisplayProps {
  display_title: string,
  display_item: string,
  onClickButton : (e:React.MouseEvent<HTMLButtonElement> ) => void
 
}

export const Display = ({display_title, display_item, onClickButton} : DisplayProps) => {
  return (
    <>
      <div className="container info bg-success">
        <h1 > {display_title}</h1>
        <h4> {display_item}</h4>
        <button   onClick={onClickButton} >Delete</button>
      </div>
    </>
    
    )
}
