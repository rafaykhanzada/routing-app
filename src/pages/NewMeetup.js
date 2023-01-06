import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useNavigate  } from 'react-router-dom';
function NewMeetupPage(){
    const navigate = useNavigate();
    function addMeetupHandler(mapping){
        fetch('https://finosys-dbeb1-default-rtdb.firebaseio.com/mapping.json',{
            method:'POST',
            body:JSON.stringify(mapping),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            navigate('/');
        });
    }
    return (
<NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
    }
    
    export default NewMeetupPage;