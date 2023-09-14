import React, { useEffect, useState, Component } from 'react'
import '../css/CreateEvent.css'
import * as reportService from '../services/ReportServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as userService from '../services/UserServices';
import jwt_decode from "jwt-decode";
import { useTranslation } from 'react-i18next';
import '../css/Config.css'

class ReportForm {
    user_reported;
    reason;
	date;
};

class MyToken {
    id;
    email;
    iat;
    exp;
  }

export default class ReportSend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            users: [],
            exists: false,
            show: false,
        };
    }
    render() {
    // const { t, i18n } = useTranslation();
    // if (localStorage.getItem('language') === 'es') {
    //    t('es');
    // } else {
    //     t('en');
    // }
    const theme = localStorage.getItem('theme');
	const token = localStorage.getItem('token');
	let decoded = jwt_decode(token);
	const idUser = decoded.id;
	const loadUser = async () => {

        const user = await userService.getProfile(idUser);
        
        const getUser = user.data;
        this.setState({user: getUser});     
        const allusers = await userService.getAllUser();
        const allUsers = allusers.data;
        this.setState({users: allUsers});
    
}
// useEffect(() => {
//     loadUser();
//   }, [])

	let clickCreateReport = true
	function sendInfoReport() {
		if (clickCreateReport) {
            this.setState({show: true});
			clickCreateReport = false
		}
	}

	const validationSchema = Yup.object().shape({
        user_reported: Yup.string().required('To report a user you must introduce his/her username'),
        reason: Yup.string()
          .required('Explaining the reason to report is required')
          .min(6, 'Description must be at least 6 characters')
          .max(300, 'Description must be at most 300 characters')
        // date: Yup.date()
        //   .required('Please enter a date')
        //   .min(new Date(), "The event must be in the future!"),
      });

    const {register,handleSubmit, setValue,formState: { errors }} = useForm<ReportForm>({resolver: yupResolver(validationSchema)});
	// let navigate = useNavigate();




	const sendEvent = handleSubmit(async (values)=> {
        console.log(values);
        const user2 = await userService.getOneUser(values.user_reported);

        if(user2.data === null){
            console.log("User not found");
            this.setState({exists: false});
        }
        else{
            console.log("User found");
            this.setState({exists: true});
            
            values.date = new Date();

            reportService.sendReport(this.state.user?._id, values).then(
                (response) => {
                    // navigate("/")
                },
                (error) => {
                    console.log(error);
                }
            
            );
        }

    });

    return (
        <div className="config-container">
    		<form action="createEvent" className={`config-${theme}`} style={clickCreateReport ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}} onSubmit={sendEvent} >
    		    <span className="create-event-header">{/*t("SendReport")*/}SendReport</span>
    		        <label style={{marginBottom: "5px"}}>{/*t("UserReported")*/}UserReported<input className={`input-${theme}`} type="text" placeholder={/*t("ErrorUsername")*/"ErrorUsername"} {...register("user_reported")}/><p className="error-message">{errors.user_reported?.message}</p></label>
                    {this.state.show ? 
                    this.state.exists ? <label style={{marginBottom: "20px"}}>Exists</label> : <label style={{marginBottom: "20px"}}>{/*t("Exists")*/}Exists</label>
                     : <label style={{marginBottom: "20px"}}></label>}
    		        <label style={{marginBottom: "20px"}}>{/*t("Reason")*/}Reason<input className={`input-${theme}`} type="text" placeholder={/*t("PlaceholderReason")*/"PlaceholderReason"} {...register("reason")}/><p className="error-message">{errors.reason?.message}</p></label>
                	
    		    <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
    		    	<div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
    		    	</div>
				</div>

    		    <button className={`config-button-${theme}`} style={{marginLeft: "1%"}} onClick={() => sendInfoReport()}><b>{/*t("SendRepButton")*/}SendRepButton</b></button>

            </form>
		</div>
    )
    }
}