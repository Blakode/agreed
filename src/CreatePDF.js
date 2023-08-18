const CreatePDF = () => {
    return ( 
        <div className="py-5 px-5">

            <h2 className="">Create Consent Form</h2>

                <div className=" justify-items-center"> 
                <form className=" gap-8">

                        <div className="py-5">
                        <label className="px-3">Document Title</label>
                        <input className="form-input px-4 py-3 rounded-fullname" name="title"  placeholder="input document title .." />
                        </div>
                        <div className="py-5">
                        <label className="px-3">Reciever</label>
                        <input className="form-input px-4 py-3 rounded-fullname " name="reciever"  placeholder=" Reciever ..." />
                        </div>
                        <div className="py-5">
                        <label className="px-3">Disclaimer</label>
                            <textarea className="form-textarea px-4 py-3 rounded-fullname" name="disclaimer"  placeholder=" Disclaimer ..." /> 
                        </div>
            
                        <button type='button '  className="px-3 bg-white">Submit</button>

                    </form>
                </div>
        </div> 
     );
}
 
export default CreatePDF;