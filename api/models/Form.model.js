import mongoose from 'mongoose';


const formSchema = new mongoose.Schema({
 

  
  
  Iname: {
    type: String, 
    required: true
  },
  point: {
    type: String, 
    default: true,
  },
  desc: {
    type: String, 
    required: true
  },
  contact: {
    type: String, 
    required: true
  },


  profilePicture: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  
 
 
 
 
  
 
  
});


const Form = mongoose.model('Form', formSchema);

export default  Form;