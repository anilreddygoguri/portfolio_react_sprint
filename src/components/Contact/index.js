import {useState} from 'react';


import './contact.css';

const Contact=()=>{
const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
});
const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.split(' ').length > 300) {
      newErrors.message = 'Message must be less than 300 words';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    if (validateForm()) {
        const formData = new FormData(e.target);
        formData.append("access_key", "a73357e5-743e-4a00-965d-81c44acd950c");

    
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
    
          const data = await response.json();
    
          if (data.success) {
            alert("Form Submitted Successfully");
            setFormData({
                name: '',
                email: '',
                message: ''
              });
          } else {
            alert(data.message || "Submission failed. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        }
    }
  };



    return(
     
    <section id="contact">
    <div className="contact-section">
        <div className="contact-heading-container">
            <h1 className="contact-heading">Contact Me</h1>
        </div>
        <div className="contact-form-container">
            <div className="contact-container">
            <div className="contact-logo-container">
                <i className="fa-solid fa-user icon" aria-hidden="true"></i>
                <div className="data-container">
                    <p className="data-head">Name</p>
                    <p className="data-text">Anil Goguri</p>
                </div>
            </div>
            <div className="contact-logo-container">
                <i className="fa-solid fa-envelope icon" aria-hidden="true"></i>
                <div className="data-container">
                    <p className="data-head">Email</p>
                    <p className="data-text">anilreddygoguri21@gmail.com</p>
                </div>
            </div>
            <div className="contact-logo-container">
                <i className="fa-solid fa-location-dot icon" aria-hidden="true"></i>
                <div className="data-container">
                    <p className="data-head">Address</p>
                    <p className="data-text">Karimnagar, Telangana</p>
                </div>
                </div>
            </div>
            <div className="form-container">
                <p className="form-text">Please fill out the form below to discuss any work opportunities.</p>
                <form  onSubmit={handleSubmit} className="contact-form">
                    <div className="input-container">
                        <label htmlFor="name" className="label-text">Enter Your Name</label>
                        <input type="text" name="name" placeholder="Name" value={formData.name} className="input-field" onChange={handleChange}/>
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="label-text">Enter Your Email</label>
                        <input type="email" name="email" placeholder="Email" value={formData.email} className="input-field" onChange={ handleChange}/>
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="message" className="label-text">Message</label>
                        <textarea name="message" placeholder="Enter Text here..." className="input-field" value={formData.message} onChange={ handleChange}></textarea>
                        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                    </div>
                    <button className="submit" type="submit" value="Send">Submit</button>
                </form>
            </div>
        </div>
    </div>
 </section>
    )
}
export default Contact;