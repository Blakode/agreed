import { useFormik } from 'formik'

const Registration = (props) => {

    // useFormik hook  initial form alues and a submit function that is call on submit 
    const formik = useFormik({
        initialValues: {
            email: '',
            mobileNo: 0,
            password: '',
        },
                onsubmit: values => {
                    alert(JSON.stringify(values, null,2))
                },
    });
    return ( 
        <div className=''>
             <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email'> Username</label>
                <input  id='email'  name='email'  type='email'  ></input>
            
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default Registration; 