import Customer from "../models/Customer.model.js";
import Form from "../models/Form.model.js";
import nodemailer from "nodemailer";



//recordagency
export const create = async (req, res, next) => {
  const { id,
    name,
    point,
    Cnumber,
    email,
    address,
    profilePicture



   
   } = req.body;

  const newmark = new Customer({
    id,
    name,
    point,
    Cnumber,
    email,
    address,
    profilePicture
  });
  try {
    const savedeuip = await newmark.save();
    res.status(201).json(savedeuip);
  } catch (error) {
    next(error);
  }
};




export const getAll = async (req, res, next) => {
  try {
    const equipment = await Customer.find();

    if (equipment.length > 0) {
      res.json({
        message: "equipment detail retrieved successfully",
        equipment,
      });
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};




export const deletedata  = async (req, res, next) => {
  try {
    await Customer.findByIdAndDelete(req.params.EEEId);
    res.status(200).json("The equipment has been deleted");
  } catch (error) {
    next(error);
  }
};



export const update = async (req, res, next) => {
  try {
    const updateequipment = await Customer.findByIdAndUpdate(
      req.params.EId,
      {
        $set: {
          id: req.body.id,
          name: req.body.name,
          point: req.body.point,
          email: req.body.email,
          address: req.body.address,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    res.status(200).json(updateequipment);
  } catch (error) {
    next(error);
  }
};




//inquiries
export const Icreate = async (req, res, next) => {
  console.log('Received data:', req.body);
  const { Iname,
    point,
    desc,
    contact

   
   } = req.body;

  const newmark = new Form({
    Iname,
    point,
    desc,
    contact
  });
  try {
    const savedeuip = await newmark.save();
    res.status(201).json(savedeuip);
  } catch (error) {
    next(error);
  }
};



export const totalupdate = async (req, res, next) => {
  console.log('Updating PointId:', req.params.PointId); // Log the PointId
  try {
    const updateequipment = await Customer.findByIdAndUpdate(
      req.params.PointId,
      { $set: { point: req.body.point } },
      { new: true }
    );
    
    if (!updateequipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }

    res.status(200).json(updateequipment);
  } catch (error) {
    next(error);
  }
};














//ship main 

// ship main 
export const shipsend = (req, res, next) => {
  const { email, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "binuriminoshi0@gmail.com", // Replace with your Gmail address
      pass: "cdea duka ghod bxdp", // Replace with your Gmail app password
    },
  });

  const mailOptions = {
    from: "binuriminoshi0@gmail.com", // Same email as above
    to: email,
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333;">Form</h2>
          <p style="font-size: 16px; color: #555;">
            Dear sir/miss,
          </p>
         
         
          <p style="font-size: 16px; color: #555;">
            Please click the link below to fill out the required form:
          </p>
          <p style="font-size: 16px; color: #555;">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKHeUyDVkUnA_bIlVf_FlkNfxws7NTtIXsxy2R-PzzsrZGsg/viewform?usp=sf_link" style="color: #1a0dab; text-decoration: underline;">Click here to access the form</a>
          </p>
          
          <p style="font-size: 16px; color: #555;">
            Best Regards,<br />
            The Team
          </p>
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      next(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};



