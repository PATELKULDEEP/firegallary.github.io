import React,{useState} from 'react'
import './homeStyles.css'
import ProgressBar from './ProgressBar'


function Home() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
 
    const types = ['image/jpeg','image/jpg','image/png','image/svg']

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type))
        {
            setFile(selected)
            setError('')
        }
        else
        {
            setFile(null)
            setError("Please select image file only (jpeg, jpg, png, svg)") 
        }
    }

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler}></input>

            </label>
            <div className="output">
            {error && <div className="error"> {error}</div>}
            {file && <div className="fileName">{file.name}</div>}
            { file && <ProgressBar file={file} setFile={setFile}/>}
            

            </div>

        </form>
    )
}

export default Home
