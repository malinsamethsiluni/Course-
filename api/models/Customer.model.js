import mongoose from 'mongoose';


const CutomerSchema = new mongoose.Schema({
 

  
  
  name: {
    type: String, 
    required: true
  },
  
  Cnumber: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  point: {
    type: String,  
    required: true,
  },


  profilePicture: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  
 
 
 
 
  
 
  
});


const Customer = mongoose.model('Customer', CutomerSchema);

export default  Customer;