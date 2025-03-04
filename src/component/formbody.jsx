import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';


function FormBody() {
    const [startDate, setStartDate] = useState(new Date());
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('service_61hny88', 'template_vvlidif', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log('SUCCESS!',result.text);
		  }, (error) => {
			  console.log('FAILED...',error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <div className="form-body">
                <div className="title-head">
                    <h2 className="form-title m-b20"> Book Your Appointment </h2>
                </div>
                <form ref={form} onSubmit={sendEmail} className="dzForm" method="POST">
                    <input type="hidden" className="form-control" name="dzToDo" value="/Appointment" />
                    <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                    <div className="dzFormMsg"></div>
                    <div className="row">
                        <div className="col-sm-12 m-b30">
                            <div className="floating-underline underline-1 input-light input-icon-left">
                                <span className="input-group-text text-primary"><i className="feather icon-user" /></span>
                                <input name="dzName" type="text" className="form-control" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="col-sm-12 m-b30">
                            <div className="floating-underline underline-1 input-light input-icon-left">
                                <span className="input-group-text text-primary"><i className="feather icon-mail" /></span>
                                <input name="dzEmail" type="email" className="form-control" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="col-sm-12 m-b30">
                            <div className="floating-underline underline-1 input-light input-icon-left">
                                <span className="input-group-text text-primary"><i className="feather icon-phone" /></span>
                                <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-sm-6 m-b30">
                            <div
                                className="floating-underline underline-1 input-light input-icon-left">
                                <span className="input-group-text text-primary"><i className="feather icon-calendar" /></span>
                                <DatePicker className="form-control"
                                    selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="col-sm-6 m-b30">
                            <div
                                className="floating-underline underline-1 input-light input-icon-left">
                                <span className="input-group-text text-primary"><i className="feather icon-clock" /></span>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox1" />
                                <label className="form-check-label" htmlFor="checkBox1">Skin Allergy Testing</label>
                            </div>
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox2" />
                                <label className="form-check-label" htmlFor="checkBox2">Laser Treatments</label>
                            </div>
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox3" />
                                <label className="form-check-label" htmlFor="checkBox3">Hair Fall Treatments</label>
                            </div>
                        </div>
                        <div className="col-sm-6 m-b30">
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox4" />
                                <label className="form-check-label" htmlFor="checkBox4">Plastic Surgery</label>
                            </div>
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox5" />
                                <label className="form-check-label" htmlFor="checkBox5">Acne Scar Treatment</label>
                            </div>
                            <div className="form-check2 m-b5">
                                <input className="form-check-input" type="checkbox" id="checkBox6" />
                                <label className="form-check-label" htmlFor="checkBox6">Pedicure</label>
                            </div>
                        </div>
                        <div className="col-sm-12 m-t10">
                            <button type="submit" name="submit" value="submit" className="btn btn-lg btn-white w-100">
                                <i className="feather icon-calendar m-r5" /> Book An appointment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormBody;